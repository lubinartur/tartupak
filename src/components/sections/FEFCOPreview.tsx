import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/ui/FadeIn";
import { FEFCOCard } from "@/components/fefco/FEFCOCard";
import { fefcoPreviewCodes } from "@/data/fefco";

export async function FEFCOPreview() {
  const t = await getTranslations("home.fefcoPreview");
  const fefco = await getTranslations("fefco");

  return (
    <section className="bg-white px-8 py-24 lg:px-12">
      <div className="w-full">
        <div className="mb-12 flex flex-col items-stretch gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="min-w-0 space-y-4">
            <span className="block font-display text-[10px] font-bold tracking-[0.2em] text-brand-green/60 uppercase sm:text-xs">
              {t("overline")}
            </span>
            <h2 className="text-brand-green">{t("title")}</h2>
          </div>
          <Link
            href="/fefco"
            className="group inline-flex w-full items-center justify-start gap-3 font-bold text-brand-green transition-colors hover:text-brand-kraft md:w-auto"
          >
            {fefco("viewAllCatalog")}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fefcoPreviewCodes.map((code, index) => (
            <FadeIn key={code} delay={index * 0.08}>
              <FEFCOCard code={code} variant="preview" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
