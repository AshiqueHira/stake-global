import { assetPath } from "@/lib/paths";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stake Global | Trade Beyond the Limits.",
  description:
    "Explore Stake Global, its markets, and available trading platforms.",
  robots: { index: false, follow: false },
  icons: { icon: assetPath("/assets/stake-logo.webp") },
};

export const viewport: Viewport = { themeColor: "#090909" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
