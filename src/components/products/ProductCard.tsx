import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductSlug } from "@/data/products";

type ProductCardProps = {
  slug: ProductSlug;
  className?: string;
  variant?: "default" | "listing" | "related";
};

export async function ProductCard({ slug, className, variant = "default" }: ProductCardProps) {
  const t = await getTranslations(`products.items.${slug}`);
  const title = t("title");

  return (
    <Link
      href={`/products/${slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-brand-green/5 bg-white transition-all hover:border-brand-green/20 hover:bg-brand-bg",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full shrink-0 overflow-hidden rounded-lg bg-white",
          variant === "listing" ? "h-64" : "h-48",
          variant === "related" && "mb-4",
        )}
      >
        <Image
          src={`/images/product-${slug}.png`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-green/0 transition-colors duration-500 group-hover:bg-brand-green/2" />
      </div>

      <div
        className={cn(
          "flex flex-grow flex-col gap-2",
          variant === "listing" || variant === "related" ? "p-6" : "p-5",
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm leading-tight font-bold tracking-tight text-brand-green uppercase">
            {title}
          </h3>
          <ArrowUpRight
            size={14}
            className="shrink-0 text-brand-green opacity-20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p className="line-clamp-3 text-[11px] leading-relaxed text-brand-text font-normal">{t("description")}</p>
      </div>
    </Link>
  );
}
