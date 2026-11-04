import type { Metadata } from "next";

/** Set NEXT_PUBLIC_SITE_URL before an authorised deployment to another origin. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
export const siteName = "Stake Global";

export function pageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  const artwork =
    pathname === "/platforms/"
      ? {
          url: "/assets/platforms-glass.webp",
          alt: "Ruby glass fins in interlocking waves",
        }
      : pathname === "/about/"
        ? {
            url: "/assets/global-glass.webp",
            alt: "Sculptural ruby glass globe",
          }
        : {
            url: "/assets/red-glass-hero.webp",
            alt: "Ruby-red sculptural glass ribbon",
          };
  const canonical = `${siteUrl}${pathname}`;
  const imageUrl = `${siteUrl}${artwork.url}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1536,
          height: 1024,
          alt: artwork.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
