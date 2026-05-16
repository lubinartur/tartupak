import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/ui/FadeIn";
import { parseHeroHeadline } from "@/lib/utils";

export async function CTABanner() {
  const t = await getTranslations("home.cta");
  const headline = parseHeroHeadline(t("title"));

  return (
    <section className="border-t border-brand-border bg-white px-8 py-32 lg:px-12">
      <FadeIn className="w-full space-y-8 text-center">
        <h2 className="text-brand-green">
          {headline.highlight ? (
            <>
              {headline.before}
              <em className="font-serif text-brand-kraft italic">{headline.highlight}</em>
              {headline.after}
            </>
          ) : (
            t("title")
          )}
        </h2>
        <p className="mx-auto max-w-xl text-xl font-normal text-brand-text">{t("description")}</p>
        <div className="pt-8">
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-brand-green px-12 py-5 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-brand-green/10 transition-all hover:-translate-y-0.5 hover:bg-brand-text active:translate-y-0"
          >
            {t("button")}
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
