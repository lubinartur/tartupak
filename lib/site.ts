/** Company and contact facts from docs/20_content_inventory.md */

export const SITE_NAME = "Tartupak";

export const LEGAL_NAME = "Tartu Pak OÜ";

export const COMPANY_TAGLINE =
  "Estonian manufacturer of corrugated cardboard packaging.";

export const COMPANY_FOCUS =
  "B2B packaging for logistics, food production, ecommerce and industrial companies.";

export const COMPANY_FACTS = {
  location: "Tõrvandi, Estonia",
  foundedYear: 2001,
  summary:
    "Tartu Pak OÜ is an Estonian private company located in Tõrvandi. We produce corrugated cardboard packaging and sell corrugated cardboard for different industries.",
  consultation:
    "Our specialists help customers choose suitable packaging solutions — from construction to board selection and delivery.",
} as const;

export const TRUST_SIGNALS = {
  creditRating: "AA credit rating",
  recognition: "Edukas Eesti Ettevõte recognition",
} as const;

export const SUSTAINABILITY = {
  statement: "Packaging is made from ecological and recyclable material.",
} as const;

export const PRODUCTION_CAPABILITIES = [
  "Modern production lines",
  "Quality raw material",
  "Flexible technology",
  "Packaging made in the required size and quantity",
  "Production possible from 1 piece",
] as const;

export const MARKETS = {
  main: "Estonia",
  export: ["Scandinavia", "the Baltic countries"],
} as const;

export const SERVICES = [
  "Packaging construction",
  "Retail packaging / print design",
  "Specialist consultation",
  "Sample packaging",
  "Delivery to customer",
] as const;

export const CORRUGATED_CARDBOARD_OFFERING = {
  summary:
    "Corrugated cardboard in different sizes and parameters, with brown or white outer layer.",
  variants: [
    "Two-layer roll cardboard (1000 mm and 1600 mm)",
    "Sheets and board grades by request",
  ],
} as const;

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
