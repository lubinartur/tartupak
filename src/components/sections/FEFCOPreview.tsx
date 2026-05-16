import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { FEFCOCard } from "@/components/fefco/FEFCOCard";
import { fefcoPreviewCodes } from "@/data/fefco";

export async function FEFCOPreview() {
  const t = await getTranslations("home.fefcoPreview");
  const fefco = await getTranslations("fefco");

  return (
    <section className="bg-white px-8 py-24 lg:px-12">
      <div className="w-full">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="block font-display text-[10px] font-bold tracking-[0.2em] text-brand-green/60 uppercase sm:text-xs">
              {t("overline")}
            </span>
            <h2 className="text-brand-green">{t("title")}</h2>
          </div>
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
