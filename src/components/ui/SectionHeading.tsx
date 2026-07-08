import type { ReactNode } from "react";

/**
 * Consistent section header: small gold eyebrow, display-serif title, optional intro.
 * `as` controls the heading level so each page can keep a single <h1>.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Heading = "h2",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-gold-700 mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-navy-800 text-3xl leading-tight font-semibold sm:text-4xl">
        {title}
      </Heading>
      {intro ? (
        <div className="text-navy-600 mt-5 text-lg leading-relaxed">
          {intro}
        </div>
      ) : null}
    </div>
  );
}
