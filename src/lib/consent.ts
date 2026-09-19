export const CONSENT_STORAGE_KEY = "tartupak-consent";
export const CONSENT_OPEN_EVENT = "tartupak:open-cookie-settings";
export const CONSENT_CHANGE_EVENT = "tartupak:consent-changed";

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google Tag Manager container ID, e.g. GTM-XXXXXXX. Tracking is fully off when unset or malformed. */
export function getGtmId(): string | null {
  const id = process.env.NEXT_PUBLIC_GTM_ID;
  return id && /^GTM-[A-Z0-9]+$/.test(id) ? id : null;
}

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice only applies to this page view.
  }

  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/** Pushes a custom event to the GTM dataLayer. Never pass personal data here. */
export function trackEvent(event: string, params: Record<string, string | undefined> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
