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
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Andrea Churba — Psicóloga · Coach de líderes" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Andrea Churba — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}#andrea`,
      name: "Andrea Churba",
      jobTitle: "Psicóloga · Coach de líderes",
      description: siteConfig.description,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/andrea/andrea-bw.jpg`,
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
        siteConfig.social.youtube,
      ],
      knowsAbout: [
        "Liderazgo",
        "Cambio cultural",
        "Coaching ejecutivo",
        "Psicología organizacional",
        "Business Therapy",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Business Therapy",
        url: siteConfig.url,
      },
      nationality: "Argentina",
      knowsLanguage: ["es", "en", "pt"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}#service`,
      name: "Business Therapy",
      provider: { "@id": `${siteConfig.url}#andrea` },
      areaServed: ["Argentina", "Latinoamérica", "España"],
      url: siteConfig.url,
      description: "Procesos de cambio cultural, coaching ejecutivo, charlas y workshops.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Organizaciones y Cultura",
              description: "Acompañamiento a equipos directivos en procesos de cambio cultural.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Coaching para personas que trabajan",
              description: "Coaching uno a uno para líderes en puntos de inflexión.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Experiencias de aprendizaje",
              description: "Keynotes, workshops y programas in-company.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      url: siteConfig.url,
      name: "Andrea Churba",
      inLanguage: "es-AR",
      publisher: { "@id": `${siteConfig.url}#andrea` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${mono.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
