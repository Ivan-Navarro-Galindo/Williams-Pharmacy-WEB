import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/content/site";
import { pharmacyJsonLd } from "@/lib/seo";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.PLACEHOLDER_url),
  title: {
    default: `${site.name} · Pharmacy in Birkirkara, Malta`,
    template: `%s · ${site.name}`,
  },
  description:
    "William's Pharmacy on Tower Road, Birkirkara — a community pharmacy offering wellness, skincare and mother-and-baby products, with advice you can trust. (Placeholder description.)",
  openGraph: {
    type: "website",
    locale: "en_MT",
    siteName: site.name,
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {/* Structured data for search engines (placeholder phone/email/hours). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacyJsonLd()) }}
        />
        <a
          href="#main"
          className="focus:bg-navy-800 sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
