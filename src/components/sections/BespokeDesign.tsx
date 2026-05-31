import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Factory } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
export async function BespokeDesign() {
  const t = await getTranslations("home.bespoke");

  return (
    <section className="flex items-center bg-white px-8 py-24 lg:px-12">
      <div className="grid w-full max-w-7xl mx-auto grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden border border-brand-green/5 bg-brand-bg p-1">
            <div className="h-full w-full overflow-hidden border border-brand-green/10">
              <img
                src="/images/bespoke-packaging.png"
                alt={t("title")}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute right-8 bottom-8 flex items-center gap-4 bg-brand-kraft px-6 py-4 shadow-xl">
              <Factory className="h-6 w-6 text-brand-green" aria-hidden />
              <p className="text-base font-bold tracking-widest text-brand-green uppercase">
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
