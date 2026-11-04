import Link from "next/link";
import { siteUrl } from "@/lib/site";

export function Breadcrumbs({ label, path }: { label: string; path: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${siteUrl}${path}`,
      },
    ],
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="eyebrow breadcrumbs">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">
            <span aria-hidden="true">/</span>
            {label}
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
