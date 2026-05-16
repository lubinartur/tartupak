import { getTranslations } from "next-intl/server";

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

export async function WhyChooseUsBento() {
  const t = await getTranslations("home.whyUs");

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:auto-rows-auto">
      {/* 20+ — left hero */}
      <div className={`${cardDark} md:col-start-1 md:row-span-2 md:row-start-1`}>
        <p className={`${numberKraft} text-8xl md:text-9xl`}>{t("stats.years.value")}</p>
        <h3 className={labelDark}>{t("stats.years.label")}</h3>
        <p className={textDarkMuted}>{t("stats.years.description")}</p>
        <p className="mt-2 text-sm font-medium text-brand-kraft">{t("stats.years.subtitle")}</p>
      </div>

      {/* 1pc — center top */}
      <div className={`${cardLight} md:col-start-2 md:row-start-1`}>
        <p className={`${numberKraft} text-6xl md:text-7xl`}>{t("stats.scale.value")}</p>
        <h3 className={labelLight}>{t("stats.scale.label")}</h3>
      </div>

      {/* 100% — center bottom */}
      <div className={`${cardLight} md:col-start-2 md:row-start-2`}>
        <p className={`${numberKraft} text-6xl md:text-7xl`}>{t("stats.sustainable.value")}</p>
        <h3 className={labelLight}>{t("stats.sustainable.label")}</h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-text">
          {t("stats.sustainable.description")}
        </p>
      </div>

      {/* AA — right hero */}
      <div className={`${cardLight} md:col-start-3 md:row-span-2 md:row-start-1`}>
        <p className={`${numberKraft} text-7xl md:text-8xl`}>{t("stats.aa.value")}</p>
        <h3 className={labelLight}>{t("stats.aa.label")}</h3>
      </div>
    </div>
  );
}
