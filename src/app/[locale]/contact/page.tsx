import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { Clock, Mail, MapPin, Phone, User } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { QuoteForm } from "@/components/contact/QuoteForm";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string; fefco?: string }>;
};

function telHref(phone: string) {
  return `tel:${phone.replace(/[\s/]/g, "")}`;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return createPageMetadata({
    locale,
    pathname: "/contact",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { type, fefco } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const infoCards = [
    {
      icon: MapPin,
      title: t("info.officeTitle"),
      content: (
        <address className="font-medium text-brand-green not-italic">
          {t("addressLine1")}
          <br />
          {t("addressLine2")}
          <br />
          {t("addressLine3")}
        </address>
      ),
    },
    {
      icon: Mail,
      title: t("info.emailTitle"),
      content: (
        <div className="flex flex-col gap-2 font-medium text-brand-green">
          <div>
            <a
              href={`mailto:${t("emailGeneral")}`}
              className="underline decoration-brand-green/20 underline-offset-4 hover:text-brand-kraft"
            >
              {t("emailGeneral")}
            </a>
            <p className="text-xs font-normal text-brand-green/50">
              {t("info.generalEmail")}
            </p>
          </div>
          <div>
            <a
              href={`mailto:${t("email")}`}
              className="underline decoration-brand-green/20 underline-offset-4 hover:text-brand-kraft"
            >
              {t("email")}
            </a>
            <p className="text-xs font-normal text-brand-green/50">
              {t("info.salesEmail")}
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: Phone,
      title: t("info.phoneTitle"),
      content: (
        <a
          href={telHref(t("phone"))}
          className="font-medium text-brand-green hover:text-brand-kraft"
        >
          {t("phone")}
        </a>
      ),
    },
    {
      icon: Clock,
      title: t("info.hoursTitle"),
      content: <p className="font-medium text-brand-green">{t("info.hours")}</p>,
    },
  ] as const;

  return (
    <div className="px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          overline={t("overline")}
          title={t("title")}
          className="mb-16"
        />

        <div className="mb-32 grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-5">
            <p className="text-xl leading-relaxed font-normal text-brand-text">
              {t("subtitle")}
            </p>

            <div className="space-y-6">
              {infoCards.map(({ icon: Icon, title, content }) => (
                <div
                  key={title}
                  className="flex gap-6 border border-brand-green/5 bg-white p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-bg text-brand-kraft">
                    <Icon size={24} aria-hidden />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs font-bold tracking-widest text-brand-green/40 uppercase">
                      {title}
                    </h3>
                    {content}
                  </div>
                </div>
              ))}

              <div className="flex gap-6 border border-brand-green/5 bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-bg text-brand-kraft">
                  <User size={24} aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 text-xs font-bold tracking-widest text-brand-green/40 uppercase">
                    {t("sales.title")}
                  </h3>
                  <p className="font-medium text-brand-green">{t("sales.name")}</p>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-brand-green">
                    <a
                      href={telHref(t("sales.phone"))}
                      className="hover:text-brand-kraft"
                    >
                      {t("sales.phone")}
                    </a>
                    <a
                      href={`mailto:${t("sales.email")}`}
                      className="underline decoration-brand-green/20 underline-offset-4 hover:text-brand-kraft"
                    >
                      {t("sales.email")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm initialType={type} initialFefco={fefco} />
          </div>
        </div>
      </div>
    </div>
  );
}
