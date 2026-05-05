import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HomeShell } from "@/components/home/HomeShell";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#0f1113]">
      <div className="absolute inset-0">
        <div className="hero-bg-drift absolute inset-0">
          <Image
            src="/images/home/hero.jpg"
            alt="Corrugated box manufacturing floor"
            fill
            priority
            className="image-industrial-tone object-cover"
            style={{ objectPosition: "50% 40%" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.76), rgba(10,10,10,0.42) 48%, rgba(10,10,10,0.22) 72%), linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0.62))",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 520px at 30% 40%, rgba(0,0,0,0.00), rgba(0,0,0,0.55) 70%), radial-gradient(900px 640px at 85% 35%, rgba(0,0,0,0.00), rgba(0,0,0,0.45) 72%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
          aria-hidden
        />
        <div
          className="industrial-grain absolute inset-0 opacity-[0.18] mix-blend-overlay"
          aria-hidden
        />
      </div>

      <div className="relative">
        <HomeShell>
          <div className="py-20 sm:py-24 lg:py-32">
            <div className="max-w-[860px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Tartupak · Corrugated box manufacturer
              </p>

              <h1 className="mt-5 font-heading text-[clamp(46px,5.2vw,82px)] font-[900] leading-[0.96] tracking-[-0.045em] text-white">
                Corrugated box manufacturing
                <br />
                for business production
              </h1>

              <p className="mt-6 max-w-[680px] text-base leading-[1.8] text-white/82 sm:text-lg">
                Custom cardboard boxes and corrugated packaging manufactured for
                logistics, food, e-commerce and industrial companies.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  href="/contact"
                  className="bg-black text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.42)]"
                >
                  Request a quote
                </Button>
                <Button
                  href="/products"
                  variant="secondary"
                  className="border-white/24 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-[10px] hover:bg-white/14 hover:shadow-[0_14px_38px_rgba(0,0,0,0.28)]"
                >
                  View box types
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <HeroStat label="Production" value="B2B only" />
                <HeroStat label="Capacity" value="Scalable volumes" />
                <HeroStat label="Lead times" value="Predictable" />
                <HeroStat label="Delivery" value="Regional" />
              </div>
            </div>
          </div>
        </HomeShell>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[16px] border border-white/18 bg-white/7 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[6px]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold tracking-[-0.01em] text-white/90">
        {value}
      </div>
    </div>
  );
}

