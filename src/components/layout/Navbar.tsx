"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/products", key: "products" },
  { href: "/fefco", key: "fefco" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const isMobileMenuOpen = mobileMenuPath === pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-40 px-6 py-6 transition-all duration-300 lg:px-12",
        isScrolled
          ? "border-b border-brand-border bg-brand-bg/95 py-4 backdrop-blur-md"
          : "border-b border-brand-border bg-transparent",
      )}
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-green transition-transform group-hover:scale-110">
            <span className="font-serif text-xl font-bold text-brand-bg">T</span>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-green">
            Tartupak
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-brand-green/70",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-brand-green"
                  : "text-brand-text font-normal",
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher locale={locale} onChange={(l) => router.replace(pathname, { locale: l })} />
          <Link
            href="/contact"
            className="ml-2 rounded-sm bg-brand-green px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-bg transition-all hover:-translate-y-0.5 hover:bg-brand-text active:translate-y-0"
          >
            {t("quote")}
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-brand-green md:hidden"
          onClick={() => setMobileMenuPath(isMobileMenuOpen ? null : pathname)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="absolute top-full right-0 left-0 overflow-hidden border-b border-brand-green/10 bg-brand-bg shadow-xl md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="ml-4 border-b border-brand-green/5 pb-2 font-serif text-lg text-brand-green"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4">
              <LocaleSwitcher
                locale={locale}
                variant="mobile"
                onChange={(l) => {
                  router.replace(pathname, { locale: l });
                  setMobileMenuPath(null);
                }}
              />
              <Link
                href="/contact"
                className="rounded-sm bg-brand-green px-6 py-3 text-sm text-white"
              >
                {t("quote")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

function LocaleSwitcher({
  locale,
  onChange,
  variant = "desktop",
}: {
  locale: string;
  onChange: (locale: string) => void;
  variant?: "desktop" | "mobile";
}) {
  const locales = [
    { code: "et", label: "ET" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  if (variant === "mobile") {
    return (
      <div className="flex gap-4 p-2">
        {locales.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => onChange(l.code)}
            className={cn(
              "text-xs font-bold",
              locale === l.code ? "underline" : "opacity-40",
            )}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex cursor-pointer items-center gap-2 border-r border-brand-border pr-4 transition-colors hover:text-brand-green">
      <Globe size={14} />
      <div className="flex gap-1">
        {locales.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => onChange(l.code)}
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest transition-opacity",
              locale === l.code ? "text-brand-green" : "text-brand-text font-normal hover:text-brand-green",
            )}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
