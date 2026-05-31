"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/products", key: "products" },
  { href: "/fefco", key: "fefco" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

const locales = [
  { code: "et", label: "ET", name: "Eesti" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
] as const;

type LocaleCode = (typeof locales)[number]["code"];

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
  const tAria = useTranslations("common.aria");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const isMobileMenuOpen = mobileMenuPath === pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {isMobileMenuOpen ? (
      <button
        type="button"
        className="fixed inset-0 z-30 bg-black/50 md:hidden"
        onClick={() => setMobileMenuPath(null)}
        aria-label={tAria("closeMenu")}
      />
    ) : null}
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-40 overflow-visible px-4 py-4 transition-all duration-300 md:px-6 lg:px-12 lg:py-6",
        isScrolled
          ? "border-b border-brand-border bg-brand-bg/95 backdrop-blur-md lg:py-4"
          : "border-b border-brand-border bg-brand-bg",
      )}
      style={{ backgroundImage: "none" }}
    >
      <div className="relative z-50 mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-2 overflow-visible md:gap-3 lg:gap-4">
        <Link href="/" className="group inline-block shrink-0">
          <Image
            src="/logo-tartupak.svg"
            alt="Tartupak"
            width={236}
            height={40}
            className="h-8 w-auto lg:h-10"
            style={{ width: "auto" }}
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

        <div className="flex shrink-0 items-center gap-2 overflow-visible lg:gap-4">
          <LocaleDropdown />
          <Link
            href="/contact"
            className="hidden rounded-sm bg-brand-green px-4 py-2 text-[10px] font-bold tracking-widest text-brand-bg uppercase transition-all hover:-translate-y-0.5 hover:bg-brand-text active:translate-y-0 md:ml-1 md:inline-block lg:ml-2 lg:px-6 lg:py-3 lg:text-xs"
          >
            {t("quote")}
          </Link>
          <button
            type="button"
            className="shrink-0 p-2 text-brand-green md:hidden"
            onClick={() => setMobileMenuPath(isMobileMenuOpen ? null : pathname)}
            aria-label={tAria("toggleMenu")}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="absolute top-full right-0 left-0 z-50 overflow-hidden border-b border-brand-green/10 bg-brand-bg shadow-lg md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="ml-4 border-b border-brand-green/5 pb-2 font-serif text-xl text-brand-green"
                onClick={() => setMobileMenuPath(null)}
              >
                {link.key === "fefco" ? t("fefco") : t(link.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-block rounded-sm bg-brand-green px-6 py-3 text-center text-sm text-white"
              onClick={() => setMobileMenuPath(null)}
            >
              {t("quote")}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
    </>
  );
}

function LocaleDropdown() {
  const locale = useLocale() as LocaleCode;
  const pathname = usePathname();
  const router = useRouter();
  const tAria = useTranslations("common.aria");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];
  const otherLocales = locales.filter((l) => l.code !== locale);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const switchLocale = (next: LocaleCode) => {
    if (next !== locale && routing.locales.includes(next)) {
      router.replace(pathname, { locale: next });
    }
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={tAria("changeLanguage")}
        className={cn(
          "flex cursor-pointer items-center gap-1.5 border border-transparent py-1 pr-2 pl-1 font-display text-[10px] font-bold tracking-widest uppercase transition-colors hover:text-brand-green md:border-r md:border-brand-border md:pr-4 lg:gap-2 lg:pr-4",
          open ? "text-brand-green" : "text-brand-text",
        )}
      >
        <Globe size={14} className="shrink-0" aria-hidden />
        <span>{current.label}</span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={tAria("language")}
          className="absolute top-full right-0 z-50 mt-1 min-w-[10.5rem] border border-brand-border bg-brand-bg py-1 shadow-lg"
        >
          {otherLocales.map((l) => (
            <li key={l.code} role="option" aria-selected={false}>
              <button
                type="button"
                onClick={() => switchLocale(l.code)}
                className="flex w-full items-baseline gap-2 px-3 py-2 text-left font-display text-[10px] font-bold tracking-widest uppercase transition-colors hover:bg-brand-green/5 hover:text-brand-green"
              >
                <span className="w-6 shrink-0 text-brand-green">{l.label}</span>
                <span className="font-normal text-brand-text">{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
