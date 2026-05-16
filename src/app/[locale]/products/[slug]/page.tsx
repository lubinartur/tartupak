import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { isProductSlug, productSlugs } from "@/data/products";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isProductSlug(slug)) {
    notFound();
  }

  const t = await getTranslations(`products.items.${slug}`);
  const products = await getTranslations("products");
  const common = await getTranslations("common");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Link href="/products" className="text-sm text-brand-kraft hover:text-brand-green">
        ← {common("backToProducts")}
      </Link>
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="aspect-[4/3] rounded-sm bg-brand-green/5 border border-brand-border" />
        <div>
          <h1 className="text-4xl text-brand-green">{t("title")}</h1>
          <p className="mt-6 text-lg text-brand-text/70 leading-relaxed">{t("description")}</p>
          <p className="mt-4 text-sm text-brand-text/60">
            <span className="font-medium text-brand-green">Applications: </span>
            {t("applications")}
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              {products("requestQuote")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
