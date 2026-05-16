"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { FEFCOCardClient } from "@/components/fefco/FEFCOCardClient";
import { fefcoCodes, type FefcoCode } from "@/data/fefco";
import { cn } from "@/lib/utils";

const SERIES = ["02", "03", "04", "07"] as const;

function getSeries(code: string) {
  return code.slice(0, 2);
}

export function FEFCOSearch() {
  const t = useTranslations("fefco");
  const [search, setSearch] = useState("");
  const [activeSeries, setActiveSeries] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return fefcoCodes.filter((code) => {
      const title = t(`items.${code}.title`).toLowerCase();
      const desc = t(`items.${code}.description`).toLowerCase();
      const matchesSearch =
        !q || code.includes(q) || title.includes(q) || desc.includes(q);
      const matchesSeries = activeSeries ? getSeries(code) === activeSeries : true;
      return matchesSearch && matchesSeries;
    }) as FefcoCode[];
  }, [search, activeSeries, t]);

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
            All
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
              Series {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between border-b border-brand-green/5 pb-4">
        <span className="text-xs font-bold tracking-widest text-brand-text/40 uppercase">
          {filtered.length} codes
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((code) => (
          <FEFCOCardClient key={code} code={code} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="space-y-4 py-32 text-center text-brand-text/40">
          <Search size={48} className="mx-auto opacity-10" />
          <p className="text-lg">{t("searchPlaceholder")}</p>
        </div>
      ) : null}
    </div>
  );
}
