/** Auto-generated from docs/23_fefco_data.md — do not edit manually. */
export type FefcoLocale = "en" | "et" | "ru";

export type FefcoLocalized = Record<FefcoLocale, string>;

export type FefcoLocalizedList = Record<FefcoLocale, string[]>;

export type FefcoCatalogEntry = {
  code: string;
  series: string;
  name: FefcoLocalized;
  description: FefcoLocalized;
  useCases: FefcoLocalizedList;
};

export const FEFCO_CATALOG: FefcoCatalogEntry[] = [
  {
    "code": "0201",
    "series": "02",
    "name": {
      "en": "Regular slotted container (RSC)",
      "et": "Tavaline pilukonteiner (RSC)",
      "ru": "Стандартный ящик с прорезями (RSC)"
    },
    "description": {
      "en": "The most widely used packaging format in the world. Top and bottom flaps meet in the center when closed. Simple, cost-effective, ideal for most shipping needs.",
      "et": "Maailmas kõige laialdasemalt kasutatav pakendivorm. Ülemised ja alumised klapid kohtuvad sulgemisel keskel. Lihtne, kulutõhus, ideaalne enamiku saatmise vajaduste jaoks.",
      "ru": "Самый распространённый формат упаковки в мире. Верхние и нижние клапаны сходятся в центре при закрытии. Простой, экономичный, идеален для большинства задач доставки."
    },
    "useCases": {
      "en": [
        "general logistics",
        "e-commerce",
        "warehousing",
        "food industry"
      ],
      "et": [
        "üldine logistika",
        "e-kaubandus",
        "ladustamine",
        "toidutööstus"
      ],
      "ru": [
        "общая логистика",
        "электронная коммерция",
        "складирование",
        "пищевая промышленность"
      ]
    }
  },
  {
    "code": "0202",
    "series": "02",
    "name": {
      "en": "Slotted container — top flaps unequal",
      "et": "Pilukonteiner — ülemised klapid ebavõrdsed",
      "ru": "Ящик с прорезями — неравные верхние клапаны"
    },
    "description": {
      "en": "Top flaps unequal. FEFCO 0202 format suited for products requiring extra top protection, industrial goods.",
      "et": "Ülemised klapid ebavõrdsed. FEFCO 0202 vorm, mis sobib: tooted, mis vajavad täiendavat ülakaitset, tööstuskaubad.",
      "ru": "Неравные верхние клапаны. Формат FEFCO 0202 подходит для: товары, требующие дополнительной верхней защиты, промышленные товары."
    },
    "useCases": {
      "en": [
        "products requiring extra top protection",
        "industrial goods"
      ],
      "et": [
        "tooted, mis vajavad täiendavat ülakaitset",
        "tööstuskaubad"
      ],
      "ru": [
        "товары, требующие дополнительной верхней защиты",
        "промышленные товары"
      ]
    }
  },
  {
    "code": "0203",
    "series": "02",
    "name": {
      "en": "Fully overlapping slotted container (FOL)",
      "et": "Täielikult kattuva pilukonteiner",
      "ru": "Ящик с полностью перекрывающимися клапанами"
    },
    "description": {
      "en": "Outer flaps fully overlap, providing extra edge protection and stacking strength. Excellent for heavy goods.",
      "et": "Välisklapid kattuvad täielikult, pakkudes täiendavat servakaitset ja virnastustuge. Suurepärane raskete kaupade jaoks.",
      "ru": "Внешние клапаны полностью перекрываются, обеспечивая дополнительную защиту краёв и прочность при штабелировании. Отлично подходит для тяжёлых грузов."
    },
    "useCases": {
      "en": [
        "heavy goods",
        "industrial transport",
        "stacking applications"
      ],
      "et": [
        "rasked kaubad",
        "tööstustransport",
        "virnastusrakendused"
      ],
      "ru": [
        "тяжёлые товары",
        "промышленные перевозки",
        "применение для штабелирования"
      ]
    }
  },
  {
    "code": "0204",
    "series": "02",
    "name": {
      "en": "Slotted container — extended top",
      "et": "Pilukonteiner — pikendatud ülaosa",
      "ru": "Ящик с прорезями — удлинённый верх"
    },
    "description": {
      "en": "Extended top. FEFCO 0204 format suited for tall products, display packaging.",
      "et": "Pikendatud ülaosa. FEFCO 0204 vorm, mis sobib: kõrged tooted, ekspositsioonipakend.",
      "ru": "Удлинённый верх. Формат FEFCO 0204 подходит для: высокие изделия, витринная упаковка."
    },
    "useCases": {
      "en": [
        "tall products",
        "display packaging"
      ],
      "et": [
        "kõrged tooted",
        "ekspositsioonipakend"
      ],
      "ru": [
        "высокие изделия",
        "витринная упаковка"
      ]
    }
  },
  {
    "code": "0205",
    "series": "02",
    "name": {
      "en": "Slotted container — single flap",
      "et": "Pilukonteiner — ühe klapiga",
      "ru": "Ящик с прорезями — один клапан"
    },
    "description": {
      "en": "Single flap. FEFCO 0205 format suited for trays, shallow packaging.",
      "et": "Ühe klapiga. FEFCO 0205 vorm, mis sobib: alused, madal pakend.",
      "ru": "Один клапан. Формат FEFCO 0205 подходит для: лотки, неглубокая упаковка."
    },
    "useCases": {
      "en": [
        "trays",
        "shallow packaging"
      ],
      "et": [
        "alused",
        "madal pakend"
      ],
      "ru": [
        "лотки",
        "неглубокая упаковка"
      ]
    }
  },
  {
    "code": "0206",
    "series": "02",
    "name": {
      "en": "Slotted container — with partition",
      "et": "Pilukonteiner — vaheseinaga",
      "ru": "Ящик с прорезями — с перегородкой"
    },
    "description": {
      "en": "With partition. FEFCO 0206 format suited for multi-product packaging, bottles.",
      "et": "Vaheseinaga. FEFCO 0206 vorm, mis sobib: mitme toote pakend, pudelid.",
      "ru": "С перегородкой. Формат FEFCO 0206 подходит для: упаковка нескольких товаров, бутылки."
    },
    "useCases": {
      "en": [
        "multi-product packaging",
        "bottles",
        "glass"
      ],
      "et": [
        "mitme toote pakend",
        "pudelid",
        "klaas"
      ],
      "ru": [
        "упаковка нескольких товаров",
        "бутылки",
        "стекло"
      ]
    }
  },
  {
    "code": "0207",
    "series": "02",
    "name": {
      "en": "Slotted container — double wall",
      "et": "Pilukonteiner — kaheseinaline",
      "ru": "Ящик с прорезями — двойная стенка"
    },
    "description": {
      "en": "Double wall. FEFCO 0207 format suited for heavy industrial goods, export packaging.",
      "et": "Kaheseinaline. FEFCO 0207 vorm, mis sobib: rasked tööstuskaubad, ekspordipakend.",
      "ru": "Двойная стенка. Формат FEFCO 0207 подходит для: тяжёлые промышленные товары, экспортная упаковка."
    },
    "useCases": {
      "en": [
        "heavy industrial goods",
        "export packaging"
      ],
      "et": [
        "rasked tööstuskaubad",
        "ekspordipakend"
      ],
      "ru": [
        "тяжёлые промышленные товары",
        "экспортная упаковка"
      ]
    }
  },
  {
    "code": "0208",
    "series": "02",
    "name": {
      "en": "Slotted container — overlap bottom",
      "et": "Pilukonteiner — kattega põhi",
      "ru": "Ящик с прорезями — перекрывающееся дно"
    },
    "description": {
      "en": "Overlap bottom. FEFCO 0208 format suited for heavy products, food industry.",
      "et": "Kattega põhi. FEFCO 0208 vorm, mis sobib: rasked tooted, toidutööstus.",
      "ru": "Перекрывающееся дно. Формат FEFCO 0208 подходит для: тяжёлые изделия, пищевая промышленность."
    },
    "useCases": {
      "en": [
        "heavy products",
        "food industry"
      ],
      "et": [
        "rasked tooted",
        "toidutööstus"
      ],
      "ru": [
        "тяжёлые изделия",
        "пищевая промышленность"
      ]
    }
  },
  {
    "code": "0209",
    "series": "02",
    "name": {
      "en": "Slotted container — with inner liner",
      "et": "Pilukonteiner — sisevoodriga",
      "ru": "Ящик с прорезями — с внутренней вставкой"
    },
    "description": {
      "en": "With inner liner. FEFCO 0209 format suited for fragile goods, electronics.",
      "et": "Sisevoodriga. FEFCO 0209 vorm, mis sobib: habras kaup, elektroonika.",
      "ru": "С внутренней вставкой. Формат FEFCO 0209 подходит для: хрупкие товары, электроника."
    },
    "useCases": {
      "en": [
        "fragile goods",
        "electronics"
      ],
      "et": [
        "habras kaup",
        "elektroonika"
      ],
      "ru": [
        "хрупкие товары",
        "электроника"
      ]
    }
  },
  {
    "code": "0210",
    "series": "02",
    "name": {
      "en": "Slotted container — with dust flaps",
      "et": "Pilukonteiner — tolmuklappidega",
      "ru": "Ящик с прорезями — с пылезащитными клапанами"
    },
    "description": {
      "en": "With dust flaps. FEFCO 0210 format suited for food packaging, dust-sensitive products.",
      "et": "Tolmuklappidega. FEFCO 0210 vorm, mis sobib: toidupakend, tolmutundlikud tooted.",
      "ru": "С пылезащитными клапанами. Формат FEFCO 0210 подходит для: пищевая упаковка, пылечувствительные товары."
    },
    "useCases": {
      "en": [
        "food packaging",
        "dust-sensitive products"
      ],
      "et": [
        "toidupakend",
        "tolmutundlikud tooted"
      ],
      "ru": [
        "пищевая упаковка",
        "пылечувствительные товары"
      ]
    }
  },
  {
    "code": "0211",
    "series": "02",
    "name": {
      "en": "Slotted container — auto bottom",
      "et": "Pilukonteiner — automaatpõhjaga",
      "ru": "Ящик с прорезями — автоматическое дно"
    },
    "description": {
      "en": "Auto bottom. FEFCO 0211 format suited for retail, fast assembly lines.",
      "et": "Automaatpõhjaga. FEFCO 0211 vorm, mis sobib: jaemüük, kiired kokkupanekuliinid.",
      "ru": "Автоматическое дно. Формат FEFCO 0211 подходит для: розница, быстрые линии сборки."
    },
    "useCases": {
      "en": [
        "retail",
        "fast assembly lines"
      ],
      "et": [
        "jaemüük",
        "kiired kokkupanekuliinid"
      ],
      "ru": [
        "розница",
        "быстрые линии сборки"
      ]
    }
  },
  {
    "code": "0212",
    "series": "02",
    "name": {
      "en": "Slotted container — with handle",
      "et": "Pilukonteiner — käepidemega",
      "ru": "Ящик с прорезями — с ручкой"
    },
    "description": {
      "en": "With handle. FEFCO 0212 format suited for retail packaging, consumer goods.",
      "et": "Käepidemega. FEFCO 0212 vorm, mis sobib: jaemüügipakend, tarbekaubad.",
      "ru": "Ящик с прорезями — с ручкой"
    },
    "useCases": {
      "en": [
        "retail packaging",
        "consumer goods"
      ],
      "et": [
        "jaemüügipakend",
        "tarbekaubad"
      ],
      "ru": [
        "розничная упаковка",
        "товары народного потребления"
      ]
    }
  },
  {
    "code": "0214",
    "series": "02",
    "name": {
      "en": "Slotted container — tray with lid",
      "et": "Pilukonteiner — alus kaanega",
      "ru": "Ящик с прорезями — поднос с крышкой"
    },
    "description": {
      "en": "Tray with lid. FEFCO 0214 format suited for food, gifts.",
      "et": "Alus kaanega. FEFCO 0214 vorm, mis sobib: toiduained, kingitused.",
      "ru": "Поднос с крышкой. Формат FEFCO 0214 подходит для: продукты питания, подарки."
    },
    "useCases": {
      "en": [
        "food",
        "gifts",
        "retail"
      ],
      "et": [
        "toiduained",
        "kingitused",
        "jaemüük"
      ],
      "ru": [
        "продукты питания",
        "подарки",
        "розница"
      ]
    }
  },
  {
    "code": "0215",
    "series": "02",
    "name": {
      "en": "Slotted container — reinforced base",
      "et": "Pilukonteiner — tugevdatud põhjaga",
      "ru": "Ящик с прорезями — усиленное основание"
    },
    "description": {
      "en": "Reinforced base. FEFCO 0215 format suited for heavy products, industrial.",
      "et": "Tugevdatud põhjaga. FEFCO 0215 vorm, mis sobib: rasked tooted, tööstuslik.",
      "ru": "Усиленное основание. Формат FEFCO 0215 подходит для: тяжёлые изделия, промышленное применение."
    },
    "useCases": {
      "en": [
        "heavy products",
        "industrial"
      ],
      "et": [
        "rasked tooted",
        "tööstuslik"
      ],
      "ru": [
        "тяжёлые изделия",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0216",
    "series": "02",
    "name": {
      "en": "Slotted container — with inner tray",
      "et": "Pilukonteiner — sisealusega",
      "ru": "Ящик с прорезями — с внутренним поддоном"
    },
    "description": {
      "en": "With inner tray. FEFCO 0216 format suited for fragile items, presentation boxes.",
      "et": "Sisealusega. FEFCO 0216 vorm, mis sobib: habras tooted, esitluskarbid.",
      "ru": "С внутренним поддоном. Формат FEFCO 0216 подходит для: хрупкие изделия, презентационные коробки."
    },
    "useCases": {
      "en": [
        "fragile items",
        "presentation boxes"
      ],
      "et": [
        "habras tooted",
        "esitluskarbid"
      ],
      "ru": [
        "хрупкие изделия",
        "презентационные коробки"
      ]
    }
  },
  {
    "code": "0217",
    "series": "02",
    "name": {
      "en": "Slotted container — extended base",
      "et": "Pilukonteiner — pikendatud põhjaga",
      "ru": "Ящик с прорезями — удлинённое основание"
    },
    "description": {
      "en": "Extended base. FEFCO 0217 format suited for display packaging, retail.",
      "et": "Pikendatud põhjaga. FEFCO 0217 vorm, mis sobib: ekspositsioonipakend, jaemüük.",
      "ru": "Удлинённое основание. Формат FEFCO 0217 подходит для: витринная упаковка, розница."
    },
    "useCases": {
      "en": [
        "display packaging",
        "retail"
      ],
      "et": [
        "ekspositsioonipakend",
        "jaemüük"
      ],
      "ru": [
        "витринная упаковка",
        "розница"
      ]
    }
  },
  {
    "code": "0218",
    "series": "02",
    "name": {
      "en": "Slotted container — with vent holes",
      "et": "Pilukonteiner — ventilatsiooniavadega",
      "ru": "Ящик с прорезями — с вентиляционными отверстиями"
    },
    "description": {
      "en": "With vent holes. FEFCO 0218 format suited for fresh produce, vegetables.",
      "et": "Ventilatsiooniavadega. FEFCO 0218 vorm, mis sobib: värsked tooted, köögiviljad.",
      "ru": "С вентиляционными отверстиями. Формат FEFCO 0218 подходит для: свежая продукция, овощи."
    },
    "useCases": {
      "en": [
        "fresh produce",
        "vegetables",
        "fruit"
      ],
      "et": [
        "värsked tooted",
        "köögiviljad",
        "puuviljad"
      ],
      "ru": [
        "свежая продукция",
        "овощи",
        "фрукты"
      ]
    }
  },
  {
    "code": "0225",
    "series": "02",
    "name": {
      "en": "Slotted container — with corner posts",
      "et": "Pilukonteiner — nurgapostidega",
      "ru": "Ящик с прорезями — с угловыми стойками"
    },
    "description": {
      "en": "With corner posts. FEFCO 0225 format suited for heavy stacking, industrial.",
      "et": "Nurgapostidega. FEFCO 0225 vorm, mis sobib: raske virnastamine, tööstuslik.",
      "ru": "С угловыми стойками. Формат FEFCO 0225 подходит для: тяжёлое штабелирование, промышленное применение."
    },
    "useCases": {
      "en": [
        "heavy stacking",
        "industrial"
      ],
      "et": [
        "raske virnastamine",
        "tööstuslik"
      ],
      "ru": [
        "тяжёлое штабелирование",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0226",
    "series": "02",
    "name": {
      "en": "Slotted container — with integral partition",
      "et": "Pilukonteiner — integreeritud vaheseinaga",
      "ru": "Ящик с прорезями — с встроенной перегородкой"
    },
    "description": {
      "en": "With integral partition. FEFCO 0226 format suited for bottles, glass.",
      "et": "Integreeritud vaheseinaga. FEFCO 0226 vorm, mis sobib: pudelid, klaas.",
      "ru": "С встроенной перегородкой. Формат FEFCO 0226 подходит для: бутылки, стекло."
    },
    "useCases": {
      "en": [
        "bottles",
        "glass",
        "ceramics"
      ],
      "et": [
        "pudelid",
        "klaas",
        "keraamika"
      ],
      "ru": [
        "бутылки",
        "стекло",
        "керамика"
      ]
    }
  },
  {
    "code": "0227",
    "series": "02",
    "name": {
      "en": "Slotted container — reinforced top and bottom",
      "et": "Pilukonteiner — tugevdatud üla- ja põhjaga",
      "ru": "Ящик с прорезями — усиленный верх и низ"
    },
    "description": {
      "en": "Reinforced top and bottom. FEFCO 0227 format suited for export, heavy freight.",
      "et": "Tugevdatud üla- ja põhjaga. FEFCO 0227 vorm, mis sobib: eksport, raske kaubavedu.",
      "ru": "Усиленный верх и низ. Формат FEFCO 0227 подходит для: экспорт, тяжёлые грузы."
    },
    "useCases": {
      "en": [
        "export",
        "heavy freight"
      ],
      "et": [
        "eksport",
        "raske kaubavedu"
      ],
      "ru": [
        "экспорт",
        "тяжёлые грузы"
      ]
    }
  },
  {
    "code": "0228",
    "series": "02",
    "name": {
      "en": "Slotted container — with tray insert",
      "et": "Pilukonteiner — aluse sisestusega",
      "ru": "Ящик с прорезями — со вставкой-поддоном"
    },
    "description": {
      "en": "With tray insert. FEFCO 0228 format suited for electronics, precision parts.",
      "et": "Aluse sisestusega. FEFCO 0228 vorm, mis sobib: elektroonika, täppisosad.",
      "ru": "Со вставкой-поддоном. Формат FEFCO 0228 подходит для: электроника, точные детали."
    },
    "useCases": {
      "en": [
        "electronics",
        "precision parts"
      ],
      "et": [
        "elektroonika",
        "täppisosad"
      ],
      "ru": [
        "электроника",
        "точные детали"
      ]
    }
  },
  {
    "code": "0229",
    "series": "02",
    "name": {
      "en": "Slotted container — hinged lid",
      "et": "Pilukonteiner — hingedega kaas",
      "ru": "Ящик с прорезями — крышка на петлях"
    },
    "description": {
      "en": "Hinged lid. FEFCO 0229 format suited for archive, storage.",
      "et": "Hingedega kaas. FEFCO 0229 vorm, mis sobib: arhiiv, ladustamine.",
      "ru": "Крышка на петлях. Формат FEFCO 0229 подходит для: архивное хранение, хранение."
    },
    "useCases": {
      "en": [
        "archive",
        "storage",
        "retail"
      ],
      "et": [
        "arhiiv",
        "ladustamine",
        "jaemüük"
      ],
      "ru": [
        "архивное хранение",
        "хранение",
        "розница"
      ]
    }
  },
  {
    "code": "0230",
    "series": "02",
    "name": {
      "en": "Slotted container — with carrying handle",
      "et": "Pilukonteiner — kandemisekäepidemega",
      "ru": "Ящик с прорезями — с переносной ручкой"
    },
    "description": {
      "en": "With carrying handle. FEFCO 0230 format suited for consumer goods, retail.",
      "et": "Kandemisekäepidemega. FEFCO 0230 vorm, mis sobib: tarbekaubad, jaemüük.",
      "ru": "С переносной ручкой. Формат FEFCO 0230 подходит для: товары народного потребления, розница."
    },
    "useCases": {
      "en": [
        "consumer goods",
        "retail",
        "gifts"
      ],
      "et": [
        "tarbekaubad",
        "jaemüük",
        "kingitused"
      ],
      "ru": [
        "товары народного потребления",
        "розница",
        "подарки"
      ]
    }
  },
  {
    "code": "0231",
    "series": "02",
    "name": {
      "en": "Slotted container — with locking tabs",
      "et": "Pilukonteiner — lukustusnuppudega",
      "ru": "Ящик с прорезями — с фиксирующими язычками"
    },
    "description": {
      "en": "With locking tabs. FEFCO 0231 format suited for retail, no-tape assembly.",
      "et": "Lukustusnuppudega. FEFCO 0231 vorm, mis sobib: jaemüük, teipimata kokkupanek.",
      "ru": "С фиксирующими язычками. Формат FEFCO 0231 подходит для: розница, сборка без скотча."
    },
    "useCases": {
      "en": [
        "retail",
        "no-tape assembly"
      ],
      "et": [
        "jaemüük",
        "teipimata kokkupanek"
      ],
      "ru": [
        "розница",
        "сборка без скотча"
      ]
    }
  },
  {
    "code": "0301",
    "series": "03",
    "name": {
      "en": "Telescope box — partial overlap",
      "et": "Teleskoop-kast — osaline kattumine",
      "ru": "Телескопический ящик — частичное перекрытие"
    },
    "description": {
      "en": "Partial overlap. FEFCO 0301 format suited for retail, books.",
      "et": "Osaline kattumine. FEFCO 0301 vorm, mis sobib: jaemüük, raamatud.",
      "ru": "Частичное перекрытие. Формат FEFCO 0301 подходит для: розница, книги."
    },
    "useCases": {
      "en": [
        "retail",
        "books",
        "flat products"
      ],
      "et": [
        "jaemüük",
        "raamatud",
        "lamed tooted"
      ],
      "ru": [
        "розница",
        "книги",
        "плоские изделия"
      ]
    }
  },
  {
    "code": "0302",
    "series": "03",
    "name": {
      "en": "Telescope box — with inner frame",
      "et": "Teleskoop-kast — sisseraamiga",
      "ru": "Телескопический ящик — с внутренней рамой"
    },
    "description": {
      "en": "With inner frame. FEFCO 0302 format suited for electronics, fragile goods.",
      "et": "Sisseraamiga. FEFCO 0302 vorm, mis sobib: elektroonika, habras kaup.",
      "ru": "С внутренней рамой. Формат FEFCO 0302 подходит для: электроника, хрупкие товары."
    },
    "useCases": {
      "en": [
        "electronics",
        "fragile goods"
      ],
      "et": [
        "elektroonika",
        "habras kaup"
      ],
      "ru": [
        "электроника",
        "хрупкие товары"
      ]
    }
  },
  {
    "code": "0303",
    "series": "03",
    "name": {
      "en": "Telescope tray and lid",
      "et": "Teleskoop-alus ja kaas",
      "ru": "Телескопический поддон с крышкой"
    },
    "description": {
      "en": "Telescope tray and lid",
      "et": "Teleskoop-alus ja kaas",
      "ru": "Телескопический поддон с крышкой"
    },
    "useCases": {
      "en": [
        "food",
        "gifts",
        "presentation"
      ],
      "et": [
        "toiduained",
        "kingitused",
        "esitlus"
      ],
      "ru": [
        "продукты питания",
        "подарки",
        "презентация"
      ]
    }
  },
  {
    "code": "0304",
    "series": "03",
    "name": {
      "en": "Telescope box — deep lid",
      "et": "Teleskoop-kast — sügav kaas",
      "ru": "Телескопический ящик — глубокая крышка"
    },
    "description": {
      "en": "Telescope box — deep lid",
      "et": "Sügav kaas. FEFCO 0304 vorm, mis sobib: kõrged tooted, tööstuskomponendid.",
      "ru": "Глубокая крышка. Формат FEFCO 0304 подходит для: высокие изделия, промышленные компоненты."
    },
    "useCases": {
      "en": [
        "tall products",
        "industrial components"
      ],
      "et": [
        "kõrged tooted",
        "tööstuskomponendid"
      ],
      "ru": [
        "высокие изделия",
        "промышленные компоненты"
      ]
    }
  },
  {
    "code": "0306",
    "series": "03",
    "name": {
      "en": "Telescope box — reinforced corners",
      "et": "Teleskoop-kast — tugevdatud nurgad",
      "ru": "Телескопический ящик — усиленные углы"
    },
    "description": {
      "en": "Reinforced corners. FEFCO 0306 format suited for heavy goods, industrial.",
      "et": "Tugevdatud nurgad. FEFCO 0306 vorm, mis sobib: rasked kaubad, tööstuslik.",
      "ru": "Усиленные углы. Формат FEFCO 0306 подходит для: тяжёлые товары, промышленное применение."
    },
    "useCases": {
      "en": [
        "heavy goods",
        "industrial"
      ],
      "et": [
        "rasked kaubad",
        "tööstuslik"
      ],
      "ru": [
        "тяжёлые товары",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0307",
    "series": "03",
    "name": {
      "en": "Telescope box — with dividers",
      "et": "Teleskoop-kast — jagajatega",
      "ru": "Телескопический ящик — с разделителями"
    },
    "description": {
      "en": "With dividers. FEFCO 0307 format suited for bottles, glass.",
      "et": "Jagajatega. FEFCO 0307 vorm, mis sobib: pudelid, klaas.",
      "ru": "С разделителями. Формат FEFCO 0307 подходит для: бутылки, стекло."
    },
    "useCases": {
      "en": [
        "bottles",
        "glass",
        "multi-unit"
      ],
      "et": [
        "pudelid",
        "klaas",
        "mitme ühikuga"
      ],
      "ru": [
        "бутылки",
        "стекло",
        "несколько единиц"
      ]
    }
  },
  {
    "code": "0308",
    "series": "03",
    "name": {
      "en": "Telescope box — self-locking",
      "et": "Teleskoop-kast — isesulguv",
      "ru": "Телескопический ящик — самозакрывающийся"
    },
    "description": {
      "en": "Self-locking. FEFCO 0308 format suited for retail, no-tape.",
      "et": "Isesulguv. FEFCO 0308 vorm, mis sobib: jaemüük, teipimata.",
      "ru": "Самозакрывающийся. Формат FEFCO 0308 подходит для: розница, без скотча."
    },
    "useCases": {
      "en": [
        "retail",
        "no-tape",
        "fast packing"
      ],
      "et": [
        "jaemüük",
        "teipimata",
        "kiire pakkimine"
      ],
      "ru": [
        "розница",
        "без скотча",
        "быстрая упаковка"
      ]
    }
  },
  {
    "code": "0309",
    "series": "03",
    "name": {
      "en": "Telescope box — with handle",
      "et": "Teleskoop-kast — käepidemega",
      "ru": "Телескопический ящик — с ручкой"
    },
    "description": {
      "en": "With handle. FEFCO 0309 format suited for consumer goods, gifts.",
      "et": "Käepidemega. FEFCO 0309 vorm, mis sobib: tarbekaubad, kingitused.",
      "ru": "Телескопический ящик — с ручкой"
    },
    "useCases": {
      "en": [
        "consumer goods",
        "gifts"
      ],
      "et": [
        "tarbekaubad",
        "kingitused"
      ],
      "ru": [
        "товары народного потребления",
        "подарки"
      ]
    }
  },
  {
    "code": "0310",
    "series": "03",
    "name": {
      "en": "Telescope box — with foam insert",
      "et": "Teleskoop-kast — vahtsisestusega",
      "ru": "Телескопический ящик — с вставкой из пенопласта"
    },
    "description": {
      "en": "With foam insert. FEFCO 0310 format suited for precision parts, electronics.",
      "et": "Vahtsisestusega. FEFCO 0310 vorm, mis sobib: täppisosad, elektroonika.",
      "ru": "С вставкой из пенопласта. Формат FEFCO 0310 подходит для: точные детали, электроника."
    },
    "useCases": {
      "en": [
        "precision parts",
        "electronics",
        "medical"
      ],
      "et": [
        "täppisosad",
        "elektroonika",
        "meditsiin"
      ],
      "ru": [
        "точные детали",
        "электроника",
        "медицина"
      ]
    }
  },
  {
    "code": "0312",
    "series": "03",
    "name": {
      "en": "Telescope box — with display window",
      "et": "Teleskoop-kast — näidikuaknaga",
      "ru": "Телескопический ящик — с витринным окном"
    },
    "description": {
      "en": "With display window. FEFCO 0312 format suited for retail display, consumer products.",
      "et": "Näidikuaknaga. FEFCO 0312 vorm, mis sobib: jaekaupluse ekspositsioon, tarbetooted.",
      "ru": "С витринным окном. Формат FEFCO 0312 подходит для: розничная витрина, потребительские товары."
    },
    "useCases": {
      "en": [
        "retail display",
        "consumer products"
      ],
      "et": [
        "jaekaupluse ekspositsioon",
        "tarbetooted"
      ],
      "ru": [
        "розничная витрина",
        "потребительские товары"
      ]
    }
  },
  {
    "code": "0313",
    "series": "03",
    "name": {
      "en": "Telescope box — with tray",
      "et": "Teleskoop-kast — alusega",
      "ru": "Телескопический ящик — с поддоном"
    },
    "description": {
      "en": "With tray. FEFCO 0313 format suited for food, electronics.",
      "et": "Teleskoop-kast — alusega",
      "ru": "С поддоном. Формат FEFCO 0313 подходит для: продукты питания, электроника."
    },
    "useCases": {
      "en": [
        "food",
        "electronics",
        "gifts"
      ],
      "et": [
        "toiduained",
        "elektroonika",
        "kingitused"
      ],
      "ru": [
        "продукты питания",
        "электроника",
        "подарки"
      ]
    }
  },
  {
    "code": "0314",
    "series": "03",
    "name": {
      "en": "Telescope box — extended base",
      "et": "Teleskoop-kast — pikendatud põhjaga",
      "ru": "Телескопический ящик — удлинённое основание"
    },
    "description": {
      "en": "Extended base. FEFCO 0314 format suited for flat products, books.",
      "et": "Pikendatud põhjaga. FEFCO 0314 vorm, mis sobib: lamed tooted, raamatud.",
      "ru": "Удлинённое основание. Формат FEFCO 0314 подходит для: плоские изделия, книги."
    },
    "useCases": {
      "en": [
        "flat products",
        "books",
        "prints"
      ],
      "et": [
        "lamed tooted",
        "raamatud",
        "trükised"
      ],
      "ru": [
        "плоские изделия",
        "книги",
        "печатная продукция"
      ]
    }
  },
  {
    "code": "0320",
    "series": "03",
    "name": {
      "en": "Telescope sleeve",
      "et": "Teleskoop-ümbris",
      "ru": "Телескопическая гильза"
    },
    "description": {
      "en": "Telescope sleeve",
      "et": "Teleskoop-ümbris",
      "ru": "Телескопическая гильза"
    },
    "useCases": {
      "en": [
        "retail sleeves",
        "product branding"
      ],
      "et": [
        "jaemüügi ümbrised",
        "toote bränding"
      ],
      "ru": [
        "розничные вложения",
        "брендинг продукта"
      ]
    }
  },
  {
    "code": "0321",
    "series": "03",
    "name": {
      "en": "Telescope sleeve — with base tray",
      "et": "Teleskoop-ümbris — alusalusega",
      "ru": "Телескопическая гильза — с нижним поддоном"
    },
    "description": {
      "en": "With base tray. FEFCO 0321 format suited for premium packaging, gifts.",
      "et": "Alusalusega. FEFCO 0321 vorm, mis sobib: premium-pakend, kingitused.",
      "ru": "С нижним поддоном. Формат FEFCO 0321 подходит для: премиальная упаковка, подарки."
    },
    "useCases": {
      "en": [
        "premium packaging",
        "gifts"
      ],
      "et": [
        "premium-pakend",
        "kingitused"
      ],
      "ru": [
        "премиальная упаковка",
        "подарки"
      ]
    }
  },
  {
    "code": "0322",
    "series": "03",
    "name": {
      "en": "Telescope sleeve — double wall",
      "et": "Teleskoop-ümbris — kaheseinaline",
      "ru": "Телескопическая гильза — двойная стенка"
    },
    "description": {
      "en": "Double wall. FEFCO 0322 format suited for heavy goods, export.",
      "et": "Kaheseinaline. FEFCO 0322 vorm, mis sobib: rasked kaubad, eksport.",
      "ru": "Двойная стенка. Формат FEFCO 0322 подходит для: тяжёлые товары, экспорт."
    },
    "useCases": {
      "en": [
        "heavy goods",
        "export"
      ],
      "et": [
        "rasked kaubad",
        "eksport"
      ],
      "ru": [
        "тяжёлые товары",
        "экспорт"
      ]
    }
  },
  {
    "code": "0323",
    "series": "03",
    "name": {
      "en": "Telescope sleeve — with inner tray",
      "et": "Teleskoop-ümbris — sisealusega",
      "ru": "Телескопическая гильза — с внутренним поддоном"
    },
    "description": {
      "en": "With inner tray. FEFCO 0323 format suited for electronics, premium retail.",
      "et": "Sisealusega. FEFCO 0323 vorm, mis sobib: elektroonika, premium-jaemüük.",
      "ru": "С внутренним поддоном. Формат FEFCO 0323 подходит для: электроника, премиальная розница."
    },
    "useCases": {
      "en": [
        "electronics",
        "premium retail"
      ],
      "et": [
        "elektroonika",
        "premium-jaemüük"
      ],
      "ru": [
        "электроника",
        "премиальная розница"
      ]
    }
  },
  {
    "code": "0325",
    "series": "03",
    "name": {
      "en": "Telescope box — with partition system",
      "et": "Teleskoop-kast — vaheseinasüsteemiga",
      "ru": "Телескопический ящик — с системой перегородок"
    },
    "description": {
      "en": "With partition system. FEFCO 0325 format suited for multi-unit, bottles.",
      "et": "Vaheseinasüsteemiga. FEFCO 0325 vorm, mis sobib: mitme ühikuga, pudelid.",
      "ru": "С системой перегородок. Формат FEFCO 0325 подходит для: несколько единиц, бутылки."
    },
    "useCases": {
      "en": [
        "multi-unit",
        "bottles",
        "glass"
      ],
      "et": [
        "mitme ühikuga",
        "pudelid",
        "klaas"
      ],
      "ru": [
        "несколько единиц",
        "бутылки",
        "стекло"
      ]
    }
  },
  {
    "code": "0330",
    "series": "03",
    "name": {
      "en": "Telescope tray — full depth",
      "et": "Teleskoop-alus — täissügavus",
      "ru": "Телескопический поддон — полная глубина"
    },
    "description": {
      "en": "Full depth. FEFCO 0330 format suited for bulk goods, industrial.",
      "et": "Täissügavus. FEFCO 0330 vorm, mis sobib: laokaubad, tööstuslik.",
      "ru": "Полная глубина. Формат FEFCO 0330 подходит для: навалочные товары, промышленное применение."
    },
    "useCases": {
      "en": [
        "bulk goods",
        "industrial"
      ],
      "et": [
        "laokaubad",
        "tööstuslik"
      ],
      "ru": [
        "навалочные товары",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0331",
    "series": "03",
    "name": {
      "en": "Telescope tray — half depth",
      "et": "Teleskoop-alus — poole sügavusega",
      "ru": "Телескопический поддон — половинная глубина"
    },
    "description": {
      "en": "Half depth. FEFCO 0331 format suited for display, retail.",
      "et": "Poole sügavusega. FEFCO 0331 vorm, mis sobib: ekspositsioon, jaemüük.",
      "ru": "Половинная глубина. Формат FEFCO 0331 подходит для: витринная выкладка, розница."
    },
    "useCases": {
      "en": [
        "display",
        "retail",
        "food"
      ],
      "et": [
        "ekspositsioon",
        "jaemüük",
        "toiduained"
      ],
      "ru": [
        "витринная выкладка",
        "розница",
        "продукты питания"
      ]
    }
  },
  {
    "code": "0350",
    "series": "03",
    "name": {
      "en": "Telescope box — with locking system",
      "et": "Teleskoop-kast — lukustussüsteemiga",
      "ru": "Телескопический ящик — с системой блокировки"
    },
    "description": {
      "en": "With locking system. FEFCO 0350 format suited for secure shipping, high-value goods.",
      "et": "Lukustussüsteemiga. FEFCO 0350 vorm, mis sobib: turvaline saatmine, kõrge väärtusega kaubad.",
      "ru": "С системой блокировки. Формат FEFCO 0350 подходит для: безопасная отправка, ценные товары."
    },
    "useCases": {
      "en": [
        "secure shipping",
        "high-value goods"
      ],
      "et": [
        "turvaline saatmine",
        "kõrge väärtusega kaubad"
      ],
      "ru": [
        "безопасная отправка",
        "ценные товары"
      ]
    }
  },
  {
    "code": "0351",
    "series": "03",
    "name": {
      "en": "Telescope box — with top handle",
      "et": "Teleskoop-kast — ülemise käepidemega",
      "ru": "Телескопический ящик — с верхней ручкой"
    },
    "description": {
      "en": "With top handle. FEFCO 0351 format suited for consumer goods, retail.",
      "et": "Ülemise käepidemega. FEFCO 0351 vorm, mis sobib: tarbekaubad, jaemüük.",
      "ru": "С верхней ручкой. Формат FEFCO 0351 подходит для: товары народного потребления, розница."
    },
    "useCases": {
      "en": [
        "consumer goods",
        "retail"
      ],
      "et": [
        "tarbekaubad",
        "jaemüük"
      ],
      "ru": [
        "товары народного потребления",
        "розница"
      ]
    }
  },
  {
    "code": "0352",
    "series": "03",
    "name": {
      "en": "Telescope box — with base reinforcement",
      "et": "Teleskoop-kast — põhja tugevdusega",
      "ru": "Телескопический ящик — с усилением основания"
    },
    "description": {
      "en": "With base reinforcement. FEFCO 0352 format suited for heavy products, industrial.",
      "et": "Põhja tugevdusega. FEFCO 0352 vorm, mis sobib: rasked tooted, tööstuslik.",
      "ru": "С усилением основания. Формат FEFCO 0352 подходит для: тяжёлые изделия, промышленное применение."
    },
    "useCases": {
      "en": [
        "heavy products",
        "industrial"
      ],
      "et": [
        "rasked tooted",
        "tööstuslik"
      ],
      "ru": [
        "тяжёлые изделия",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0401",
    "series": "04",
    "name": {
      "en": "Folder — with side walls",
      "et": "Kaust — külgseintega",
      "ru": "Папка — с боковыми стенками"
    },
    "description": {
      "en": "With side walls. FEFCO 0401 format suited for flat goods, books.",
      "et": "Külgseintega. FEFCO 0401 vorm, mis sobib: lamed kaubad, raamatud.",
      "ru": "С боковыми стенками. Формат FEFCO 0401 подходит для: плоские товары, книги."
    },
    "useCases": {
      "en": [
        "flat goods",
        "books",
        "prints"
      ],
      "et": [
        "lamed kaubad",
        "raamatud",
        "trükised"
      ],
      "ru": [
        "плоские товары",
        "книги",
        "печатная продукция"
      ]
    }
  },
  {
    "code": "0402",
    "series": "04",
    "name": {
      "en": "Folder — with corner locks",
      "et": "Kaust — nurga lukustusega",
      "ru": "Папка — с угловыми замками"
    },
    "description": {
      "en": "With corner locks. FEFCO 0402 format suited for retail, no-glue assembly.",
      "et": "Nurga lukustusega. FEFCO 0402 vorm, mis sobib: jaemüük, liimivaba kokkupanek.",
      "ru": "С угловыми замками. Формат FEFCO 0402 подходит для: розница, сборка без клея."
    },
    "useCases": {
      "en": [
        "retail",
        "no-glue assembly"
      ],
      "et": [
        "jaemüük",
        "liimivaba kokkupanek"
      ],
      "ru": [
        "розница",
        "сборка без клея"
      ]
    }
  },
  {
    "code": "0403",
    "series": "04",
    "name": {
      "en": "Folder — deep tray",
      "et": "Kaust — sügav alus",
      "ru": "Папка — глубокий поддон"
    },
    "description": {
      "en": "Deep tray. FEFCO 0403 format suited for food, fresh produce.",
      "et": "Sügav alus. FEFCO 0403 vorm, mis sobib: toiduained, värsked tooted.",
      "ru": "Глубокий поддон. Формат FEFCO 0403 подходит для: продукты питания, свежая продукция."
    },
    "useCases": {
      "en": [
        "food",
        "fresh produce",
        "industrial"
      ],
      "et": [
        "toiduained",
        "värsked tooted",
        "tööstuslik"
      ],
      "ru": [
        "продукты питания",
        "свежая продукция",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0404",
    "series": "04",
    "name": {
      "en": "Folder — with cover flap",
      "et": "Kaust — kattelapiga",
      "ru": "Папка — с откидным клапаном"
    },
    "description": {
      "en": "With cover flap. FEFCO 0404 format suited for archive, documents.",
      "et": "Kattelapiga. FEFCO 0404 vorm, mis sobib: arhiiv, dokumendid.",
      "ru": "С откидным клапаном. Формат FEFCO 0404 подходит для: архивное хранение, документы."
    },
    "useCases": {
      "en": [
        "archive",
        "documents",
        "retail"
      ],
      "et": [
        "arhiiv",
        "dokumendid",
        "jaemüük"
      ],
      "ru": [
        "архивное хранение",
        "документы",
        "розница"
      ]
    }
  },
  {
    "code": "0405",
    "series": "04",
    "name": {
      "en": "Folder — with inner partition",
      "et": "Kaust — sisevaheseinaga",
      "ru": "Папка — с внутренней перегородкой"
    },
    "description": {
      "en": "With inner partition. FEFCO 0405 format suited for multi-product, bottles.",
      "et": "Sisevaheseinaga. FEFCO 0405 vorm, mis sobib: mitme tootega, pudelid.",
      "ru": "С внутренней перегородкой. Формат FEFCO 0405 подходит для: несколько товаров, бутылки."
    },
    "useCases": {
      "en": [
        "multi-product",
        "bottles"
      ],
      "et": [
        "mitme tootega",
        "pudelid"
      ],
      "ru": [
        "несколько товаров",
        "бутылки"
      ]
    }
  },
  {
    "code": "0409",
    "series": "04",
    "name": {
      "en": "Folder — with reinforced base",
      "et": "Kaust — tugevdatud põhjaga",
      "ru": "Папка — с усиленным основанием"
    },
    "description": {
      "en": "With reinforced base. FEFCO 0409 format suited for heavy goods, industrial.",
      "et": "Tugevdatud põhjaga. FEFCO 0409 vorm, mis sobib: rasked kaubad, tööstuslik.",
      "ru": "С усиленным основанием. Формат FEFCO 0409 подходит для: тяжёлые товары, промышленное применение."
    },
    "useCases": {
      "en": [
        "heavy goods",
        "industrial"
      ],
      "et": [
        "rasked kaubad",
        "tööstuslik"
      ],
      "ru": [
        "тяжёлые товары",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0410",
    "series": "04",
    "name": {
      "en": "Folder — with display front",
      "et": "Kaust — näidiku esipaneelega",
      "ru": "Папка — с витринной передней панелью"
    },
    "description": {
      "en": "With display front. FEFCO 0410 format suited for retail display, POS.",
      "et": "Näidiku esipaneelega. FEFCO 0410 vorm, mis sobib: jaekaupluse ekspositsioon, müügikoht.",
      "ru": "С витринной передней панелью. Формат FEFCO 0410 подходит для: розничная витрина, точка продаж."
    },
    "useCases": {
      "en": [
        "retail display",
        "POS"
      ],
      "et": [
        "jaekaupluse ekspositsioon",
        "müügikoht"
      ],
      "ru": [
        "розничная витрина",
        "точка продаж"
      ]
    }
  },
  {
    "code": "0411",
    "series": "04",
    "name": {
      "en": "Folder — with handle",
      "et": "Kaust — käepidemega",
      "ru": "Папка — с ручкой"
    },
    "description": {
      "en": "With handle. FEFCO 0411 format suited for consumer goods, gifts.",
      "et": "Käepidemega. FEFCO 0411 vorm, mis sobib: tarbekaubad, kingitused.",
      "ru": "Папка — с ручкой"
    },
    "useCases": {
      "en": [
        "consumer goods",
        "gifts",
        "retail"
      ],
      "et": [
        "tarbekaubad",
        "kingitused",
        "jaemüük"
      ],
      "ru": [
        "товары народного потребления",
        "подарки",
        "розница"
      ]
    }
  },
  {
    "code": "0412",
    "series": "04",
    "name": {
      "en": "Folder — with lid",
      "et": "Kaust — kaanega",
      "ru": "Папка — с крышкой"
    },
    "description": {
      "en": "Folder — with lid",
      "et": "Kaust — kaanega",
      "ru": "С крышкой. Формат FEFCO 0412 подходит для: продукты питания, подарки."
    },
    "useCases": {
      "en": [
        "food",
        "gifts",
        "presentation"
      ],
      "et": [
        "toiduained",
        "kingitused",
        "esitlus"
      ],
      "ru": [
        "продукты питания",
        "подарки",
        "презентация"
      ]
    }
  },
  {
    "code": "0413",
    "series": "04",
    "name": {
      "en": "Folder — with auto-lock bottom",
      "et": "Kaust — automaatlukustusega põhjaga",
      "ru": "Папка — с автоматически фиксируемым дном"
    },
    "description": {
      "en": "With auto-lock bottom. FEFCO 0413 format suited for fast assembly, retail.",
      "et": "Automaatlukustusega põhjaga. FEFCO 0413 vorm, mis sobib: kiire kokkupanek, jaemüük.",
      "ru": "С автоматически фиксируемым дном. Формат FEFCO 0413 подходит для: быстрая сборка, розница."
    },
    "useCases": {
      "en": [
        "fast assembly",
        "retail",
        "e-commerce"
      ],
      "et": [
        "kiire kokkupanek",
        "jaemüük",
        "e-kaubandus"
      ],
      "ru": [
        "быстрая сборка",
        "розница",
        "электронная коммерция"
      ]
    }
  },
  {
    "code": "0415",
    "series": "04",
    "name": {
      "en": "Folder — shoulder box",
      "et": "Kaust — õlakast",
      "ru": "Папка — коробка с буртиком"
    },
    "description": {
      "en": "Shoulder box. FEFCO 0415 format suited for premium packaging, gifts.",
      "et": "Kaust — õlakast",
      "ru": "Коробка с буртиком. Формат FEFCO 0415 подходит для: премиальная упаковка, подарки."
    },
    "useCases": {
      "en": [
        "premium packaging",
        "gifts",
        "cosmetics"
      ],
      "et": [
        "premium-pakend",
        "kingitused",
        "kosmeetika"
      ],
      "ru": [
        "премиальная упаковка",
        "подарки",
        "косметика"
      ]
    }
  },
  {
    "code": "0416",
    "series": "04",
    "name": {
      "en": "Folder — with window",
      "et": "Kaust — aknaga",
      "ru": "Папка — с окном"
    },
    "description": {
      "en": "With window. FEFCO 0416 format suited for food display, retail.",
      "et": "Kaust — aknaga",
      "ru": "Папка — с окном"
    },
    "useCases": {
      "en": [
        "food display",
        "retail",
        "bakery"
      ],
      "et": [
        "toidu ekspositsioon",
        "jaemüük",
        "pagariäri"
      ],
      "ru": [
        "витринная выкладка продуктов",
        "розница",
        "пекарня"
      ]
    }
  },
  {
    "code": "0421",
    "series": "04",
    "name": {
      "en": "Die-cut folder",
      "et": "Stantsitud kaust",
      "ru": "Высечная папка"
    },
    "description": {
      "en": "Precision die-cut design for sleek retail-ready presentation. No tape or glue required for assembly.",
      "et": "Täpne stantsitud disain sujuvaks jaemüügivalmiseks esitluseks. Kokkupanekuks pole vaja teipi ega liimi.",
      "ru": "Точный высечной дизайн для элегантной розничной презентации. Для сборки не требуются скотч или клей."
    },
    "useCases": {
      "en": [
        "retail packaging",
        "gifts",
        "cosmetics",
        "electronics"
      ],
      "et": [
        "jaemüügipakend",
        "kingitused",
        "kosmeetika",
        "elektroonika"
      ],
      "ru": [
        "розничная упаковка",
        "подарки",
        "косметика",
        "электроника"
      ]
    }
  },
  {
    "code": "0422",
    "series": "04",
    "name": {
      "en": "Folder — crash lock bottom",
      "et": "Kaust — kiirlukkuv põhi",
      "ru": "Папка — быстрозакрывающееся дно"
    },
    "description": {
      "en": "Crash lock bottom. FEFCO 0422 format suited for fast packing, e-commerce.",
      "et": "Kiirlukkuv põhi. FEFCO 0422 vorm, mis sobib: kiire pakkimine, e-kaubandus.",
      "ru": "Быстрозакрывающееся дно. Формат FEFCO 0422 подходит для: быстрая упаковка, электронная коммерция."
    },
    "useCases": {
      "en": [
        "fast packing",
        "e-commerce",
        "retail"
      ],
      "et": [
        "kiire pakkimine",
        "e-kaubandus",
        "jaemüük"
      ],
      "ru": [
        "быстрая упаковка",
        "электронная коммерция",
        "розница"
      ]
    }
  },
  {
    "code": "0423",
    "series": "04",
    "name": {
      "en": "Folder — with inner sleeve",
      "et": "Kaust — sisehülsiga",
      "ru": "Папка — с внутренней гильзой"
    },
    "description": {
      "en": "With inner sleeve. FEFCO 0423 format suited for premium products, electronics.",
      "et": "Sisehülsiga. FEFCO 0423 vorm, mis sobib: premium-tooted, elektroonika.",
      "ru": "С внутренней гильзой. Формат FEFCO 0423 подходит для: премиальные товары, электроника."
    },
    "useCases": {
      "en": [
        "premium products",
        "electronics"
      ],
      "et": [
        "premium-tooted",
        "elektroonika"
      ],
      "ru": [
        "премиальные товары",
        "электроника"
      ]
    }
  },
  {
    "code": "0424",
    "series": "04",
    "name": {
      "en": "Folder — book style",
      "et": "Kaust — raamatustiil",
      "ru": "Папка — в стиле книги"
    },
    "description": {
      "en": "Book style. FEFCO 0424 format suited for books, prints.",
      "et": "Raamatustiil. FEFCO 0424 vorm, mis sobib: raamatud, trükised.",
      "ru": "В стиле книги. Формат FEFCO 0424 подходит для: книги, печатная продукция."
    },
    "useCases": {
      "en": [
        "books",
        "prints",
        "documents",
        "gifts"
      ],
      "et": [
        "raamatud",
        "trükised",
        "dokumendid",
        "kingitused"
      ],
      "ru": [
        "книги",
        "печатная продукция",
        "документы",
        "подарки"
      ]
    }
  },
  {
    "code": "0425",
    "series": "04",
    "name": {
      "en": "Folder — with tuck flap",
      "et": "Kaust — sisestuslapiga",
      "ru": "Папка — с вкладным клапаном"
    },
    "description": {
      "en": "With tuck flap. FEFCO 0425 format suited for retail, food.",
      "et": "Sisestuslapiga. FEFCO 0425 vorm, mis sobib: jaemüük, toiduained.",
      "ru": "С вкладным клапаном. Формат FEFCO 0425 подходит для: розница, продукты питания."
    },
    "useCases": {
      "en": [
        "retail",
        "food",
        "consumer goods"
      ],
      "et": [
        "jaemüük",
        "toiduained",
        "tarbekaubad"
      ],
      "ru": [
        "розница",
        "продукты питания",
        "товары народного потребления"
      ]
    }
  },
  {
    "code": "0426",
    "series": "04",
    "name": {
      "en": "Folder — with double base",
      "et": "Kaust — topeltpõhjaga",
      "ru": "Папка — с двойным дном"
    },
    "description": {
      "en": "With double base. FEFCO 0426 format suited for heavy goods, industrial.",
      "et": "Topeltpõhjaga. FEFCO 0426 vorm, mis sobib: rasked kaubad, tööstuslik.",
      "ru": "С двойным дном. Формат FEFCO 0426 подходит для: тяжёлые товары, промышленное применение."
    },
    "useCases": {
      "en": [
        "heavy goods",
        "industrial"
      ],
      "et": [
        "rasked kaubad",
        "tööstuslik"
      ],
      "ru": [
        "тяжёлые товары",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0427",
    "series": "04",
    "name": {
      "en": "Folder-type box",
      "et": "Kaustatüüpi kast",
      "ru": "Коробка папочного типа"
    },
    "description": {
      "en": "A self-locking box that requires no tape for assembly. Perfect for premium presentation and fast packing lines.",
      "et": "Ise lukustuv karp, mis ei vaja kokkupanekuks teipi. Sobib ideaalselt premium-esitluseks ja kiiretele pakkimisliinidele.",
      "ru": "Самозакрывающийся короб, не требующий скотча для сборки. Идеален для премиальной презентации и быстрых упаковочных линий."
    },
    "useCases": {
      "en": [
        "subscription boxes",
        "product presentation",
        "high-end shipping",
        "retail"
      ],
      "et": [
        "tellimuskarbid",
        "toote esitlus",
        "premium-saatmine",
        "jaemüük"
      ],
      "ru": [
        "подписочные коробки",
        "презентация продукта",
        "премиальная доставка",
        "розница"
      ]
    }
  },
  {
    "code": "0428",
    "series": "04",
    "name": {
      "en": "Folder — with integrated handle",
      "et": "Kaust — integreeritud käepidemega",
      "ru": "Папка — со встроенной ручкой"
    },
    "description": {
      "en": "With integrated handle. FEFCO 0428 format suited for consumer goods, retail.",
      "et": "Integreeritud käepidemega. FEFCO 0428 vorm, mis sobib: tarbekaubad, jaemüük.",
      "ru": "Со встроенной ручкой. Формат FEFCO 0428 подходит для: товары народного потребления, розница."
    },
    "useCases": {
      "en": [
        "consumer goods",
        "retail",
        "takeaway"
      ],
      "et": [
        "tarbekaubad",
        "jaemüük",
        "kaasaost"
      ],
      "ru": [
        "товары народного потребления",
        "розница",
        "еда навынос"
      ]
    }
  },
  {
    "code": "0429",
    "series": "04",
    "name": {
      "en": "Folder — with locking top",
      "et": "Kaust — lukukatusega",
      "ru": "Папка — с фиксирующейся крышкой"
    },
    "description": {
      "en": "With locking top. FEFCO 0429 format suited for retail, food.",
      "et": "Lukukatusega. FEFCO 0429 vorm, mis sobib: jaemüük, toiduained.",
      "ru": "С фиксирующейся крышкой. Формат FEFCO 0429 подходит для: розница, продукты питания."
    },
    "useCases": {
      "en": [
        "retail",
        "food",
        "consumer products"
      ],
      "et": [
        "jaemüük",
        "toiduained",
        "tarbetooted"
      ],
      "ru": [
        "розница",
        "продукты питания",
        "потребительские товары"
      ]
    }
  },
  {
    "code": "0430",
    "series": "04",
    "name": {
      "en": "Folder — with partition and lid",
      "et": "Kaust — vaheseinaga ja kaanega",
      "ru": "Папка — с перегородкой и крышкой"
    },
    "description": {
      "en": "With partition and lid. FEFCO 0430 format suited for bottles, glass.",
      "et": "Vaheseinaga ja kaanega. FEFCO 0430 vorm, mis sobib: pudelid, klaas.",
      "ru": "С перегородкой и крышкой. Формат FEFCO 0430 подходит для: бутылки, стекло."
    },
    "useCases": {
      "en": [
        "bottles",
        "glass",
        "multi-unit gifts"
      ],
      "et": [
        "pudelid",
        "klaas",
        "mitme ühikuga kingitused"
      ],
      "ru": [
        "бутылки",
        "стекло",
        "подарочные наборы"
      ]
    }
  },
  {
    "code": "0431",
    "series": "04",
    "name": {
      "en": "Folder — with display window and lid",
      "et": "Kaust — näidikuakna ja kaanega",
      "ru": "Папка — с витринным окном и крышкой"
    },
    "description": {
      "en": "With display window and lid. FEFCO 0431 format suited for retail display, food.",
      "et": "Näidikuakna ja kaanega. FEFCO 0431 vorm, mis sobib: jaekaupluse ekspositsioon, toiduained.",
      "ru": "С витринным окном и крышкой. Формат FEFCO 0431 подходит для: розничная витрина, продукты питания."
    },
    "useCases": {
      "en": [
        "retail display",
        "food",
        "cosmetics"
      ],
      "et": [
        "jaekaupluse ekspositsioon",
        "toiduained",
        "kosmeetika"
      ],
      "ru": [
        "розничная витрина",
        "продукты питания",
        "косметика"
      ]
    }
  },
  {
    "code": "0432",
    "series": "04",
    "name": {
      "en": "Folder — with reinforced corners",
      "et": "Kaust — tugevdatud nurkadega",
      "ru": "Папка — с усиленными углами"
    },
    "description": {
      "en": "With reinforced corners. FEFCO 0432 format suited for heavy retail, export.",
      "et": "Tugevdatud nurkadega. FEFCO 0432 vorm, mis sobib: raske jaekaubandus, eksport.",
      "ru": "С усиленными углами. Формат FEFCO 0432 подходит для: тяжёлая розница, экспорт."
    },
    "useCases": {
      "en": [
        "heavy retail",
        "export"
      ],
      "et": [
        "raske jaekaubandus",
        "eksport"
      ],
      "ru": [
        "тяжёлая розница",
        "экспорт"
      ]
    }
  },
  {
    "code": "0433",
    "series": "04",
    "name": {
      "en": "Folder — with drawer",
      "et": "Kaust — sahtliga",
      "ru": "Папка — с выдвижным ящиком"
    },
    "description": {
      "en": "With drawer. FEFCO 0433 format suited for premium gifts, cosmetics.",
      "et": "Kaust — sahtliga",
      "ru": "С выдвижным ящиком. Формат FEFCO 0433 подходит для: премиальные подарки, косметика."
    },
    "useCases": {
      "en": [
        "premium gifts",
        "cosmetics",
        "electronics"
      ],
      "et": [
        "premium-kingitused",
        "kosmeetika",
        "elektroonika"
      ],
      "ru": [
        "премиальные подарки",
        "косметика",
        "электроника"
      ]
    }
  },
  {
    "code": "0434",
    "series": "04",
    "name": {
      "en": "Folder — with magnetic closure",
      "et": "Kaust — magnetpinnasega",
      "ru": "Папка — с магнитной застёжкой"
    },
    "description": {
      "en": "With magnetic closure. FEFCO 0434 format suited for luxury packaging, premium gifts.",
      "et": "Magnetpinnasega. FEFCO 0434 vorm, mis sobib: luksuspakend, premium-kingitused.",
      "ru": "С магнитной застёжкой. Формат FEFCO 0434 подходит для: люксовая упаковка, премиальные подарки."
    },
    "useCases": {
      "en": [
        "luxury packaging",
        "premium gifts"
      ],
      "et": [
        "luksuspakend",
        "premium-kingitused"
      ],
      "ru": [
        "люксовая упаковка",
        "премиальные подарки"
      ]
    }
  },
  {
    "code": "0435",
    "series": "04",
    "name": {
      "en": "Folder — hexagonal",
      "et": "Kaust — kuusnurkne",
      "ru": "Папка — шестиугольная"
    },
    "description": {
      "en": "Hexagonal. FEFCO 0435 format suited for specialty retail, gifts.",
      "et": "Kuusnurkne. FEFCO 0435 vorm, mis sobib: spetsialiseeritud jaemüük, kingitused.",
      "ru": "Шестиугольная. Формат FEFCO 0435 подходит для: специализированная розница, подарки."
    },
    "useCases": {
      "en": [
        "specialty retail",
        "gifts",
        "food"
      ],
      "et": [
        "spetsialiseeritud jaemüük",
        "kingitused",
        "toiduained"
      ],
      "ru": [
        "специализированная розница",
        "подарки",
        "продукты питания"
      ]
    }
  },
  {
    "code": "0436",
    "series": "04",
    "name": {
      "en": "Folder — octagonal",
      "et": "Kaust — kaheksanurkne",
      "ru": "Папка — восьмиугольная"
    },
    "description": {
      "en": "Octagonal. FEFCO 0436 format suited for specialty retail, gifts.",
      "et": "Kaheksanurkne. FEFCO 0436 vorm, mis sobib: spetsialiseeritud jaemüük, kingitused.",
      "ru": "Восьмиугольная. Формат FEFCO 0436 подходит для: специализированная розница, подарки."
    },
    "useCases": {
      "en": [
        "specialty retail",
        "gifts"
      ],
      "et": [
        "spetsialiseeritud jaemüük",
        "kingitused"
      ],
      "ru": [
        "специализированная розница",
        "подарки"
      ]
    }
  },
  {
    "code": "0437",
    "series": "04",
    "name": {
      "en": "Folder — with side handle",
      "et": "Kaust — külgkäepidemega",
      "ru": "Папка — с боковой ручкой"
    },
    "description": {
      "en": "With side handle. FEFCO 0437 format suited for consumer goods, retail.",
      "et": "Külgkäepidemega. FEFCO 0437 vorm, mis sobib: tarbekaubad, jaemüük.",
      "ru": "С боковой ручкой. Формат FEFCO 0437 подходит для: товары народного потребления, розница."
    },
    "useCases": {
      "en": [
        "consumer goods",
        "retail",
        "food"
      ],
      "et": [
        "tarbekaubad",
        "jaemüük",
        "toiduained"
      ],
      "ru": [
        "товары народного потребления",
        "розница",
        "продукты питания"
      ]
    }
  },
  {
    "code": "0440",
    "series": "04",
    "name": {
      "en": "Folder — cross-partition tray",
      "et": "Kaust — ristvaheseinaga alus",
      "ru": "Папка — поднос с крестообразной перегородкой"
    },
    "description": {
      "en": "Cross-partition tray. FEFCO 0440 format suited for bottles, eggs.",
      "et": "Ristvaheseinaga alus. FEFCO 0440 vorm, mis sobib: pudelid, munad.",
      "ru": "Поднос с крестообразной перегородкой. Формат FEFCO 0440 подходит для: бутылки, яйца."
    },
    "useCases": {
      "en": [
        "bottles",
        "eggs",
        "fragile goods"
      ],
      "et": [
        "pudelid",
        "munad",
        "habras kaup"
      ],
      "ru": [
        "бутылки",
        "яйца",
        "хрупкие товары"
      ]
    }
  },
  {
    "code": "0441",
    "series": "04",
    "name": {
      "en": "Folder — with inner cell dividers",
      "et": "Kaust — sisekambritega jagajatega",
      "ru": "Папка — с внутренними ячеистыми разделителями"
    },
    "description": {
      "en": "With inner cell dividers. FEFCO 0441 format suited for glass, bottles.",
      "et": "Sisekambritega jagajatega. FEFCO 0441 vorm, mis sobib: klaas, pudelid.",
      "ru": "С внутренними ячеистыми разделителями. Формат FEFCO 0441 подходит для: стекло, бутылки."
    },
    "useCases": {
      "en": [
        "glass",
        "bottles",
        "ceramics"
      ],
      "et": [
        "klaas",
        "pudelid",
        "keraamika"
      ],
      "ru": [
        "стекло",
        "бутылки",
        "керамика"
      ]
    }
  },
  {
    "code": "0442",
    "series": "04",
    "name": {
      "en": "Folder — with locking side panels",
      "et": "Kaust — lukustuvate külgpaneelidega",
      "ru": "Папка — с фиксирующимися боковыми панелями"
    },
    "description": {
      "en": "With locking side panels. FEFCO 0442 format suited for retail, sturdy tray.",
      "et": "Lukustuvate külgpaneelidega. FEFCO 0442 vorm, mis sobib: jaemüük, tugev alus.",
      "ru": "С фиксирующимися боковыми панелями. Формат FEFCO 0442 подходит для: розница, прочный лоток."
    },
    "useCases": {
      "en": [
        "retail",
        "sturdy tray"
      ],
      "et": [
        "jaemüük",
        "tugev alus"
      ],
      "ru": [
        "розница",
        "прочный лоток"
      ]
    }
  },
  {
    "code": "0443",
    "series": "04",
    "name": {
      "en": "Folder — with header card slot",
      "et": "Kaust — päisekaardi pesaga",
      "ru": "Папка — с прорезью для заголовочной карты"
    },
    "description": {
      "en": "With header card slot. FEFCO 0443 format suited for retail display, hanging packaging.",
      "et": "Päisekaardi pesaga. FEFCO 0443 vorm, mis sobib: jaekaupluse ekspositsioon, rippuv pakend.",
      "ru": "С прорезью для заголовочной карты. Формат FEFCO 0443 подходит для: розничная витрина, подвесная упаковка."
    },
    "useCases": {
      "en": [
        "retail display",
        "hanging packaging"
      ],
      "et": [
        "jaekaupluse ekspositsioon",
        "rippuv pakend"
      ],
      "ru": [
        "розничная витрина",
        "подвесная упаковка"
      ]
    }
  },
  {
    "code": "0444",
    "series": "04",
    "name": {
      "en": "Folder — with euro slot",
      "et": "Kaust — euro pesaga",
      "ru": "Папка — с евро-отверстием"
    },
    "description": {
      "en": "With euro slot. FEFCO 0444 format suited for retail hang packaging, hardware.",
      "et": "Euro pesaga. FEFCO 0444 vorm, mis sobib: jaemüügi rippuv pakend, riistvara.",
      "ru": "С евро-отверстием. Формат FEFCO 0444 подходит для: подвесная розничная упаковка, метизы и фурнитура."
    },
    "useCases": {
      "en": [
        "retail hang packaging",
        "hardware",
        "accessories"
      ],
      "et": [
        "jaemüügi rippuv pakend",
        "riistvara",
        "tarvikud"
      ],
      "ru": [
        "подвесная розничная упаковка",
        "метизы и фурнитура",
        "аксессуары"
      ]
    }
  },
  {
    "code": "0445",
    "series": "04",
    "name": {
      "en": "Folder — with tear strip",
      "et": "Kaust — rebimisribaga",
      "ru": "Папка — с отрывной полосой"
    },
    "description": {
      "en": "With tear strip. FEFCO 0445 format suited for e-commerce, easy-open packaging.",
      "et": "Rebimisribaga. FEFCO 0445 vorm, mis sobib: e-kaubandus, kergesti avatav pakend.",
      "ru": "С отрывной полосой. Формат FEFCO 0445 подходит для: электронная коммерция, упаковка с лёгким открыванием."
    },
    "useCases": {
      "en": [
        "e-commerce",
        "easy-open packaging"
      ],
      "et": [
        "e-kaubandus",
        "kergesti avatav pakend"
      ],
      "ru": [
        "электронная коммерция",
        "упаковка с лёгким открыванием"
      ]
    }
  },
  {
    "code": "0446",
    "series": "04",
    "name": {
      "en": "Folder — with zipper strip",
      "et": "Kaust — tõmblukuribaga",
      "ru": "Папка — с застёжкой-молнией"
    },
    "description": {
      "en": "With zipper strip. FEFCO 0446 format suited for resealable packaging, food.",
      "et": "Tõmblukuribaga. FEFCO 0446 vorm, mis sobib: uuelti sulatav pakend, toiduained.",
      "ru": "С застёжкой-молнией. Формат FEFCO 0446 подходит для: упаковка с повторным закрытием, продукты питания."
    },
    "useCases": {
      "en": [
        "resealable packaging",
        "food",
        "snacks"
      ],
      "et": [
        "uuelti sulatav pakend",
        "toiduained",
        "suupisted"
      ],
      "ru": [
        "упаковка с повторным закрытием",
        "продукты питания",
        "снеки"
      ]
    }
  },
  {
    "code": "0447",
    "series": "04",
    "name": {
      "en": "Folder — with vent panels",
      "et": "Kaust — ventilatsiooniavadega",
      "ru": "Папка — с вентиляционными панелями"
    },
    "description": {
      "en": "With vent panels. FEFCO 0447 format suited for fresh produce, vegetables.",
      "et": "Ventilatsiooniavadega. FEFCO 0447 vorm, mis sobib: värsked tooted, köögiviljad.",
      "ru": "С вентиляционными панелями. Формат FEFCO 0447 подходит для: свежая продукция, овощи."
    },
    "useCases": {
      "en": [
        "fresh produce",
        "vegetables",
        "fruit"
      ],
      "et": [
        "värsked tooted",
        "köögiviljad",
        "puuviljad"
      ],
      "ru": [
        "свежая продукция",
        "овощи",
        "фрукты"
      ]
    }
  },
  {
    "code": "0448",
    "series": "04",
    "name": {
      "en": "Folder — with moisture barrier",
      "et": "Kaust — niiskustõkkega",
      "ru": "Папка — с влагозащитным барьером"
    },
    "description": {
      "en": "With moisture barrier. FEFCO 0448 format suited for frozen food, cold chain.",
      "et": "Niiskustõkkega. FEFCO 0448 vorm, mis sobib: külmutatud toit, külm-ahel.",
      "ru": "С влагозащитным барьером. Формат FEFCO 0448 подходит для: замороженные продукты, холодовая цепь."
    },
    "useCases": {
      "en": [
        "frozen food",
        "cold chain"
      ],
      "et": [
        "külmutatud toit",
        "külm-ahel"
      ],
      "ru": [
        "замороженные продукты",
        "холодовая цепь"
      ]
    }
  },
  {
    "code": "0449",
    "series": "04",
    "name": {
      "en": "Folder — with grease-resistant coating",
      "et": "Kaust — rasvakindla kattega",
      "ru": "Папка — с жироустойчивым покрытием"
    },
    "description": {
      "en": "With grease-resistant coating. FEFCO 0449 format suited for pizza, food delivery.",
      "et": "Rasvakindla kattega. FEFCO 0449 vorm, mis sobib: pitsa, toidu kohaletoimetamine.",
      "ru": "С жироустойчивым покрытием. Формат FEFCO 0449 подходит для: пицца, доставка еды."
    },
    "useCases": {
      "en": [
        "pizza",
        "food delivery",
        "bakery"
      ],
      "et": [
        "pitsa",
        "toidu kohaletoimetamine",
        "pagariäri"
      ],
      "ru": [
        "пицца",
        "доставка еды",
        "пекарня"
      ]
    }
  },
  {
    "code": "0450",
    "series": "04",
    "name": {
      "en": "Folder — with double lock bottom",
      "et": "Kaust — topeltluku põhjaga",
      "ru": "Папка — с двойным замком дна"
    },
    "description": {
      "en": "With double lock bottom. FEFCO 0450 format suited for heavy retail, industrial components.",
      "et": "Topeltluku põhjaga. FEFCO 0450 vorm, mis sobib: raske jaekaubandus, tööstuskomponendid.",
      "ru": "С двойным замком дна. Формат FEFCO 0450 подходит для: тяжёлая розница, промышленные компоненты."
    },
    "useCases": {
      "en": [
        "heavy retail",
        "industrial components"
      ],
      "et": [
        "raske jaekaubandus",
        "tööstuskomponendid"
      ],
      "ru": [
        "тяжёлая розница",
        "промышленные компоненты"
      ]
    }
  },
  {
    "code": "0451",
    "series": "04",
    "name": {
      "en": "Folder — with self-erecting base",
      "et": "Kaust — isekokkupandava alusega",
      "ru": "Папка — с самосборным основанием"
    },
    "description": {
      "en": "With self-erecting base. FEFCO 0451 format suited for fast assembly, e-commerce.",
      "et": "Isekokkupandava alusega. FEFCO 0451 vorm, mis sobib: kiire kokkupanek, e-kaubandus.",
      "ru": "С самосборным основанием. Формат FEFCO 0451 подходит для: быстрая сборка, электронная коммерция."
    },
    "useCases": {
      "en": [
        "fast assembly",
        "e-commerce"
      ],
      "et": [
        "kiire kokkupanek",
        "e-kaubandus"
      ],
      "ru": [
        "быстрая сборка",
        "электронная коммерция"
      ]
    }
  },
  {
    "code": "0452",
    "series": "04",
    "name": {
      "en": "Folder — with glued base",
      "et": "Kaust — liimitud põhjaga",
      "ru": "Папка — с клеевым дном"
    },
    "description": {
      "en": "With glued base. FEFCO 0452 format suited for retail, industrial.",
      "et": "Liimitud põhjaga. FEFCO 0452 vorm, mis sobib: jaemüük, tööstuslik.",
      "ru": "С клеевым дном. Формат FEFCO 0452 подходит для: розница, промышленное применение."
    },
    "useCases": {
      "en": [
        "retail",
        "industrial",
        "high volume"
      ],
      "et": [
        "jaemüük",
        "tööstuslik",
        "suur maht"
      ],
      "ru": [
        "розница",
        "промышленное применение",
        "большие объёмы"
      ]
    }
  },
  {
    "code": "0453",
    "series": "04",
    "name": {
      "en": "Folder — with integrated display stand",
      "et": "Kaust — integreeritud näidikualusega",
      "ru": "Папка — со встроенной витринной подставкой"
    },
    "description": {
      "en": "With integrated display stand. FEFCO 0453 format suited for POS display, retail.",
      "et": "Integreeritud näidikualusega. FEFCO 0453 vorm, mis sobib: müügikoha ekspositsioon, jaemüük.",
      "ru": "Со встроенной витринной подставкой. Формат FEFCO 0453 подходит для: POS-дисплей, розница."
    },
    "useCases": {
      "en": [
        "POS display",
        "retail"
      ],
      "et": [
        "müügikoha ekspositsioon",
        "jaemüük"
      ],
      "ru": [
        "POS-дисплей",
        "розница"
      ]
    }
  },
  {
    "code": "0454",
    "series": "04",
    "name": {
      "en": "Folder — with perforated opening",
      "et": "Kaust — perforeeritud avamisega",
      "ru": "Папка — с перфорированным открытием"
    },
    "description": {
      "en": "With perforated opening. FEFCO 0454 format suited for easy-open, food.",
      "et": "Perforeeritud avamisega. FEFCO 0454 vorm, mis sobib: kergesti avatav, toiduained.",
      "ru": "С перфорированным открытием. Формат FEFCO 0454 подходит для: лёгкое открывание, продукты питания."
    },
    "useCases": {
      "en": [
        "easy-open",
        "food",
        "consumer goods"
      ],
      "et": [
        "kergesti avatav",
        "toiduained",
        "tarbekaubad"
      ],
      "ru": [
        "лёгкое открывание",
        "продукты питания",
        "товары народного потребления"
      ]
    }
  },
  {
    "code": "0455",
    "series": "04",
    "name": {
      "en": "Folder — with tray and separate lid",
      "et": "Kaust — aluse ja eraldi kaanega",
      "ru": "Папка — с поддоном и отдельной крышкой"
    },
    "description": {
      "en": "With tray and separate lid. FEFCO 0455 format suited for gifts, premium products.",
      "et": "Aluse ja eraldi kaanega. FEFCO 0455 vorm, mis sobib: kingitused, premium-tooted.",
      "ru": "С поддоном и отдельной крышкой. Формат FEFCO 0455 подходит для: подарки, премиальные товары."
    },
    "useCases": {
      "en": [
        "gifts",
        "premium products"
      ],
      "et": [
        "kingitused",
        "premium-tooted"
      ],
      "ru": [
        "подарки",
        "премиальные товары"
      ]
    }
  },
  {
    "code": "0456",
    "series": "04",
    "name": {
      "en": "Folder — with inner support frame",
      "et": "Kaust — sisemise tugiraamiga",
      "ru": "Папка — с внутренней опорной рамой"
    },
    "description": {
      "en": "With inner support frame. FEFCO 0456 format suited for electronics, fragile goods.",
      "et": "Sisemise tugiraamiga. FEFCO 0456 vorm, mis sobib: elektroonika, habras kaup.",
      "ru": "С внутренней опорной рамой. Формат FEFCO 0456 подходит для: электроника, хрупкие товары."
    },
    "useCases": {
      "en": [
        "electronics",
        "fragile goods"
      ],
      "et": [
        "elektroonika",
        "habras kaup"
      ],
      "ru": [
        "электроника",
        "хрупкие товары"
      ]
    }
  },
  {
    "code": "0457",
    "series": "04",
    "name": {
      "en": "Folder — with compartments",
      "et": "Kaust — sektsioneeritud",
      "ru": "Папка — с отсеками"
    },
    "description": {
      "en": "With compartments. FEFCO 0457 format suited for multi-product kits, tools.",
      "et": "Sektsioneeritud. FEFCO 0457 vorm, mis sobib: mitme tootega komplektid, tööriistad.",
      "ru": "С отсеками. Формат FEFCO 0457 подходит для: наборы из нескольких товаров, инструменты."
    },
    "useCases": {
      "en": [
        "multi-product kits",
        "tools",
        "accessories"
      ],
      "et": [
        "mitme tootega komplektid",
        "tööriistad",
        "tarvikud"
      ],
      "ru": [
        "наборы из нескольких товаров",
        "инструменты",
        "аксессуары"
      ]
    }
  },
  {
    "code": "0458",
    "series": "04",
    "name": {
      "en": "Folder — with pallet base",
      "et": "Kaust — alusplaadiga",
      "ru": "Папка — с паллетным основанием"
    },
    "description": {
      "en": "With pallet base. FEFCO 0458 format suited for bulk industrial, pallet shipping.",
      "et": "Alusplaadiga. FEFCO 0458 vorm, mis sobib: tööstuslik laokaup, paleti saatmine.",
      "ru": "С паллетным основанием. Формат FEFCO 0458 подходит для: промышленные навалочные грузы, паллетные перевозки."
    },
    "useCases": {
      "en": [
        "bulk industrial",
        "pallet shipping"
      ],
      "et": [
        "tööstuslik laokaup",
        "paleti saatmine"
      ],
      "ru": [
        "промышленные навалочные грузы",
        "паллетные перевозки"
      ]
    }
  },
  {
    "code": "0459",
    "series": "04",
    "name": {
      "en": "Folder — with top closure strip",
      "et": "Kaust — ülemise sulgemisribaga",
      "ru": "Папка — с верхней закрывающей полосой"
    },
    "description": {
      "en": "With top closure strip. FEFCO 0459 format suited for sealed shipping, food.",
      "et": "Ülemise sulgemisribaga. FEFCO 0459 vorm, mis sobib: hermeetiline saatmine, toiduained.",
      "ru": "С верхней закрывающей полосой. Формат FEFCO 0459 подходит для: герметичная отправка, продукты питания."
    },
    "useCases": {
      "en": [
        "sealed shipping",
        "food"
      ],
      "et": [
        "hermeetiline saatmine",
        "toiduained"
      ],
      "ru": [
        "герметичная отправка",
        "продукты питания"
      ]
    }
  },
  {
    "code": "0460",
    "series": "04",
    "name": {
      "en": "Folder — with inner padding",
      "et": "Kaust — sisemise polsterdusega",
      "ru": "Папка — с внутренней набивкой"
    },
    "description": {
      "en": "With inner padding. FEFCO 0460 format suited for fragile items, electronics.",
      "et": "Sisemise polsterdusega. FEFCO 0460 vorm, mis sobib: habras tooted, elektroonika.",
      "ru": "С внутренней набивкой. Формат FEFCO 0460 подходит для: хрупкие изделия, электроника."
    },
    "useCases": {
      "en": [
        "fragile items",
        "electronics",
        "gifts"
      ],
      "et": [
        "habras tooted",
        "elektroonika",
        "kingitused"
      ],
      "ru": [
        "хрупкие изделия",
        "электроника",
        "подарки"
      ]
    }
  },
  {
    "code": "0470",
    "series": "04",
    "name": {
      "en": "Folder — with full-depth lid",
      "et": "Kaust — täissügavuse kaanega",
      "ru": "Папка — с крышкой на всю глубину"
    },
    "description": {
      "en": "With full-depth lid. FEFCO 0470 format suited for archive, documents.",
      "et": "Täissügavuse kaanega. FEFCO 0470 vorm, mis sobib: arhiiv, dokumendid.",
      "ru": "С крышкой на всю глубину. Формат FEFCO 0470 подходит для: архивное хранение, документы."
    },
    "useCases": {
      "en": [
        "archive",
        "documents",
        "retail"
      ],
      "et": [
        "arhiiv",
        "dokumendid",
        "jaemüük"
      ],
      "ru": [
        "архивное хранение",
        "документы",
        "розница"
      ]
    }
  },
  {
    "code": "0471",
    "series": "04",
    "name": {
      "en": "Folder — with partial lid",
      "et": "Kaust — osalise kaanega",
      "ru": "Папка — с частичной крышкой"
    },
    "description": {
      "en": "With partial lid. FEFCO 0471 format suited for display packaging, food.",
      "et": "Osalise kaanega. FEFCO 0471 vorm, mis sobib: ekspositsioonipakend, toiduained.",
      "ru": "С частичной крышкой. Формат FEFCO 0471 подходит для: витринная упаковка, продукты питания."
    },
    "useCases": {
      "en": [
        "display packaging",
        "food"
      ],
      "et": [
        "ekspositsioonipakend",
        "toiduained"
      ],
      "ru": [
        "витринная упаковка",
        "продукты питания"
      ]
    }
  },
  {
    "code": "0472",
    "series": "04",
    "name": {
      "en": "Folder — with folding handle",
      "et": "Kaust — kokkupandava käepidemega",
      "ru": "Папка — со складной ручкой"
    },
    "description": {
      "en": "With folding handle. FEFCO 0472 format suited for consumer goods, gifts.",
      "et": "Kokkupandava käepidemega. FEFCO 0472 vorm, mis sobib: tarbekaubad, kingitused.",
      "ru": "Со складной ручкой. Формат FEFCO 0472 подходит для: товары народного потребления, подарки."
    },
    "useCases": {
      "en": [
        "consumer goods",
        "gifts",
        "retail"
      ],
      "et": [
        "tarbekaubad",
        "kingitused",
        "jaemüük"
      ],
      "ru": [
        "товары народного потребления",
        "подарки",
        "розница"
      ]
    }
  },
  {
    "code": "0473",
    "series": "04",
    "name": {
      "en": "Folder — with roll-end closure",
      "et": "Kaust — rullsulgemisega",
      "ru": "Папка — с роликовым закрытием"
    },
    "description": {
      "en": "With roll-end closure. FEFCO 0473 format suited for postal, e-commerce.",
      "et": "Rullsulgemisega. FEFCO 0473 vorm, mis sobib: postiteenused, e-kaubandus.",
      "ru": "С роликовым закрытием. Формат FEFCO 0473 подходит для: почтовые отправления, электронная коммерция."
    },
    "useCases": {
      "en": [
        "postal",
        "e-commerce",
        "documents"
      ],
      "et": [
        "postiteenused",
        "e-kaubandus",
        "dokumendid"
      ],
      "ru": [
        "почтовые отправления",
        "электронная коммерция",
        "документы"
      ]
    }
  },
  {
    "code": "0474",
    "series": "04",
    "name": {
      "en": "Folder — with locking end flaps",
      "et": "Kaust — lukustuvate otsaklappidega",
      "ru": "Папка — с фиксирующимися торцевыми клапанами"
    },
    "description": {
      "en": "With locking end flaps. FEFCO 0474 format suited for retail, food.",
      "et": "Lukustuvate otsaklappidega. FEFCO 0474 vorm, mis sobib: jaemüük, toiduained.",
      "ru": "С фиксирующимися торцевыми клапанами. Формат FEFCO 0474 подходит для: розница, продукты питания."
    },
    "useCases": {
      "en": [
        "retail",
        "food",
        "industrial"
      ],
      "et": [
        "jaemüük",
        "toiduained",
        "tööstuslik"
      ],
      "ru": [
        "розница",
        "продукты питания",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0501",
    "series": "05",
    "name": {
      "en": "Slide box — basic",
      "et": "Libisev kast — põhivariant",
      "ru": "Выдвижная коробка — базовая"
    },
    "description": {
      "en": "Slide box — basic",
      "et": "Põhivariant. FEFCO 0501 vorm, mis sobib: tikud, tööriistad.",
      "ru": "Выдвижная коробка — базовая"
    },
    "useCases": {
      "en": [
        "matches",
        "tools",
        "hardware",
        "accessories"
      ],
      "et": [
        "tikud",
        "tööriistad",
        "riistvara",
        "tarvikud"
      ],
      "ru": [
        "спички",
        "инструменты",
        "метизы и фурнитура",
        "аксессуары"
      ]
    }
  },
  {
    "code": "0502",
    "series": "05",
    "name": {
      "en": "Slide box — with inner tray",
      "et": "Libisev kast — sisealusega",
      "ru": "Выдвижная коробка — с внутренним поддоном"
    },
    "description": {
      "en": "With inner tray. FEFCO 0502 format suited for electronics, precision parts.",
      "et": "Sisealusega. FEFCO 0502 vorm, mis sobib: elektroonika, täppisosad.",
      "ru": "С внутренним поддоном. Формат FEFCO 0502 подходит для: электроника, точные детали."
    },
    "useCases": {
      "en": [
        "electronics",
        "precision parts",
        "gifts"
      ],
      "et": [
        "elektroonika",
        "täppisosad",
        "kingitused"
      ],
      "ru": [
        "электроника",
        "точные детали",
        "подарки"
      ]
    }
  },
  {
    "code": "0503",
    "series": "05",
    "name": {
      "en": "Slide box — double sleeve",
      "et": "Libisev kast — topelthülss",
      "ru": "Выдвижная коробка — двойная гильза"
    },
    "description": {
      "en": "Double sleeve. FEFCO 0503 format suited for premium packaging, cosmetics.",
      "et": "Topelthülss. FEFCO 0503 vorm, mis sobib: premium-pakend, kosmeetika.",
      "ru": "Двойная гильза. Формат FEFCO 0503 подходит для: премиальная упаковка, косметика."
    },
    "useCases": {
      "en": [
        "premium packaging",
        "cosmetics"
      ],
      "et": [
        "premium-pakend",
        "kosmeetika"
      ],
      "ru": [
        "премиальная упаковка",
        "косметика"
      ]
    }
  },
  {
    "code": "0504",
    "series": "05",
    "name": {
      "en": "Slide box — with handle",
      "et": "Libisev kast — käepidemega",
      "ru": "Выдвижная коробка — с ручкой"
    },
    "description": {
      "en": "With handle. FEFCO 0504 format suited for consumer goods, retail.",
      "et": "Käepidemega. FEFCO 0504 vorm, mis sobib: tarbekaubad, jaemüük.",
      "ru": "Выдвижная коробка — с ручкой"
    },
    "useCases": {
      "en": [
        "consumer goods",
        "retail",
        "gifts"
      ],
      "et": [
        "tarbekaubad",
        "jaemüük",
        "kingitused"
      ],
      "ru": [
        "товары народного потребления",
        "розница",
        "подарки"
      ]
    }
  },
  {
    "code": "0505",
    "series": "05",
    "name": {
      "en": "Slide box — with partition",
      "et": "Libisev kast — vaheseinaga",
      "ru": "Выдвижная коробка — с перегородкой"
    },
    "description": {
      "en": "With partition. FEFCO 0505 format suited for multi-unit, glass.",
      "et": "Vaheseinaga. FEFCO 0505 vorm, mis sobib: mitme ühikuga, klaas.",
      "ru": "С перегородкой. Формат FEFCO 0505 подходит для: несколько единиц, стекло."
    },
    "useCases": {
      "en": [
        "multi-unit",
        "glass",
        "bottles"
      ],
      "et": [
        "mitme ühikuga",
        "klaas",
        "pudelid"
      ],
      "ru": [
        "несколько единиц",
        "стекло",
        "бутылки"
      ]
    }
  },
  {
    "code": "0507",
    "series": "05",
    "name": {
      "en": "Slide box — with locking tab",
      "et": "Libisev kast — lukustusnupuga",
      "ru": "Выдвижная коробка — с фиксирующим язычком"
    },
    "description": {
      "en": "With locking tab. FEFCO 0507 format suited for retail, secure packaging.",
      "et": "Lukustusnupuga. FEFCO 0507 vorm, mis sobib: jaemüük, turvaline pakend.",
      "ru": "С фиксирующим язычком. Формат FEFCO 0507 подходит для: розница, защищённая упаковка."
    },
    "useCases": {
      "en": [
        "retail",
        "secure packaging"
      ],
      "et": [
        "jaemüük",
        "turvaline pakend"
      ],
      "ru": [
        "розница",
        "защищённая упаковка"
      ]
    }
  },
  {
    "code": "0509",
    "series": "05",
    "name": {
      "en": "Slide box — with window",
      "et": "Libisev kast — aknaga",
      "ru": "Выдвижная коробка — с окном"
    },
    "description": {
      "en": "With window. FEFCO 0509 format suited for retail display, food.",
      "et": "Libisev kast — aknaga",
      "ru": "Выдвижная коробка — с окном"
    },
    "useCases": {
      "en": [
        "retail display",
        "food",
        "consumer goods"
      ],
      "et": [
        "jaekaupluse ekspositsioon",
        "toiduained",
        "tarbekaubad"
      ],
      "ru": [
        "розничная витрина",
        "продукты питания",
        "товары народного потребления"
      ]
    }
  },
  {
    "code": "0510",
    "series": "05",
    "name": {
      "en": "Slide box — reinforced",
      "et": "Libisev kast — tugevdatud",
      "ru": "Выдвижная коробка — усиленная"
    },
    "description": {
      "en": "Reinforced. FEFCO 0510 format suited for heavy goods, tools.",
      "et": "Tugevdatud. FEFCO 0510 vorm, mis sobib: rasked kaubad, tööriistad.",
      "ru": "Усиленная. Формат FEFCO 0510 подходит для: тяжёлые товары, инструменты."
    },
    "useCases": {
      "en": [
        "heavy goods",
        "tools",
        "hardware"
      ],
      "et": [
        "rasked kaubad",
        "tööriistad",
        "riistvara"
      ],
      "ru": [
        "тяжёлые товары",
        "инструменты",
        "метизы и фурнитура"
      ]
    }
  },
  {
    "code": "0511",
    "series": "05",
    "name": {
      "en": "Slide box — with inner cushioning",
      "et": "Libisev kast — sisemise polsterdusega",
      "ru": "Выдвижная коробка — с внутренней амортизацией"
    },
    "description": {
      "en": "With inner cushioning. FEFCO 0511 format suited for fragile electronics, jewelry.",
      "et": "Sisemise polsterdusega. FEFCO 0511 vorm, mis sobib: habras elektroonika, ehted.",
      "ru": "С внутренней амортизацией. Формат FEFCO 0511 подходит для: хрупкая электроника, ювелирные изделия."
    },
    "useCases": {
      "en": [
        "fragile electronics",
        "jewelry",
        "medical"
      ],
      "et": [
        "habras elektroonika",
        "ehted",
        "meditsiin"
      ],
      "ru": [
        "хрупкая электроника",
        "ювелирные изделия",
        "медицина"
      ]
    }
  },
  {
    "code": "0512",
    "series": "05",
    "name": {
      "en": "Slide box — with display lid",
      "et": "Libisev kast — näidikukaanega",
      "ru": "Выдвижная коробка — с витринной крышкой"
    },
    "description": {
      "en": "With display lid. FEFCO 0512 format suited for premium retail, cosmetics.",
      "et": "Näidikukaanega. FEFCO 0512 vorm, mis sobib: premium-jaemüük, kosmeetika.",
      "ru": "С витринной крышкой. Формат FEFCO 0512 подходит для: премиальная розница, косметика."
    },
    "useCases": {
      "en": [
        "premium retail",
        "cosmetics",
        "gifts"
      ],
      "et": [
        "premium-jaemüük",
        "kosmeetika",
        "kingitused"
      ],
      "ru": [
        "премиальная розница",
        "косметика",
        "подарки"
      ]
    }
  },
  {
    "code": "0601",
    "series": "06",
    "name": {
      "en": "Rigid box — basic",
      "et": "Jäik kast — põhivariant",
      "ru": "Жёсткая коробка — базовая"
    },
    "description": {
      "en": "Rigid box — basic",
      "et": "Põhivariant. FEFCO 0601 vorm, mis sobib: premium-kingitused, elektroonika.",
      "ru": "Жёсткая коробка — базовая"
    },
    "useCases": {
      "en": [
        "premium gifts",
        "electronics",
        "cosmetics"
      ],
      "et": [
        "premium-kingitused",
        "elektroonika",
        "kosmeetika"
      ],
      "ru": [
        "премиальные подарки",
        "электроника",
        "косметика"
      ]
    }
  },
  {
    "code": "0602",
    "series": "06",
    "name": {
      "en": "Rigid box — with lid",
      "et": "Jäik kast — kaanega",
      "ru": "Жёсткая коробка — с крышкой"
    },
    "description": {
      "en": "Rigid box — with lid",
      "et": "Jäik kast — kaanega",
      "ru": "С крышкой. Формат FEFCO 0602 подходит для: подарки, люксовая упаковка."
    },
    "useCases": {
      "en": [
        "gifts",
        "luxury packaging",
        "premium retail"
      ],
      "et": [
        "kingitused",
        "luksuspakend",
        "premium-jaemüük"
      ],
      "ru": [
        "подарки",
        "люксовая упаковка",
        "премиальная розница"
      ]
    }
  },
  {
    "code": "0606",
    "series": "06",
    "name": {
      "en": "Rigid box — with sleeve",
      "et": "Jäik kast — hülsiga",
      "ru": "Жёсткая коробка — с гильзой"
    },
    "description": {
      "en": "With sleeve. FEFCO 0606 format suited for premium packaging, gifts.",
      "et": "Jäik kast — hülsiga",
      "ru": "С гильзой. Формат FEFCO 0606 подходит для: премиальная упаковка, подарки."
    },
    "useCases": {
      "en": [
        "premium packaging",
        "gifts",
        "branding"
      ],
      "et": [
        "premium-pakend",
        "kingitused",
        "bränding"
      ],
      "ru": [
        "премиальная упаковка",
        "подарки",
        "брендинг"
      ]
    }
  },
  {
    "code": "0607",
    "series": "06",
    "name": {
      "en": "Rigid box — with magnetic closure",
      "et": "Jäik kast — magnetpinnasega",
      "ru": "Жёсткая коробка — с магнитной застёжкой"
    },
    "description": {
      "en": "With magnetic closure. FEFCO 0607 format suited for luxury packaging, electronics.",
      "et": "Magnetpinnasega. FEFCO 0607 vorm, mis sobib: luksuspakend, elektroonika.",
      "ru": "С магнитной застёжкой. Формат FEFCO 0607 подходит для: люксовая упаковка, электроника."
    },
    "useCases": {
      "en": [
        "luxury packaging",
        "electronics",
        "cosmetics"
      ],
      "et": [
        "luksuspakend",
        "elektroonika",
        "kosmeetika"
      ],
      "ru": [
        "люксовая упаковка",
        "электроника",
        "косметика"
      ]
    }
  },
  {
    "code": "0608",
    "series": "06",
    "name": {
      "en": "Rigid box — with ribbon closure",
      "et": "Jäik kast — lindpinnasega",
      "ru": "Жёсткая коробка — с ленточной застёжкой"
    },
    "description": {
      "en": "With ribbon closure. FEFCO 0608 format suited for luxury gifts, premium retail.",
      "et": "Lindpinnasega. FEFCO 0608 vorm, mis sobib: luksuskingitused, premium-jaemüük.",
      "ru": "С ленточной застёжкой. Формат FEFCO 0608 подходит для: люксовые подарки, премиальная розница."
    },
    "useCases": {
      "en": [
        "luxury gifts",
        "premium retail"
      ],
      "et": [
        "luksuskingitused",
        "premium-jaemüük"
      ],
      "ru": [
        "люксовые подарки",
        "премиальная розница"
      ]
    }
  },
  {
    "code": "0615",
    "series": "06",
    "name": {
      "en": "Rigid box — with pull tab",
      "et": "Jäik kast — tõmbevahelehtega",
      "ru": "Жёсткая коробка — с язычком для открывания"
    },
    "description": {
      "en": "With pull tab. FEFCO 0615 format suited for electronics, software.",
      "et": "Tõmbevahelehtega. FEFCO 0615 vorm, mis sobib: elektroonika, tarkvara.",
      "ru": "С язычком для открывания. Формат FEFCO 0615 подходит для: электроника, программное обеспечение."
    },
    "useCases": {
      "en": [
        "electronics",
        "software",
        "media"
      ],
      "et": [
        "elektroonika",
        "tarkvara",
        "meedia"
      ],
      "ru": [
        "электроника",
        "программное обеспечение",
        "медиапродукция"
      ]
    }
  },
  {
    "code": "0616",
    "series": "06",
    "name": {
      "en": "Rigid box — with drawer",
      "et": "Jäik kast — sahtliga",
      "ru": "Жёсткая коробка — с выдвижным ящиком"
    },
    "description": {
      "en": "With drawer. FEFCO 0616 format suited for premium gifts, jewelry.",
      "et": "Jäik kast — sahtliga",
      "ru": "С выдвижным ящиком. Формат FEFCO 0616 подходит для: премиальные подарки, ювелирные изделия."
    },
    "useCases": {
      "en": [
        "premium gifts",
        "jewelry",
        "accessories"
      ],
      "et": [
        "premium-kingitused",
        "ehted",
        "tarvikud"
      ],
      "ru": [
        "премиальные подарки",
        "ювелирные изделия",
        "аксессуары"
      ]
    }
  },
  {
    "code": "0620",
    "series": "06",
    "name": {
      "en": "Rigid tray — basic",
      "et": "Jäik alus — põhivariant",
      "ru": "Жёсткий поддон — базовый"
    },
    "description": {
      "en": "Rigid tray — basic",
      "et": "Põhivariant. FEFCO 0620 vorm, mis sobib: ekspositsioon, jaemüük.",
      "ru": "Жёсткий поддон — базовый"
    },
    "useCases": {
      "en": [
        "display",
        "retail",
        "food"
      ],
      "et": [
        "ekspositsioon",
        "jaemüük",
        "toiduained"
      ],
      "ru": [
        "витринная выкладка",
        "розница",
        "продукты питания"
      ]
    }
  },
  {
    "code": "0621",
    "series": "06",
    "name": {
      "en": "Rigid tray — with partition",
      "et": "Jäik alus — vaheseinaga",
      "ru": "Жёсткий поддон — с перегородкой"
    },
    "description": {
      "en": "With partition. FEFCO 0621 format suited for bottles, glass.",
      "et": "Vaheseinaga. FEFCO 0621 vorm, mis sobib: pudelid, klaas.",
      "ru": "С перегородкой. Формат FEFCO 0621 подходит для: бутылки, стекло."
    },
    "useCases": {
      "en": [
        "bottles",
        "glass",
        "multi-product"
      ],
      "et": [
        "pudelid",
        "klaas",
        "mitme tootega"
      ],
      "ru": [
        "бутылки",
        "стекло",
        "несколько товаров"
      ]
    }
  },
  {
    "code": "0701",
    "series": "07",
    "name": {
      "en": "Single-wall divider",
      "et": "Üheseinaline jagaja",
      "ru": "Однослойная перегородка"
    },
    "description": {
      "en": "Single-wall divider",
      "et": "Üheseinaline jagaja",
      "ru": "Однослойная перегородка"
    },
    "useCases": {
      "en": [
        "bottle dividers",
        "glass separators"
      ],
      "et": [
        "pudelijaoturid",
        "klaasijaoturid"
      ],
      "ru": [
        "разделители для бутылок",
        "стеклоразделители"
      ]
    }
  },
  {
    "code": "0702",
    "series": "07",
    "name": {
      "en": "Double-wall divider",
      "et": "Kaheseinaline jagaja",
      "ru": "Двухслойная перегородка"
    },
    "description": {
      "en": "Double-wall divider",
      "et": "Kaheseinaline jagaja",
      "ru": "Двухслойная перегородка"
    },
    "useCases": {
      "en": [
        "heavy goods separation",
        "industrial"
      ],
      "et": [
        "raske kauba eraldamine",
        "tööstuslik"
      ],
      "ru": [
        "разделение тяжёлых грузов",
        "промышленное применение"
      ]
    }
  },
  {
    "code": "0711",
    "series": "07",
    "name": {
      "en": "Ready-glued case",
      "et": "Eelliimitud kast",
      "ru": "Предварительно склеенный ящик"
    },
    "description": {
      "en": "Quick assembly with pre-glued bottom. Ideal for fast-paced fulfillment lines and high-volume operations.",
      "et": "Kiire kokkupanek eelliimitud põhjaga. Ideaalne kiire tempo täitmisliinidele ja suuremahulisele tootmisele.",
      "ru": "Быстрая сборка с предварительно склеенным дном. Идеален для высокоскоростных линий комплектации и крупносерийного производства."
    },
    "useCases": {
      "en": [
        "e-commerce fulfillment",
        "fast assembly lines",
        "high volume shipping"
      ],
      "et": [
        "e-kaubanduse täitmine",
        "kiired kokkupanekuliinid",
        "suuremahuline saatmine"
      ],
      "ru": [
        "комплектация e-commerce",
        "быстрые линии сборки",
        "массовые отгрузки"
      ]
    }
  },
  {
    "code": "0712",
    "series": "07",
    "name": {
      "en": "Interior pad — flat",
      "et": "Sisemise polstri — lame",
      "ru": "Внутренняя прокладка — плоская"
    },
    "description": {
      "en": "Interior pad — flat",
      "et": "Sisemise polstri — lame",
      "ru": "Внутренняя прокладка — плоская"
    },
    "useCases": {
      "en": [
        "fragile goods protection",
        "electronics"
      ],
      "et": [
        "habraste kaupade kaitse",
        "elektroonika"
      ],
      "ru": [
        "защита хрупких товаров",
        "электроника"
      ]
    }
  },
  {
    "code": "0713",
    "series": "07",
    "name": {
      "en": "Corner pad",
      "et": "Nurgapolster",
      "ru": "Угловая прокладка"
    },
    "description": {
      "en": "Corrugated corner protection pads. Prevent damage to product corners during transit.",
      "et": "Gofreeritud nurgakaitsed. Kaitsevad toote nurki transportimisel kahjustuste eest.",
      "ru": "Гофрированные угловые защитные прокладки. Предотвращают повреждение углов продукта при транспортировке."
    },
    "useCases": {
      "en": [
        "furniture",
        "appliances",
        "electronics",
        "industrial equipment corner protection"
      ],
      "et": [
        "mööbel",
        "kodutehnika",
        "elektroonika",
        "tööstusseadmete nurkade kaitse"
      ],
      "ru": [
        "мебель",
        "бытовая техника",
        "электроника",
        "защита углов промышленного оборудования"
      ]
    }
  },
  {
    "code": "0714",
    "series": "07",
    "name": {
      "en": "Interior cell — single",
      "et": "Siserakk — üksik",
      "ru": "Внутренняя ячейка — одиночная"
    },
    "description": {
      "en": "Interior cell — single",
      "et": "Siserakk — üksik",
      "ru": "Одиночная. Формат FEFCO 0714 подходит для: бутылки, стекло."
    },
    "useCases": {
      "en": [
        "bottles",
        "glass",
        "individual product cells"
      ],
      "et": [
        "pudelid",
        "klaas",
        "üksikute toodete lahtrid"
      ],
      "ru": [
        "бутылки",
        "стекло",
        "индивидуальные ячейки для товаров"
      ]
    }
  },
  {
    "code": "0715",
    "series": "07",
    "name": {
      "en": "Interior cell — double",
      "et": "Siserakk — kahekordne",
      "ru": "Внутренняя ячейка — двойная"
    },
    "description": {
      "en": "Interior cell — double",
      "et": "Kahekordne. FEFCO 0715 vorm, mis sobib: vein, pudelid.",
      "ru": "Внутренняя ячейка — двойная"
    },
    "useCases": {
      "en": [
        "wine",
        "bottles",
        "ceramics"
      ],
      "et": [
        "vein",
        "pudelid",
        "keraamika"
      ],
      "ru": [
        "вино",
        "бутылки",
        "керамика"
      ]
    }
  },
  {
    "code": "0716",
    "series": "07",
    "name": {
      "en": "Partition — cross-lock",
      "et": "Vahesein — ristlukustusega",
      "ru": "Перегородка — с перекрёстной блокировкой"
    },
    "description": {
      "en": "Cross-lock. FEFCO 0716 format suited for bottles, glass.",
      "et": "Ristlukustusega. FEFCO 0716 vorm, mis sobib: pudelid, klaas.",
      "ru": "С перекрёстной блокировкой. Формат FEFCO 0716 подходит для: бутылки, стекло."
    },
    "useCases": {
      "en": [
        "bottles",
        "glass",
        "multi-unit cells"
      ],
      "et": [
        "pudelid",
        "klaas",
        "mitme ühiku lahtrid"
      ],
      "ru": [
        "бутылки",
        "стекло",
        "ячейки для нескольких единиц"
      ]
    }
  },
  {
    "code": "0717",
    "series": "07",
    "name": {
      "en": "Partition — with base",
      "et": "Vahesein — alusega",
      "ru": "Перегородка — с основанием"
    },
    "description": {
      "en": "With base. FEFCO 0717 format suited for fragile goods, multi-unit packaging.",
      "et": "Vahesein — alusega",
      "ru": "С основанием. Формат FEFCO 0717 подходит для: хрупкие товары, упаковка нескольких единиц."
    },
    "useCases": {
      "en": [
        "fragile goods",
        "multi-unit packaging"
      ],
      "et": [
        "habras kaup",
        "mitme ühiku pakend"
      ],
      "ru": [
        "хрупкие товары",
        "упаковка нескольких единиц"
      ]
    }
  },
  {
    "code": "0718",
    "series": "07",
    "name": {
      "en": "Angle board — corner protector",
      "et": "Nurgelaud — nurgakaitsja",
      "ru": "Угловой профиль — угловая защита"
    },
    "description": {
      "en": "Corner protector. FEFCO 0718 format suited for pallet edge protection, furniture.",
      "et": "Nurgakaitsja. FEFCO 0718 vorm, mis sobib: paleti servade kaitse, mööbel.",
      "ru": "Угловая защита. Формат FEFCO 0718 подходит для: защита кромок паллет, мебель."
    },
    "useCases": {
      "en": [
        "pallet edge protection",
        "furniture",
        "large format goods"
      ],
      "et": [
        "paleti servade kaitse",
        "mööbel",
        "suurformaadilised kaubad"
      ],
      "ru": [
        "защита кромок паллет",
        "мебель",
        "крупногабаритные товары"
      ]
    }
  },
  {
    "code": "0747",
    "series": "07",
    "name": {
      "en": "Pallet pad — top sheet",
      "et": "Alusleht — pealmiseleht",
      "ru": "Паллетная прокладка — верхний лист"
    },
    "description": {
      "en": "Top sheet. FEFCO 0747 format suited for pallet top protection, stacking.",
      "et": "Pealmiseleht. FEFCO 0747 vorm, mis sobib: paleti ülapealse kaitse, virnastamine.",
      "ru": "Верхний лист. Формат FEFCO 0747 подходит для: верхняя защита паллет, штабелирование."
    },
    "useCases": {
      "en": [
        "pallet top protection",
        "stacking"
      ],
      "et": [
        "paleti ülapealse kaitse",
        "virnastamine"
      ],
      "ru": [
        "верхняя защита паллет",
        "штабелирование"
      ]
    }
  },
  {
    "code": "0748",
    "series": "07",
    "name": {
      "en": "Pallet pad — slip sheet",
      "et": "Alusleht — libisemisleht",
      "ru": "Паллетная прокладка — скользящий лист"
    },
    "description": {
      "en": "Slip sheet. FEFCO 0748 format suited for pallet slip sheet, layer separation.",
      "et": "Libisemisleht. FEFCO 0748 vorm, mis sobib: paleti libisemisleht, kihtide eraldamine.",
      "ru": "Скользящий лист. Формат FEFCO 0748 подходит для: прокладочный лист для паллет, разделение слоёв."
    },
    "useCases": {
      "en": [
        "pallet slip sheet",
        "layer separation"
      ],
      "et": [
        "paleti libisemisleht",
        "kihtide eraldamine"
      ],
      "ru": [
        "прокладочный лист для паллет",
        "разделение слоёв"
      ]
    }
  },
  {
    "code": "0751",
    "series": "07",
    "name": {
      "en": "Honeycomb pad",
      "et": "Kärgpolster",
      "ru": "Сотовая прокладка"
    },
    "description": {
      "en": "Honeycomb pad",
      "et": "Kärgpolster",
      "ru": "Сотовая прокладка"
    },
    "useCases": {
      "en": [
        "fragile goods",
        "glass",
        "precision equipment"
      ],
      "et": [
        "habras kaup",
        "klaas",
        "täppisseadmed"
      ],
      "ru": [
        "хрупкие товары",
        "стекло",
        "точное оборудование"
      ]
    }
  },
  {
    "code": "0752",
    "series": "07",
    "name": {
      "en": "Honeycomb divider",
      "et": "Kärgvahesein",
      "ru": "Сотовая перегородка"
    },
    "description": {
      "en": "Honeycomb divider",
      "et": "Kärgvahesein",
      "ru": "Сотовая перегородка"
    },
    "useCases": {
      "en": [
        "glass",
        "bottles",
        "heavy fragile goods"
      ],
      "et": [
        "klaas",
        "pudelid",
        "rasked habras kaubad"
      ],
      "ru": [
        "стекло",
        "бутылки",
        "тяжёлые хрупкие грузы"
      ]
    }
  },
  {
    "code": "0759",
    "series": "07",
    "name": {
      "en": "Corrugated angle board",
      "et": "Gofreeritud nurgelaud",
      "ru": "Гофрированный угловой профиль"
    },
    "description": {
      "en": "Corrugated angle board",
      "et": "Gofreeritud nurgelaud",
      "ru": "Гофрированный угловой профиль"
    },
    "useCases": {
      "en": [
        "pallet and edge protection",
        "furniture transport"
      ],
      "et": [
        "paleti ja servade kaitse",
        "mööbli transport"
      ],
      "ru": [
        "защита паллет и кромок",
        "перевозка мебели"
      ]
    }
  },
  {
    "code": "0761",
    "series": "07",
    "name": {
      "en": "Corrugated wrap — flat",
      "et": "Gofreeritud ümbris — lame",
      "ru": "Гофрированная обёртка — плоская"
    },
    "description": {
      "en": "Corrugated wrap — flat",
      "et": "Gofreeritud ümbris — lame",
      "ru": "Гофрированная обёртка — плоская"
    },
    "useCases": {
      "en": [
        "product wrapping",
        "surface protection"
      ],
      "et": [
        "toote mähkimine",
        "pinna kaitse"
      ],
      "ru": [
        "обёртка продукта",
        "защита поверхности"
      ]
    }
  },
  {
    "code": "0770",
    "series": "07",
    "name": {
      "en": "Tube — round",
      "et": "Toru — ümmargune",
      "ru": "Труба — круглая"
    },
    "description": {
      "en": "Tube — round",
      "et": "Ümmargune. FEFCO 0770 vorm, mis sobib: plakatid, dokumendid.",
      "ru": "Труба — круглая"
    },
    "useCases": {
      "en": [
        "posters",
        "documents",
        "textile rolls"
      ],
      "et": [
        "plakatid",
        "dokumendid",
        "tekstiilirullid"
      ],
      "ru": [
        "плакаты",
        "документы",
        "текстильные рулоны"
      ]
    }
  },
  {
    "code": "0771",
    "series": "07",
    "name": {
      "en": "Tube — square",
      "et": "Toru — ruudukujuline",
      "ru": "Труба — квадратная"
    },
    "description": {
      "en": "Tube — square",
      "et": "Ruudukujuline. FEFCO 0771 vorm, mis sobib: dokumendid, trükised.",
      "ru": "Квадратная. Формат FEFCO 0771 подходит для: документы, печатная продукция."
    },
    "useCases": {
      "en": [
        "documents",
        "prints",
        "technical drawings"
      ],
      "et": [
        "dokumendid",
        "trükised",
        "tehnilised joonised"
      ],
      "ru": [
        "документы",
        "печатная продукция",
        "технические чертежи"
      ]
    }
  },
  {
    "code": "0772",
    "series": "07",
    "name": {
      "en": "Tube — with end caps",
      "et": "Toru — otsapõhjadega",
      "ru": "Труба — с торцевыми крышками"
    },
    "description": {
      "en": "With end caps. FEFCO 0772 format suited for posters, artwork.",
      "et": "Otsapõhjadega. FEFCO 0772 vorm, mis sobib: plakatid, kunstiteosed.",
      "ru": "С торцевыми крышками. Формат FEFCO 0772 подходит для: плакаты, произведения искусства."
    },
    "useCases": {
      "en": [
        "posters",
        "artwork",
        "technical rolls"
      ],
      "et": [
        "plakatid",
        "kunstiteosed",
        "tehnilised rullid"
      ],
      "ru": [
        "плакаты",
        "произведения искусства",
        "технические рулоны"
      ]
    }
  },
  {
    "code": "0773",
    "series": "07",
    "name": {
      "en": "Tube — with locking end caps",
      "et": "Toru — lukustuvate otsapõhjadega",
      "ru": "Труба — с фиксирующимися торцевыми крышками"
    },
    "description": {
      "en": "With locking end caps. FEFCO 0773 format suited for secure document transport, artwork.",
      "et": "Lukustuvate otsapõhjadega. FEFCO 0773 vorm, mis sobib: turvaline dokumentide transport, kunstiteosed.",
      "ru": "С фиксирующимися торцевыми крышками. Формат FEFCO 0773 подходит для: безопасная перевозка документов, произведения искусства."
    },
    "useCases": {
      "en": [
        "secure document transport",
        "artwork"
      ],
      "et": [
        "turvaline dokumentide transport",
        "kunstiteosed"
      ],
      "ru": [
        "безопасная перевозка документов",
        "произведения искусства"
      ]
    }
  },
  {
    "code": "0774",
    "series": "07",
    "name": {
      "en": "Tube — reinforced",
      "et": "Toru — tugevdatud",
      "ru": "Труба — усиленная"
    },
    "description": {
      "en": "Reinforced. FEFCO 0774 format suited for heavy rolls, industrial materials.",
      "et": "Tugevdatud. FEFCO 0774 vorm, mis sobib: rasked rullid, tööstuslikud materjalid.",
      "ru": "Усиленная. Формат FEFCO 0774 подходит для: тяжёлые рулоны, промышленные материалы."
    },
    "useCases": {
      "en": [
        "heavy rolls",
        "industrial materials",
        "cables"
      ],
      "et": [
        "rasked rullid",
        "tööstuslikud materjalid",
        "kaablid"
      ],
      "ru": [
        "тяжёлые рулоны",
        "промышленные материалы",
        "кабели"
      ]
    }
  }
];

export const fefcoCatalogCodes = FEFCO_CATALOG.map((e) => e.code);

export type FefcoCatalogCode = (typeof fefcoCatalogCodes)[number];

export function isFefcoCatalogCode(code: string): code is FefcoCatalogCode {
  return fefcoCatalogCodes.includes(code);
}

export function getFefcoEntry(code: string): FefcoCatalogEntry | undefined {
  return FEFCO_CATALOG.find((e) => e.code === code);
}

export function normalizeFefcoLocale(locale: string): FefcoLocale {
  if (locale === "et" || locale === "ru" || locale === "en") return locale;
  return "en";
}

export function getFefcoLocalized(
  field: FefcoLocalized,
  locale: string,
): string {
  const loc = normalizeFefcoLocale(locale);
  return field[loc];
}

export function getFefcoUseCases(
  entry: FefcoCatalogEntry,
  locale: string,
): string[] {
  const loc = normalizeFefcoLocale(locale);
  return entry.useCases[loc];
}

export function fefcoSearchHaystack(entry: FefcoCatalogEntry): string {
  return [
    entry.code,
    entry.name.en,
    entry.name.et,
    entry.name.ru,
    entry.description.en,
    entry.description.et,
    entry.description.ru,
    ...entry.useCases.en,
    ...entry.useCases.et,
    ...entry.useCases.ru,
  ]
    .join(" ")
    .toLowerCase();
}
