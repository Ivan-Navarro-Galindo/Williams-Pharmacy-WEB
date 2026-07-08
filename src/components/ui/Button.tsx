import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-navy-800 text-white hover:bg-navy-700",
  outline:
    "border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
};

/** Renders a Next.js Link when `href` is given, otherwise a native button. */
export default function Button({
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  children,
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  return href ? (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
