import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string | ReactNode;
  /** Small uppercase line above the headline */
  overline?: string;
  /** Line above the headline (same style as overline when used alone) */
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
};

const labelClass = (dark?: boolean) =>
  cn(
    "block font-display text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs",
    dark ? "text-brand-bg/60" : "text-brand-green/60",
  );

export function SectionHeader({
  title,
  overline,
  subtitle,
  centered,
  className,
  dark,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-4xl space-y-4 sm:mb-16",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {overline ? <span className={labelClass(dark)}>{overline}</span> : null}
      {subtitle ? <span className={labelClass(dark)}>{subtitle}</span> : null}
      <h2 className={cn(dark ? "text-brand-bg" : "text-brand-green")}>{title}</h2>
    </div>
  );
}
