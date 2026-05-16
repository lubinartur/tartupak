"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ProductCategoryCard,
  type ProductCategoryCardData,
} from "@/components/products/ProductCategoryCard";
import { cn } from "@/lib/utils";

const CARD_WIDTH = 280;
const GAP = 16;
const SCROLL_STEP = CARD_WIDTH + GAP;
const AUTO_SCROLL_PX_PER_SEC = 30;

const arrowClass =
  "shrink-0 rounded-full border border-brand-border bg-white p-2 text-brand-green shadow-sm transition-colors hover:bg-brand-green hover:text-white";

type ProductCategoriesCarouselProps = {
  cards: ProductCategoryCardData[];
};

export function ProductCategoriesCarousel({ cards }: ProductCategoriesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const loopCards = useMemo(() => [...cards, ...cards], [cards]);

  const measureLoop = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    loopWidthRef.current = el.scrollWidth / 2;
  }, []);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    measureLoop();

    const resizeObserver = new ResizeObserver(measureLoop);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [cards, measureLoop]);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;

    setIsPaused(true);
    el.scrollBy({ left: direction * SCROLL_STEP, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPaused) {
        el.scrollLeft += (AUTO_SCROLL_PX_PER_SEC * delta) / 1000;

        const loopWidth = loopWidthRef.current;
        if (loopWidth > 0 && el.scrollLeft >= loopWidth) {
          el.scrollLeft -= loopWidth;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <div
      className="flex items-center gap-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        className={cn(arrowClass)}
        aria-label="Scroll categories left"
      >
        <ChevronLeft size={20} />
      </button>

      <div ref={scrollRef} className="scrollbar-hide min-w-0 flex-1 overflow-x-auto">
        <div className="flex w-max flex-row gap-4 py-1 pl-4 pr-4">
          {loopCards.map((card, index) => (
            <ProductCategoryCard
              key={`${card.slug}-${index}`}
              slug={card.slug}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(1)}
        className={cn(arrowClass)}
        aria-label="Scroll categories right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
