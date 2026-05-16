export const fefcoPreviewCodes = [
  "0201",
  "0427",
  "0203",
  "0300",
  "0711",
  "0421",
] as const;

export const fefcoCodes = [...fefcoPreviewCodes] as const;

export type FefcoCode = (typeof fefcoCodes)[number];

export function isFefcoCode(code: string): code is FefcoCode {
  return (fefcoCodes as readonly string[]).includes(code);
}
