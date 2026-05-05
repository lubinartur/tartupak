"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { HomeShell } from "@/components/home/HomeShell";

const steps = [
  {
    key: "01",
    title: "Request",
    body: "Send box type (or product use), dimensions, quantity, and delivery expectations. We’ll confirm feasibility and timelines.",
  },
  {
    key: "02",
    title: "Dimensions and material",
    body: "We select corrugated board grade, flute, and construction based on load, stacking, and transport conditions.",
  },
  {
    key: "03",
    title: "Sample / confirmation",
    body: "A sample or dieline confirmation ensures the box construction matches your packing line and product fit.",
  },
  {
    key: "04",
    title: "Production",
    body: "We manufacture in controlled batches to keep dimensions consistent across runs and quantities.",
  },
  {
    key: "05",
    title: "Delivery",
    body: "Boxes are stacked, packed and prepared for delivery with clear labeling and batch traceability.",
  },
] as const;

const stepImages: Record<(typeof steps)[number]["key"], string> = {
  "01": "/images/home/grid-1.jpg",
  "02": "/images/home/grid-2.jpg",
  "03": "/images/home/grid-3.jpg",
  "04": "/images/home/grid-5.jpg",
  "05": "/images/home/grid-6.jpg",
};

export function ManufacturingProcess() {
  const [openKey, setOpenKey] = useState<(typeof steps)[number]["key"]>("01");
  const open = useMemo(
    () => steps.find((s) => s.key === openKey) ?? steps[0],
    [openKey],
  );
  const [displayImage, setDisplayImage] = useState(stepImages[openKey]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const next = stepImages[openKey];
    setFading(true);
    const t = window.setTimeout(() => {
      setDisplayImage(next);
      setFading(false);
    }, 140);
    return () => window.clearTimeout(t);
  }, [openKey]);

  return (
    <section className="bg-background">
      <HomeShell>
        <div className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Manufacturing process
              </p>
              <h2 className="mt-3 font-heading text-[clamp(28px,3vw,44px)] font-[850] leading-[1.06] tracking-[-0.03em] text-foreground">
                From request to production-ready boxes
              </h2>

              <div className="mt-8 overflow-hidden rounded-[16px] border border-black/12 bg-card shadow-[0_10px_22px_rgba(0,0,0,0.07),0_1px_0_rgba(0,0,0,0.06)]">
                {steps.map((s, idx) => {
                  const isOpen = s.key === openKey;
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setOpenKey(s.key)}
                      className={`w-full text-left transition-colors ${
                        idx !== 0 ? "border-t border-border" : ""
                      } ${isOpen ? "bg-black/[0.03]" : "bg-card hover:bg-black/[0.015]"}`}
                    >
                      <div className="flex items-start gap-5 px-6 py-5">
                        <div
                          className={`min-w-[40px] rounded-full border px-3 py-1 text-center text-[11px] font-semibold tracking-[0.18em] shadow-sm ${
                            isOpen
                              ? "border-black/25 bg-white text-foreground"
                              : "border-black/10 bg-white text-foreground"
                          }`}
                        >
                          {s.key}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <div className="font-heading text-base font-[900] tracking-[-0.02em] text-foreground">
                              {s.title}
                            </div>
                            <div className="text-muted" aria-hidden>
                              {isOpen ? "–" : "+"}
                            </div>
                          </div>
                          {isOpen ? (
                            <p className="mt-3 pr-8 text-sm leading-[1.8] text-muted">
                              {s.body}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      {isOpen ? (
                        <div
                          className="pointer-events-none h-[2px] w-full"
                          style={{
                            background:
                              "linear-gradient(to right, rgba(199,154,91,0.70), rgba(199,154,91,0))",
                          }}
                          aria-hidden
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[16px] border border-black/12 bg-card shadow-[0_10px_22px_rgba(0,0,0,0.07),0_1px_0_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[16/12] overflow-hidden rounded-[16px]">
                  <Image
                    src={displayImage}
                    alt="Factory production line"
                    fill
                    className={`image-industrial-tone object-cover transition-transform duration-500 ease-out ${
                      fading ? "scale-[1.02]" : "scale-[1.01]"
                    }`}
                    style={{ objectPosition: "55% 55%" }}
                  />
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ease-out ${
                      fading ? "opacity-[0.18]" : "opacity-0"
                    }`}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.35))",
                    }}
                    aria-hidden
                  />
                </div>

                <div className="px-7 pb-7 pt-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                    Currently selected
                  </div>
                  <div className="mt-2 font-heading text-xl font-[850] tracking-[-0.02em] text-foreground">
                    {open.key} — {open.title}
                  </div>
                  <p className="mt-3 max-w-[700px] text-sm leading-[1.85] text-muted">
                    {open.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeShell>
    </section>
  );
}

