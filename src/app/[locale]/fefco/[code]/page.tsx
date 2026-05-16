import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { isFefcoCode, fefcoCodes } from "@/data/fefco";

type Props = {
  params: Promise<{ locale: string; code: string }>;
};

export function generateStaticParams() {
  return fefcoCodes.map((code) => ({ code }));
}

export default async function FefcoDetailPage({ params }: Props) {
  const { locale, code } = await params;
  setRequestLocale(locale);

  if (!isFefcoCode(code)) {
    notFound();
  }

  const t = await getTranslations(`fefco.items.${code}`);
  const fefco = await getTranslations("fefco");
  const common = await getTranslations("common");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Link href="/fefco" className="text-sm text-brand-kraft hover:text-brand-green">
        ← {common("backToFefco")}
      </Link>
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-sm border border-brand-border bg-brand-kraft/10">
          <span className="font-display text-6xl font-bold text-brand-green/20">{code}</span>
        </div>
        <div>
          <h1 className="text-4xl text-brand-green">{t("title")}</h1>
          <p className="mt-6 text-lg text-brand-text/70 leading-relaxed">{t("description")}</p>
          <p className="mt-6 text-sm">
            <span className="font-medium text-brand-green">{fefco("typicalUse")}: </span>
            <span className="text-brand-text/70">{t("usage")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
