/**
 * FEFCO catalog — normalized 4-digit codes, series grouping, schematic visuals only.
 * Rich copy for selected codes; generic placeholders elsewhere (no external assets).
 */

export type FefcoSeries = "02" | "03" | "04" | "05" | "06" | "07";

export type FefcoTechnicalSpec = {
  constructionType: string;
  material: string;
  specTypicalUse: string;
  closure: string;
  industries: string;
};

export type FefcoFaqItem = {
  question: string;
  answer: string;
};

export type FefcoCatalogItem = {
  code: string;
  name: string;
  description: string;
  typicalUse: string;
  group: FefcoSeries;
  technical: FefcoTechnicalSpec;
  faq: FefcoFaqItem[];
};

/** @deprecated Use FefcoCatalogItem — kept for existing imports */
export type FefcoPreviewItem = FefcoCatalogItem;

export const FEFCO_SERIES_LABEL: Record<FefcoSeries, string> = {
  "02": "Slotted boxes",
  "03": "Telescope boxes",
  "04": "Folder and tray boxes",
  "05": "Slide boxes",
  "06": "Rigid boxes",
  "07": "Ready-glued cases",
};

const CODES_BY_SERIES: Record<FefcoSeries, readonly string[]> = {
  "02": [
    "0200", "0201", "0202", "0203", "0204", "0205", "0206", "0207", "0208",
    "0209", "0210", "0211", "0212", "0214", "0215", "0216", "0217", "0218",
    "0225", "0226", "0227", "0228", "0229", "0230", "0231",
  ],
  "03": [
    "0300", "0301", "0302", "0303", "0304", "0306", "0307", "0308", "0309",
    "0310", "0312", "0313", "0314", "0320", "0321", "0322", "0323", "0325",
    "0330", "0331", "0350", "0351", "0352",
  ],
  "04": [
    "0400", "0401", "0402", "0403", "0404", "0405", "0409", "0410", "0411",
    "0412", "0413", "0415", "0416", "0421", "0422", "0423", "0424", "0425",
    "0426", "0427", "0428", "0429", "0430", "0431", "0432", "0433", "0434",
    "0435", "0436", "0437", "0440", "0441", "0442", "0443", "0444", "0445",
    "0446", "0447", "0448", "0449", "0450", "0451", "0452", "0453", "0454",
    "0455", "0456", "0457", "0458", "0459", "0460", "0470", "0471", "0472",
    "0473", "0474",
  ],
  "05": [
    "0501", "0502", "0503", "0504", "0505", "0507", "0509", "0510", "0511",
    "0512",
  ],
  "06": [
    "0601", "0602", "0603", "0606", "0607", "0608", "0609", "0615", "0616",
    "0620", "0621",
  ],
  "07": [
    "0700", "0701", "0702", "0711", "0712", "0713", "0714", "0715", "0716",
    "0717", "0718", "0747", "0748", "0751", "0752", "0759", "0761", "0770",
    "0771", "0772", "0773", "0774",
  ],
};

const SERIES_STYLE_WORD: Record<FefcoSeries, string> = {
  "02": "slotted",
  "03": "telescope",
  "04": "folder or tray",
  "05": "slide-type",
  "06": "rigid",
  "07": "ready-glued case",
};

const SERIES_TYPICAL_USE: Record<FefcoSeries, string> = {
  "02": "Shipping, warehousing, palletised distribution",
  "03": "Nested height, protective outer packs, mixed SKU lines",
  "04": "Flat goods, trays, mail-friendly and retail formats",
  "05": "Sleeved packs, secondary enclosures, presentation outers",
  "06": "Premium presentation, stiff board assemblies, gift and retail",
  "07": "Fast manual or line assembly, shelf-ready and retail shippers",
};

const SERIES_CONSTRUCTION: Record<FefcoSeries, string> = {
  "02": "Slotted case family",
  "03": "Telescope / nested tray and lid",
  "04": "Folder, tray or die-cut panel construction",
  "05": "Slide / sleeve type outer",
  "06": "Rigid or composite stiff case",
  "07": "Pre-glued case, auto-bottom or retail-ready variant",
};

/** Short label for generic catalogue card titles */
const GENERIC_NAME_PREFIX: Record<FefcoSeries, string> = {
  "02": "Slotted",
  "03": "Telescope",
  "04": "Folder or tray",
  "05": "Slide",
  "06": "Rigid",
  "07": "Ready-glued",
};

