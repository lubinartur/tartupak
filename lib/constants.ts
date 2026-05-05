export type { ProductCategory } from "./content-data";
export type {
  FefcoCatalogItem,
  FefcoFaqItem,
  FefcoPreviewItem,
  FefcoSeries,
  FefcoTechnicalSpec,
} from "./fefco-catalog";
export {
  FEFCO_CATALOG,
  FEFCO_HOME_PREVIEW,
  FEFCO_SERIES_LABEL,
  FEFCO_SERIES_ORDER,
  fefcoSeriesCounts,
  getFefcoCatalogEntry,
} from "./fefco-catalog";

export {
  PACKAGING_TYPE_OPTIONS,
  PRODUCT_CATEGORIES,
  WHY_TARTUPAK,
} from "./content-data";

export {
  COMPANY_FOCUS,
  COMPANY_FACTS,
  COMPANY_TAGLINE,
  CORRUGATED_CARDBOARD_OFFERING,
  CONTACT,
  DEFAULT_SITE_DESCRIPTION,
  LEGAL_NAME,
  MARKETS,
  PRODUCTION_CAPABILITIES,
  SERVICES,
  SITE_NAME,
  SUSTAINABILITY,
  TRUST_SIGNALS,
} from "./site";

export const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/fefco", label: "FEFCO Catalog" },
  { href: "/#manufacturing", label: "Manufacturing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
