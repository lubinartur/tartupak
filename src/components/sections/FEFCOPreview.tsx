import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEFCOCard } from "@/components/fefco/FEFCOCard";
import { fefcoPreviewCodes } from "@/data/fefco";

export async function FEFCOPreview() {
  const t = await getTranslations("home.fefcoPreview");
  const fefco = await getTranslations("fefco");

  return (
    <section className="bg-white px-8 py-24 lg:px-12">
      <div className="w-full">
        <div className="mb-16 flex items-end justify-between gap-8">
          <SectionHeader className="mb-0" overline={t("overline")} title={t("title")} />
          <Link
            href="/fefco"
            className="shrink-0 font-display text-sm tracking-wide text-brand-text uppercase transition-colors hover:text-brand-kraft"
          >
            {fefco("viewAllCatalog")} →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fefcoPreviewCodes.map((code) => (
            <FEFCOCard key={code} code={code} />
          ))}
        </div>
      </div>
    </section>
  );
}
