import type { NextConfig } from "next";

/*
  Basic Content-Security-Policy.
  'unsafe-inline' is needed for Next.js bootstrap scripts, the JSON-LD tag and
  injected styles; 'unsafe-eval' keeps `next dev` working. Tighten with nonces
  before launch. When the Google Maps embed is added, allow its frame/img/script
  origins here (e.g. frame-src https://www.google.com).
*/
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  images: {
    // Placeholder assets are first-party SVGs. next/image refuses SVGs by
    // default, so allow them but sandbox the optimizer response. Real photos
    // (JPG/PNG/WebP) won't need this — it can be removed once placeholders go.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
