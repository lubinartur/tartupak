import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { COMPANY_TAGLINE, LEGAL_NAME, SITE_NAME } from "@/lib/constants";
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
            We develop corrugated packaging for logistics, food production,
            e‑commerce and industrial customers — structures sized for how you
            ship and store.
          </p>
          <p className="text-base leading-[1.7]">
            Our team works with you on board grade, die lines and print so packs
            protect the product, run on your line and stay cost‑effective.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Facility tours, credentials and case studies can be shared when you
            are ready to quote.
          </p>
        </div>
      </Container>
    </div>
  );
}
