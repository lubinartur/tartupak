import Link from "next/link";
import { HomeShell } from "@/components/home/HomeShell";

const items = [
  {
    title: "Precision manufacturing",
    text: "Repeatable dimensions, clean scoring and reliable box construction for production workflows.",
    href: "/about",
    icon: PrecisionIcon,
  },
  {
    title: "Scalable production",
    text: "Flexible quantities for seasonal peaks and steady supply — with predictable lead times.",
    href: "/products",
    icon: ScaleIcon,
  },
  {
    title: "Reliable packaging",
    text: "Corrugated materials selected for load, stacking and delivery conditions across industries.",
    href: "/contact",
    icon: ShieldIcon,
  },
] as const;

export function Capabilities() {
  return (
    <section className="bg-background">
      <HomeShell>
        <div className="py-16 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Capabilities
              </p>
              <h2 className="mt-3 font-heading text-[clamp(26px,2.6vw,40px)] font-[850] leading-tight tracking-[-0.03em] text-foreground">
                Manufacturing built for B2B supply
              </h2>
            </div>
            <div className="hidden text-sm text-muted lg:block">
              Clean cards, direct manufacturing language, no fluff.
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {items.map((it) => (
              <div
                key={it.title}
                className="group relative overflow-hidden rounded-[16px] border border-black/12 bg-card p-7 shadow-[0_10px_22px_rgba(0,0,0,0.07),0_1px_0_rgba(0,0,0,0.06)] transition-transform duration-200 ease-out hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-[16px] border border-black/10 bg-black/[0.025] p-3 text-foreground">
                    <it.icon />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-[800] tracking-[-0.02em] text-foreground">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.75] text-muted">
                      {it.text}
                    </p>
                    <Link
                      href={it.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-black/20 underline-offset-4 transition-colors group-hover:decoration-black/60"
                    >
                      Learn more
                      <span aria-hidden className="text-muted">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(199,154,91,0.55), rgba(199,154,91,0))",
                  }}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </HomeShell>
    </section>
  );
}

function PrecisionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M3.5 11h15M11 3.5v15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 6l10 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M5 16.5V12.2c0-.8.6-1.4 1.4-1.4h9.2c.8 0 1.4.6 1.4 1.4v4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 10.8V8.1c0-.8.6-1.4 1.4-1.4h5.2c.8 0 1.4.6 1.4 1.4v2.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M4 17.5h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 3.8c2.5 2 5.1 2.2 7 2.2v6.1c0 4.1-2.7 6.3-7 7.9-4.3-1.6-7-3.8-7-7.9V6c1.9 0 4.5-.2 7-2.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m8.1 11.1 2 2 3.8-4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

