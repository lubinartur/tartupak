import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-12">
      <h1 className="text-4xl text-brand-green">{t("title")}</h1>
      <p className="mt-8 text-lg text-brand-text font-normal leading-relaxed">{t("body")}</p>
    </div>
  );
}
