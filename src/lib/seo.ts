import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

// Canonical host: the apex domain (tartupak.ee) redirects to www.
export const SITE_URL = "https://www.tartupak.ee";

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  et: "et_EE",
  en: "en_US",
  ru: "ru_RU",
};

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
