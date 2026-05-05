import Link from "next/link";
import { ProductSilhouetteVisual } from "@/components/visuals/ProductSilhouetteVisual";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  CORRUGATED_CARDBOARD_OFFERING,
  PRODUCT_CATEGORIES,
  SITE_NAME,
} from "@/lib/constants";
import type { Metadata } from "next";

const pageY = "py-20 md:py-24 lg:py-[7.5rem]";

export const metadata: Metadata = {
  title: "Products",
  description: `Packaging categories — ${SITE_NAME}.`,
};

export default function ProductsPage() {
  return (
    <div className={`bg-background ${pageY}`}>
      <Container>
        <SectionHeader
          eyebrow="Packaging"
          title="Product categories"
          description="Corrugated categories we manufacture for B2B — logistics, food, industry. Open a category for typical applications."
        />
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {CORRUGATED_CARDBOARD_OFFERING.summary} {CORRUGATED_CARDBOARD_OFFERING.variants.join("; ")}.
        </p>
        <ul className="mt-16 grid list-none grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:gap-6 [grid-auto-rows:1fr]">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <li key={c.slug} className="h-full min-h-0">
              <Link
                href={`/products/${c.slug}`}
                className="group flex h-full min-h-0 flex-col rounded-sm border border-forest/12 bg-card transition-colors hover:border-kraft/40 sm:flex-row"
              >
                <div className="relative shrink-0 border-b border-forest/10 bg-surface sm:w-[44%] sm:border-b-0 sm:border-r">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.55]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 5px,
                        rgba(31, 61, 43, 0.045) 5px,
                        rgba(31, 61, 43, 0.045) 6px
                      )`,
                    }}
                    aria-hidden
                  />
                  <div className="relative flex aspect-[16/10] items-center justify-center p-4 sm:aspect-auto sm:min-h-[11rem] sm:p-5">
                    <div className="h-20 w-[85%] max-w-[140px] transition-transform duration-300 group-hover:scale-[1.03] sm:h-24">
                      <ProductSilhouetteVisual
                        variant={i}
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                  <h2 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-sm leading-[1.65] text-muted">
                    {c.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                      Applications
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Applications">
                      {c.applications.map((a) => (
                        <li key={a}>
                          <span className="inline-flex max-w-full rounded-sm border border-forest/15 bg-surface px-2 py-1 text-[11px] font-medium leading-tight text-foreground/90">
                            {a}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-auto pt-5 font-mono text-xs font-medium tracking-wide text-forest">
                    Explore category →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
