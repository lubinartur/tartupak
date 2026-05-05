import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IMAGE_PATHS } from "@/lib/images";

const sectionY =
  "py-20 md:py-24 lg:py-[7.5rem]";

const STEPS = [
  {
    src: IMAGE_PATHS.process.dieCutting,
    title: "Die Cutting",
    description:
      "Precision die cutting transforms corrugated sheets into packaging components ready for folding and assembly.",
    alt: "Corrugated board die cutting",
  },
  {
    src: IMAGE_PATHS.process.printing,
    title: "Printing",
    description:
      "Flexographic printing allows branding, logos and product information to be applied directly onto cardboard packaging.",
    alt: "Flexographic printing on cardboard packaging",
  },
  {
    src: IMAGE_PATHS.process.stacking,
    title: "Stacking & Logistics",
    description:
      "Finished packaging is stacked on pallets and prepared for transport to customers and distribution centers.",
    alt: "Stacked packaging on pallets for shipment",
  },
] as const;

export function ManufacturingProcess() {
  return (
    <section className={`bg-background ${sectionY}`}>
      <Container>
        <SectionHeader
          eyebrow="Production"
          title="Our manufacturing process"
          description="From sheet to pallet — how corrugated packaging moves through cutting, print, and outbound logistics."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-9 [grid-auto-rows:1fr]">
          {STEPS.map((step) => (
            <article
              key={step.title}
              className="group relative flex h-full min-h-0 flex-col rounded-2xl border border-border bg-[#fffdfb] p-6 shadow-[0_18px_44px_rgba(43,43,43,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-kraft/40 hover:shadow-[0_26px_64px_rgba(43,43,43,0.09)] sm:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.55] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.85)]"
                aria-hidden
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border/70 bg-surface">
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
