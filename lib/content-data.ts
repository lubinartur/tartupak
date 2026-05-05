export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  applications: readonly string[];
  detail?: {
    intro: string;
    highlights: readonly string[];
  };
};

/** Aligned with docs/22_product_catalog.md */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "transport-packaging",
    title: "Transport Packaging",
    description:
      "The most common corrugated packaging type — easy to fold, close and stack for shipping and storage.",
    applications: ["logistics", "warehouses", "shipping"],
    detail: {
      intro:
        "Transport packaging is a practical choice for B2B shipments where speed of packing, protection and stable palletization matter.",
      highlights: [
        "Easy to fold and close",
        "Built for stacking and pallet transport",
        "Sizes and quantities made to order",
        "Production possible from 1 piece",
      ],
    },
  },
  {
    slug: "pizza-boxes",
    title: "Pizza Boxes",
    description:
      "Food-safe cardboard pizza boxes for restaurants and delivery services.",
    applications: ["restaurants", "pizza delivery", "takeaway food"],
    detail: {
      intro:
        "Food packaging can be tailored to the product, handling and branding needs, from structure to print.",
      highlights: [
        "Retail packaging / print design available",
        "Sample packaging available before larger runs",
        "Sizes made to order",
      ],
    },
  },
  {
    slug: "frozen-products-packaging",
    title: "Frozen Products Packaging",
    description:
      "Moisture-resistant corrugated packaging for refrigerated and frozen products.",
    applications: ["frozen food production", "cold storage logistics"],
    detail: {
      intro:
        "For cold-chain products we use moisture-resistant materials so packaging keeps its strength in refrigerated and frozen conditions.",
      highlights: [
        "Moisture-resistant material options",
        "Designed for refrigerated/frozen handling",
        "Sizes made to order, including small runs",
      ],
    },
  },
  {
    slug: "custom-packaging",
    title: "Custom Packaging",
    description:
      "Packaging developed specifically for the customer's product dimensions and transportation conditions.",
    applications: ["industrial products", "electronics", "fragile items"],
    detail: {
      intro:
        "We help choose a suitable solution: packaging construction, board parameters and (if needed) print — matched to your product and logistics.",
      highlights: [
        "Packaging construction with specialist consultation",
        "Sample packaging to validate fit and handling",
        "Flexible technology for required size and quantity",
      ],
    },
  },
  {
    slug: "large-packaging",
    title: "Large Packaging",
    description:
      "Heavy-duty corrugated cardboard containers for large or heavy goods.",
    applications: ["industrial equipment", "pallet transport"],
    detail: {
      intro:
        "Large corrugated cardboard containers support heavy loads and are often used in industrial shipments.",
      highlights: [
        "Load capacity up to 200 kg (depending on construction)",
        "Typically 5–7 mm corrugated cardboard",
        "Often stapled for added strength",
        "Made to the required size and quantity",
      ],
    },
  },
  {
    slug: "printed-packaging",
    title: "Printed Packaging",
    description:
      "Flexo printed cardboard packaging with logos or branding.",
    applications: ["retail packaging", "brand packaging"],
    detail: {
      intro:
        "Printed packaging supports retail-ready presentation while keeping the practicality of corrugated construction.",
      highlights: [
        "Retail packaging / print design support",
        "Branding on corrugated packaging",
        "Samples available on request",
      ],
    },
  },
];

export const WHY_TARTUPAK = [
  {
    title: "20+ years of experience",
    text: "Founded in 2001 in Tõrvandi (Estonia). We manufacture corrugated packaging and supply corrugated cardboard for many industries.",
  },
  {
    title: "Specialists who help you choose",
    text: "From packaging construction to board selection and print — get practical guidance to match your product and logistics.",
  },
  {
    title: "Flexible production — even 1 piece",
    text: "Packaging can be made in the required size and quantity, including production from a single piece when you need a quick sample or small run.",
  },
  {
    title: "Trusted and reliable partner",
    text: "AA credit rating and “Edukas Eesti Ettevõte” recognition. Main market is Estonia with exports to Scandinavia and the Baltic countries.",
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
