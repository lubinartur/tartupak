export const productSlugs = [
  "transport-packaging",
  "pizza-boxes",
  "frozen-products",
  "custom-packaging",
  "large-packaging",
  "printed-packaging",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export function isProductSlug(slug: string): slug is ProductSlug {
  return (productSlugs as readonly string[]).includes(slug);
}
