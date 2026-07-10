import Link from "next/link";
import { site } from "@/content/site";

/**
 * Brand lockup: mark + "William's / Pharmacy" wordmark + tagline.
 * `solid` mirrors the header's background state — over a transparent hero the
 * gold/navy palette has no reliable contrast, so it falls back to plain white.
 */
export default function Logo({ solid }: { solid: boolean }) {
  const markColor = solid ? "text-gold-600" : "text-white";
  const primaryColor = solid ? "text-gold-600" : "text-white";
  const secondaryColor = solid ? "text-navy-800" : "text-white";
  const taglineColor = solid ? "text-gold-700" : "text-white/80";

  return (
    <Link href="/" className="flex flex-col gap-1" aria-label={site.name}>
      <span className="flex items-center gap-2">
        <LogoMark className={`h-7 w-7 shrink-0 sm:h-8 sm:w-8 ${markColor}`} />
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display text-lg font-bold tracking-wide sm:text-xl ${primaryColor}`}
          >
            William&apos;s
          </span>
          <span
            className={`text-[0.65rem] font-semibold tracking-[0.3em] sm:text-xs ${secondaryColor}`}
          >
            PHARMACY
          </span>
        </span>
      </span>
      <span
        className={`text-[0.6rem] font-medium tracking-[0.15em] sm:text-[0.65rem] ${taglineColor}`}
      >
        {site.tagline}
      </span>
    </Link>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 4v24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 8c-3 1.4-5 2.8-5 4.6S13 16 16 16s5 1.6 5 3.4-2 3.2-5 4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 9.5c1.4-2.3 3.8-3.2 6-1.8M24 9.5c-1.4-2.3-3.8-3.2-6-1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="4" r="1.5" fill="currentColor" />
    </svg>
  );
}
