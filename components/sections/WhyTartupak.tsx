import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_TARTUPAK } from "@/lib/constants";

function IconFactory({ name }: { name: string }) {
  const common = "h-5 w-5 stroke-[1.5]";
  switch (name) {
    case "experience":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "engineering":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "flex":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5-5v4m0 4h-4" />
        </svg>
      );
    case "delivery":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      );
    default:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
  }
}

const ICON_KEYS = ["experience", "engineering", "flex", "delivery"] as const;

const sectionY =
  "py-20 md:py-24 lg:py-[7.5rem]";

export function WhyTartupak() {
  return (
    <section className={`bg-background ${sectionY}`}>
      <Container>
        <SectionHeader
          eyebrow="Why Tartupak"
          title="Corrugated for industry and logistics"
          align="center"
        />
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-stretch gap-7 sm:grid-cols-2 sm:gap-8 lg:mt-20 [grid-auto-rows:1fr]">
          {WHY_TARTUPAK.map((item, i) => (
            <FeatureCard
              key={item.title}
              icon={<IconFactory name={ICON_KEYS[i] ?? "experience"} />}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
