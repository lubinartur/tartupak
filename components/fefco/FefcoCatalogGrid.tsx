"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FefcoSchematicVisual } from "@/components/visuals/FefcoSchematicVisual";
import type { FefcoCatalogItem, FefcoSeries } from "@/lib/fefco-catalog";
import {
  FEFCO_SERIES_LABEL,
  FEFCO_SERIES_ORDER,
  fefcoSeriesCounts,
} from "@/lib/fefco-catalog";

type Props = { items: readonly FefcoCatalogItem[] };

function matchesSearch(item: FefcoCatalogItem, q: string): boolean {
  if (!q) return true;
  const hay = `${item.code} ${item.name} ${item.description} ${item.typicalUse}`.toLowerCase();
  return hay.includes(q);
}

export function FefcoCatalogGrid({ items }: Props) {
  const counts = useMemo(() => fefcoSeriesCounts(), []);
  const [series, setSeries] = useState<FefcoSeries | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const inSeries = series
      ? items.filter((i) => i.group === series)
      : items;
    if (!q) return inSeries;
    return inSeries.filter((i) => matchesSearch(i, q));
  }, [items, series, search]);

  const searchId = "fefco-catalog-search";

  return (
    <div className="mt-8 space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1">
          <label
            htmlFor={searchId}
            className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-forest/80"
          >
            Search catalog
          </label>
          <input
            id={searchId}
            type="search"
            name="fefco-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Code, name, or keyword…"
            autoComplete="off"
            spellCheck={false}
            className="mt-1.5 w-full max-w-md rounded-md border border-forest/15 bg-card px-3 py-2 font-mono text-sm text-foreground shadow-[0_1px_0_rgba(43,43,43,0.04)] outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus:border-forest/35 focus:ring-2 focus:ring-forest/15"
          />
        </div>
      </div>

      <div
        className="rounded-md border border-border/80 bg-surface/60 px-3 py-2.5 sm:px-4 sm:py-3"
        aria-label="FEFCO series overview"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-forest/70">
          Series overview
        </p>
        <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1.5 text-xs leading-snug text-muted sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {FEFCO_SERIES_ORDER.map((s) => (
            <div key={s} className="flex min-w-0 gap-1.5">
              <dt className="shrink-0 font-mono font-semibold tabular-nums text-forest">
                {s}
              </dt>
              <dd className="min-w-0 text-foreground/80">
                <span className="text-muted/90">— </span>
                {FEFCO_SERIES_LABEL[s]}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-forest/70">
          Filter by series
        </p>
        <div
          className="mt-2 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by FEFCO series"
        >
          <button
            type="button"
            role="tab"
            aria-selected={series === null}
            onClick={() => setSeries(null)}
            className={`rounded-full border px-3 py-1.5 font-mono text-[11px] font-medium tabular-nums tracking-wide transition-colors ${
              series === null
                ? "border-forest bg-forest/10 text-forest"
                : "border-forest/15 bg-card text-muted hover:border-kraft/35 hover:text-foreground"
            }`}
          >
            All
            <span className="ml-1.5 opacity-70">({counts.all})</span>
          </button>
          {FEFCO_SERIES_ORDER.map((s) => (
            <button
              key={s}
              type="button"
              role="tab"
              aria-selected={series === s}
              onClick={() => setSeries(s)}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] font-medium tabular-nums tracking-wide transition-colors ${
                series === s
                  ? "border-forest bg-forest/10 text-forest"
                  : "border-forest/15 bg-card text-muted hover:border-kraft/35 hover:text-foreground"
              }`}
            >
              {s}
              <span className="ml-1 hidden sm:inline">
                · {FEFCO_SERIES_LABEL[s]}
              </span>
              <span className="ml-1.5 opacity-70">({counts[s]})</span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted" aria-live="polite">
        Showing{" "}
        <span className="font-mono font-semibold tabular-nums text-foreground">
          {filtered.length}
        </span>{" "}
        of{" "}
        <span className="font-mono font-semibold tabular-nums text-foreground">
          {counts.all}
        </span>{" "}
        FEFCO types
        {series ? (
          <>
            {" "}
            <span className="text-foreground/80">(series {series})</span>
          </>
        ) : null}
        {search.trim() ? (
          <>
            {" "}
            <span className="text-foreground/80">
              matching &ldquo;{search.trim()}&rdquo;
            </span>
          </>
        ) : null}
        .
      </p>

      {filtered.length === 0 ? (
        <div
          className="rounded-md border border-dashed border-forest/20 bg-surface/50 px-4 py-10 text-center"
          role="status"
        >
          <p className="text-sm font-medium text-foreground">
            No FEFCO types found. Try another code or series.
          </p>
          <p className="mt-2 text-xs text-muted">
            Clear the search field or choose &ldquo;All&rdquo; to see the full
            catalog.
          </p>
        </div>
      ) : (
        <ul className="mt-2 grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <li key={item.code}>
              <Link
                href={`/fefco/${item.code}`}
                className="group flex gap-3 rounded-sm border border-forest/12 bg-card p-3 transition-colors hover:border-kraft/40 md:gap-3 md:p-3.5 lg:p-3.5"
              >
                <div className="w-14 shrink-0 overflow-hidden rounded-sm border border-forest/10 bg-[#f4efea] sm:w-[4.5rem]">
                  <FefcoSchematicVisual
                    code={item.code}
                    className="aspect-square h-14 w-full sm:h-[4.25rem]"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                    <p className="font-mono text-[11px] font-semibold tabular-nums tracking-wide text-forest">
                      FEFCO {item.code}
                    </p>
                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.1em] text-forest/55 sm:inline">
                      {item.group}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-[13px] font-semibold leading-snug tracking-tight text-foreground md:text-sm">
                    {item.name}
                  </p>
                  <p className="line-clamp-2 text-[11px] leading-snug text-muted md:text-xs">
                    {item.description}
                  </p>
                  <div className="border-l-2 border-forest/20 bg-surface/70 py-1 pl-2 pr-1">
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-forest/65">
                      Typical use
                    </p>
                    <p className="line-clamp-2 text-[11px] leading-snug text-foreground/85 md:line-clamp-1 md:text-xs">
                      {item.typicalUse}
                    </p>
                  </div>
                  <p className="pt-0.5 font-mono text-[10px] font-medium tracking-wide text-forest/85 transition-opacity group-hover:text-forest sm:text-[11px]">
                    Specification →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
