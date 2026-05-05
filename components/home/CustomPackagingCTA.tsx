import { Button } from "@/components/ui/Button";
import { HomeShell } from "@/components/home/HomeShell";

export function CustomPackagingCTA() {
  return (
    <section className="border-t border-border bg-background">
      <HomeShell>
        <div className="py-16 sm:py-20">
          <div className="overflow-hidden rounded-[16px] border border-white/12 bg-[#0c0d10] shadow-[0_32px_86px_rgba(0,0,0,0.32)]">
            <div className="relative p-8 sm:p-10 lg:p-14">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(900px 520px at 25% 20%, rgba(199,154,91,0.28), transparent 55%), radial-gradient(760px 420px at 90% 60%, rgba(255,255,255,0.10), transparent 55%), linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(0,0,0,0))",
                }}
                aria-hidden
              />
              <div
                className="industrial-grain pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "150px 150px",
                }}
                aria-hidden
              />

              <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                    Custom packaging
                  </p>
                  <h2 className="mt-4 font-heading text-[clamp(28px,3.2vw,48px)] font-[900] leading-[1.02] tracking-[-0.03em] text-white">
                    Send dimensions, quantity and requirements — we’ll suggest
                    the right box construction.
                  </h2>
                  <p className="mt-5 max-w-[860px] text-base leading-[1.85] text-white/78">
                    Describe your product, packing method and delivery
                    conditions. We manufacture corrugated boxes that match your
                    workflow, stack reliably and arrive clean.
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Button
                      href="/contact"
                      className="w-full shadow-[0_18px_48px_rgba(0,0,0,0.38)] hover:shadow-[0_22px_56px_rgba(0,0,0,0.46)]"
                    >
                      Request a quote
                    </Button>
                    <Button
                      href="/contact"
                      variant="secondary"
                      className="w-full border-white/24 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-[10px] hover:bg-white/14"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeShell>
    </section>
  );
}

