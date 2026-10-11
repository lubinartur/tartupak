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
  /** Heading level; use "h1" once per page when the page has no other h1. */
  as?: "h1" | "h2";
};

const labelClass = (dark?: boolean) =>
  cn(
    "block font-display text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs",
    dark ? "text-brand-bg/60" : "text-brand-green/75",
  );

export function SectionHeader({
  title,
  overline,
  subtitle,
  centered,
  className,
  dark,
  as: Heading = "h2",
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
      <Heading className={cn(dark ? "text-brand-bg" : "text-brand-green")}>{title}</Heading>
    </div>
  );
}
