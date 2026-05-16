import {
  fefcoCatalogCodes,
  isFefcoCatalogCode,
  type FefcoCatalogCode,
} from "./fefco-catalog";

export {
  FEFCO_CATALOG,
  fefcoCatalogCodes,
  getFefcoEntry,
  getFefcoLocalized,
  getFefcoUseCases,
  normalizeFefcoLocale,
  fefcoSearchHaystack,
  isFefcoCatalogCode,
  type FefcoCatalogEntry,
  type FefcoLocale,
  type FefcoLocalizedList,
} from "./fefco-catalog";

export const fefcoPreviewCodes = [
  "0201",
  "0427",
  "0203",
  "0300",
  "0711",
  "0421",
] as const;

export type FefcoPreviewCode = (typeof fefcoPreviewCodes)[number];

export const fefcoCodes = fefcoCatalogCodes;

export type FefcoCode = FefcoCatalogCode;

export function isFefcoCode(code: string): code is FefcoCode {
  return isFefcoCatalogCode(code);
}
