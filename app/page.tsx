import { Capabilities } from "@/components/home/Capabilities";
import { CustomPackagingCTA } from "@/components/home/CustomPackagingCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ManufacturingProcess } from "@/components/home/ManufacturingProcess";
import { TrustIntro } from "@/components/home/TrustIntro";

export default function Home() {
  return (
    <div className="relative bg-background">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.03) 1px, transparent 1px)",
          backgroundSize: "160px 160px",
          backgroundPosition: "center top",
        }}
        aria-hidden
      />
      <div
        className="industrial-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.14] mix-blend-multiply"
        style={{
          backgroundPosition: "center top",
        }}
        aria-hidden
      />

      <HomeHero />
      <TrustIntro />
      <Capabilities />
      <IndustriesGrid />
      <ManufacturingProcess />
      <CustomPackagingCTA />
    </div>
  );
}
