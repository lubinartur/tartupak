"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  CONTACT,
  LEGAL_NAME,
  PACKAGING_TYPE_OPTIONS,
  SITE_NAME,
} from "@/lib/constants";
import { isValidEmail } from "@/lib/validators";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  packagingType: string;
  dimensions: string;
  quantity: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  packagingType: "",
  dimensions: "",
  quantity: "",
  message: "",
};

type ContactSectionProps = {
  /** When false (e.g. /contact page), omit top border so layout matches first paint under header */
  showTopBorder?: boolean;
};

export function ContactSection({ showTopBorder = true }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>(initial);
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    if (!form.name.trim() || !form.email.trim()) {
      setErrorMessage("Please enter your name and email.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          attachmentName: fileName,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Request failed");
      }
      setStatus("success");
      setForm(initial);
      setFileName(null);
    } catch {
      setStatus("error");
      setErrorMessage(
        `Something went wrong. Please try again or write to ${CONTACT.email}.`,
      );
    }
  }

  return (
    <section
      id="contact"
      className={`${showTopBorder ? "border-t border-border" : ""} bg-surface py-20 md:py-24 lg:py-[7.5rem]`}
    >
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Request a quotation"
          description="Tell us about your packaging needs. We will contact you shortly."
        />

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-sm font-semibold text-foreground">
                {SITE_NAME}
              </p>
              <p className="mt-1 text-sm text-muted">{LEGAL_NAME}</p>
              <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4 text-sm text-muted">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-medium text-forest hover:underline"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted">
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-forest">
                  {CONTACT.phone}
                </a>
                <span className="text-muted/80"> · </span>
                <a
                  href={`tel:${CONTACT.mobileTel}`}
                  className="hover:text-forest"
                >
                  {CONTACT.mobile}
                </a>
              </p>
              <p className="mt-1 text-xs text-muted">Fax {CONTACT.fax}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                What we capture
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Name, company, email, phone</li>
                <li>Packaging type, dimensions, quantity</li>
                <li>Message and optional drawing upload</li>
              </ul>
              <p className="mt-8 text-sm text-muted">
                Prefer email? Write to{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-forest hover:underline"
                >
                  {CONTACT.email}
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-muted">
                We usually respond within 1–2 business days.
              </p>
            </div>
          </div>

          <form
            className="rounded-lg border border-border bg-card p-6 shadow-[0_10px_26px_rgba(43,43,43,0.06)] sm:p-8 lg:col-span-3"
            onSubmit={onSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
              <Input
                id="lead-name"
                name="name"
                label="Name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
              <Input
                id="lead-company"
                name="company"
                label="Company"
                autoComplete="organization"
                value={form.company}
                onChange={(e) =>
                  setForm((f) => ({ ...f, company: e.target.value }))
                }
              />
              <Input
                id="lead-email"
                name="email"
                type="email"
                label="Email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
              <Input
                id="lead-phone"
                name="phone"
                type="tel"
                label="Phone"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
              <Select
                id="lead-packaging"
                name="packagingType"
                label="Packaging type"
                value={form.packagingType}
                onChange={(e) =>
                  setForm((f) => ({ ...f, packagingType: e.target.value }))
                }
              >
                <option value="">Select…</option>
                {PACKAGING_TYPE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </Select>
              <Input
                id="lead-qty"
                name="quantity"
                label="Quantity (approx.)"
                placeholder="e.g. 5 000 pcs / month"
                value={form.quantity}
                onChange={(e) =>
                  setForm((f) => ({ ...f, quantity: e.target.value }))
                }
              />
            </div>

            <div className="mt-5">
              <Input
                id="lead-dimensions"
                name="dimensions"
                label="Dimensions"
                placeholder="L × W × H (mm) or inner pack size"
                value={form.dimensions}
                onChange={(e) =>
                  setForm((f) => ({ ...f, dimensions: e.target.value }))
                }
              />
            </div>

            <div className="mt-5">
              <Textarea
                id="lead-message"
                name="message"
                label="Message"
                placeholder="Product weight, storage conditions, print requirements…"
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="lead-file"
                className="text-sm font-medium text-foreground"
              >
                Drawing (optional)
              </label>
              <input
                id="lead-file"
                name="file"
                type="file"
                className="mt-1.5 block w-full text-sm text-muted file:mr-4 file:rounded-md file:border-0 file:bg-forest/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-forest hover:file:bg-forest/15"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  setFileName(f?.name ?? null);
                }}
              />
            </div>

            {errorMessage ? (
              <p className="mt-4 text-sm text-red-700" role="alert">
                {errorMessage}
              </p>
            ) : null}

            {status === "success" ? (
              <p className="mt-4 text-sm font-medium text-forest" role="status">
                Thank you. We have received your message and will contact you
                shortly.
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button type="submit" variant="primary" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send request"}
              </Button>
              {status === "error" ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStatus("idle")}
                >
                  Try again
                </Button>
              ) : null}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
