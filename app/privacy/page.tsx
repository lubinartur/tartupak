import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { CONTACT, LEGAL_NAME, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

const pageY = "py-20 md:py-24 lg:py-[7.5rem]";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy information — ${LEGAL_NAME} (${SITE_NAME}).`,
};

export default function PrivacyPage() {
  return (
    <div className={`bg-background ${pageY}`}>
      <Container className="max-w-3xl">
        <PageHeader
          eyebrow="Legal"
          title="Privacy"
          description="How we handle personal data in connection with this website. This is a general summary; your agreements or statutory duties may add requirements."
        />
        <div className="mt-12 space-y-6 border-t border-forest/10 pt-10 text-muted">
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Controller</h2>
            <p className="text-base leading-[1.7]">
              {LEGAL_NAME} operates this site for {SITE_NAME}. For privacy
              questions, contact{" "}
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
            <h2 className="text-sm font-semibold text-foreground">
              Data we may process
            </h2>
            <p className="text-base leading-[1.7]">
              If you use the contact or quotation form, we process the details
              you submit (such as name, company, email, phone and message) to
              respond to your enquiry. We do not sell personal data.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">
              Retention and security
            </h2>
            <p className="text-base leading-[1.7]">
              Messages are kept only as long as needed to handle your request and
              any follow‑up, unless a longer period is required by law. Technical
              and organisational measures appropriate to the context are applied.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Your rights</h2>
            <p className="text-base leading-[1.7]">
              Depending on applicable law, you may have rights to access,
              rectify, erase or restrict processing of your personal data, and to
              object or lodge a complaint with a supervisory authority. Contact us
              at the email above to exercise these rights.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Cookies</h2>
            <p className="text-base leading-[1.7]">
              This placeholder page assumes essential cookies only for site
              delivery. If analytics or marketing cookies are added later, this
              section will be updated and, where required, consent will be
              obtained.
            </p>
          </section>
          <p className="pt-4 text-sm leading-relaxed text-muted">
            Last updated: placeholder — replace with a fixed date when your policy
            is finalised.
          </p>
        </div>
      </Container>
    </div>
  );
}
