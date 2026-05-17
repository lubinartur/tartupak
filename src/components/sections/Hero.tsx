import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/ui/FadeIn";
import { parseHeroHeadline } from "@/lib/utils";

export async function Hero() {
  const t = await getTranslations("home.hero");
  const headline = parseHeroHeadline(t("title"));

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden border-b border-brand-border bg-brand-bg pt-24">
      <div className="grid flex-grow grid-cols-1 lg:grid-cols-2">
        <FadeIn className="relative z-10 flex w-full flex-col justify-center border-brand-border px-8 py-20 lg:border-r lg:px-12">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-brand-kraft/60" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-kraft uppercase sm:text-xs">
                  {t("overline")}
                </span>
              </div>
              <h1 className="hero-headline tracking-tight text-brand-green">
                {headline.highlight ? (
                  <>
                    {headline.before}
                    <em className="text-brand-kraft">{headline.highlight}</em>
                    {headline.after}
                  </>
                ) : (
                  t("title")
                )}
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-relaxed font-normal text-brand-text md:text-xl">
              {t("subtitle")}
            </p>

            <div className="flex flex-col gap-6 pt-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-brand-green px-10 py-5 text-xs font-bold tracking-widest text-brand-bg uppercase shadow-2xl shadow-brand-green/20 transition-all hover:-translate-y-1 hover:bg-brand-text"
              >
                {t("ctaPrimary")}
              </Link>
              <Link
                href="/fefco"
                className="rounded-sm border border-brand-text px-10 py-5 text-xs font-bold tracking-widest text-brand-text uppercase transition-all hover:bg-brand-text hover:text-brand-bg"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="relative min-h-[320px] w-full lg:min-h-0 lg:h-full">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
