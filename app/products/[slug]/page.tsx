import { notFound } from "next/navigation";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductSilhouetteVisual } from "@/components/visuals/ProductSilhouetteVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PRODUCT_CATEGORIES, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const pageY = "py-20 md:py-24 lg:py-[7.5rem]";

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return { title: "Product" };
  return {
    title: cat.title,
    description: `${cat.title} — ${SITE_NAME}.`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const cat = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  const visualVariant = PRODUCT_CATEGORIES.findIndex((c) => c.slug === slug);

  return (
    <div className={`bg-background ${pageY}`}>
      <Container>
        <PageHeader
          back={{ href: "/products", label: "Products" }}
          eyebrow="Category"
          title={cat.title}
          description={cat.description}
        />

        <div className="mt-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
            Applications
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Applications">
            {cat.applications.map((a) => (
              <li key={a}>
                <span className="inline-flex max-w-full rounded-sm border border-forest/15 bg-surface px-2 py-1 text-[11px] font-medium leading-tight text-foreground/90">
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-12 max-w-3xl overflow-hidden rounded-sm border border-forest/12 bg-surface">
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
          <div className="relative flex aspect-[16/9] max-h-[22rem] items-center justify-center p-8 sm:p-10">
            <div className="h-full max-h-[14rem] w-full max-w-md">
              <ProductSilhouetteVisual
                variant={visualVariant >= 0 ? visualVariant : 0}
                className="h-full w-full"
              />
            </div>
            <div
              className="pointer-events-none absolute bottom-[10%] left-[8%] right-[8%] h-px bg-forest/18"
              aria-hidden
            />
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {cat.detail?.intro ??
            "Drawings, samples and board specifications are available on request."}
        </p>

        {cat.detail?.highlights?.length ? (
          <div className="mt-6 max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
              Highlights
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {cat.detail.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <PageCTA>
          <Button href="/contact">Get a quote</Button>
          <Button href="/products" variant="secondary">
            All categories
          </Button>
        </PageCTA>
      </Container>
    </div>
  );
}
