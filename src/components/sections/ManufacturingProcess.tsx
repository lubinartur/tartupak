import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stepKeys = ["design", "production", "quality", "delivery"] as const;
const stepNumbers = ["01", "02", "03", "04"] as const;

export async function ManufacturingProcess() {
  const t = await getTranslations("home.process");

  return (
    <section className="min-h-[380px] border-y border-brand-green/5 bg-brand-bg px-8 py-40 lg:px-12">
      <div className="w-full">
        <SectionHeader centered overline={t("overline")} title={t("title")} className="mx-auto" />
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="absolute top-[5rem] right-[5%] left-[5%] -z-0 hidden h-px bg-brand-green/20 lg:block" />
          {stepKeys.map((key, i) => (
            <div
              key={key}
              className="relative z-10 flex flex-col items-center space-y-8 text-center"
            >
              <div className="select-none font-serif text-[100px] leading-none font-extralight text-brand-green/12 lg:text-[120px]">
                {stepNumbers[i]}
              </div>
              <div className="-mt-16 space-y-3 md:-mt-20 lg:-mt-24">
                <h4 className="text-sm font-bold tracking-[0.15em] text-brand-green uppercase">
                  {t(`steps.${key}.title`)}
                </h4>
                <p className="mx-auto max-w-[220px] text-[15px] leading-[1.6] text-brand-text font-normal">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
