import {
  normalizeFefcoLocale,
  type FefcoLocale,
} from "@/data/fefco-catalog";

export type FefcoFaqItem = { question: string; answer: string };

export function getFefcoFaq(
  code: string,
  name: string,
  locale: string,
): FefcoFaqItem[] {
  const loc = normalizeFefcoLocale(locale);
  const templates: Record<FefcoLocale, FefcoFaqItem[]> = {
    en: [
      {
        question: `Can FEFCO ${code} be customized to my dimensions?`,
        answer: `Yes. We produce ${name} in custom lengths, widths, and board grades while maintaining the standard FEFCO ${code} construction.`,
      },
      {
        question: `What corrugated flute is recommended for ${code}?`,
        answer:
          "Light retail items often use E-flute; general shipping uses B or C-flute; heavy industrial loads may require BC double-wall board for stacking strength.",
      },
    ],
    et: [
      {
        question: `Kas FEFCO ${code} saab kohandada minu mõõtudele?`,
        answer: `Jah. Toodame ${name} kohandatud pikkuse, laiuse ja paksusega, säilitades standardse FEFCO ${code} konstruktsiooni.`,
      },
      {
        question: `Milline lainepapp sobib FEFCO ${code} jaoks?`,
        answer:
          "Kerged jaekaubad sobivad sageli E-lainega; üldine saatmine kasutab B- või C-lainet; rasked tööstuskaubad võivad vajada BC kaheseinalist lainepappi virnastustugevuse jaoks.",
      },
    ],
    ru: [
      {
        question: `Можно ли изготовить FEFCO ${code} по моим размерам?`,
        answer: `Да. Мы производим ${name} с индивидуальными длиной, шириной и маркой гофрокартона, сохраняя стандартную конструкцию FEFCO ${code}.`,
      },
      {
        question: `Какой профиль гофрокартона рекомендуется для ${code}?`,
        answer:
          "Для лёгких розничных товаров часто используют E-гофру; для обычных перевозок — B или C; для тяжёлых промышленных грузов может потребоваться двухслойный BC-профиль.",
      },
    ],
  };

  return templates[loc];
}
