import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 isolate border-b border-border bg-card/90 backdrop-blur-sm">
      <Container className="relative flex h-[4rem] items-center gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-forest lg:text-[1.125rem]"
        >
          {SITE_NAME}
        </Link>

        <div className="ml-auto flex items-center gap-3 lg:gap-6">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-forest"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <span
            className="hidden text-xs font-medium text-muted lg:inline"
            title="Language switcher (placeholder)"
          >
            EN
          </span>
          <div className="block">
            <Button href="/contact" variant="primary">
              Get a quote
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
