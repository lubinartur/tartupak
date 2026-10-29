import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { CookieSettingsButton } from "@/components/analytics/CookieSettingsButton";
import { PhoneLink } from "@/components/analytics/PhoneLink";
import { MapPin, Facebook, Instagram, Award } from "lucide-react";

function telHref(phone: string) {
  return `tel:${phone.replace(/[\s/]/g, "")}`;
}

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const contact = await getTranslations("contact");
  const tAria = await getTranslations("common.aria");

  const navLinks = [
    { href: "/products", label: nav("products") },
    { href: "/fefco", label: nav("fefco") },
    { href: "/about", label: nav("about") },
    { href: "/contact", label: nav("contact") },
  ] as const;

  const people = [
    {
      key: "kulli",
      name: contact("people.kulli.name"),
      title: null as string | null,
      phone: contact("people.kulli.phone"),
      email: contact("people.kulli.email"),
    },
    {
      key: "maksim",
      name: contact("people.maksim.name"),
      title: contact("people.maksim.title"),
      phone: contact("people.maksim.phone"),
      email: contact("people.maksim.email"),
    },
  ] as const;

  const sectionLabel =
    "mb-6 font-display text-[10px] font-bold tracking-[0.3em] text-brand-kraft uppercase";

  return (
    <footer className="bg-brand-green px-8 pt-16 pb-8 text-white lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-tartupak.svg"
                alt="Tartupak"
                width={212}
                height={36}
                style={{ height: "36px", width: "auto" }}
                className="brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-white/70">{t("tagline")}</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Tartupak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-kraft"
                aria-label={tAria("facebook")}
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/tartupak.ee/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-kraft"
                aria-label={tAria("instagram")}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 aria-level={3} className={sectionLabel}>{t("contact")}</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-kraft" />
                <span className="text-sm leading-relaxed text-white/90 lg:text-xs">{contact("address")}</span>
              </li>
              {people.map((person) => (
                <li key={person.key} className="flex flex-col gap-1 pl-[34px]">
                  <span className="text-sm font-medium text-white lg:text-xs">{person.name}</span>
                  {person.title ? (
                    <span className="text-xs tracking-wide text-white/70 lg:text-[10px]">
                      {person.title}
                    </span>
                  ) : null}
                  <PhoneLink
                    href={telHref(person.phone)}
                    placement="footer"
                    className="py-0.5 text-sm text-white/90 transition-colors hover:text-brand-kraft lg:text-xs"
                  >
                    {person.phone}
                  </PhoneLink>
                  <a
                    href={`mailto:${person.email}`}
                    className="py-0.5 text-sm text-white/90 underline decoration-1 underline-offset-4 decoration-white/30 transition-colors hover:text-brand-kraft lg:text-xs"
                  >
                    {person.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-10">
            <h4 aria-level={3} className={sectionLabel}>{t("navigation")}</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1 text-sm text-white transition-colors hover:text-brand-kraft lg:text-xs">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 aria-level={3} className={sectionLabel}>{t("credentials")}</h4>
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center border border-white/30 text-[9px] font-bold tracking-widest text-white">
                AA
              </div>
              <p className="text-[9px] leading-tight tracking-widest text-white/70 uppercase">
                {t("aaCredit")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/30">
                <Award size={16} className="text-brand-kraft" aria-hidden />
              </div>
              <p className="text-[9px] leading-tight tracking-widest text-white/70 uppercase">
                {t("edukasEttevote")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase">
            © {new Date().getFullYear()} Tartupak. {t("rights")}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/privacy"
              className="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-brand-kraft"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-brand-kraft"
            >
              {t("terms")}
            </Link>
            <CookieSettingsButton className="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-brand-kraft" />
          </div>
        </div>
      </div>
    </footer>
  );
}
