import type { ReactNode } from "react";

type PageCTAProps = {
  children: ReactNode;
  className?: string;
};

/** Bottom CTA band aligned with inner-page system (UI guide: industrial, flat). */
export function PageCTA({ children, className = "" }: PageCTAProps) {
  return (
    <div
      className={`mt-14 border-t border-forest/10 pt-10 ${className}`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {children}
      </div>
    </div>
  );
}
