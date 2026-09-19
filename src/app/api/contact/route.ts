import { Resend } from "resend";
import { isPackagingTypeSlug } from "@/data/packaging-types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_FIELD_LENGTHS = {
  fullName: 100,
  company: 150,
  email: 254,
  phone: 40,
  dimensions: 200,
  quantity: 100,
} as const;
const TURNSTILE_TIMEOUT_MS = 5000;
const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "landing_page",
] as const;
const MAX_ATTRIBUTION_LENGTH = 200;

type ContactPayload = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  packagingType?: string;
  dimensions?: string;
  quantity?: string;
  message?: string;
  locale?: string;
  turnstileToken?: string;
  attribution?: unknown;
};

type TurnstileVerifyResponse = {
  success?: boolean;
};

async function verifyTurnstileToken(turnstileToken: string, remoteIp: string | null) {
  try {
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        ...(remoteIp ? { remoteip: remoteIp } : {}),
      }),
      signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
    });

    const verifyData = (await verifyRes.json()) as TurnstileVerifyResponse;
    return verifyData.success === true;
  } catch (err) {
    // Fail closed: a Turnstile outage or timeout must not let unverified requests through.
    console.error("Turnstile verification error:", err);
    return false;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sanitizeAttribution(value: unknown): [string, string][] {
  if (!value || typeof value !== "object") return [];
  const source = value as Record<string, unknown>;
  return ATTRIBUTION_KEYS.flatMap((key) => {
    const item = source[key];
    return typeof item === "string" && item.trim()
      ? [[key, item.trim().slice(0, MAX_ATTRIBUTION_LENGTH)] as [string, string]]
      : [];
  });
}

function validatePayload(body: ContactPayload) {
  const fullName = body.fullName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!fullName) {
    return { ok: false as const, error: "nameRequired" };
  }
  if (fullName.length < 2) {
    return { ok: false as const, error: "nameMin" };
  }
  if (!email) {
    return { ok: false as const, error: "emailRequired" };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { ok: false as const, error: "emailInvalid" };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false as const, error: "messageMax" };
  }

  const lengthLimited = Object.entries(MAX_FIELD_LENGTHS).some(
    ([field, max]) => (body[field as keyof typeof MAX_FIELD_LENGTHS]?.trim().length ?? 0) > max,
  );
  if (lengthLimited) {
    return { ok: false as const, error: "invalid_request" };
  }

  const packagingType = body.packagingType?.trim() ?? "";
  if (packagingType && !isPackagingTypeSlug(packagingType)) {
    return { ok: false as const, error: "invalid_request" };
  }

  return {
    ok: true as const,
    data: {
      fullName,
      company: body.company?.trim() ?? "",
      email,
      phone: body.phone?.trim() ?? "",
      packagingType,
      dimensions: body.dimensions?.trim() ?? "",
      quantity: body.quantity?.trim() ?? "",
      message,
      locale: body.locale?.trim() ?? "en",
    },
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 500 });
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  const turnstileToken = body.turnstileToken?.trim() ?? "";
  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  if (!turnstileToken || !(await verifyTurnstileToken(turnstileToken, remoteIp))) {
    return Response.json({ error: "Bot detected" }, { status: 400 });
  }

  const validation = validatePayload(body);
  if (!validation.ok) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  const { data } = validation;

  const rows = [
    ["Name", data.fullName],
    ["Company", data.company || "—"],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Packaging type", data.packagingType || "—"],
    ["Dimensions", data.dimensions || "—"],
    ["Quantity", data.quantity || "—"],
    ["Locale", data.locale],
    ["Message", data.message || "—"],
    ...sanitizeAttribution(body.attribution),
  ];

  const html = `
    <h2>New quote request — tartupak.ee</h2>
    <table style="border-collapse:collapse;width:100%;max-width:560px;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#1A3A2A;">${escapeHtml(label)}</td>
          <td style="padding:8px 0;vertical-align:top;color:#1A1A1A;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>`,
        )
        .join("")}
    </table>
  `;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Tartupak <noreply@tartupak.ee>",
      to: [process.env.RESEND_TO_EMAIL || "maksim@tartupak.ee"],
      replyTo: data.email,
      subject: `Uus pakkumispäring / New quote request / Новый запрос — tartupak.ee`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "send_failed" }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
}
