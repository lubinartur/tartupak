import { getTranslations, setRequestLocale } from "next-intl/server";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { QuoteForm } from "@/components/contact/QuoteForm";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string; fefco?: string }>;
};

function telHref(phone: string) {
  return `tel:${phone.replace(/[\s/]/g, "")}`;
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
        <a
          href={`mailto:${t("email")}`}
          className="font-medium text-brand-green underline decoration-brand-green/20 underline-offset-4 hover:text-brand-kraft"
        >
          {t("email")}
        </a>
      ),
    },
    {
      icon: Phone,
      title: t("info.phoneTitle"),
      content: (
        <div className="flex flex-col font-medium text-brand-green">
          <a href={telHref(t("phone"))} className="hover:text-brand-kraft">
            {t("phone")} ({t("info.landline")})
          </a>
          <a href={telHref(t("mobile"))} className="hover:text-brand-kraft">
            {t("mobile")} ({t("info.mobile")})
          </a>
        </div>
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
