import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  getFefcoEntry,
  getFefcoLocalized,
} from "@/data/fefco-catalog";

type FEFCOCardProps = {
  code: string;
};

export async function FEFCOCard({ code }: FEFCOCardProps) {
  const entry = getFefcoEntry(code);
  if (!entry) return null;

  const locale = await getLocale();
  const fefco = await getTranslations("fefco");
  const name = getFefcoLocalized(entry.name, locale);
  const description = getFefcoLocalized(entry.description, locale);

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
        <h3 className="text-lg leading-tight font-semibold text-brand-green">{name}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-brand-text font-normal">{description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-green uppercase transition-transform group-hover:translate-x-1">
          {fefco("viewDetails")}
        </span>
      </div>
    </Link>
  );
}
