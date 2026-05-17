import type { MetadataRoute } from "next";
import { fefcoCatalogCodes } from "@/data/fefco";
import { productSlugs } from "@/data/products";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/fefco", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

function localeUrl(locale: string, path: string): string {
  const suffix = path === "/" ? "" : path;
  return `${SITE_URL}/${locale}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  for (const locale of routing.locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: localeUrl(locale, route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }

    for (const slug of productSlugs) {
      entries.push({
        url: localeUrl(locale, `/products/${slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const code of fefcoCatalogCodes) {
      entries.push({
        url: localeUrl(locale, `/fefco/${code}`),
        lastModified,
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
