import { getTranslations } from "next-intl/server";
import { Gift, Package, Palette, Ruler } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const items = [
  { key: "piece", Icon: Package },
  { key: "dimensions", Icon: Ruler },
  { key: "flexoPrint", Icon: Palette },
  { key: "freeSample", Icon: Gift },
] as const;

export async function TrustBar() {
  const t = await getTranslations("home.trustBar");

  return (
    <section className="w-full bg-brand-green px-8 py-16 lg:px-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
          {items.map(({ key, Icon }, index) => (
            <FadeIn
              key={key}
              delay={index * 0.06}
              className="flex min-w-0 flex-col items-center px-4 text-center lg:px-6"
            >
              <Icon size={28} className="text-brand-kraft" strokeWidth={1.5} aria-hidden />
              <p className="mt-4 text-[13px] font-medium tracking-[0.12em] text-white uppercase">
                {t(`items.${key}.label`)}
              </p>
              <p className="mt-2 text-[12px] text-white/50">{t(`items.${key}.subtext`)}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
