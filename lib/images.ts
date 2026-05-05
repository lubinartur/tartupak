import fs from "node:fs";
import path from "node:path";

/**
 * Stable public URL paths (leading slash) for marketing images.
 * Files may be absent until art is added — use existence helpers before rendering.
 */
export const IMAGE_PATHS = {
  brand: {
    logo: "/images/brand/logo.svg",
  },
  hero: {
    homepage: "/images/hero/homepage-hero.webp",
  },
  process: {
    dieCutting: "/images/process/manufacturing-die-cutting.webp",
    printing: "/images/process/manufacturing-printing.webp",
    stacking: "/images/process/manufacturing-stacking.webp",
  },
} as const;

/** Raster product art: `/images/products/{slug}.webp` */
export function productImagePublicPath(slug: string): string {
  return `/images/products/${slug}.webp`;
}

/** Raster FEFCO art: `/images/fefco/{code}.webp` */
export function fefcoImagePublicPath(code: string): string {
  return `/images/fefco/${code}.webp`;
}

/** About / company imagery under `/images/about/` */
export function aboutImagePublicPath(filename: string): string {
  return `/images/about/${filename}`;
}

/** Neutral textures or shared fallbacks */
export function placeholderImagePublicPath(filename: string): string {
  return `/images/placeholders/${filename}`;
}

function absolutePublicPath(...segments: string[]): string {
  return path.join(process.cwd(), "public", ...segments);
}

/** True if `public/images/...` file exists (server-only). */
export function publicImageFileExists(...segments: string[]): boolean {
  try {
    return fs.existsSync(absolutePublicPath(...segments));
  } catch {
    return false;
  }
}

/** Homepage hero raster at `public/images/hero/homepage-hero.webp`. */
export function homepageHeroImageExists(): boolean {
  return publicImageFileExists("images", "hero", "homepage-hero.webp");
}
