import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

export function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-lg border border-border bg-card p-6 shadow-[0_10px_26px_rgba(43,43,43,0.06)] sm:p-7">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-forest/12 bg-surface text-forest shadow-[0_1px_0_rgba(43,43,43,0.05)]">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-[1.65] text-muted">{text}</p>
    </div>
  );
}
