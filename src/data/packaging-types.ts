export const packagingTypeSlugs = [
  "lainepapp",
  "transpordipakend",
  "fleksotrukk",
  "kulmutatud-toodete-pakend",
  "pizzakarbid",
  "erilise-kujuga-pakendid",
  "suuregabariidilised-pakendid",
  "fefco",
  "other",
] as const;

export type PackagingTypeSlug = (typeof packagingTypeSlugs)[number];

export function isPackagingTypeSlug(value: string): value is PackagingTypeSlug {
  return (packagingTypeSlugs as readonly string[]).includes(value);
}
