import Link from "next/link";
import type { ReactNode } from "react";
export function ArrowIcon({
  direction = "up-right",
}: {
  direction?: "up-right" | "down";
}) {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
    >
      {direction === "down" ? (
        <g transform="rotate(135 8 8)">
          <ArrowShape />
        </g>
      ) : (
        <ArrowShape />
      )}
    </svg>
  );
}
// Up-right arrow: long thin shaft with a solid (closed) triangular head,
// matching the system "↗" glyph without relying on fonts/emoji.
function ArrowShape() {
  return (
    <>
      <path
        d="M3.84 12.16 10.16 5.84"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M12.16 3.84 12.07 8.13 7.87 3.93Z" fill="currentColor" />
    </>
  );
}
export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      <ArrowIcon />
    </span>
  );
}
export function ButtonLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`btn ${className}`} href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function FAQItem({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <details>
      <summary>{question}</summary>
      <p>{children}</p>
    </details>
  );
}
