import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  COMPANY_FOCUS,
  CONTACT,
  LEGAL_NAME,
  NAV_LINKS,
  SITE_NAME,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-forest">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-muted">{LEGAL_NAME}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {COMPANY_FOCUS}
            </p>
            <dl className="mt-6 space-y-3 text-sm text-muted">
              <div>
                <dt className="font-medium text-foreground">Address</dt>
                <dd className="mt-1 leading-relaxed">
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-forest"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="hover:text-forest"
                  >
                    {CONTACT.phone}
                  </a>
                  <span className="text-muted"> · mobile </span>
                  <a
                    href={`tel:${CONTACT.mobileTel}`}
                    className="hover:text-forest"
                  >
                    {CONTACT.mobile}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Fax</dt>
                <dd>Fax {CONTACT.fax}</dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-forest">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/privacy" className="hover:text-forest">
                  Privacy (placeholder)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-forest">
                  Terms (placeholder)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted">
          © {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
