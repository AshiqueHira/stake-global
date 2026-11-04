import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  poweredByHeader: false,
  ...(!staticExport
    ? {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                {
                  key: "Content-Security-Policy",
                  value:
                    "form-action 'none'; object-src 'none'; base-uri 'self'",
                },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                { key: "X-Content-Type-Options", value: "nosniff" },
              ],
            },
          ];
        },
      }
    : {}),
};
export default nextConfig;
