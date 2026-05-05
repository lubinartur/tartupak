import Link from "next/link";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/90 backdrop-blur-sm">
      <Container className="relative flex h-[4rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-forest lg:text-[1.125rem]"
        >
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
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

        <div className="flex items-center gap-3">
          <span
            className="hidden text-xs font-medium text-muted lg:inline"
            title="Language switcher (placeholder)"
          >
            EN
          </span>
          <div className="hidden sm:block">
            <Button href="/contact" variant="primary">
              Get a quote
            </Button>
          </div>
          <MobileNav links={NAV_LINKS} />
        </div>
      </Container>
    </header>
  );
}
