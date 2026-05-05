import { Button } from "@/components/ui/Button";
import { ProductSilhouetteVisual } from "@/components/visuals/ProductSilhouetteVisual";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  applications?: readonly string[];
  /** Cycles abstract silhouette artwork — not tied to CMS data. */
  visualVariant?: number;
};

export function ProductCard({
  title,
  description,
  href,
  applications,
  visualVariant = 0,
}: ProductCardProps) {
  return (
    <article className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-[#fffdfb] shadow-[0_18px_44px_rgba(43,43,43,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-kraft/40 hover:shadow-[0_26px_64px_rgba(43,43,43,0.09)]">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.55] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.85)]"
        aria-hidden
      />
      {/* Visual: subtle flute texture + baseline — packaging mockup feel */}
      <div className="relative aspect-[3/2] w-full shrink-0 border-b border-border bg-[#f4efea]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.65]"
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
        <div className="relative flex h-full w-full items-center justify-center px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
          <div className="relative h-[78%] w-[88%] max-w-[240px] transition-transform duration-500 group-hover:scale-[1.02]">
            <ProductSilhouetteVisual
              variant={visualVariant}
              className="h-full w-full drop-shadow-[0_1px_0_rgba(43,43,43,0.07)]"
            />
            <div
              className="pointer-events-none absolute -bottom-1 left-[6%] right-[6%] h-px bg-forest/18"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col p-7 pt-6">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-[1.7] text-muted/90">{description}</p>

        {applications?.length ? (
          <div className="mt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
              Applications
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Applications">
              {applications.map((a) => (
                <li key={a}>
                  <span className="inline-flex max-w-full rounded-sm border border-forest/15 bg-surface px-2 py-1 text-[11px] font-medium leading-tight text-foreground/90">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-auto flex flex-col pt-6">
          <Button href={href} variant="secondary" className="w-full">
            Explore category
          </Button>
        </div>
      </div>
    </article>
  );
}
