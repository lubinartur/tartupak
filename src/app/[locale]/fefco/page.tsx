import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEFCOSearch } from "@/components/fefco/FEFCOSearch";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FefcoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("fefco");

  return (
    <div className="px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader overline={t("overline")} title={t("title")} className="mb-16" />
        <FEFCOSearch locale={locale} />
      </div>
    </div>
  );
}
