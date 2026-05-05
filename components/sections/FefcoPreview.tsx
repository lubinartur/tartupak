import { FefcoCard } from "@/components/cards/FefcoCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEFCO_HOME_PREVIEW } from "@/lib/constants";

const sectionY =
  "py-20 md:py-24 lg:py-[7.5rem]";

export function FefcoPreview() {
  return (
    <section
      className={`border-t border-forest/10 bg-surface/70 ${sectionY}`}
    >
      <Container>
        <div className="flex flex-col gap-8 border-b border-forest/12 pb-8 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-10">
          <div className="max-w-2xl md:pb-0.5">
            <SectionHeader
              eyebrow="Technical reference"
              title="FEFCO standard styles"
              description="European case codes for corrugated board constructions. Listed with schematic outline and typical applications — not a product shop."
            />
          </div>
          <Button
            href="/fefco"
            variant="secondary"
            className="w-full shrink-0 font-mono text-xs font-medium tracking-wide md:w-auto"
          >
            Browse full catalog
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4 [grid-auto-rows:1fr]">
          {FEFCO_HOME_PREVIEW.map((item) => (
            <FefcoCard key={item.code} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
