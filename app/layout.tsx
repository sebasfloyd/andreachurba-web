import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import LenisProvider from "@/components/shared/LenisProvider";
import RevealObserver from "@/components/shared/RevealObserver";
import VideoModalProvider from "@/components/shared/VideoModal";
import ColumnaModalProvider from "@/components/shared/ColumnaModal";
import { siteConfig } from "@/lib/constants/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Andrea Churba — ${siteConfig.tagline}`,
    template: `%s · Andrea Churba`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.url,
    title: `Andrea Churba — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: "Andrea Churba",
    images: [
      { url: "/images/andrea/andrea-bw.jpg", width: 1822, height: 1822, alt: "Andrea Churba" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Andrea Churba — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/andrea/andrea-bw.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${mono.variable} ${fraunces.variable}`}
    >
      <body>
        <VideoModalProvider>
          <ColumnaModalProvider>
            <LenisProvider>{children}</LenisProvider>
          </ColumnaModalProvider>
        </VideoModalProvider>
        <RevealObserver />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
