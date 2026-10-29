import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

// Canonical host: the apex domain (tartupak.ee) redirects to www.
export const SITE_URL = "https://www.tartupak.ee";

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  et: "et_EE",
  en: "en_US",
  ru: "ru_RU",
};

export type SocialImage = { url: string; width: number; height: number };

/** Real pixel size of public/images/og-image.png. */
export const DEFAULT_SOCIAL_IMAGE: SocialImage = {
  url: "/images/og-image.png",
  width: 1024,
  height: 537,
};

/** Bump when page content changes; used for sitemap <lastmod> instead of the build time. */
export const CONTENT_LAST_UPDATED = new Date("2026-10-11");

const MAX_DESCRIPTION_LENGTH = 155;

/** Keeps meta descriptions within what search results show: cut at a sentence end, else at a word. */
export function trimDescription(text: string, max = MAX_DESCRIPTION_LENGTH): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  for (let i = max - 1; i >= 80; i--) {
    if (".!?".includes(clean[i]) && (clean[i + 1] === " " || i + 1 === clean.length)) {
      return clean.slice(0, i + 1);
    }
  }

  const cut = clean.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${(space > 0 ? cut.slice(0, space) : cut).replace(/[\s,;:\-—]+$/, "")}…`;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tartupak",
  legalName: "Tartu Pak OÜ",
  identifier: {
    "@type": "PropertyValue",
    name: "Estonian commercial register code",
    value: "10739054",
  },
  url: SITE_URL,
  logo: `${SITE_URL}/logo-tartupak.svg`,
  image: `${SITE_URL}/images/og-image.png`,
  email: "info@tartupak.ee",
  telephone: "+372 534 99642",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tamme 35, Tõrvandi alevik",
    addressLocality: "Ülenurme vald",
    addressRegion: "Tartumaa",
    postalCode: "61715",
    addressCountry: "EE",
  },
  openingHours: "Mo-Fr 08:00-16:30",
} as const;

export function productJsonLd({
  locale,
  slug,
  name,
  description,
}: {
  locale: string;
  slug: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${SITE_URL}/images/product-${slug}.webp`,
    url: absoluteUrl(locale, `/products/${slug}`),
    brand: { "@type": "Brand", name: "Tartupak" },
    manufacturer: { "@type": "Organization", name: "Tartupak", url: SITE_URL },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localizedPath(locale: string, pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const suffix = path === "/" ? "" : path;
  return `/${locale}${suffix}`;
}

export function absoluteUrl(locale: string, pathname: string): string {
  return `${SITE_URL}${localizedPath(locale, pathname)}`;
}

export function openGraphLocale(locale: string): string {
  return OPEN_GRAPH_LOCALES[locale] ?? "en_US";
}

export function createPageMetadata({
  locale,
  pathname,
  title,
  description,
  titleAbsolute = false,
  image = DEFAULT_SOCIAL_IMAGE,
}: {
  locale: string;
  pathname: string;
  title: string;
  description: string;
  titleAbsolute?: boolean;
  image?: SocialImage;
}): Metadata {
  const url = absoluteUrl(locale, pathname);
  const ogLocale = openGraphLocale(locale);
  const metaDescription = trimDescription(description);

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description: metaDescription,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, absoluteUrl(l, pathname)])),
        "x-default": absoluteUrl(routing.defaultLocale, pathname),
      },
    },
    openGraph: {
      title,
      description: metaDescription,
      url,
      locale: ogLocale,
      type: "website",
      siteName: "Tartupak",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [image.url],
    },
  };
}
