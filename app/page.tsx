import { ContactSection } from "@/components/sections/ContactSection";
import { CustomPackaging } from "@/components/sections/CustomPackaging";
import { FefcoPreview } from "@/components/sections/FefcoPreview";
import { Hero } from "@/components/sections/Hero";
import { PackagingSolutions } from "@/components/sections/PackagingSolutions";
import { ManufacturingProcess } from "@/components/sections/ManufacturingProcess";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { WhyTartupak } from "@/components/sections/WhyTartupak";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PackagingSolutions />
      <ProductCategories />
      <CustomPackaging />
      <ManufacturingProcess />
      <FefcoPreview />
      <WhyTartupak />
      <ContactSection />
    </>
  );
}
