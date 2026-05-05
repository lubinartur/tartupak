import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

export function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="group relative flex h-full min-h-0 flex-col rounded-2xl border border-border bg-[#fffdfb] p-6 shadow-[0_18px_44px_rgba(43,43,43,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-kraft/40 hover:shadow-[0_26px_64px_rgba(43,43,43,0.09)] sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.55] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.85)]"
        aria-hidden
      />
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-forest/12 bg-surface text-forest shadow-[0_1px_0_rgba(43,43,43,0.05)]">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-[1.7] text-muted/90">{text}</p>
    </div>
  );
}
