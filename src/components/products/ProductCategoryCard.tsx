"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { CategoryIcon } from "@/components/visuals/CategoryIcon";
import type { ProductSlug } from "@/data/products";

export type ProductCategoryCardData = {
  slug: ProductSlug;
  title: string;
  description: string;
};

export function ProductCategoryCard({ slug, title, description }: ProductCategoryCardData) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group flex h-[320px] w-[280px] min-w-[280px] max-w-[280px] shrink-0 flex-col overflow-hidden rounded-sm border border-brand-border bg-white transition-all hover:border-brand-green/20 hover:bg-brand-bg"
    >
      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-white text-brand-green transition-colors group-hover:text-brand-kraft">
        <CategoryIcon slug={slug} />
        <div className="absolute inset-0 bg-brand-green/0 transition-colors duration-500 group-hover:bg-brand-green/2" />
      </div>

      <div className="flex shrink-0 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm leading-tight font-bold tracking-tight text-brand-green uppercase">
            {title}
          </h3>
          <ArrowUpRight
            size={14}
            className="shrink-0 text-brand-green opacity-20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p className="line-clamp-3 text-[11px] leading-relaxed text-brand-text/50">{description}</p>
      </div>
    </Link>
  );
}
