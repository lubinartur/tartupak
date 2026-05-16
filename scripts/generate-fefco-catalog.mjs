import fs from "fs";

const useCaseI18n = JSON.parse(
  fs.readFileSync("scripts/fefco-use-case-i18n.json", "utf8"),
);

const DESCRIPTION_I18N = {
  "0201": {
    et: "Maailmas kõige laialdasemalt kasutatav pakendivorm. Ülemised ja alumised klapid kohtuvad sulgemisel keskel. Lihtne, kulutõhus, ideaalne enamiku saatmise vajaduste jaoks.",
    ru: "Самый распространённый формат упаковки в мире. Верхние и нижние клапаны сходятся в центре при закрытии. Простой, экономичный, идеален для большинства задач доставки.",
  },
  "0203": {
    et: "Välisklapid kattuvad täielikult, pakkudes täiendavat servakaitset ja virnastustuge. Suurepärane raskete kaupade jaoks.",
    ru: "Внешние клапаны полностью перекрываются, обеспечивая дополнительную защиту краёв и прочность при штабелировании. Отлично подходит для тяжёлых грузов.",
  },
  "0300": {
    et: "Koosneb eraldi ülemisest ja alumisest osast, mis sobivad üksteise peale. Pakub tootele suurepärast kaitset.",
    ru: "Состоит из отдельных верхней и нижней частей, надеваемых друг на друга. Обеспечивает отличную защиту продукта.",
  },
  "0421": {
    et: "Täpne stantsitud disain sujuvaks jaemüügivalmiseks esitluseks. Kokkupanekuks pole vaja teipi ega liimi.",
    ru: "Точный высечной дизайн для элегантной розничной презентации. Для сборки не требуются скотч или клей.",
  },
  "0427": {
    et: "Ise lukustuv karp, mis ei vaja kokkupanekuks teipi. Sobib ideaalselt premium-esitluseks ja kiiretele pakkimisliinidele.",
    ru: "Самозакрывающийся короб, не требующий скотча для сборки. Идеален для премиальной презентации и быстрых упаковочных линий.",
  },
  "0711": {
    et: "Kiire kokkupanek eelliimitud põhjaga. Ideaalne kiire tempo täitmisliinidele ja suuremahulisele tootmisele.",
    ru: "Быстрая сборка с предварительно склеенным дном. Идеален для высокоскоростных линий комплектации и крупносерийного производства.",
  },
  "0713": {
    et: "Gofreeritud nurgakaitsed. Kaitsevad toote nurki transportimisel kahjustuste eest.",
    ru: "Гофрированные угловые защитные прокладки. Предотвращают повреждение углов продукта при транспортировке.",
  },
};

function translateUseCases(enList, lang) {
  return enList.map((phrase) => useCaseI18n[phrase]?.[lang] ?? phrase);
}

const md = fs.readFileSync("docs/23_fefco_data.md", "utf8");
const blocks = md.split(/^### /gm).slice(1);
const entries = [];

for (const block of blocks) {
  const code = block.slice(0, 4);
  if (!/^\d{4}$/.test(code)) continue;

  const getLang = (lang) => {
    const re = new RegExp(`\\*\\*${lang}:\\*\\*\\s*(.+)$`, "m");
    const m = block.match(re);
    return m ? m[1].trim() : "";
  };

  const descEnMatch = block.match(/Description EN:\s*(.+)$/m);
  const nameEnRaw = getLang("EN");
  const nameEn = nameEnRaw.split(" / ")[0].trim() || nameEnRaw;
  const nameEt = getLang("ET").split(" / ")[0].trim() || getLang("ET");
  const nameRu = getLang("RU").split(" / ")[0].trim() || getLang("RU");
  const descEn = descEnMatch?.[1].trim() ?? "";

  const useMatch = block.match(/Use cases:\s*(.+)$/im);
  const useCasesEn = useMatch
    ? useMatch[1].split(",").map((s) => s.trim()).filter(Boolean)
    : ["General packaging", "Industrial shipping"];

  const dashPart = (s) => {
    const idx = s.indexOf("—");
    if (idx === -1) return "";
    return s
      .slice(idx + 1)
      .trim()
      .replace(/^./, (c) => c.toUpperCase());
  };

  const buildDesc = (lang, nameRaw, fallbackEn) => {
    if (DESCRIPTION_I18N[code]?.[lang]) {
      return DESCRIPTION_I18N[code][lang];
    }
    if (lang === "en" && fallbackEn) return fallbackEn;

    const uses =
      lang === "en"
        ? useCasesEn.slice(0, 2).join(", ")
        : translateUseCases(useCasesEn, lang).slice(0, 2).join(", ");

    const part = dashPart(nameRaw);
    if (part.length > 8) {
      if (lang === "en") {
        return `${part}. FEFCO ${code} format suited for ${uses}.`;
      }
      if (lang === "et") {
        return `${part}. FEFCO ${code} vorm, mis sobib: ${uses}.`;
      }
      return `${part}. Формат FEFCO ${code} подходит для: ${uses}.`;
    }

    if (lang === "en" && fallbackEn) return fallbackEn;
    return nameRaw.split(" / ")[0].trim() || nameRaw;
  };

  entries.push({
    code,
    series: code.slice(0, 2),
    name: { en: nameEn, et: nameEt, ru: nameRu },
    description: {
      en: buildDesc("en", nameEnRaw, descEn),
      et: buildDesc("et", getLang("ET"), descEn),
      ru: buildDesc("ru", getLang("RU"), descEn),
    },
    useCases: {
      en: useCasesEn,
      et: translateUseCases(useCasesEn, "et"),
      ru: translateUseCases(useCasesEn, "ru"),
    },
  });
}

entries.sort((a, b) => a.code.localeCompare(b.code));

const header = `/** Auto-generated from docs/23_fefco_data.md — do not edit manually. */
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

export const FEFCO_CATALOG: FefcoCatalogEntry[] = `;

const footer = `;

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
`;

fs.writeFileSync(
  "src/data/fefco-catalog.ts",
  header + JSON.stringify(entries, null, 2) + footer,
);
console.log(`Wrote ${entries.length} entries to src/data/fefco-catalog.ts`);
