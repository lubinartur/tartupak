import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { BespokeDesign } from "@/components/sections/BespokeDesign";
import { ManufacturingProcess } from "@/components/sections/ManufacturingProcess";
import { BoxesVideoStrip } from "@/components/sections/BoxesVideoStrip";
import { FEFCOPreview } from "@/components/sections/FEFCOPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return createPageMetadata({
    locale,
    pathname: "/",
    title: t("title"),
    description: t("description"),
    titleAbsolute: true,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="overflow-hidden">
      <Hero />
      <TrustBar />
      <ProductCategories />
      <BespokeDesign />
      <ManufacturingProcess />
      <BoxesVideoStrip />
      <FEFCOPreview />
      <WhyChooseUs />
      <CTABanner />
    </div>
  );
}
