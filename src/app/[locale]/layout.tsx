import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { absoluteUrl, openGraphLocale, SITE_URL } from "@/lib/seo";
import "../globals.css";

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
    openGraph: {
      siteName: "Tartupak",
      type: "website",
      locale: openGraphLocale(locale),
      title: t("title"),
      description: t("description"),
      url: absoluteUrl(locale, "/"),
      images: [{ url: "/images/bespoke-packaging.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/bespoke-packaging.png"],
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
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <div className="kraft-texture" aria-hidden />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
