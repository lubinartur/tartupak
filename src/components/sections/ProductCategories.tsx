import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCategoriesCarousel } from "@/components/sections/ProductCategoriesCarousel";
import { productSlugs } from "@/data/products";
import type { ProductCategoryCardData } from "@/components/products/ProductCategoryCard";

export async function ProductCategories() {
  const t = await getTranslations("home.categories");

  const cards: ProductCategoryCardData[] = await Promise.all(
    productSlugs.map(async (slug) => {
      const item = await getTranslations(`products.items.${slug}`);
      return {
        slug,
        title: item("title"),
        description: item("description"),
      };
    }),
  );

  return (
    <section className="bg-brand-bg px-8 py-24 lg:px-12">
      <div className="w-full">
        <FadeIn>
          <SectionHeader overline={t("overline")} title={t("title")} />
        </FadeIn>
        <ProductCategoriesCarousel cards={cards} />
      </div>
    </section>
  );
}
