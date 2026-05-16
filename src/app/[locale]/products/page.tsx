import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { productSlugs } from "@/data/products";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return {
    title: `${t("title")} | Tartupak`,
    description: t("metaDescription"),
  };
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  return (
    <div className="px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader overline={t("overline")} title={t("title")} className="mb-16 md:mb-24" />
        <div className="grid grid-cols-1 gap-px border border-brand-green/5 bg-brand-green/5 sm:grid-cols-2 lg:grid-cols-3">
          {productSlugs.map((slug) => (
            <ProductCard key={slug} slug={slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
