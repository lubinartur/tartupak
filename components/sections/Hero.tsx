"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CorrugatedStackVisual } from "@/components/visuals/CorrugatedStackVisual";

const HERO_VIDEO_MP4 = "/videos/hero-box.mp4";
const HERO_BOX_PNG_PUBLIC = "/images/hero/hero-cardboard-box.png";

const HERO_MEDIA_CROP_SCALE = 1.35;

const BASE_TRANSFORM =
  "rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)";

const PARALLAX_ROT_MAX = 4;
const PARALLAX_TRANS_MAX = 8;

function canUseParallax(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.innerWidth >= 1024 &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

/** Layout width only — no masks, shadows, glows, or backgrounds */
function HeroVisualShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-[min(94vw,560px)] sm:max-w-[min(94vw,640px)] lg:max-w-[820px]">
      {children}
    </div>
  );
}

function HeroFloatingBoxes() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [pngFailed, setPngFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const moveRef = useRef({ x: 0, y: 0 });
  const tickingRef = useRef(false);

  const applyPlaybackRate = useCallback(() => {
    const main = videoRef.current;
    if (main) main.playbackRate = 0.7;
  }, []);

  useEffect(() => {
    applyPlaybackRate();
  }, [applyPlaybackRate, videoFailed]);

  const applyTransform = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    if (!canUseParallax()) {
      inner.style.transform = BASE_TRANSFORM;
      return;
    }

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = (clientX - cx) / (rect.width / 2);
    const ny = (clientY - cy) / (rect.height / 2);
    const dx = Math.max(-1, Math.min(1, nx));
    const dy = Math.max(-1, Math.min(1, ny));

    const rotateY = dx * PARALLAX_ROT_MAX;
    const rotateX = -dy * PARALLAX_ROT_MAX;
    const translateX = dx * PARALLAX_TRANS_MAX;
    const translateY = dy * PARALLAX_TRANS_MAX;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1)`;
  }, []);

  const scheduleApply = useCallback(
    (clientX: number, clientY: number) => {
      moveRef.current = { x: clientX, y: clientY };
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        tickingRef.current = false;
        applyTransform(moveRef.current.x, moveRef.current.y);
      });
    },
    [applyTransform],
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!canUseParallax()) return;
      scheduleApply(e.clientX, e.clientY);
    },
    [scheduleApply],
  );

  const onMouseLeave = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = BASE_TRANSFORM;
  }, []);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = BASE_TRANSFORM;

    const onResize = () => {
      if (!canUseParallax()) inner.style.transform = BASE_TRANSFORM;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[min(22rem,92vw)] overflow-x-clip overflow-y-visible sm:max-w-[min(30rem,94vw)] lg:mx-0 lg:ml-0 lg:flex lg:max-w-none lg:justify-end lg:overflow-visible lg:[perspective:1200px]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="hero-box-idle-float-subtle relative h-[min(48vh,22rem)] w-full max-w-full overflow-visible lg:absolute lg:left-auto lg:right-[2vw] lg:top-1/2 lg:h-[min(56vh,520px)] lg:min-h-[min(48vh,480px)] lg:w-full lg:max-w-[820px] lg:-translate-y-1/2">
        <div
          ref={innerRef}
          className="relative h-full w-full overflow-visible will-change-transform [transform-style:preserve-3d] transition-[transform] duration-200 ease-out"
          style={{ transform: BASE_TRANSFORM }}
        >
          <div className="relative h-full w-full">
            {!videoFailed ? (
              <HeroVisualShell>
                <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden lg:justify-end">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block h-full w-full max-h-full min-h-0 min-w-0 origin-center border-0 object-contain outline-none"
                    style={{ transform: `scale(${HERO_MEDIA_CROP_SCALE})` }}
                    aria-hidden
                    onLoadedData={applyPlaybackRate}
                    onError={() => setVideoFailed(true)}
                  >
                    <source src={HERO_VIDEO_MP4} type="video/mp4" />
                  </video>
                </div>
              </HeroVisualShell>
            ) : !pngFailed ? (
              <HeroVisualShell>
                <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden lg:justify-end">
                  <Image
                    src={HERO_BOX_PNG_PUBLIC}
                    alt="Corrugated cardboard box"
                    width={900}
                    height={900}
                    className="h-full w-full origin-center object-contain object-center"
                    style={{ transform: `scale(${HERO_MEDIA_CROP_SCALE})` }}
                    priority
                    sizes="(max-width: 1024px) 92vw, 74vw"
                    onError={() => setPngFailed(true)}
                  />
                </div>
              </HeroVisualShell>
            ) : (
              <HeroVisualShell>
                <div className="flex h-full w-full items-center justify-center lg:justify-end [&>svg]:max-h-full">
                  <CorrugatedStackVisual className="h-[90%] w-[90%] max-h-[24rem] lg:max-h-none" />
                </div>
              </HeroVisualShell>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="overflow-x-clip overflow-y-visible border-b border-border bg-background py-14 md:py-20 lg:py-24">
      <Container className="overflow-visible">
        <div className="relative overflow-visible">
          <div className="grid items-center gap-8 overflow-x-clip overflow-y-visible lg:grid-cols-12 lg:gap-6 xl:gap-8">
            <div className="relative z-10 min-w-0 lg:col-span-7 lg:pr-2 xl:col-span-6 xl:pr-4">
              <h1 className="text-[2.875rem] font-semibold leading-[0.98] tracking-[-0.02em] text-foreground sm:text-[3.625rem] md:text-[4rem] lg:text-[4.75rem] lg:leading-[0.98] xl:text-[5.25rem] 2xl:text-[5.75rem]">
                <span className="block">Cardboard packaging</span>
                <span className="block text-foreground/90">for modern production</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-[1.7] text-muted md:text-lg md:leading-[1.65]">
                Custom corrugated cardboard packaging for logistics, food
                production and industry.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="/contact">Get a quote</Button>
                <Button href="/fefco" variant="secondary">
                  Browse FEFCO catalog
                </Button>
              </div>
            </div>

            <div className="relative z-0 flex min-h-[16rem] justify-center overflow-x-clip overflow-y-visible lg:col-span-5 lg:min-h-[min(48vh,34rem)] xl:col-span-6">
              <HeroFloatingBoxes />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
