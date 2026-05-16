"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Fefco0201Assembled,
  Fefco0201Flat,
  Fefco0300Telescope,
} from "@/components/visuals/HeroVisuals";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn, parseHeroHeadline } from "@/lib/utils";

const SLIDE_KEYS = ["slide0", "slide1", "slide2"] as const;
const VISUALS = [Fefco0201Flat, Fefco0201Assembled, Fefco0300Telescope] as const;
const SPEC_FIELDS = ["material", "strength", "impact"] as const;

const FADE_MS = 600;

export function HeroCarousel() {
  const t = useTranslations("home.hero");
  const [currentSlide, setCurrentSlide] = useState(0);

  const headline = parseHeroHeadline(t("title"));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_KEYS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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

        <div className="relative flex items-center justify-center bg-brand-kraft/10 p-12 lg:p-24">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] kraft-texture" />
          <div className="relative flex h-full w-full flex-col border border-brand-border bg-white/50 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-brand-border bg-white/40 p-6">
              <div className="relative min-h-[1rem] flex-1">
                {SLIDE_KEYS.map((key, idx) => (
                  <span
                    key={key}
                    className={cn(
                      "absolute inset-0 text-[10px] font-bold tracking-widest uppercase transition-opacity ease-in-out",
                      idx === currentSlide ? "opacity-40" : "opacity-0",
                    )}
                    style={{ transitionDuration: `${FADE_MS}ms` }}
                    aria-hidden={idx !== currentSlide}
                  >
                    {t("carousel.constructionCode")}: {t(`carousel.${key}.code`)}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {SLIDE_KEYS.map((key, idx) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full border border-brand-green transition-all duration-300",
                      currentSlide === idx ? "bg-brand-green" : "bg-transparent",
                    )}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative min-h-[280px] flex-1 overflow-hidden p-8 sm:min-h-[320px]">
              {SLIDE_KEYS.map((key, idx) => {
                const Visual = VISUALS[idx];
                return (
                  <div
                    key={key}
                    className={cn(
                      "absolute inset-8 flex items-center justify-center transition-opacity ease-in-out",
                      idx === currentSlide ? "opacity-100" : "pointer-events-none opacity-0",
                    )}
                    style={{ transitionDuration: `${FADE_MS}ms` }}
                    aria-hidden={idx !== currentSlide}
                  >
                    <div className="relative aspect-[4/3] w-full max-w-lg">
                      <Visual />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-brand-border bg-white/40 p-6">
              {SPEC_FIELDS.map((field) => (
                <div key={field}>
                  <p className="mb-1 text-[9px] font-bold uppercase opacity-40">
                    {t(`carousel.${field}`)}
                  </p>
                  <div className="relative min-h-[1rem]">
                    {SLIDE_KEYS.map((slideKey, idx) => (
                      <p
                        key={slideKey}
                        className={cn(
                          "absolute inset-0 text-xs font-medium transition-opacity ease-in-out",
                          idx === currentSlide ? "opacity-100" : "opacity-0",
                        )}
                        style={{ transitionDuration: `${FADE_MS}ms` }}
                        aria-hidden={idx !== currentSlide}
                      >
                        {t(`carousel.${slideKey}.${field}`)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
