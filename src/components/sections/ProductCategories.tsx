import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { productSlugs } from "@/data/products";

export async function ProductCategories() {
  const t = await getTranslations("home.categories");

  return (
    <section className="bg-brand-bg px-8 py-24 lg:px-12">
      <div className="w-full">
        <SectionHeader subtitle={t("subtitle")} title={t("title")} />
        <div className="grid grid-cols-1 gap-px border border-brand-green/5 bg-brand-green/5 sm:grid-cols-2 lg:grid-cols-6">
          {productSlugs.map((slug) => (
            <ProductCard key={slug} slug={slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
