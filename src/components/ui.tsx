import Link from "next/link";
import type { ReactNode } from "react";
export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
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
