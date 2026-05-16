export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  applications: string[];
  specs?: { label: string; value: string }[];
}

export interface FEFCOCode {
  code: string;
  name: string;
  series: string;
  description: string;
  useCases: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'transport-packaging',
    name: 'Transport Packaging',
    description: 'Robust solutions for heavy-duty shipping. Designed to withstand the rigors of logistics while keeping your contents pristine.',
    image: 'transport_packaging',
    applications: ['Automotive parts', 'Industrial machinery', 'Wholesale shipping'],
    specs: [
      { label: 'Material', value: 'Double-wall corrugated cardboard' },
      { label: 'Max Load', value: 'Up to 500kg' },
      { label: 'Recyclable', value: '100%' }
    ]
  },
  {
    id: '2',
    slug: 'pizza-boxes',
    name: 'Pizza Boxes',
    description: 'Ventilated and grease-resistant boxes that keep food fresh and hot. Available in standard and custom sizes.',
    image: 'pizza_box',
    applications: ['Restaurants', 'Catering', 'Takeaway'],
    specs: [
      { label: 'Certifications', value: 'Food-safe certified' },
      { label: 'Printing', value: 'Eco-friendly flexo printing' }
    ]
  },
  {
    id: '3',
    slug: 'frozen-products',
    name: 'Frozen Product Packaging',
    description: 'Specialized moisture-resistant coatings for cold storage environments. Maintains structural integrity in freezing temperatures.',
    image: 'frozen_packaging',
    applications: ['Meat processing', 'Frozen vegetables', 'Cold chain logistics']
  },
  {
    id: '4',
    slug: 'custom-packaging',
    name: 'Custom Tailored Solutions',
    description: 'Unique packaging concepts built from the ground up to match your product geometry perfectly.',
    image: 'custom_packaging',
    applications: ['Tech gadgets', 'Luxury goods', 'Fragile items']
  },
  {
    id: '5',
    slug: 'large-packaging',
    name: 'Large Format Containers',
    description: 'Oversized packaging solutions for furniture, appliances, and large industrial components.',
    image: 'large_format',
    applications: ['Furniture', 'White goods', 'Oversized equipment']
  },
  {
    id: '6',
    slug: 'printed-packaging',
    name: 'High-Impact Printed Packaging',
    description: 'Showcase your brand with high-quality flexographic printing. Up to 4 colors available for vivid retail presence.',
    image: 'printed_packaging',
    applications: ['Retail branding', 'Display boxes', 'Premium shipments']
  }
];

export const FEFCO_CODES: FEFCOCode[] = [
  {
    code: '0201',
    name: 'Slotted-type box / American box',
    series: '02',
    description: 'Commonly known as the American box, this is one of the most widely used packaging formats in the world.',
    useCases: ['General transport', 'E-commerce shipping', 'Order fulfillment']
  },
  {
    code: '0427',
    name: 'Folder-type box',
    series: '04',
    description: 'A self-locking box that requires no tape for assembly. Perfect for premium presentation.',
    useCases: ['Subscription boxes', 'Product presentation', 'High-end shipping']
  },
  {
    code: '0203',
    name: 'Fully overlapping slotted box',
    series: '02',
    description: 'Outer flaps fully overlap, providing extra edge protection and stacking strength.',
    useCases: ['Heavy items', 'Fragile glass', 'Industrial components']
  },
  {
    code: '0300',
    name: 'Telescope-type box',
    series: '03',
    description: 'Consists of separate top and bottom parts that fit over each other.',
    useCases: ['Large machinery', 'Apparel', 'Display sets']
  },
  {
    code: '0711',
    name: 'Ready-glued case',
    series: '07',
    description: 'Quick assembly with pre-glued bottom. Ideal for fast-paced fulfillment lines.',
    useCases: ['High-speed logistics', 'Retail replenishment']
  },
  {
    code: '0421',
    name: 'Die-cut folder',
    series: '04',
    description: 'Precision die-cut design for sleek retail-ready presentation.',
    useCases: ['Cosmetics', 'Electronics', 'Gift boxes']
  }
];
