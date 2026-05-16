import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { BespokeDesign } from "@/components/sections/BespokeDesign";
import { ManufacturingProcess } from "@/components/sections/ManufacturingProcess";
import { FEFCOPreview } from "@/components/sections/FEFCOPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

type Props = {
  params: Promise<{ locale: string }>;
};

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
      <FEFCOPreview />
      <WhyChooseUs />
      <CTABanner />
    </div>
  );
}
