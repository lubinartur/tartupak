import Link from "next/link";
import type { ReactNode } from "react";

export type PageHeaderProps = {
  back?: { href: string; label: string };
  eyebrow?: string;
  title: string;
  description?: string;
  /** Technical mono line (e.g. FEFCO code) shown above the title */
  kicker?: string;
  /** Extra content below description (e.g. chips) */
  children?: ReactNode;
};

export function PageHeader({
  back,
  eyebrow,
  title,
  description,
  kicker,
  children,
}: PageHeaderProps) {
  return (
    <header className="max-w-3xl lg:max-w-4xl">
      {back ? (
        <Link
          href={back.href}
          className="inline-block text-sm font-medium text-muted transition-colors hover:text-forest"
        >
          ← {back.label}
        </Link>
      ) : null}
      <div className={back ? "mt-5" : ""}>
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
            {eyebrow}
          </p>
        ) : null}
        {kicker ? (
          <p
            className={`font-mono text-[13px] font-semibold tabular-nums tracking-wide text-forest ${eyebrow ? "mt-2" : ""}`}
          >
            {kicker}
          </p>
        ) : null}
        <h1
          className={`text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12] ${eyebrow || kicker ? "mt-3" : ""}`}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-[1.65] text-muted md:text-[1.0625rem]">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
