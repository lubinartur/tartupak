import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEFCOSearch } from "@/components/fefco/FEFCOSearch";

const FEFCO_CATALOG_PDF_URL =
  "https://tartupak.ee/wp-content/uploads/2017/07/FEFCO_incl_pictures-1.pdf";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "fefco" });

  return createPageMetadata({
    locale,
    pathname: "/fefco",
    title: t("title"),
    description: t("metaDescription"),
  });
}

export default async function FefcoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("fefco");

  return (
    <div className="px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-6">
          <SectionHeader overline={t("overline")} title={t("title")} className="mb-0" />
          <a
            href={FEFCO_CATALOG_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-green bg-transparent px-6 py-3 font-display text-sm font-medium text-brand-green transition-colors hover:bg-brand-green/5"
          >
            <Download size={18} strokeWidth={1.5} aria-hidden />
            {t("downloadCatalog")}
          </a>
        </div>
        <FEFCOSearch locale={locale} />
      </div>
    </div>
  );
}