const RICH_ENTRIES: Partial<Record<string, Omit<FefcoCatalogItem, "group">>> = {
  "0201": {
    code: "0201",
    name: "Standard shipping box",
    description: "Standard shipping box.",
    typicalUse: "Logistics, warehouse storage, shipping",
    technical: {
      constructionType: "Regular Slotted Container (RSC)",
      material: "Corrugated cardboard",
      specTypicalUse:
        "Shipping, fulfilment and palletized logistics for general goods",
      closure: "Tape / glue / staples on meeting outer flaps",
      industries: "Logistics, e-commerce, food service, electronics",
    },
    faq: [
      {
        question: "What is a FEFCO 0201 box?",
        answer:
          "FEFCO 0201 is a regular slotted container (RSC)—the common slotted case where outer flaps meet at the centre. It is the default reference for corrugated shipping boxes in European trade.",
      },
      {
        question: "What are FEFCO 0201 boxes used for?",
        answer:
          "They are used for warehouse storage, parcel shipping and distribution of products across weight classes, from consumer goods to industrial components, when dimensions and board grade are matched to the load.",
      },
      {
        question: "How are FEFCO 0201 boxes closed?",
        answer:
          "Top and bottom flaps are closed with packaging tape, adhesive or staples depending on line speed, weight and your carrier or retailer specifications.",
      },
      {
        question: "Can FEFCO 0201 boxes be printed?",
        answer:
          "Yes. Flexographic printing applies branding, icons and regulatory text on the board; run length and artwork complexity guide the economical print specification.",
      },
    ],
  },
  "0203": {
    code: "0203",
    name: "Overlap slotted container",
    description: "Overlap slotted container.",
    typicalUse: "Heavier goods, transport",
    technical: {
      constructionType: "Overlap Slotted Container (OSC)",
      material: "Corrugated cardboard",
      specTypicalUse:
        "Transport and stacking where overlapping outer flaps add strength",
      closure: "Overlapping outer flaps; tape, glue or staples",
      industries: "Heavy retail, industrial supply, bulk transport",
    },
    faq: [
      {
        question: "What is a FEFCO 0203 box?",
        answer:
          "FEFCO 0203 is an overlap slotted container: outer flaps overlap rather than meeting flush, which improves closure strength and is common for heavier or higher-stacked loads.",
      },
      {
        question: "What are FEFCO 0203 boxes used for?",
        answer:
          "They suit heavier goods, industrial components and transport lanes where a stronger flap closure and box body are needed than a standard RSC of the same footprint.",
      },
      {
        question: "How are FEFCO 0203 boxes closed?",
        answer:
          "Overlapping flaps are strapped or sealed with tape or adhesive so the extra overlap resists bulging and edge crush in transit.",
      },
      {
        question: "Can FEFCO 0203 boxes be printed?",
        answer:
          "Yes. Large flexo print areas work well on overlap slotted cases for brand visibility on pallets and in wholesale environments.",
      },
    ],
  },
  "0210": {
    code: "0210",
    name: "Folder type box",
    description: "Folder type box.",
    typicalUse: "Flat goods, documents, light products",
    technical: {
      constructionType: "Folder-type box (FEFCO 0210)",
      material: "Corrugated cardboard",
      specTypicalUse:
        "Flat goods, documents, shallow products and light retail packs",
      closure: "Tuck flaps, adhesive strips or straps depending on design",
      industries: "Printing, mail order, textiles, light industry",
    },
    faq: [
      {
        question: "What is a FEFCO 0210 box?",
        answer:
          "FEFCO 0210 describes a folder-type construction: a one-piece blank that wraps flat or shallow products with folds and panels suited to low-depth packs.",
      },
      {
        question: "What are FEFCO 0210 boxes used for?",
        answer:
          "They are used for flat goods, documents, apparel and light products where a slim internal height and quick assembly matter more than deep cube volume.",
      },
      {
        question: "How are FEFCO 0210 boxes closed?",
        answer:
          "Closures vary by die line: tuck flaps, peel-seal strips or light strapping are typical; the exact method follows your sample-approved drawing.",
      },
      {
        question: "Can FEFCO 0210 boxes be printed?",
        answer:
          "Yes. Folder blanks offer continuous outer panels ideal for brand graphics and unboxing presentation on e-commerce and retail lines.",
      },
    ],
  },
  "0427": {
    code: "0427",
    name: "Self locking box",
    description: "Self locking box.",
    typicalUse: "Ecommerce, retail, presentation packaging",
    technical: {
      constructionType: "Self-locking die-cut box",
      material: "Corrugated cardboard",
      specTypicalUse:
        "E-commerce shippers, retail cartons and branded presentation packs",
      closure:
        "Integrated self-locking bottom and lid—often no staples on standard designs",
      industries: "E-commerce, retail, subscription services, gifting",
    },
    faq: [
      {
        question: "What is a FEFCO 0427 box?",
        answer:
          "FEFCO 0427 refers to a self-locking style: die-cut locks and tabs hold the base and lid without separate fasteners on many variants, speeding manual or semi-auto packing.",
      },
      {
        question: "What are FEFCO 0427 boxes used for?",
        answer:
          "They are popular for e-commerce, retail presentation and subscription boxes where quick assembly, unboxing experience and dimensional mail constraints matter.",
      },
      {
        question: "How are FEFCO 0427 boxes closed?",
        answer:
          "Locking tabs and pre-creased panels snap or fold into place; optional tape or labels may be added for tamper evidence or carrier rules.",
      },
      {
        question: "Can FEFCO 0427 boxes be printed?",
        answer:
          "Yes. High-impact flexo or combined print suits branded shipper exteriors and interior messaging for customer-facing delivery.",
      },
    ],
  },
  "0713": {
    code: "0713",
    name: "Retail display packaging",
    description: "Retail display packaging.",
    typicalUse: "Retail shelves, product display",
    technical: {
      constructionType: "Retail display / shelf-ready packaging",
      material: "Corrugated cardboard",
      specTypicalUse:
        "Shelf display, product presentation and secondary retail packs",
      closure:
        "Perforated tear-aways, display fronts or integrated locks per drawing",
      industries: "Retail, FMCG, consumer goods, point-of-sale",
    },
    faq: [
      {
        question: "What is a FEFCO 0713 box?",
        answer:
          "FEFCO 0713 covers retail display-oriented constructions—often with features for shelf placement, tear-open fronts or stacking on shop fixtures while protecting the product.",
      },
      {
        question: "What are FEFCO 0713 boxes used for?",
        answer:
          "They are used where the pack is part of the merchandising story: shelf-ready trays, display shippers and presentation cartons in retail and FMCG channels.",
      },
      {
        question: "How are FEFCO 0713 boxes closed?",
        answer:
          "Closure follows the display concept: perforated access panels, friction locks or retail-ready tear lines are common; final behaviour is defined on the approved structural drawing.",
      },
      {
        question: "Can FEFCO 0713 boxes be printed?",
        answer:
          "Yes. Display packs usually carry strong flexo or litho-laminated graphics for brand blocking, promotions and regulatory panels facing the shopper.",
      },
    ],
  },
};

