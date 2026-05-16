"use client";

import { useEffect, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target: number, active: boolean, duration = 1.5): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);

  return value;
}
