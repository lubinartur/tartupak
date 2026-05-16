import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { CategoryIcon } from "@/components/visuals/CategoryIcon";
import type { ProductSlug } from "@/data/products";

type ProductCardProps = {
  slug: ProductSlug;
};

export async function ProductCard({ slug }: ProductCardProps) {
  const t = await getTranslations(`products.items.${slug}`);

  return (
    <Link
      href={`/products/${slug}`}
      className="group flex h-full flex-col overflow-hidden border border-brand-green/5 bg-white transition-all hover:border-brand-green/20 hover:bg-brand-bg"
    >
      <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-white text-brand-green transition-colors group-hover:text-brand-kraft">
        <CategoryIcon slug={slug} />
        <div className="absolute inset-0 bg-brand-green/0 transition-colors duration-500 group-hover:bg-brand-green/[0.02]" />
      </div>
      <div className="flex flex-grow flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm leading-tight font-bold tracking-tight text-brand-green uppercase">
            {t("title")}
          </h3>
          <ArrowUpRight
            size={14}
            className="shrink-0 text-brand-green opacity-20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p className="line-clamp-3 text-[11px] leading-relaxed text-brand-text/50">{t("description")}</p>
      </div>
    </Link>
  );
}
