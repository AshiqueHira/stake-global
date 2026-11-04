export const dynamic = "force-static";

import type { MetadataRoute } from "next";
/** Keep the review out of search engines until public release is approved. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
