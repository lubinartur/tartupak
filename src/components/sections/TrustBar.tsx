import { getTranslations } from "next-intl/server";
import { Award, Box, Package, Truck } from "lucide-react";

const icons = [Package, Box, Award, Truck] as const;
const keys = ["piece", "dimensions", "creditRating", "delivery"] as const;

export async function TrustBar() {
  const t = await getTranslations("home.trustBar");

  return (
    <section className="border-y border-brand-green/5 bg-white px-8 py-12 lg:px-12">
      <div className="flex w-full flex-wrap justify-between gap-12">
        {keys.map((key, i) => {
          const Icon = icons[i];
          return (
            <div key={key} className="flex items-center gap-4 font-display font-medium text-brand-green">
              <div className="text-brand-kraft">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-xs tracking-widest uppercase">{t(key)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
