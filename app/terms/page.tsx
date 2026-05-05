import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { CONTACT, LEGAL_NAME, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

const pageY = "py-20 md:py-24 lg:py-[7.5rem]";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use — ${LEGAL_NAME} (${SITE_NAME}).`,
};

export default function TermsPage() {
  return (
    <div className={`bg-background ${pageY}`}>
      <Container className="max-w-3xl">
        <PageHeader
          eyebrow="Legal"
          title="Terms of use"
          description="General terms for using this website. They do not replace individual contracts for goods or services."
        />
        <div className="mt-12 space-y-6 border-t border-forest/10 pt-10 text-muted">
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Operator</h2>
            <p className="text-base leading-[1.7]">
              This website is operated by {LEGAL_NAME} (“we”, “us”) under the
              {SITE_NAME} brand. Enquiries:{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-forest underline-offset-2 hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Use of the site</h2>
            <p className="text-base leading-[1.7]">
              Content is provided for general information about our business. You
              agree not to misuse the site, attempt unauthorised access, or use
              automated means in a way that harms availability or security.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">
              Information and liability
            </h2>
            <p className="text-base leading-[1.7]">
              We aim to keep information accurate but do not warrant that the
              site is complete or error‑free. To the extent permitted by law, we
              exclude liability for indirect loss or loss of profit arising from
              use of the site. Nothing here limits liability that cannot be
              limited under mandatory law.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">
              Intellectual property
            </h2>
            <p className="text-base leading-[1.7]">
              Text, layout, logos and other materials on this site are protected
              by applicable rights. Reuse requires our prior consent unless
              allowed by law.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">
              Governing law
            </h2>
            <p className="text-base leading-[1.7]">
              These terms are governed by the laws of Estonia, without regard to
              conflict‑of‑law rules, unless mandatory rules provide otherwise.
              Courts in Estonia have non‑exclusive jurisdiction where applicable.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Changes</h2>
            <p className="text-base leading-[1.7]">
              We may update this page from time to time. Continued use after
              changes constitutes acceptance of the updated terms where permitted
              by law.
            </p>
          </section>
          <p className="pt-4 text-sm leading-relaxed text-muted">
            Last updated: placeholder — replace with a fixed date when your terms
            are finalised.
          </p>
        </div>
      </Container>
    </div>
  );
}
