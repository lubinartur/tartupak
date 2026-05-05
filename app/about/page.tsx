import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import {
  COMPANY_FACTS,
  COMPANY_TAGLINE,
  LEGAL_NAME,
  MARKETS,
  PRODUCTION_CAPABILITIES,
  SERVICES,
  SITE_NAME,
  SUSTAINABILITY,
  TRUST_SIGNALS,
} from "@/lib/constants";
import type { Metadata } from "next";

const pageY = "py-20 md:py-24 lg:py-[7.5rem]";

export const metadata: Metadata = {
  title: "About",
  description: `About ${LEGAL_NAME} (${SITE_NAME}) — ${COMPANY_TAGLINE}`,
};

export default function AboutPage() {
  return (
    <div className={`bg-background ${pageY}`}>
      <Container className="max-w-3xl">
        <PageHeader
          eyebrow="Company"
          title={`About ${SITE_NAME}`}
          description={`${LEGAL_NAME} — ${COMPANY_TAGLINE}`}
        />
        <div className="mt-12 max-w-none space-y-6 border-t border-forest/10 pt-10 text-muted">
          <p className="text-base leading-[1.7] text-foreground/95">
            {LEGAL_NAME} is an Estonian private company located in{" "}
            {COMPANY_FACTS.location}. Founded in {COMPANY_FACTS.foundedYear}, we
            produce corrugated cardboard packaging and sell corrugated cardboard
            for different industries.
          </p>
          <p className="text-base leading-[1.7]">
            Our specialists help customers choose suitable packaging solutions
            — from packaging construction to board selection and delivery. With
            modern production lines, quality raw material and flexible
            technology, packaging can be made in the required size and quantity
            (production is possible from 1 piece).
          </p>
          <div className="grid gap-6 pt-2 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                Trust
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                <li>{TRUST_SIGNALS.creditRating}</li>
                <li>{TRUST_SIGNALS.recognition}</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                Markets
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                <li>Main market: {MARKETS.main}</li>
                <li>Export: {MARKETS.export.join(", ")}</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 pt-2 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                Production
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {PRODUCTION_CAPABILITIES.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                Sustainability
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {SUSTAINABILITY.statement}
              </p>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                Services
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {SERVICES.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
