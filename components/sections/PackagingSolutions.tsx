import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { productImagePublicPath } from "@/lib/images";

const sectionY =
  "py-20 md:py-24 lg:py-[7.5rem]";

const CARDS = [
  {
    title: "E-commerce packaging",
    description:
      "Durable corrugated boxes for shipping, fulfillment and warehouse operations.",
    imageSrc: productImagePublicPath("transport-packaging"),
    imageAlt: "E-commerce shipping packaging",
  },
  {
    title: "Retail-ready packaging",
    description:
      "Custom cardboard solutions for product presentation and shelf display.",
    imageSrc: productImagePublicPath("custom-packaging"),
    imageAlt: "Retail-ready packaging for shelves",
  },
  {
    title: "Food packaging",
    description:
      "Corrugated packaging for takeaway, pizza, frozen goods and food logistics.",
    imageSrc: productImagePublicPath("pizza-boxes"),
    imageAlt: "Food packaging made from corrugated cardboard",
  },
  {
    title: "Industrial packaging",
    description:
      "Large-format and heavy-duty packaging for production and transport.",
    imageSrc: productImagePublicPath("large-packaging"),
    imageAlt: "Heavy-duty industrial packaging",
  },
] as const;

export function PackagingSolutions() {
  return (
    <section className={`border-b border-border/60 bg-background ${sectionY}`}>
      <Container>
        <SectionHeader
          eyebrow="SOLUTIONS"
          title="Packaging solutions for modern production"
          description="From e-commerce shipping and retail-ready boxes to food packaging and custom corrugated structures — Tartupak helps businesses choose packaging that fits the product, logistics and brand."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-7 lg:mt-20 lg:grid-cols-2 lg:gap-8 [grid-auto-rows:1fr]">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group flex h-full min-h-0 flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-card shadow-[0_10px_26px_rgba(43,43,43,0.06)] transition-colors group-hover:border-kraft/40">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.06) 100%)",
                  }}
                  aria-hidden
                />
              </div>
              <div className="mt-5 max-w-xl">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.65] text-muted">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

