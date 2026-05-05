"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Slow down to a premium, calm tempo.
    v.playbackRate = 0.55;
  }, []);

  return (
    <section
      className="relative min-h-[90vh] overflow-hidden border-b border-border"
      style={{
        background:
          "radial-gradient(circle at 65% 40%, rgba(255,255,255,0.35), rgba(0,0,0,0.05) 60%), linear-gradient(to bottom, #f6f3ee, #ebe7df)",
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{
          transform: "translateY(2%) scale(1.05)",
          filter: "contrast(1.05) brightness(1.02) saturate(1.02)",
          objectPosition: "55% center",
        }}
        aria-hidden
      >
        <source src="/videos/hero-box.mp4" type="video/mp4" />
      </video>

      {/* Depth + lighting overlays (combined) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.25), transparent 60%), linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.05) 70%), linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25))",
        }}
        aria-hidden
      />

      {/* Ground shadow under product (realism) */}
      <div
        className="pointer-events-none absolute left-[62%] top-[68%] z-[1] h-[22rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 blur-2xl md:h-[26rem] md:w-[54rem] lg:h-[30rem] lg:w-[64rem]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,0,0,0.30), rgba(0,0,0,0.0) 70%)",
        }}
        aria-hidden
      />

      {/* Subtle light on box (top-left highlight) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(680px 420px at 44% 18%, rgba(255,255,255,0.10), transparent 60%)",
        }}
        aria-hidden
      />

      {/* Soft bottom fade into warm off-white */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 sm:h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(247,243,236,0) 0%, rgba(247,243,236,0.95) 100%)",
        }}
        aria-hidden
      />

      {/* Content layer */}
      <div className="relative z-[2] mx-auto flex min-h-[90vh] w-full max-w-[1720px] flex-col justify-center px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="flex w-full flex-col items-center text-center md:ml-[12%] md:items-start md:text-left lg:translate-y-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
            TARTUPAK · Estonian packaging manufacturer
          </p>

          <h1
            className="mt-4 max-w-[980px] font-heading text-[clamp(84px,13vw,220px)] font-[900] uppercase leading-[0.85] tracking-[-0.06em]"
            style={{ color: "rgba(255,255,255,0.86)", mixBlendMode: "overlay" }}
          >
            PACKAGING
          </h1>

          <h2 className="mt-3 max-w-[640px] text-[clamp(26px,4.4vw,54px)] font-bold leading-[0.95] tracking-[-0.02em] text-white">
            Cardboard packaging for modern production
          </h2>

          <p className="mt-7 max-w-[520px] text-base leading-[1.75] text-white/85 md:text-lg">
            Custom corrugated cardboard packaging for logistics, food production
            and industry.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button
              href="/contact"
              className="min-h-12 rounded-full px-6 py-3 shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.28)]"
            >
              Get a quote
            </Button>
            <Button
              href="/fefco"
              variant="secondary"
              className="min-h-12 rounded-full border border-white/40 bg-white/90 px-6 py-3 text-foreground shadow-sm backdrop-blur-[10px] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_32px_rgba(0,0,0,0.16)]"
            >
              Browse FEFCO catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
