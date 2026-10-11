import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Inter, Playfair_Display } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { CookieBanner } from "@/components/analytics/CookieBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, DEFAULT_SOCIAL_IMAGE, openGraphLocale, organizationJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";

// Self-hosted at build time: no requests to Google Fonts from the visitor's browser.
// DM Serif Display and DM Sans have no Cyrillic glyphs (Russian pages fall back to the serif/sans stack).
const dmSerif = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});
const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-dm-sans",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: "%s | Tartupak",
    },
    description: t("description"),
    verification: {
      // Google Search Console ownership (HTML tag method).
      google: "5FozUwfcYv3yYD--z_sPNf9SNf6-NyZuS49VT69wcLo",
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      siteName: "Tartupak",
      type: "website",
      locale: openGraphLocale(locale),
      title: t("title"),
      description: t("description"),
      url: absoluteUrl(locale, "/"),
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      images: [DEFAULT_SOCIAL_IMAGE.url],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${dmSerif.variable} ${playfair.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="kraft-texture" aria-hidden />
        <JsonLd data={organizationJsonLd} />
        <GoogleTagManager />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
