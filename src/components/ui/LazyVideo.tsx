"use client";

import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Decorative looping video that only downloads once it is close to the viewport,
 * and stays on its poster when the visitor prefers reduced motion.
 */
export function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        video.src = src;
        void video.play().catch(() => {
          // Autoplay can be blocked (e.g. data saver); the poster stays visible.
        });
        observer.disconnect();
      },
      { rootMargin: "300px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
    />
  );
}
