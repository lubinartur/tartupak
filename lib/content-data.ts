export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  applications: readonly string[];
};

/** Aligned with docs/22_product_catalog.md */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "transport-packaging",
    title: "Transport Packaging",
    description:
      "Standard corrugated cardboard transport boxes used for shipping and storage.",
    applications: ["logistics", "warehouses", "shipping"],
  },
  {
    slug: "pizza-boxes",
    title: "Pizza Boxes",
    description:
      "Food-safe cardboard pizza boxes for restaurants and delivery services.",
    applications: ["restaurants", "pizza delivery", "takeaway food"],
  },
  {
    slug: "frozen-products-packaging",
    title: "Frozen Products Packaging",
    description:
      "Moisture-resistant packaging designed for frozen products.",
    applications: ["frozen food production", "cold storage logistics"],
  },
  {
    slug: "custom-packaging",
    title: "Custom Packaging",
    description:
      "Packaging developed specifically for the customer's product dimensions and transportation conditions.",
    applications: ["industrial products", "electronics", "fragile items"],
  },
  {
    slug: "large-packaging",
    title: "Large Packaging",
    description:
      "Heavy-duty corrugated cardboard packaging for large or heavy goods.",
    applications: ["industrial equipment", "pallet transport"],
  },
  {
    slug: "printed-packaging",
    title: "Printed Packaging",
    description:
      "Flexo printed cardboard packaging with logos or branding.",
    applications: ["retail packaging", "brand packaging"],
  },
];

export const WHY_TARTUPAK = [
  {
    title: "20+ years of experience",
    text: "Corrugated board and boxes from our Estonian plant. Technical answers come from people on the floor, not a script.",
  },
  {
    title: "Custom packaging engineering",
    text: "Board grade, construction and die lines sized for your product, stack pattern and line speeds.",
  },
  {
    title: "Flexible production quantities",
    text: "Pilot runs and steady call-offs — volume matched to what you ship, not retail pack counts.",
  },
  {
    title: "Reliable B2B delivery",
    text: "Lead times and loading windows agreed up front. Handoff when your carrier or warehouse is ready.",
  },
] as const;

export const PACKAGING_TYPE_OPTIONS = [
  "Transport Packaging",
  "Pizza Boxes",
  "Frozen Products Packaging",
  "Custom Packaging",
  "Large Packaging",
  "Printed Packaging",
  "Not sure — advise me",
] as const;
