import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";

const LIBROS_SLUGS = [
  "business-therapy",
  "lidera-tu-propio-cambio",
  "recursos-y-herramientas",
  "diez-habilidades",
  "liderar-los-cambios",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/notas`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...LIBROS_SLUGS.map((slug) => ({
      url: `${base}/libros/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
