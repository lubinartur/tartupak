import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-brand-green">{t("title")}</h1>
      <p className="mt-8 text-xl text-brand-text/80 leading-relaxed">{t("intro")}</p>
      <p className="mt-6 text-lg text-brand-text/70 leading-relaxed">{t("body")}</p>
    </div>
  );
}
