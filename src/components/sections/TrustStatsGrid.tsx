import { getTranslations } from "next-intl/server";

const statKeys = ["aa", "years", "sustainable", "scale", "ee", "est"] as const;

export async function TrustStatsGrid() {
  const t = await getTranslations("home.whyUs");

  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
      {statKeys.map((key) => (
        <div key={key} className="flex flex-col items-start space-y-6">
          <div className="flex min-h-[80px] items-center">
            <span className="font-serif text-6xl leading-none text-brand-kraft opacity-80 md:text-7xl">
              {t(`stats.${key}.value`)}
            </span>
          </div>
          <h4 className="text-xl font-bold tracking-tight text-brand-green uppercase">
            {t(`stats.${key}.label`)}
          </h4>
        </div>
      ))}
    </div>
  );
}
