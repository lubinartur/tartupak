#!/usr/bin/env python3
"""Write FEFCO detail page with correct layout."""

from pathlib import Path

TAG = "div"
do = lambda cls="", extra="": (
    f'<{TAG} className="{cls}"{extra}>' if cls else f"<{TAG}{extra}>"
)
cd = f"</{TAG}>"

jsx = f"""
    <main className="px-6 pt-32 pb-24 lg:px-12">
      {do("mx-auto max-w-7xl")}
        <Link
          href="/fefco"
          className="group mb-12 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-green/60 uppercase hover:text-brand-green"
        >
          <ArrowLeft
            size={{16}}
            className="transition-transform group-hover:-translate-x-1"
          />
          {{t("backToCatalog")}}
        </Link>

        {do("mb-32 flex flex-col gap-20 lg:flex-row lg:items-start lg:gap-24")}
          {do("space-y-12")}
            {do("space-y-4")}
              <span className="text-xs font-bold tracking-widest text-brand-kraft uppercase">
                {{t("overline", {{ code }})}}
              </span>
              <h1 className="font-serif text-5xl leading-[1.1] text-brand-green md:text-7xl">
                {{name}}
              </h1>
            {cd}

            <p className="text-xl leading-relaxed font-normal text-brand-text">
              {{description}}
            </p>

            {do("space-y-6")}
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-brand-green/60 uppercase">
                {{t("typicalUseCases")}}
              </h2>
              {do("grid grid-cols-1 gap-3 sm:grid-cols-2")}
                {{useCases.map((useCase) => (
                  {do(
                      "flex items-center gap-3 border border-brand-green/5 bg-brand-bg/50 p-4 text-sm font-medium text-brand-green",
                      ' key={{useCase}}',
                  )}
                    <Package size={{16}} className="shrink-0 text-brand-kraft" />
                    <span>{{useCase}}</span>
                  {cd}
                ))}}
              {cd}
            {cd}

            {do("pt-8")}
              <Button href={{`/contact?fefco=${{code}}`}} variant="primary" className="gap-3">
                {{t("quoteCta")}}
                <Ruler size={{18}} />
              </Button>
            {cd}

            {do("space-y-4")}
              <h2 className="flex items-center gap-2 px-2 font-serif text-lg text-brand-green">
                <HelpCircle size={{20}} className="text-brand-kraft" />
                {{t("faqTitle", {{ code }})}}
              </h2>
              {do("space-y-px border border-brand-green/10 bg-brand-green/10 shadow-sm")}
                {{faqItems.map((faq) => (
                  {do("space-y-2 bg-white p-6", ' key={{faq.question}}')}
                    <p className="text-sm font-bold text-brand-green">{{faq.question}}</p>
                    <p className="text-sm text-brand-text/50">{{faq.answer}}</p>
                  {cd}
                ))}}
              {cd}
            {cd}
          {cd}

          {do()}
            {do(
                "relative flex aspect-square flex-col items-center justify-center border border-brand-green/10 bg-white p-12"
            )}
              {do("absolute top-6 left-6 border border-brand-green/5 p-2")}
                <span className="text-[10px] font-bold text-brand-green/20">
                  {{t("drawingLabel", {{ code }})}}
                </span>
              {cd}
              <Layers size={{140}} strokeWidth={{0.5}} className="mb-8 text-brand-green/10" />
              {do("mb-8 h-px w-full bg-brand-green/5")}
              <p className="max-w-[200px] text-center text-[10px] font-bold tracking-widest text-brand-text/30 uppercase">
                {{t("drawingPlaceholder")}}
              </p>
            {cd}
          {cd}
        {cd}
      {cd}
    </main>
"""

header = '''import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowLeft, HelpCircle, Layers, Package, Ruler } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import {
  fefcoCatalogCodes,
  getFefcoEntry,
  getFefcoLocalized,
  getFefcoUseCases,
  isFefcoCatalogCode,
} from "@/data/fefco-catalog";
import { getFefcoFaq } from "@/lib/fefco-faq";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; code: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    fefcoCatalogCodes.map((code) => ({ locale, code })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, code } = await params;
  const entry = getFefcoEntry(code);
  if (!entry) return {};

  const name = getFefcoLocalized(entry.name, locale);
  return {
    title: `FEFCO ${code} — ${name} | Tartupak`,
    description: getFefcoLocalized(entry.description, locale),
  };
}

export default async function FefcoDetailPage({ params }: Props) {
  const { locale, code } = await params;
  setRequestLocale(locale);

  if (!isFefcoCatalogCode(code)) {
    notFound();
  }

  const entry = getFefcoEntry(code)!;
  const name = getFefcoLocalized(entry.name, locale);
  const description = getFefcoLocalized(entry.description, locale);
  const useCases = getFefcoUseCases(entry, locale);
  const t = await getTranslations("fefco.detail");
  const faqItems = getFefcoFaq(code, name, locale);

  return (
'''

footer = '''
  );
}
'''

path = Path("src/app/[locale]/fefco/[code]/page.tsx")
path.write_text(header + jsx + footer)
print(f"Wrote {path}")