function buildGenericEntry(code: string, group: FefcoSeries): FefcoCatalogItem {
  const style = SERIES_STYLE_WORD[group];
  const seriesLabel = FEFCO_SERIES_LABEL[group];
  const description = `FEFCO ${code} ${style} corrugated packaging for product protection and transport.`;
  const name = `${GENERIC_NAME_PREFIX[group]} · ${code}`;

  const technical: FefcoTechnicalSpec = {
    constructionType: `${SERIES_CONSTRUCTION[group]} (FEFCO ${code})`,
    material: "Corrugated cardboard",
    specTypicalUse: SERIES_TYPICAL_USE[group],
    closure:
      "Per approved drawing — tape, adhesive, staples or integrated folds as specified for your line",
    industries:
      "Logistics, manufacturing, retail supply — matched to load and channel on quote",
  };

  const faq: FefcoFaqItem[] = [
    {
      question: `What is a FEFCO ${code} box?`,
      answer: `FEFCO ${code} is a ${seriesLabel.toLowerCase()} style in the European corrugated coding system. Exact panel layout and closures follow the official geometry for this code; we produce it to your dimensions and board grade.`,
    },
    {
      question: `What are FEFCO ${code} boxes used for?`,
      answer: `${SERIES_TYPICAL_USE[group]}. Final suitability depends on product weight, stack height and handling — share your brief and we confirm structure.`,
    },
    {
      question: `How are FEFCO ${code} boxes closed?`,
      answer:
        "Closure is defined on the sample-approved structural drawing: common options include tape, hot-melt or cold glue, staples, tuck flaps or integrated locks depending on the variant.",
    },
    {
      question: `Can FEFCO ${code} boxes be printed?`,
      answer:
        "Yes. Flexographic print is typical on corrugated; artwork, run length and board face determine the most economical print specification.",
    },
  ];

  return {
    code,
    name,
    description,
    typicalUse: SERIES_TYPICAL_USE[group],
    group,
    technical,
    faq,
  };
}

function mergeEntry(code: string, group: FefcoSeries): FefcoCatalogItem {
  const rich = RICH_ENTRIES[code];
  if (rich) {
    return { ...rich, group };
  }
  return buildGenericEntry(code, group);
}

const _flat: FefcoCatalogItem[] = (Object.keys(CODES_BY_SERIES) as FefcoSeries[]).flatMap(
  (group) => CODES_BY_SERIES[group].map((code) => mergeEntry(code, group)),
);

/** Full catalog, sorted by code */
export const FEFCO_CATALOG: FefcoCatalogItem[] = [..._flat].sort((a, b) =>
  a.code.localeCompare(b.code),
);

/** Homepage / marketing preview — unchanged five-style showcase */
export const FEFCO_HOME_PREVIEW: FefcoCatalogItem[] = (
  ["0201", "0203", "0210", "0427", "0713"] as const
).map((code) => {
  const item = FEFCO_CATALOG.find((i) => i.code === code);
  if (!item) throw new Error(`Missing FEFCO ${code}`);
  return item;
});

export function getFefcoCatalogEntry(code: string): FefcoCatalogItem | undefined {
  return FEFCO_CATALOG.find((i) => i.code === code);
}

export function fefcoSeriesCounts(): Record<FefcoSeries | "all", number> {
  const counts = { all: FEFCO_CATALOG.length } as Record<FefcoSeries | "all", number>;
  (Object.keys(CODES_BY_SERIES) as FefcoSeries[]).forEach((s) => {
    counts[s] = CODES_BY_SERIES[s].length;
  });
  return counts;
}

export const FEFCO_SERIES_ORDER: readonly FefcoSeries[] = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
];
