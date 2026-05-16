import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { productSlugs } from "@/data/products";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  return (
    <div className="px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} className="mb-16" />
        <div className="grid grid-cols-1 gap-px border border-brand-green/5 bg-brand-green/5 sm:grid-cols-2 lg:grid-cols-3">
          {productSlugs.map((slug) => (
            <ProductCard key={slug} slug={slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
