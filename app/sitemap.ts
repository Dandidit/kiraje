import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kiraje.my";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/kalkulator/gaji-bersih`, lastModified: new Date() },
    { url: `${base}/kalkulator/overtime`, lastModified: new Date() },
    { url: `${base}/kalkulator/pinjaman`, lastModified: new Date() }
  ];
}