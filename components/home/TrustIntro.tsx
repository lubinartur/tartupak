import { Button } from "@/components/ui/Button";
import { HomeShell } from "@/components/home/HomeShell";

export function TrustIntro() {
  return (
    <section className="bg-background">
      <HomeShell>
        <div className="py-14 sm:py-18 lg:py-22">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Trust & experience
              </p>
              <div className="mt-5 rounded-[16px] border border-black/12 bg-card px-6 py-7 shadow-[0_10px_22px_rgba(0,0,0,0.07),0_1px_0_rgba(0,0,0,0.06)]">
                <div className="text-[52px] font-[850] leading-none tracking-[-0.04em] text-foreground">
                  20+
                </div>
                <div className="mt-2 text-sm font-semibold text-muted">
                  years of manufacturing experience
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-heading text-[clamp(22px,2.1vw,34px)] font-[800] leading-tight tracking-[-0.02em] text-foreground">
                A production partner for companies that depend on consistent
                corrugated boxes.
              </h2>
              <p className="mt-4 max-w-[820px] text-base leading-[1.85] text-muted">
                We manufacture corrugated cardboard boxes for businesses that
                need reliable quality, predictable tolerances and flexible
                volumes — from repeat logistics shipments to custom box
                construction for specific products.
              </p>

              <div className="mt-7">
                <Button href="/about" variant="secondary" className="border-black/10">
                  More about Tartupak
                </Button>
              </div>
            </div>
          </div>
        </div>
      </HomeShell>
    </section>
  );
}

