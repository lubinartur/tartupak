export const productSlugs = [
  "lainepapp",
  "transpordipakend",
  "fleksotrukk",
  "kulmutatud-toodete-pakend",
  "pizzakarbid",
  "erilise-kujuga-pakendid",
  "suuregabariidilised-pakendid",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export function isProductSlug(slug: string): slug is ProductSlug {
  return (productSlugs as readonly string[]).includes(slug);
}
