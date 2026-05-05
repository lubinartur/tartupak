"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/**
 * Fixed CTA that auto-lifts when the footer enters view,
 * avoiding covering footer links without changing document layout.
 */
export function FloatingQuoteButton() {
  const [liftPx, setLiftPx] = useState(0);

  const baseOffsetPx = 24; // ~ bottom-6
  const rightOffsetPx = 24; // ~ right-6

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const footerRect = footer.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // If footer overlaps the bottom padding area, lift by overlap + baseOffset.
      const overlap = viewportH - footerRect.top;
      const extraLift = overlap > 0 ? overlap + baseOffsetPx : 0;

      setLiftPx(clamp(extraLift, 0, 240));
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const ro = new ResizeObserver(onScrollOrResize);
    ro.observe(footer);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro.disconnect();
    };
  }, []);

  const style = useMemo(
    () =>
      ({
        right: rightOffsetPx,
        bottom: baseOffsetPx + liftPx,
      }) as const,
    [liftPx],
  );

  return (
    <div
      className="fixed z-50 hidden sm:block"
      style={style}
      aria-hidden={false}
    >
      <Link
        href="/contact"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_rgba(17,24,39,0.14)] transition-colors hover:bg-forest-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        Get a quote
      </Link>
    </div>
  );
}

