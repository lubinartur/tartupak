import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCategoriesCarousel } from "@/components/sections/ProductCategoriesCarousel";
import {
  ProductCategoryCard,
  type ProductCategoryCardData,
} from "@/components/products/ProductCategoryCard";
import { productSlugs } from "@/data/products";

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
      <div className="w-full max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader overline={t("overline")} title={t("title")} />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {cards.map((card) => (
              <ProductCategoryCard
                key={card.slug}
                slug={card.slug}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="hidden sm:block">
            <ProductCategoriesCarousel cards={cards} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
