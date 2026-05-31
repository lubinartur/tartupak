import { getTranslations } from "next-intl/server";
import { CheckCircle, PenTool, Scissors, Truck } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stepKeys = ["design", "production", "quality", "delivery"] as const;
const stepNumbers = ["01", "02", "03", "04"] as const;

const stepIcons = {
  design: PenTool,
  production: Scissors,
  quality: CheckCircle,
  delivery: Truck,
} as const;

export async function ManufacturingProcess() {
  const t = await getTranslations("home.process");

  return (
    <section className="min-h-[380px] border-y border-white/20 bg-brand-green px-8 py-40 lg:px-12">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeader
          centered
          overline={t("overline")}
          title={t("title")}
          className="mx-auto [&_h2]:text-white [&_span]:text-white/60"
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stepKeys.map((key, i) => {
            const Icon = stepIcons[key];
            return (
              <FadeIn
                key={key}
                delay={i * 0.08}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="relative select-none font-serif text-[100px] leading-none font-extralight text-brand-kraft/40 lg:text-[120px]">
                  {stepNumbers[i]}
                </div>
                <Icon
                  className="mt-4 mb-2 h-8 w-8 text-brand-kraft"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h4 className="text-sm font-bold tracking-[0.15em] text-white uppercase">
                  {t(`steps.${key}.title`)}
                </h4>
                <p className="mx-auto mt-3 max-w-[220px] text-[15px] leading-[1.6] font-normal text-white/70">
                  {t(`steps.${key}.description`)}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
