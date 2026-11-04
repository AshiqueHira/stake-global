export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "markets",
    "platforms",
    "about",
    "contact",
    "open-account",
    "faqs",
    "important-information",
  ].map((slug) => ({
    url: `${siteUrl.replace(/\/$/, "")}/${slug ? `${slug}/` : ""}`,
  }));
}
