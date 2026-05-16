import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhyChooseUsBento } from "@/components/sections/WhyChooseUsBento";

export async function WhyChooseUs() {
  const t = await getTranslations("home.whyUs");

  return (
    <section className="bg-brand-bg px-8 py-32 lg:px-12">
      <div className="w-full">
        <SectionHeader centered overline={t("overline")} title={t("title")} className="mx-auto" />
        <div className="mt-24">
          <WhyChooseUsBento />
        </div>
      </div>
    </section>
  );
}
