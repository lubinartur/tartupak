import {
  fefcoCatalogCodes,
  getFefcoEntry,
  isFefcoCatalogCode,
  type FefcoCatalogCode,
  type FefcoCatalogEntry,
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

/** Public URL path for a FEFCO diagram PNG (files live under `public/images/fefco/`). */
export type FefcoImagePath = `/images/fefco/${string}`;

/**
 * FEFCO code → diagram image path.
 * Map after reviewing `public/images/fefco/page-XX.png` exports (see `scripts/fefco-page-index.json`).
 * Use dedicated names e.g. `fefco-0201.png` once cropped from the source page.
 */
export const FEFCO_IMAGES: Partial<Record<FefcoCode, FefcoImagePath>> = {
  "0200": "/images/fefco/fefco-0200.png",
  "0201": "/images/fefco/fefco-0201.png",
  "0202": "/images/fefco/fefco-0202.png",
  "0203": "/images/fefco/fefco-0203.png",
  "0204": "/images/fefco/fefco-0204.png",
  "0205": "/images/fefco/fefco-0205.png",
  "0206": "/images/fefco/fefco-0206.png",
  "0207": "/images/fefco/fefco-0207.png",
  "0208": "/images/fefco/fefco-0208.png",
  "0209": "/images/fefco/fefco-0209.png",
  "0210": "/images/fefco/fefco-0210.png",
  "0211": "/images/fefco/fefco-0211.png",
  "0212": "/images/fefco/fefco-0212.png",
  "0214": "/images/fefco/fefco-0214.png",
  "0215": "/images/fefco/fefco-0215.png",
  "0216": "/images/fefco/fefco-0216.png",
  "0217": "/images/fefco/fefco-0217.png",
  "0218": "/images/fefco/fefco-0218.png",
  "0225": "/images/fefco/fefco-0225.png",
  "0226": "/images/fefco/fefco-0226.png",
  "0227": "/images/fefco/fefco-0227.png",
  "0228": "/images/fefco/fefco-0228.png",
  "0229": "/images/fefco/fefco-0229.png",
  "0230": "/images/fefco/fefco-0230.png",
  "0231": "/images/fefco/fefco-0231.png",
  "0300": "/images/fefco/fefco-0300.png",
  "0301": "/images/fefco/fefco-0301.png",
  "0302": "/images/fefco/fefco-0302.png",
  "0303": "/images/fefco/fefco-0303.png",
  "0304": "/images/fefco/fefco-0304.png",
  "0306": "/images/fefco/fefco-0306.png",
  "0307": "/images/fefco/fefco-0307.png",
  "0308": "/images/fefco/fefco-0308.png",
  "0309": "/images/fefco/fefco-0309.png",
  "0310": "/images/fefco/fefco-0310.png",
  "0312": "/images/fefco/fefco-0312.png",
  "0313": "/images/fefco/fefco-0313.png",
  "0314": "/images/fefco/fefco-0314.png",
  "0320": "/images/fefco/fefco-0320.png",
  "0321": "/images/fefco/fefco-0321.png",
  "0322": "/images/fefco/fefco-0322.png",
  "0323": "/images/fefco/fefco-0323.png",
  "0325": "/images/fefco/fefco-0325.png",
  "0330": "/images/fefco/fefco-0330.png",
  "0331": "/images/fefco/fefco-0331.png",
  "0350": "/images/fefco/fefco-0350.png",
  "0351": "/images/fefco/fefco-0351.png",
  "0352": "/images/fefco/fefco-0352.png",
  "0400": "/images/fefco/fefco-0400.png",
  "0401": "/images/fefco/fefco-0401.png",
  "0402": "/images/fefco/fefco-0402.png",
  "0403": "/images/fefco/fefco-0403.png",
  "0404": "/images/fefco/fefco-0404.png",
  "0405": "/images/fefco/fefco-0405.png",
  "0409": "/images/fefco/fefco-0409.png",
  "0410": "/images/fefco/fefco-0410.png",
  "0411": "/images/fefco/fefco-0411.png",
  "0412": "/images/fefco/fefco-0412.png",
  "0413": "/images/fefco/fefco-0413.png",
  "0415": "/images/fefco/fefco-0415.png",
  "0416": "/images/fefco/fefco-0416.png",
  "0421": "/images/fefco/fefco-0421.png",
  "0422": "/images/fefco/fefco-0422.png",
  "0423": "/images/fefco/fefco-0423.png",
  "0424": "/images/fefco/fefco-0424.png",
  "0425": "/images/fefco/fefco-0425.png",
  "0426": "/images/fefco/fefco-0426.png",
  "0427": "/images/fefco/fefco-0427.png",
  "0428": "/images/fefco/fefco-0428.png",
  "0429": "/images/fefco/fefco-0429.png",
  "0430": "/images/fefco/fefco-0430.png",
  "0431": "/images/fefco/fefco-0431.png",
  "0432": "/images/fefco/fefco-0432.png",
  "0433": "/images/fefco/fefco-0433.png",
  "0434": "/images/fefco/fefco-0434.png",
  "0435": "/images/fefco/fefco-0435.png",
  "0436": "/images/fefco/fefco-0436.png",
  "0437": "/images/fefco/fefco-0437.png",
  "0440": "/images/fefco/fefco-0440.png",
  "0441": "/images/fefco/fefco-0441.png",
  "0442": "/images/fefco/fefco-0442.png",
  "0443": "/images/fefco/fefco-0443.png",
  "0444": "/images/fefco/fefco-0444.png",
  "0445": "/images/fefco/fefco-0445.png",
  "0446": "/images/fefco/fefco-0446.png",
  "0447": "/images/fefco/fefco-0447.png",
  "0448": "/images/fefco/fefco-0448.png",
  "0449": "/images/fefco/fefco-0449.png",
  "0450": "/images/fefco/fefco-0450.png",
  "0451": "/images/fefco/fefco-0451.png",
  "0452": "/images/fefco/fefco-0452.png",
  "0453": "/images/fefco/fefco-0453.png",
  "0454": "/images/fefco/fefco-0454.png",
  "0455": "/images/fefco/fefco-0455.png",
  "0456": "/images/fefco/fefco-0456.png",
  "0457": "/images/fefco/fefco-0457.png",
  "0458": "/images/fefco/fefco-0458.png",
  "0459": "/images/fefco/fefco-0459.png",
  "0460": "/images/fefco/fefco-0460.png",
  "0470": "/images/fefco/fefco-0470.png",
  "0471": "/images/fefco/fefco-0471.png",
  "0472": "/images/fefco/fefco-0472.png",
  "0473": "/images/fefco/fefco-0473.png",
  "0501": "/images/fefco/fefco-0501.png",
  "0502": "/images/fefco/fefco-0502.png",
  "0503": "/images/fefco/fefco-0503.png",
  "0504": "/images/fefco/fefco-0504.png",
  "0505": "/images/fefco/fefco-0505.png",
  "0507": "/images/fefco/fefco-0507.png",
  "0509": "/images/fefco/fefco-0509.png",
  "0510": "/images/fefco/fefco-0510.png",
  "0511": "/images/fefco/fefco-0511.png",
  "0512": "/images/fefco/fefco-0512.png",
  "0601": "/images/fefco/fefco-0601.png",
  "0602": "/images/fefco/fefco-0602.png",
  "0606": "/images/fefco/fefco-0606.png",
  "0607": "/images/fefco/fefco-0607.png",
  "0608": "/images/fefco/fefco-0608.png",
  "0615": "/images/fefco/fefco-0615.png",
  "0616": "/images/fefco/fefco-0616.png",
  "0620": "/images/fefco/fefco-0620.png",
  "0621": "/images/fefco/fefco-0621.png",
  "0700": "/images/fefco/fefco-0700.png",
  "0701": "/images/fefco/fefco-0701.png",
  "0711": "/images/fefco/fefco-0711.png",
  "0712": "/images/fefco/fefco-0712.png",
  "0713": "/images/fefco/fefco-0713.png",
  "0714": "/images/fefco/fefco-0714.png",
  "0715": "/images/fefco/fefco-0715.png",
  "0716": "/images/fefco/fefco-0716.png",
  "0717": "/images/fefco/fefco-0717.png",
  "0718": "/images/fefco/fefco-0718.png",
  "0747": "/images/fefco/fefco-0747.png",
  "0748": "/images/fefco/fefco-0748.png",
  "0751": "/images/fefco/fefco-0751.png",
  "0752": "/images/fefco/fefco-0752.png",
  "0759": "/images/fefco/fefco-0759.png",
  "0761": "/images/fefco/fefco-0761.png",
  "0770": "/images/fefco/fefco-0770.png",
  "0771": "/images/fefco/fefco-0771.png",
  "0772": "/images/fefco/fefco-0772.png",
  "0773": "/images/fefco/fefco-0773.png",
  "0774": "/images/fefco/fefco-0774.png",
};

export function getFefcoImage(code: string): FefcoImagePath | undefined {
  if (!isFefcoCode(code)) return undefined;
  return FEFCO_IMAGES[code];
}

export type FefcoEntryWithImage = FefcoCatalogEntry & {
  image?: FefcoImagePath;
};

export function getFefcoEntryWithImage(code: string): FefcoEntryWithImage | undefined {
  const entry = getFefcoEntry(code);
  if (!entry) return undefined;
  const image = getFefcoImage(code);
  return image ? { ...entry, image } : entry;
}
