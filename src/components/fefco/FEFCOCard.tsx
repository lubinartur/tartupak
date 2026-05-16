import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import type { FefcoCode } from "@/data/fefco";

type FEFCOCardProps = {
  code: FefcoCode;
};

export async function FEFCOCard({ code }: FEFCOCardProps) {
  const t = await getTranslations(`fefco.items.${code}`);
  const fefco = await getTranslations("fefco");

  return (
    <Link
      href={`/fefco/${code}`}
      className="group flex h-full flex-col border border-brand-green/5 bg-white p-8 transition-all hover:border-brand-green/20 hover:bg-brand-bg"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-serif text-5xl text-brand-green/10 transition-colors group-hover:text-brand-green/20">
          #{code}
        </span>
        <div className="h-12 w-px bg-brand-green/10 transition-all group-hover:h-16" />
      </div>
      <div className="flex-grow space-y-3">
        <h3 className="text-lg leading-tight font-semibold text-brand-green">{t("title")}</h3>
        <p className="text-sm leading-relaxed text-brand-text/50">{t("description")}</p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-green uppercase transition-transform group-hover:translate-x-1">
          {fefco("viewDetails")}
        </span>
      </div>
    </Link>
  );
}
