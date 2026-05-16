import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  title,
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
      {subtitle ? (
        <span
          className={cn(
            "block text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs",
            dark ? "text-brand-bg/60" : "text-brand-green/60",
          )}
        >
          {subtitle}
        </span>
      ) : null}
      <h2 className={cn(dark ? "text-brand-bg" : "text-brand-green")}>
        {title}
      </h2>
    </div>
  );
}
