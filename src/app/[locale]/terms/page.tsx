import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

function truncateDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  return createPageMetadata({
    locale,
    pathname: "/terms",
    title: t("title"),
    description: truncateDescription(t("body")),
  });
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terms");

  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-12">
      <h1 className="text-4xl text-brand-green">{t("title")}</h1>
      <p className="mt-8 text-lg text-brand-text font-normal leading-relaxed">{t("body")}</p>
    </div>
  );
}
