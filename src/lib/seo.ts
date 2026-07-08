import type { Metadata } from "next";
import { site, openingHoursSpec } from "@/content/site";

/**
 * Build page metadata with sensible defaults.
 * Titles use the template defined on the root layout, so pass only the page title.
 */
export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} · ${site.name}` : site.name,
      description,
      url: path,
      siteName: site.name,
      locale: "en_MT",
      type: "website",
      images: [
        {
          // PLACEHOLDER Open Graph image — replace with a real 1200×630 asset.
          url: "/images/og-placeholder.svg",
          width: 1200,
          height: 630,
          alt: `${site.name} (placeholder)`,
        },
      ],
    },
  };
}

/**
 * Schema.org Pharmacy structured data.
 * Address is real; phone, email and opening hours are placeholders (see content/site.ts).
 */
export function pharmacyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: site.name,
    url: site.PLACEHOLDER_url,
    telephone: site.PLACEHOLDER_phone,
    email: site.PLACEHOLDER_email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressCountry: "MT",
    },
    openingHoursSpecification: openingHoursSpec.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
  };
}
