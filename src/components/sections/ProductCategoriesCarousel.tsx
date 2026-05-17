"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ProductCategoryCard,
  type ProductCategoryCardData,
} from "@/components/products/ProductCategoryCard";
import { cn } from "@/lib/utils";

const GAP = 16;
const AUTO_SCROLL_PX_PER_SEC = 30;

const arrowClass =
  "shrink-0 rounded-full border border-brand-border bg-white p-2 text-brand-green shadow-sm transition-colors hover:bg-brand-green hover:text-white";

function getCardsPerView(width: number): number {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

type ProductCategoriesCarouselProps = {
  cards: ProductCategoryCardData[];
};

export function ProductCategoriesCarousel({ cards }: ProductCategoriesCarouselProps) {
  const tAria = useTranslations("common.aria");
  const scrollRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const loopCards = useMemo(() => [...cards, ...cards], [cards]);

  const measure = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const perView = getCardsPerView(el.clientWidth);
    const width = (el.clientWidth - (perView - 1) * GAP) / perView;
    setCardWidth(width);
    loopWidthRef.current = el.scrollWidth / 2;
  }, []);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [cards, measure]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    loopWidthRef.current = el.scrollWidth / 2;
  }, [cardWidth, loopCards.length]);

  const scrollStep = cardWidth > 0 ? cardWidth + GAP : 0;

  const scrollByCard = useCallback(
    (direction: -1 | 1) => {
      const el = scrollRef.current;
      if (!el || scrollStep <= 0) return;

      setIsPaused(true);
      el.scrollBy({ left: direction * scrollStep, behavior: "auto" });
    },
    [scrollStep],
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.style.scrollSnapType = isPaused ? "x mandatory" : "none";

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
        aria-label={tAria("scrollLeft")}
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="scrollbar-hide min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto"
      >
        <div className="flex w-max flex-row gap-4 py-1">
          {loopCards.map((card, index) => (
            <div
              key={`${card.slug}-${index}`}
              className="snap-start shrink-0"
              style={cardWidth > 0 ? { width: cardWidth } : undefined}
            >
              <ProductCategoryCard
                slug={card.slug}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(1)}
        className={cn(arrowClass)}
        aria-label={tAria("scrollRight")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
