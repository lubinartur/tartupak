"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { FEFCOCardClient } from "@/components/fefco/FEFCOCardClient";
import { FEFCO_CATALOG, fefcoSearchHaystack } from "@/data/fefco-catalog";
import { cn } from "@/lib/utils";

const SERIES = ["02", "03", "04", "05", "06", "07"] as const;

type FEFCOSearchProps = {
  locale: string;
};

export function FEFCOSearch({ locale }: FEFCOSearchProps) {
  const t = useTranslations("fefco");
  const [search, setSearch] = useState("");
  const [activeSeries, setActiveSeries] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return FEFCO_CATALOG.filter((entry) => {
      const matchesSearch = !q || fefcoSearchHaystack(entry).includes(q);
      const matchesSeries = activeSeries ? entry.series === activeSeries : true;
      return matchesSearch && matchesSeries;
    });
  }, [search, activeSeries]);

  return (
    <div>
      <div className="mb-16 flex flex-col items-center gap-8 md:flex-row">
        <div className="relative w-full md:w-96">
          <Search className="absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-brand-green/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full border border-brand-green/10 bg-white py-5 pr-6 pl-12 text-sm transition-all focus:ring-1 focus:ring-brand-green focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveSeries(null)}
            className={cn(
              "border px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all",
              !activeSeries
                ? "border-brand-green bg-brand-green text-brand-bg"
                : "border-brand-green/10 bg-transparent text-brand-green hover:border-brand-green",
            )}
          >
            {t("filterAll")}
          </button>
          {SERIES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setActiveSeries(s)}
              className={cn(
                "border px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all",
                activeSeries === s
                  ? "border-brand-green bg-brand-green text-brand-bg"
                  : "border-brand-green/10 bg-transparent text-brand-green hover:border-brand-green",
              )}
            >
              {t("filterSeries", { series: s })}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between border-b border-brand-green/5 pb-4">
        <span className="text-xs font-bold tracking-widest text-brand-text font-normal uppercase">
          {t("showingCount", { count: filtered.length })}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((entry) => (
          <FEFCOCardClient key={entry.code} entry={entry} locale={locale} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="space-y-4 py-32 text-center text-brand-text font-normal">
          <Search size={48} className="mx-auto opacity-10" />
          <p className="text-lg">{t("noResults")}</p>
        </div>
      ) : null}
    </div>
  );
}
