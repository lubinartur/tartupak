import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin, Linkedin, Instagram, Award } from "lucide-react";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const contact = await getTranslations("contact");

  const navLinks = [
    { href: "/products", label: nav("products") },
    { href: "/fefco", label: nav("fefco") },
    { href: "/about", label: nav("about") },
    { href: "/contact", label: nav("contact") },
  ] as const;

  return (
    <footer className="bg-brand-green px-8 pt-16 pb-8 text-brand-bg lg:px-12">
      <div className="w-full">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-white/20">
                <div className="h-4 w-4 border border-white" />
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-white uppercase">
                Tartupak
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-brand-bg/60">{t("tagline")}</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center border border-white/10 text-white transition-all hover:bg-white hover:text-brand-green"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center border border-white/10 text-white transition-all hover:bg-white hover:text-brand-green"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-display text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
              {t("contact")}
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 text-brand-kraft" />
                <span className="text-xs leading-relaxed text-brand-bg/80">{contact("address")}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-brand-kraft" />
                <a
                  href={`mailto:${contact("email")}`}
                  className="text-xs text-brand-bg/80 underline decoration-1 underline-offset-8 decoration-white/10 transition-colors hover:text-white"
                >
                  {contact("email")}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-brand-kraft" />
                <span className="text-xs text-brand-bg/80">{contact("phone")}</span>
              </li>
            </ul>
          </div>

          <div className="lg:pl-10">
            <h4 className="mb-6 font-display text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
              {t("navigation")}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-xs text-brand-bg/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="mb-6 font-display text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
              {t("credentials")}
            </h4>
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center border border-white/20 text-[9px] font-bold tracking-widest">
                AA
              </div>
              <p className="text-[9px] leading-tight tracking-widest text-brand-bg/40 uppercase">
                {t("aaCredit")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Award size={20} className="text-white/20" />
              <p className="text-[9px] leading-tight tracking-widest text-brand-bg/40 uppercase">
                {t("edukasEttevote")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-6 md:flex-row">
          <p className="text-[9px] font-bold tracking-[0.2em] text-brand-bg/20 uppercase">
            © {new Date().getFullYear()} Tartupak. {t("rights")}
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[9px] font-bold tracking-[0.2em] text-brand-bg/20 uppercase hover:text-brand-bg/40"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-[9px] font-bold tracking-[0.2em] text-brand-bg/20 uppercase hover:text-brand-bg/40"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
