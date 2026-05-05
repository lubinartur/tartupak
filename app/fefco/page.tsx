import Link from "next/link";
import { FefcoCatalogGrid } from "@/components/fefco/FefcoCatalogGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEFCO_CATALOG, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

const pageY = "py-20 md:py-24 lg:py-[7.5rem]";

export const metadata: Metadata = {
  title: "FEFCO catalog",
  description: `European FEFCO case codes for corrugated packaging: what each style means, typical uses, and links to specifications — ${SITE_NAME}.`,
};

export default function FefcoCatalogPage() {
  return (
    <div className={`bg-background ${pageY}`}>
      <Container>
        <SectionHeader
          eyebrow="Technical reference"
          title="FEFCO catalog"
          description="Standard European case codes for corrugated board constructions. Use this catalog to compare styles before requesting a quote — it is a technical reference, not a product shop."
        />

        <div className="mt-10 max-w-4xl space-y-4 text-base leading-[1.7] text-muted md:text-[1.0625rem] md:leading-[1.65]">
          <p className="text-foreground/95">
            <abbr title="Fédération Européenne des Fabricants de Carton Ondulé">
              FEFCO
            </abbr>{" "}
            publishes a numbering system so manufacturers, designers and buyers
            mean the same box geometry. A code such as 0201 or 0427 refers to
            how the blank is cut, scored and folded — not to a single fixed size.
            Dimensions, board grade and print are always specified per order.
          </p>
        </div>

        <section
          className="mt-12 max-w-4xl"
          aria-labelledby="fefco-how-to-choose-heading"
        >
          <h2
            id="fefco-how-to-choose-heading"
            className="text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          >
            How to choose a FEFCO type
          </h2>
          <div className="mt-5 rounded-lg border border-border bg-card p-6 shadow-[0_1px_0_rgba(43,43,43,0.05)] md:p-8">
            <ul className="list-none space-y-4 text-sm leading-[1.65] text-muted">
              <li className="flex gap-3">
                <span
                  className="mt-0.5 font-mono text-xs font-semibold tabular-nums text-forest"
                  aria-hidden
                >
                  1.
                </span>
                <span>
                  Start from{" "}
                  <strong className="font-medium text-foreground">
                    product dimensions, weight and how the pack is handled
                  </strong>{" "}
                  (manual pick, conveyor, pallet stack height).
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-0.5 font-mono text-xs font-semibold tabular-nums text-forest"
                  aria-hidden
                >
                  2.
                </span>
                <span>
                  Match{" "}
                  <strong className="font-medium text-foreground">
                    closure and strength
                  </strong>{" "}
                  to your lane: slotted cases for shipping, folder types for flat
                  goods, self-locking styles for fulfilment, display codes for
                  retail.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-0.5 font-mono text-xs font-semibold tabular-nums text-forest"
                  aria-hidden
                >
                  3.
                </span>
                <span>
                  Open each code below for{" "}
                  <strong className="font-medium text-foreground">
                    technical notes and FAQ
                  </strong>
                  , then share your brief so we can confirm structure and board.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <h2 className="mt-16 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          Styles in this catalog
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Each card lists the code, name, a short catalog line and typical
          applications. Use search to match code or keywords, and series pills
          to narrow by FEFCO family.
        </p>

        <FefcoCatalogGrid items={FEFCO_CATALOG} />

        <aside className="mt-16 max-w-2xl rounded-lg border border-border bg-surface/80 p-6 md:p-8">
          <p className="text-base leading-[1.65] text-foreground">
            Not sure which FEFCO type fits your product?{" "}
            <Link
              href="/contact"
              className="font-medium text-forest underline decoration-forest/25 underline-offset-4 transition-colors hover:decoration-forest"
            >
              Send us your product dimensions and intended use
            </Link>
            .
          </p>
          <div className="mt-5">
            <Button href="/contact" variant="secondary">
              Get a quote
            </Button>
          </div>
        </aside>
      </Container>
    </div>
  );
}
