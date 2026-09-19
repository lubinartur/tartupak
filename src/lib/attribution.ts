import { readConsent } from "@/lib/consent";

const STORAGE_KEY = "tartupak-attribution";
const PARAM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;
const MAX_VALUE_LENGTH = 200;

export type Attribution = Partial<Record<(typeof PARAM_KEYS)[number] | "landing_page", string>>;

/**
 * Remembers UTM/gclid parameters from the landing URL for the session so the quote request
 * can carry them. Stored only after the visitor accepted cookies.
 */
export function captureAttribution() {
  if (readConsent() !== "granted") return;

  const params = new URLSearchParams(window.location.search);
  const found: Attribution = {};
  for (const key of PARAM_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value.slice(0, MAX_VALUE_LENGTH);
  }
  if (Object.keys(found).length === 0) return;

  found.landing_page = window.location.pathname;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // Storage blocked: attribution is simply skipped.
  }
}

export function getAttribution(): Attribution {
  if (readConsent() !== "granted") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
