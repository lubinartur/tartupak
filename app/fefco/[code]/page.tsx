import { notFound } from "next/navigation";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHeader } from "@/components/layout/PageHeader";
import { FefcoSchematicVisual } from "@/components/visuals/FefcoSchematicVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FEFCO_CATALOG, getFefcoCatalogEntry, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

type Props = { params: Promise<{ code: string }> };

const pageY = "py-20 md:py-24 lg:py-[7.5rem]";

export async function generateStaticParams() {
  return FEFCO_CATALOG.map((item) => ({ code: item.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const entry = getFefcoCatalogEntry(code);
  if (!entry) return { title: "FEFCO" };
  return {
    title: `FEFCO ${entry.code}`,
    description: `${entry.description} ${SITE_NAME}.`,
  };
}

export default async function FefcoDetailPage({ params }: Props) {
  const { code } = await params;
  const entry = getFefcoCatalogEntry(code);
  if (!entry) notFound();

  return (
    <div className={`bg-background ${pageY}`}>
      <Container>
        <PageHeader
          back={{ href: "/fefco", label: "FEFCO catalog" }}
          eyebrow="Technical reference"
          kicker={`FEFCO ${entry.code}`}
          title={entry.name}
          description={entry.description}
        />

        <div className="mt-8 max-w-2xl border-l-2 border-forest/25 bg-surface/80 py-3 pl-4 pr-3">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-forest/75">
            Typical use
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            {entry.typicalUse}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="overflow-hidden rounded-sm border border-forest/12 bg-[#f4efea] lg:sticky lg:top-24">
            <FefcoSchematicVisual
              code={entry.code}
              className="aspect-[4/3] w-full max-h-[26rem] lg:max-h-[32rem]"
            />
          </div>

          <div className="min-w-0">
            <section aria-labelledby="fefco-technical-specs-heading">
              <h2
                id="fefco-technical-specs-heading"
                className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                Technical specifications
              </h2>
              <div className="mt-6 rounded-lg border border-border bg-card p-6 shadow-[0_1px_0_rgba(43,43,43,0.05)] md:p-8">
                <dl className="space-y-5">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                      Box style
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                      FEFCO {entry.code}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                      Type
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {entry.technical.constructionType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                      Material
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {entry.technical.material}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                      Typical use
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {entry.technical.specTypicalUse}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                      Closure
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {entry.technical.closure}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                      Industries
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {entry.technical.industries}
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section
              className="mt-14"
              aria-labelledby="fefco-faq-heading"
            >
              <h2
                id="fefco-faq-heading"
                className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                Frequently asked questions
              </h2>
              <dl className="mt-6 space-y-8 border-t border-border pt-8">
                {entry.faq.map((item) => (
                  <div key={item.question}>
                    <dt className="text-base font-semibold leading-snug text-foreground">
                      {item.question}
                    </dt>
                    <dd className="mt-2 text-sm leading-[1.65] text-muted">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted">
          Official FEFCO drawings and full industry notes are available from
          ESBO; we implement structures to your dimensions and board grade.
        </p>

        <PageCTA>
          <Button href="/contact">Get a quote</Button>
          <Button href="/fefco" variant="secondary">
            Back to catalog
          </Button>
        </PageCTA>
      </Container>
    </div>
  );
}
