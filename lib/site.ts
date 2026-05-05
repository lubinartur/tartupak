/** Company and contact facts from docs/20_content_inventory.md */

export const SITE_NAME = "Tartupak";

export const LEGAL_NAME = "Tartu Pak OÜ";

export const COMPANY_TAGLINE =
  "Estonian manufacturer of corrugated cardboard packaging.";

export const COMPANY_FOCUS =
  "B2B packaging for logistics, food production, ecommerce and industrial companies.";

export const CONTACT = {
  email: "info@tartupak.ee",
  phone: "+372 7415333",
  phoneTel: "+3727415333",
  mobile: "+372 53499642",
  mobileTel: "+37253499642",
  fax: "+372 7415336",
  addressLines: [
    "Tamme 35",
    "Tõrvandi alevik",
    "Ülenurme vald",
    "61715 Tartumaa",
    "Estonia",
  ] as const,
} as const;

/** Default meta description for root layout and fallbacks. */
export const DEFAULT_SITE_DESCRIPTION = `${LEGAL_NAME} — ${COMPANY_TAGLINE} ${COMPANY_FOCUS}`;
