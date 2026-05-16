import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Factory } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CustomDieCutSVG } from "@/components/visuals/CustomDieCutSVG";

export async function BespokeDesign() {
  const t = await getTranslations("home.bespoke");

  return (
    <section className="flex items-center bg-white px-8 py-24 lg:px-12">
      <div className="grid w-full grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden border border-brand-green/5 bg-brand-bg p-1">
            <div className="flex h-full w-full items-center justify-center border border-brand-green/10">
              <CustomDieCutSVG />
            </div>
            <div className="absolute right-8 bottom-8 flex items-center gap-4 bg-white p-4 shadow-xl">
              <Factory size={24} className="text-brand-kraft" />
              <p className="text-[10px] font-bold tracking-widest text-brand-green/40 uppercase">
                {t("overline")}
              </p>
            </div>
          </div>
        </div>
        <FadeIn className="order-1 space-y-8 lg:order-2">
          <SectionHeader overline={t("overline")} title={t("title")} className="mb-0" />
          <p className="max-w-lg text-lg leading-relaxed text-brand-text font-normal">{t("description")}</p>
          <Link
            href="/products/erilise-kujuga-pakendid"
            className="group inline-flex items-center gap-3 font-bold text-brand-green transition-colors hover:text-brand-kraft"
          >
            {t("link")}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
