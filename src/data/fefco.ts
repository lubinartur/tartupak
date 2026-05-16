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

/** Manual (M), automated (A), either (M/A), or combined (M+A) erection. */
export type FefcoMontageType = "M" | "A" | "M/A" | "M+A";

/** Assembly / montage by FEFCO code (series 02 and 03). */
export const FEFCO_MONTAGE: Record<string, FefcoMontageType> = {
  "0200": "M/A",
  "0201": "M/A",
  "0202": "M/A",
  "0203": "M/A",
  "0204": "M/A",
  "0205": "M/A",
  "0206": "M/A",
  "0207": "M",
  "0208": "M",
  "0209": "M/A",
  "0210": "M",
  "0211": "M",
  "0212": "M/A",
  "0214": "M",
  "0215": "M",
  "0216": "M",
  "0217": "M",
  "0218": "M",
  "0225": "M",
  "0226": "M",
  "0227": "M",
  "0228": "M/A",
  "0229": "M",
  "0230": "M/A",
  "0231": "M/A",
  "0300": "M/A",
  "0301": "M/A",
  "0302": "M",
  "0303": "M",
  "0304": "M",
  "0306": "M/A",
  "0307": "M",
  "0308": "M",
  "0309": "M",
  "0310": "M+A",
  "0312": "M/A",
  "0313": "M/A",
  "0314": "M",
  "0320": "M/A",
  "0321": "M",
  "0322": "M",
  "0323": "M",
  "0325": "A",
  "0330": "M/A",
  "0331": "M/A",
  "0350": "M",
  "0351": "M/A",
  "0352": "M/A",
};

export function getFefcoMontage(code: string): FefcoMontageType | undefined {
  return FEFCO_MONTAGE[code];
}
