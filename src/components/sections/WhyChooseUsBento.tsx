"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCountUp } from "@/hooks/useCountUp";

const cardSurface =
  "flex flex-col items-center justify-center rounded-xl p-5 text-center";

const cardLight = `${cardSurface} border border-[rgba(26,26,26,0.12)] bg-[#F8F6F1]`;
const cardDark = `${cardSurface} border-[0.5px] border-[rgba(26,26,26,0.12)] bg-brand-green`;

const labelLight =
  "mt-3 font-display text-[10px] font-bold tracking-[0.2em] text-brand-green/60 uppercase sm:text-xs";

const labelDark =
  "mt-3 font-display text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase sm:text-xs";

const textDarkMuted = "mt-3 max-w-xs text-sm leading-relaxed text-white/70";

const numberKraft = "font-serif leading-none text-brand-kraft";

const fadeTransition = { duration: 0.5, ease: "easeOut" as const };

export function WhyChooseUsBento() {
  const t = useTranslations("home.whyUs");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  const yearsCount = useCountUp(20, isInView, 1.5);
  const sustainableCount = useCountUp(100, isInView, 1.5);

  return (
    <div ref={ref} className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:auto-rows-auto">
      {/* 20+ — left hero */}
      <div className={`${cardDark} md:col-start-1 md:row-span-2 md:row-start-1`}>
        <p className={`${numberKraft} text-8xl md:text-9xl`}>
          {yearsCount}
          <span>+</span>
        </p>
        <h3 className={labelDark}>{t("stats.years.label")}</h3>
        <p className={textDarkMuted}>{t("stats.years.description")}</p>
        <p className="mt-2 text-sm font-medium text-brand-kraft">{t("stats.years.subtitle")}</p>
      </div>

      {/* 1pc — center top */}
      <div className={`${cardLight} md:col-start-2 md:row-start-1`}>
        <motion.p
          className={`${numberKraft} text-6xl md:text-7xl`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={fadeTransition}
        >
          {t("stats.scale.value")}
        </motion.p>
        <h3 className={labelLight}>{t("stats.scale.label")}</h3>
      </div>

      {/* 100% — center bottom */}
      <div className={`${cardLight} md:col-start-2 md:row-start-2`}>
        <p className={`${numberKraft} text-6xl md:text-7xl`}>
          {sustainableCount}
          <span>%</span>
        </p>
        <h3 className={labelLight}>{t("stats.sustainable.label")}</h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-text">
          {t("stats.sustainable.description")}
        </p>
      </div>

      {/* AA — right hero */}
      <div className={`${cardLight} md:col-start-3 md:row-span-2 md:row-start-1`}>
        <motion.p
          className={`${numberKraft} text-7xl md:text-8xl`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={fadeTransition}
        >
          {t("stats.aa.value")}
        </motion.p>
        <h3 className={labelLight}>{t("stats.aa.label")}</h3>
      </div>
    </div>
  );
}
