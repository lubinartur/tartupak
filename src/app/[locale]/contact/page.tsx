import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-brand-green">{t("title")}</h1>
      <p className="mt-4 text-lg text-brand-text/70">{t("subtitle")}</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="h-5 w-5 shrink-0 text-brand-kraft" />
            <p className="text-brand-text/80">{t("address")}</p>
          </div>
          <div className="flex gap-4">
            <Mail className="h-5 w-5 shrink-0 text-brand-kraft" />
            <a href={`mailto:${t("email")}`} className="text-brand-green hover:text-brand-kraft">
              {t("email")}
            </a>
          </div>
          <div className="flex gap-4">
            <Phone className="h-5 w-5 shrink-0 text-brand-kraft" />
            <div className="space-y-1">
              <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="block text-brand-green hover:text-brand-kraft">
                {t("phone")}
              </a>
              <a href={`tel:${t("mobile").replace(/\s/g, "")}`} className="block text-brand-green hover:text-brand-kraft">
                {t("mobile")}
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded-sm border border-brand-border bg-white p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-green">
              {t("form.name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-sm border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-green"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-green">
              {t("form.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-sm border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-green"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-brand-green">
              {t("form.company")}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="mt-1 w-full rounded-sm border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-green"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-green">
              {t("form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-sm border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-green resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-sm bg-brand-green px-6 py-3 text-sm font-medium text-white hover:bg-brand-green/90 transition-colors"
          >
            {t("form.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
