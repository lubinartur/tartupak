import { Button } from "@/components/ui/Button";
import { FefcoSchematicVisual } from "@/components/visuals/FefcoSchematicVisual";

type FefcoCardProps = {
  code: string;
  name: string;
  description: string;
  typicalUse: string;
};

export function FefcoCard({
  code,
  name,
  description,
  typicalUse,
}: FefcoCardProps) {
  const href = `/fefco/${code}`;

  return (
    <article className="group flex h-full min-h-0 flex-col rounded-sm border border-forest/15 bg-card shadow-[0_10px_26px_rgba(43,43,43,0.05)] transition-colors hover:border-kraft/40">
      <div className="relative flex aspect-[5/4] w-full shrink-0 items-stretch justify-center overflow-hidden border-b border-forest/10 bg-[#f4efea]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 6px,
              rgba(31, 61, 43, 0.04) 6px,
              rgba(31, 61, 43, 0.04) 7px
            )`,
          }}
          aria-hidden
        />
        <FefcoSchematicVisual code={code} className="h-full w-full min-h-[9rem]" />
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5 sm:pt-4">
        <p className="font-mono text-[11px] font-semibold tabular-nums tracking-wide text-forest">
          FEFCO {code}
        </p>
        <h3 className="mt-1.5 text-[15px] font-semibold leading-snug tracking-tight text-foreground">
          {name}
        </h3>
        <p className="mt-2 text-xs leading-[1.6] text-muted">{description}</p>

        <div className="mt-3 border-l-2 border-forest/25 bg-surface/80 py-2 pl-3 pr-2">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-forest/75">
            Typical use
          </p>
          <p className="mt-1 text-xs leading-relaxed text-foreground/85">
            {typicalUse}
          </p>
        </div>

        <div className="mt-4 mt-auto border-t border-border/80 pt-3">
          <Button
            href={href}
            variant="ghost"
            className="min-h-0 px-0 py-0 font-mono text-xs font-medium tracking-wide text-forest hover:text-forest-hover"
          >
            Specification →
          </Button>
        </div>
      </div>
    </article>
  );
}
