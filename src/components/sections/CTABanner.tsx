import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { parseHeroHeadline } from "@/lib/utils";

export async function CTABanner() {
  const t = await getTranslations("home.cta");
  const headline = parseHeroHeadline(t("title"));

  return (
    <section className="relative overflow-hidden bg-brand-green px-8 py-32 lg:px-12">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 w-full space-y-8 text-center">
        <h2 className="text-brand-bg">
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
        <p className="mx-auto max-w-xl text-xl font-light text-brand-bg/60">{t("description")}</p>
        <div className="pt-8">
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-brand-bg px-12 py-6 text-lg font-bold text-brand-green shadow-2xl transition-all hover:-translate-y-1 hover:brightness-110 active:translate-y-0"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
