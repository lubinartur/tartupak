import { ProductCard } from "@/components/cards/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const sectionY =
  "py-20 md:py-24 lg:py-[7.5rem]";

export function ProductCategories() {
  return (
    <section className={`bg-background ${sectionY}`}>
      <Container>
        <SectionHeader
          eyebrow="Products"
          title="Packaging categories"
          description="From transport and food service to custom die-cuts and large-format runs — built for B2B operations."
        />
        <div className="mt-16 grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-9 lg:gap-y-10 [grid-auto-rows:1fr]">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <ProductCard
              key={c.slug}
              title={c.title}
              description={c.description}
              applications={c.applications}
              href={`/products/${c.slug}`}
              visualVariant={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
