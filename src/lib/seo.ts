import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

// Canonical host: the apex domain (tartupak.ee) redirects to www.
export const SITE_URL = "https://www.tartupak.ee";

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  et: "et_EE",
  en: "en_US",
  ru: "ru_RU",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tartupak",
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
    image: `${SITE_URL}/images/product-${slug}.png`,
    url: absoluteUrl(locale, `/products/${slug}`),
    brand: { "@type": "Brand", name: "Tartupak" },
    manufacturer: { "@type": "Organization", name: "Tartupak", url: SITE_URL },
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
}: {
  locale: string;
  pathname: string;
  title: string;
  description: string;
  titleAbsolute?: boolean;
}): Metadata {
  const url = absoluteUrl(locale, pathname);
  const ogLocale = openGraphLocale(locale);

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, absoluteUrl(l, pathname)])),
        "x-default": absoluteUrl(routing.defaultLocale, pathname),
      },
    },
    openGraph: {
      title,
      description,
      url,
      locale: ogLocale,
      type: "website",
      siteName: "Tartupak",
    },
  };
}
