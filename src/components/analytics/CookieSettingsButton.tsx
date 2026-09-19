"use client";

import { useTranslations } from "next-intl";
import { CONSENT_OPEN_EVENT, getGtmId } from "@/lib/consent";

export function CookieSettingsButton({ className }: { className?: string }) {
  const t = useTranslations("cookies");

  if (!getGtmId()) return null;

  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
    >
      {t("settings")}
    </button>
  );
}
