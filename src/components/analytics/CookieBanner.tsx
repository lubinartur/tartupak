"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  getGtmId,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent";
import { captureAttribution } from "@/lib/attribution";

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
}

// "pending" until the browser can read the stored choice, so the server render never shows the banner.
function getSnapshot(): ConsentChoice | "unset" {
  return readConsent() ?? "unset";
}

function getServerSnapshot(): "pending" {
  return "pending";
}

export function CookieBanner() {
  const t = useTranslations("cookies");
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [reopened, setReopened] = useState(false);
  const enabled = getGtmId() !== null;

  useEffect(() => {
    if (!enabled) return;

    function open() {
      setReopened(true);
    }
    function onConsentChange() {
      setReopened(false);
      captureAttribution();
    }

    captureAttribution();
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, open);
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    };
  }, [enabled]);

  if (!enabled || !(consent === "unset" || reopened)) return null;

  const buttonClass =
    "inline-flex flex-1 items-center justify-center rounded-sm border px-5 py-3 text-sm font-medium transition-colors sm:flex-none";

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("title")}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-green px-6 py-5 text-white shadow-2xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-white/90">
          <strong className="font-bold text-white">{t("title")}.</strong> {t("body")}{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-brand-kraft">
            {t("privacyLink")}
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => saveConsent("denied")}
            className={`${buttonClass} border-white/60 bg-transparent text-white hover:bg-white/10`}
          >
            {t("reject")}
          </button>
          <button
            type="button"
            onClick={() => saveConsent("granted")}
            className={`${buttonClass} border-brand-kraft bg-brand-kraft text-brand-text hover:bg-brand-kraft/90`}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
