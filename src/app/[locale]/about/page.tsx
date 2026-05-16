import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Leaf, Ruler, Zap } from "lucide-react";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FacilityGallery } from "@/components/about/FacilityGallery";
import { WhyChooseUsBento } from "@/components/sections/WhyChooseUsBento";
import { parseHeroHeadline } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

const philosophyKeys = ["precision", "production", "eco"] as const;
const philosophyIcons = {
  precision: Ruler,
  production: Zap,
  eco: Leaf,
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: `${t("philosophy.title")} | Tartupak`,
    description: t("body"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tWhyUs = await getTranslations("home.whyUs");
  const headline = parseHeroHeadline(t("headline"));

  return (
    <div className="px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mb-32 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="space-y-8">
            <span className="text-xs font-bold tracking-widest text-brand-kraft uppercase">
              {t("overline")}
            </span>
            <h1
              className={`font-serif text-5xl leading-[0.95] text-brand-green md:text-7xl lg:text-8xl ${locale === "ru" ? "font-black" : "font-bold"}`}
            >
              {headline.before}
              {headline.highlight ? (
                <span className="text-brand-kraft italic">{headline.highlight}</span>
              ) : null}
              {headline.after}
            </h1>
            <p className="max-w-lg text-xl leading-relaxed font-normal text-brand-text">
              {t("body")}
            </p>
          </div>

          <FacilityGallery />
        </div>

        {/* Philosophy */}
        <section className="mb-32">
          <SectionHeader
            overline={t("philosophy.overline")}
            title={t("philosophy.title")}
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {philosophyKeys.map((key) => {
              const Icon = philosophyIcons[key];
              return (
                <div
                  key={key}
                  className="space-y-4 border border-brand-border p-6"
                >
                  <Icon size={28} className="text-brand-kraft" strokeWidth={1.5} aria-hidden />
                  <h3 className="font-serif text-xl text-brand-green">
                    {t(`philosophy.cards.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed font-normal text-brand-text">
                    {t(`philosophy.cards.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-32">
          <SectionHeader
            centered
            overline={tWhyUs("overline")}
            title={tWhyUs("title")}
            className="mx-auto mb-16"
          />
          <WhyChooseUsBento />
        </section>

        {/* CTA */}
        <section className="border-t border-brand-green/5 py-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-green px-12 py-5 font-bold text-brand-bg transition-colors hover:bg-brand-green/90"
          >
            {t("cta")}
          </Link>
        </section>
      </div>
    </div>
  );
}
