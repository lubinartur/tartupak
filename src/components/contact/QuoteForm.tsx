"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  isPackagingTypeSlug,
  packagingTypeSlugs,
  type PackagingTypeSlug,
} from "@/data/packaging-types";
import { isProductSlug } from "@/data/products";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  packagingType: string;
  dimensions: string;
  quantity: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

type QuoteFormProps = {
  initialType?: string;
  initialFefco?: string;
};

const inputClass =
  "w-full border-b border-brand-text/10 bg-brand-bg/50 px-1 py-3 text-sm text-brand-text outline-none transition-colors focus:border-brand-green";

const labelClass =
  "text-[10px] font-bold uppercase tracking-widest text-brand-green/60";

function buildInitialState(
  initialType?: string,
  initialFefco?: string,
  fefcoPrefill?: string,
): FormState {
  let packagingType = "";
  if (initialType && isProductSlug(initialType)) {
    packagingType = initialType;
  } else if (initialType && isPackagingTypeSlug(initialType)) {
    packagingType = initialType;
  }

  const message = initialFefco && fefcoPrefill ? fefcoPrefill : "";

  return {
    fullName: "",
    company: "",
    email: "",
    phone: "",
    packagingType,
    dimensions: "",
    quantity: "",
    message,
  };
}

export function QuoteForm({ initialType, initialFefco }: QuoteFormProps) {
  const locale = useLocale();
  const t = useTranslations("contact.form");
  const [form, setForm] = useState<FormState>(() =>
    buildInitialState(initialType, initialFefco, t("fefcoPrefill", { code: initialFefco ?? "" })),
  );
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  const packagingOptions = useMemo(
    () =>
      packagingTypeSlugs.map((slug) => ({
        slug,
        label: t(`packagingTypes.${slug}` as `packagingTypes.${PackagingTypeSlug}`),
      })),
    [t],
  );

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validate(): boolean {
    const errors: FieldErrors = {};
    const fullName = form.fullName.trim();

    if (!fullName) {
      errors.fullName = t("errors.nameRequired");
    } else if (fullName.length < 2) {
      errors.fullName = t("errors.nameMin");
    }

    const email = form.email.trim();
    if (!email) {
      errors.email = t("errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t("errors.emailInvalid");
    }

    if (form.message.trim().length > 2000) {
      errors.message = t("errors.messageMax");
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        const apiError = data.error;
        if (apiError === "nameRequired") {
          setFieldErrors({ fullName: t("errors.nameRequired") });
        } else if (apiError === "nameMin") {
          setFieldErrors({ fullName: t("errors.nameMin") });
        } else if (apiError === "emailRequired") {
          setFieldErrors({ email: t("errors.emailRequired") });
        } else if (apiError === "emailInvalid") {
          setFieldErrors({ email: t("errors.emailInvalid") });
        } else if (apiError === "messageMax") {
          setFieldErrors({ message: t("errors.messageMax") });
        } else {
          setSubmitError(t("error"));
        }
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setSubmitError(t("error"));
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6 border border-brand-green/5 bg-white p-8 shadow-sm lg:p-12"
    >
      {status === "success" ? (
        <div
          role="status"
          className="rounded-sm border border-brand-green/20 bg-brand-bg p-6 text-center text-brand-green"
        >
          <p className="font-medium">{t("success")}</p>
        </div>
      ) : null}

      {status === "error" && submitError ? (
        <div
          role="alert"
          className="rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          {submitError}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className={labelClass}>
            {t("fullName")} *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder={t("placeholders.fullName")}
            className={cn(inputClass, fieldErrors.fullName && "border-red-400")}
            disabled={status === "submitting"}
          />
          {fieldErrors.fullName ? (
            <p className="text-xs text-red-600">{fieldErrors.fullName}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className={labelClass}>
            {t("company")}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder={t("placeholders.company")}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            {t("email")} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder={t("placeholders.email")}
            className={cn(inputClass, fieldErrors.email && "border-red-400")}
            disabled={status === "submitting"}
          />
          {fieldErrors.email ? (
            <p className="text-xs text-red-600">{fieldErrors.email}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className={labelClass}>
            {t("phone")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder={t("placeholders.phone")}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="packagingType" className={labelClass}>
          {t("packagingType")}
        </label>
        <select
          id="packagingType"
          name="packagingType"
          value={form.packagingType}
          onChange={(e) => updateField("packagingType", e.target.value)}
          className={cn(inputClass, "cursor-pointer appearance-none")}
          disabled={status === "submitting"}
        >
          <option value="">{t("selectPackaging")}</option>
          {packagingOptions.map(({ slug, label }) => (
            <option key={slug} value={slug}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="dimensions" className={labelClass}>
            {t("dimensions")}
          </label>
          <input
            id="dimensions"
            name="dimensions"
            type="text"
            value={form.dimensions}
            onChange={(e) => updateField("dimensions", e.target.value)}
            placeholder={t("placeholders.dimensions")}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="quantity" className={labelClass}>
            {t("quantity")}
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={(e) => updateField("quantity", e.target.value)}
            placeholder={t("placeholders.quantity")}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder={t("placeholders.message")}
          className={cn(inputClass, "resize-none", fieldErrors.message && "border-red-400")}
          disabled={status === "submitting"}
        />
        {fieldErrors.message ? (
          <p className="text-xs text-red-600">{fieldErrors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="mt-4 flex items-center justify-center gap-3 rounded-sm bg-brand-green px-10 py-4 font-bold text-brand-bg shadow-lg shadow-brand-green/10 transition-all hover:bg-brand-green/95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "..." : t("submit")}
        <Send size={18} aria-hidden />
      </button>

      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-brand-text">
        {t("responseNote")}
      </p>
    </form>
  );
}
