import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhyChooseUsBento } from "@/components/sections/WhyChooseUsBento";

export async function WhyChooseUs() {
  const t = await getTranslations("home.whyUs");

  return (
    <section className="bg-brand-bg px-8 py-32 lg:px-12">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeader centered overline={t("overline")} title={t("title")} className="mx-auto" />
        <FadeIn className="mt-24">
          <WhyChooseUsBento />
        </FadeIn>
      </div>
    </section>
  );
}
