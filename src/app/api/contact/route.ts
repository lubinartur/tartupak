import { Resend } from "resend";
import { isPackagingTypeSlug } from "@/data/packaging-types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2000;

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
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

  const validation = validatePayload(body);
  if (!validation.ok) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  const { data } = validation;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Tartupak Website <onboarding@resend.dev>";

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
      from: fromEmail,
      to: "info@tartupak.ee",
      replyTo: data.email,
      subject: `Quote request from ${data.fullName}`,
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
