"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CorrugatedStackVisual } from "@/components/visuals/CorrugatedStackVisual";

const BASE_TRANSFORM =
  "rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)";

const PARALLAX_ROT_MAX = 4;
const PARALLAX_TRANS_MAX = 8;

function HeroVisualShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-[min(94vw,560px)] sm:max-w-[min(94vw,640px)] lg:max-w-[820px]">
      {children}
    </div>
  );
}

export function StaticHeroBoxVisual() {
  return (
    <HeroVisualShell>
      <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden lg:justify-end">
        <Image
          src="/images/hero/hero-cardboard-box.png"
          alt="Corrugated cardboard box"
          width={900}
          height={900}
          className="h-full w-full object-contain"
          priority
          sizes="(max-width: 1024px) 92vw, 74vw"
        />
      </div>
    </HeroVisualShell>
  );
}

export default function HeroAnimatedVisual() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [pngFailed, setPngFailed] = useState(false);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const moveRef = useRef({ x: 0, y: 0 });
  const tickingRef = useRef(false);

  useEffect(() => {
    const compute = () => {
      const ok =
        window.innerWidth >= 1024 &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      setParallaxEnabled(ok);
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const applyTransform = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

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
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[min(22rem,92vw)] overflow-x-clip overflow-y-visible sm:max-w-[min(30rem,94vw)] lg:mx-0 lg:ml-0 lg:flex lg:max-w-none lg:justify-end lg:overflow-visible lg:[perspective:1200px]"
      onMouseMove={parallaxEnabled ? onMouseMove : undefined}
      onMouseLeave={parallaxEnabled ? onMouseLeave : undefined}
    >
      <div className="hero-box-idle-float-subtle relative h-[min(48vh,22rem)] w-full max-w-full overflow-visible lg:absolute lg:left-auto lg:right-[2vw] lg:top-1/2 lg:h-[min(56vh,520px)] lg:min-h-[min(48vh,480px)] lg:w-full lg:max-w-[820px] lg:-translate-y-1/2">
        <HeroVisualShell>
          <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden lg:justify-end">
            {videoFailed ? (
              !pngFailed ? (
                <Image
                  src="/images/hero/hero-cardboard-box.png"
                  alt="Corrugated cardboard box"
                  width={900}
                  height={900}
                  className="h-full w-full object-contain"
                  priority
                  sizes="(max-width: 1024px) 92vw, 74vw"
                  onError={() => setPngFailed(true)}
                />
              ) : (
                <CorrugatedStackVisual className="h-[90%] w-[90%] max-h-[24rem] lg:max-h-none" />
              )
            ) : parallaxEnabled ? (
              <div
                ref={innerRef}
                className="relative h-full w-full overflow-visible will-change-transform [transform-style:preserve-3d] transition-[transform] duration-200 ease-out"
                style={{ transform: BASE_TRANSFORM }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-contain"
                  aria-hidden
                  onLoadedData={() => {
                    const main = videoRef.current;
                    if (main) main.playbackRate = 0.7;
                  }}
                  onError={() => setVideoFailed(true)}
                >
                  <source src="/videos/hero-box.mp4" type="video/mp4" />
                </video>
              </div>
            ) : (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
                aria-hidden
                onLoadedData={() => {
                  const main = videoRef.current;
                  if (main) main.playbackRate = 0.7;
                }}
                onError={() => setVideoFailed(true)}
              >
                <source src="/videos/hero-box.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </HeroVisualShell>
      </div>
    </div>
  );
}

