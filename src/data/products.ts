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

export type ProductLocale = "en" | "et" | "ru";

export type ProductSpecs = Record<ProductLocale, string[]>;

export const PRODUCT_SPECS: Record<ProductSlug, ProductSpecs> = {
  lainepapp: {
    et: [
      "Kõikvõimalikud erinevad mõõdud erinevate tehniliste parameetritega",
      "Valikus pruun või valge väliskiht",
      "Pakume kahekihilist rullpappi laiusega 1000 ja 1600 mm",
    ],
    en: [
      "Available in a wide range of dimensions and technical parameters",
      "Brown or white outer liner options",
      "Double-wall roll corrugated board offered in 1000 mm and 1600 mm widths",
    ],
    ru: [
      "Все возможные размеры с различными техническими параметрами",
      "На выбор коричневый или белый наружный слой",
      "Поставляем двухслойный рулонный картон шириной 1000 и 1600 мм",
    ],
  },
  transpordipakend: {
    et: ["Kõige levinum pakendiliik, mida on lihtne kokku voltida ja sulgeda"],
    en: ["The most common packaging type — easy to fold and seal"],
    ru: ["Самый распространённый тип упаковки — легко складывается и закрывается"],
  },
  fleksotrukk: {
    et: [
      "Erinevad pakendite mudelid disaini ja konstruktsiooni valikuga",
      "Perforatsioon võimaldab eemaldada osa tervikpakendist",
      "Võimalik teostada 4-värvi trükki",
    ],
    en: [
      "Various packaging designs with flexible layout and construction options",
      "Perforation allows removing part of the complete package",
      "Up to 4-color flexographic printing available",
    ],
    ru: [
      "Различные модели упаковки с выбором дизайна и конструкции",
      "Перфорация позволяет отделить часть цельной упаковки",
      "Возможна 4-цветная флексопечать",
    ],
  },
  "kulmutatud-toodete-pakend": {
    et: [
      "Niiskuskindla materjali kasutamine võimaldab transportida külmutatud tooteid külmikus ja säilitada sügavkülmas",
    ],
    en: [
      "Moisture-resistant material allows transporting frozen products in cold storage and deep-freeze conditions",
    ],
    ru: [
      "Использование влагостойкого материала позволяет перевозить замороженные продукты в холодильнике и хранить в морозильной камере",
    ],
  },
  pizzakarbid: {
    et: ["Erinevate mõõtudega pizzakarbid 4-värvi fleksotrükiga"],
    en: ["Pizza boxes in various sizes with 4-color flexographic printing"],
    ru: ["Пицца-боксы разных размеров с 4-цветной флексопечатью"],
  },
  "erilise-kujuga-pakendid": {
    et: [
      "Toodame lainepapist pakendeid erinevate matriitsidega",
      "Suuremõõdulised erivormid toodame lamestantsiga",
      "Suured partiid ja väiksemad mõõdud rotatsioonstantsiga",
      "Toodet saame atraktiivsemaks muuta 4-värvi fleksotrükiga",
    ],
    en: [
      "We produce corrugated packaging using various die-cutting tools",
      "Large custom shapes manufactured with flat-bed die cutting",
      "Large runs and smaller formats with rotary die cutting",
      "Products can be enhanced with 4-color flexographic printing",
    ],
    ru: [
      "Производим гофроупаковку с использованием различных штампов",
      "Крупные нестандартные формы изготавливаем плоским штампом",
      "Крупные и мелкие партии — ротационным штампом",
      "Продукцию можно улучшить 4-цветной флексопечатью",
    ],
  },
  "suuregabariidilised-pakendid": {
    et: [
      "Lainepapist konteinerid kandejõuga kuni 200 kg",
      "Soovitatav 5–7 mm paksusega lainepapp",
      "Küljed kokku klammerdatud",
    ],
    en: [
      "Corrugated containers with load capacity up to 200 kg",
      "Recommended corrugated board thickness of 5–7 mm",
      "Sides joined with staples",
    ],
    ru: [
      "Гофроконтейнеры с грузоподъёмностью до 200 кг",
      "Рекомендуемая толщина гофрокартона 5–7 мм",
      "Боковые стенки скреплены скобами",
    ],
  },
};

export function isProductSlug(slug: string): slug is ProductSlug {
  return (productSlugs as readonly string[]).includes(slug);
}

export function normalizeProductLocale(locale: string): ProductLocale {
  if (locale === "et" || locale === "ru") return locale;
  return "en";
}

export function getProductSpecs(slug: ProductSlug, locale: string): string[] {
  return PRODUCT_SPECS[slug][normalizeProductLocale(locale)];
}
