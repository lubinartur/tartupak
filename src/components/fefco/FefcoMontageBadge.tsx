import { getTranslations } from "next-intl/server";
import type { FefcoMontageType } from "@/data/fefco";

type FefcoMontageBadgeProps = {
  montage: FefcoMontageType;
};

export async function FefcoMontageBadge({ montage }: FefcoMontageBadgeProps) {
  const t = await getTranslations("fefco");

  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-brand-border px-2 py-0.5 font-display text-[10px] font-medium tracking-wider text-brand-text/70 uppercase">
      <span>{t("montageLabel")}</span>
      <span className="text-brand-green/80">{montage}</span>
    </span>
  );
}
