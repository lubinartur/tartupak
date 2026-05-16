import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle, Package, Recycle, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { isProductSlug, productSlugs, type ProductSlug } from "@/data/products";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const featureKeys = ["recyclable", "protection", "sizing"] as const;
const featureIcons = {
  recyclable: Recycle,
  protection: ShieldCheck,
  sizing: Package,
} as const;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    productSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isProductSlug(slug)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: `products.items.${slug}` });

  return {
    title: `${t("title")} | Tartupak`,
    description: t("description"),
  };
}

function parseApplications(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getRelatedSlugs(current: ProductSlug): ProductSlug[] {
  return productSlugs.filter((s) => s !== current).slice(0, 3);
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isProductSlug(slug)) {
    notFound();
  }

  const t = await getTranslations(`products.items.${slug}`);
  const products = await getTranslations("products");
  const detail = await getTranslations("products.detail");
  const common = await getTranslations("common");
  const applications = parseApplications(t("applications"));
  const relatedSlugs = getRelatedSlugs(slug);

  return (
    <div className="px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Link href="/products" className="mb-12 inline-block text-sm text-brand-kraft transition-colors hover:text-brand-green">
          ← {common("backToProducts")}
        </Link>

        <div className="mb-16 grid items-start gap-12 lg:mb-32 lg:grid-cols-2 lg:gap-24">
          <div className="relative aspect-square overflow-hidden rounded-sm border border-brand-border">
            <Image
              src={`/images/product-${slug}.png`}
              alt={t("title")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-brand-kraft uppercase">
                {detail("overline")}
              </span>
              <h1 className="text-4xl font-bold text-brand-green md:text-5xl">{t("title")}</h1>
              <p className="text-xl leading-relaxed font-normal text-brand-text">{t("description")}</p>
            </div>

            <div>
              <h2 className="font-display text-[10px] font-bold tracking-[0.2em] text-brand-green/60 uppercase">
                {products("applicationsLabel")}
              </h2>
              <ul className="mt-4 space-y-3">
                {applications.map((application) => (
                  <li key={application} className="flex items-start gap-3 text-sm text-brand-text font-normal">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-kraft"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button href={`/contact?type=${slug}`} variant="primary">
                {products("requestQuoteForProduct")}
              </Button>
            </div>
          </div>
        </div>

        <section className="mb-16 grid grid-cols-1 gap-12 bg-brand-green p-12 text-white [&_p]:text-white md:grid-cols-3 lg:mb-32 lg:p-20">
          {featureKeys.map((key) => {
            const Icon = featureIcons[key];
            return (
              <div key={key} className="space-y-4">
                <Icon size={32} className="text-brand-kraft" strokeWidth={1.5} aria-hidden />
                <h3 className="font-serif text-xl">{detail(`features.${key}.title`)}</h3>
                <p className="text-sm leading-relaxed">{detail(`features.${key}.description`)}</p>
              </div>
            );
          })}
        </section>

        <section>
          <SectionHeader
            overline={detail("related.overline")}
            title={detail("related.title")}
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-px border border-brand-green/5 bg-brand-green/5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSlugs.map((relatedSlug) => (
              <ProductCard key={relatedSlug} slug={relatedSlug} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
