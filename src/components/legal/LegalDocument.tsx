import { getTranslations } from "next-intl/server";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  items: string[];
  paragraphsAfter: string[];
};

/** Renders a legal page whose copy lives in messages under `<namespace>.{title,body,updated*,sections}`. */
export async function LegalDocument({ namespace }: { namespace: "privacy" | "terms" }) {
  const t = await getTranslations(namespace);
  const sections = t.raw("sections") as LegalSection[];

  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-12">
      <h1 className="text-4xl text-brand-green">{t("title")}</h1>
      <p className="mt-8 text-lg text-brand-text font-normal leading-relaxed">{t("body")}</p>
      <p className="mt-3 text-sm text-brand-text/60">
        {t("updatedLabel")}: {t("updated")}
      </p>

      {sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="text-xl font-bold text-brand-green">{section.heading}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed font-normal text-brand-text">
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {section.items.length > 0 ? (
              <ul className="list-disc space-y-2 pl-5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.paragraphsAfter.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
