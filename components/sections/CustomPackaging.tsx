import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DielineFlatVisual } from "@/components/visuals/DielineFlatVisual";

const sectionY =
  "py-20 md:py-24 lg:py-[7.5rem]";

export function CustomPackaging() {
  return (
    <section className={`border-y border-border bg-surface ${sectionY}`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-x-24">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-card shadow-[0_10px_26px_rgba(43,43,43,0.06)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 8px,
                    rgba(31, 61, 43, 0.04) 8px,
                    rgba(31, 61, 43, 0.04) 9px
                  )`,
                }}
                aria-hidden
              />
              <div className="relative h-full w-full">
                <DielineFlatVisual className="h-full w-full min-h-[12rem]" />
              </div>
            </div>
          </div>
          <div className="order-1 max-w-xl lg:order-2 lg:max-w-none">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
              Custom packaging
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              Dimensions, quantity and purpose
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-muted md:text-lg md:leading-[1.65]">
              Send us the dimensions, quantity and intended use of your product.
              Our specialists will help you find the optimal packaging solution.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
