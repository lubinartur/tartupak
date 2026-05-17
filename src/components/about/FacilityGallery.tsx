"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const PHOTOS = [
  "/images/facility-1.jpg",
  "/images/facility-2.jpg",
  "/images/facility-3.jpg",
  "/images/facility-4.jpg",
] as const;

const ALT_KEYS = ["1", "2", "3", "4"] as const;

const GRID_IMAGE_CLASS =
  "object-cover transition-opacity duration-300 hover:opacity-90";

const GRID_CELL_CLASS =
  "relative cursor-pointer overflow-hidden rounded-sm transition-opacity hover:opacity-95";

export function FacilityGallery() {
  const t = useTranslations("about.facility.alt");
  const tAria = useTranslations("about.aria");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const alts = ALT_KEYS.map((key) => t(key));

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index === 0 ? PHOTOS.length - 1 : index - 1));
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index === PHOTOS.length - 1 ? 0 : index + 1));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeLightbox, showPrevious, showNext]);

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className={cn(GRID_CELL_CLASS, "row-span-2 min-h-[calc(12rem*2+0.75rem)]")}
            onClick={() => openLightbox(0)}
            aria-label={alts[0]}
          >
            <Image
              src={PHOTOS[0]}
              alt={alts[0]}
              fill
              sizes="(max-width: 1024px) 50vw, 400px"
              className={GRID_IMAGE_CLASS}
            />
          </button>
          <button
            type="button"
            className={cn(GRID_CELL_CLASS, "h-48")}
            onClick={() => openLightbox(1)}
            aria-label={alts[1]}
          >
            <Image
              src={PHOTOS[1]}
              alt={alts[1]}
              fill
              sizes="(max-width: 1024px) 50vw, 400px"
              className={GRID_IMAGE_CLASS}
            />
          </button>
          <button
            type="button"
            className={cn(GRID_CELL_CLASS, "h-48")}
            onClick={() => openLightbox(2)}
            aria-label={alts[2]}
          >
            <Image
              src={PHOTOS[2]}
              alt={alts[2]}
              fill
              sizes="(max-width: 1024px) 50vw, 400px"
              className={GRID_IMAGE_CLASS}
            />
          </button>
        </div>
        <button
          type="button"
          className={cn(GRID_CELL_CLASS, "mt-3 h-48 w-full")}
          onClick={() => openLightbox(3)}
          aria-label={alts[3]}
        >
          <Image
            src={PHOTOS[3]}
            alt={alts[3]}
            fill
            sizes="100vw"
            className={GRID_IMAGE_CLASS}
          />
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={alts[currentIndex]}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 cursor-pointer text-white transition-opacity hover:opacity-80"
            aria-label={tAria("close")}
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-sm p-2 text-white transition-opacity hover:opacity-80 md:left-8"
            aria-label={tAria("previousPhoto")}
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-sm p-2 text-white transition-opacity hover:opacity-80 md:right-8"
            aria-label={tAria("nextPhoto")}
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>

          <div
            className="relative h-[90vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={PHOTOS[currentIndex]}
              alt={alts[currentIndex]}
              fill
              sizes="(max-width: 896px) 90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
