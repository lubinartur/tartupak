import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
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
      className="group flex w-full flex-col overflow-hidden rounded-lg border border-brand-border bg-white transition-colors hover:border-brand-green/20"
    >
      <div className="relative h-48 shrink-0 overflow-hidden bg-brand-bg sm:h-64 lg:h-80">
        <Image
          src={`/images/product-${slug}.png`}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex shrink-0 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-sm leading-tight font-bold tracking-wide text-brand-green uppercase lg:text-base">
            {title}
          </h3>
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            className="shrink-0 text-brand-green opacity-40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </div>
        <p className="line-clamp-3 text-[11px] leading-relaxed text-brand-text/70 lg:text-xs">{description}</p>
      </div>
    </Link>
  );
}
