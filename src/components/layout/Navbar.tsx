"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

function navLabel(key: (typeof navItems)[number]["key"], t: ReturnType<typeof useTranslations<"nav">>) {
  if (key === "fefco") {
    return (
      <>
        <span className="lg:hidden">{t("fefcoShort")}</span>
        <span className="hidden lg:inline">{t("fefco")}</span>
      </>
    );
  }
  return t(key);
}

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
        "fixed top-0 right-0 left-0 z-40 overflow-hidden px-4 py-4 transition-all duration-300 md:px-6 lg:px-12 lg:py-6",
        isScrolled
          ? "border-b border-brand-border bg-brand-bg/95 backdrop-blur-md lg:py-4"
          : "border-b border-brand-border bg-transparent",
      )}
    >
      <div className="flex w-full min-w-0 items-center justify-between gap-2 overflow-hidden md:gap-3 lg:gap-4">
        <Link href="/" className="group inline-block shrink-0">
          <Image
            src="/logo-tartupak.svg"
            alt="Tartupak"
            width={236}
            height={40}
            className="h-8 w-auto lg:h-10"
            priority
          />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 overflow-hidden md:flex lg:gap-8">
          {navItems.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "shrink-0 whitespace-nowrap text-sm font-medium tracking-wide transition-colors hover:text-brand-green/70",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-brand-green"
                  : "text-brand-text font-normal",
              )}
            >
              {navLabel(link.key, t)}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 overflow-hidden md:flex lg:gap-4">
          <LocaleSwitcher
            locale={locale}
            onChange={(l) => router.replace(pathname, { locale: l })}
            compact
          />
          <Link
            href="/contact"
            className="ml-1 rounded-sm bg-brand-green px-4 py-2 text-[10px] font-bold tracking-widest text-brand-bg uppercase transition-all hover:-translate-y-0.5 hover:bg-brand-text active:translate-y-0 lg:ml-2 lg:px-6 lg:py-3 lg:text-xs"
          >
            {t("quote")}
          </Link>
        </div>

        <button
          type="button"
          className="shrink-0 p-2 text-brand-green md:hidden"
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
                {link.key === "fefco" ? t("fefco") : t(link.key)}
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
  compact = false,
}: {
  locale: string;
  onChange: (locale: string) => void;
  variant?: "desktop" | "mobile";
  compact?: boolean;
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
    <div
      className={cn(
        "flex cursor-pointer items-center gap-1.5 border-r border-brand-border transition-colors hover:text-brand-green lg:gap-2 lg:pr-4",
        compact ? "pr-2" : "pr-4",
      )}
    >
      <Globe size={14} className="shrink-0" />
      <div className="flex gap-0.5 lg:gap-1">
        {locales.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => onChange(l.code)}
            className={cn(
              "text-[10px] font-bold tracking-widest uppercase transition-opacity",
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
