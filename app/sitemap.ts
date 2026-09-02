import type { MetadataRoute } from "next";
const base = "https://kiraje.vercel.app";
const paths = ["", "/tentang", "/hubungi", "/privacy", "/terma", "/kalkulator/gaji-bersih", "/kalkulator/overtime", "/kalkulator/pinjaman", "/kalkulator/loan-kereta", "/kalkulator/loan-rumah", "/kalkulator/epf", "/kalkulator/zakat", "/kalkulator/percentage", "/kalkulator/discount", "/kalkulator/age", "/kalkulator/working-days", "/kalkulator/bmi", "/kalkulator/unit", "/tools/qr-code", "/tools/word-counter", "/tools/json-formatter"];
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(path => ({ url: base + path, lastModified: new Date() }));
}
