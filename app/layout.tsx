import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://kiraje.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KiraJe — Kalkulator & Tools Online Malaysia",
    template: "%s | KiraJe"
  },
  description:
    "Kalkulator dan tools online percuma untuk kegunaan harian di Malaysia. Kira gaji, overtime, pinjaman, diskaun, umur dan banyak lagi.",
  keywords: [
    "kalkulator Malaysia",
    "calculator Malaysia",
    "kalkulator gaji",
    "kalkulator overtime",
    "kalkulator pinjaman",
    "online calculator Malaysia"
  ],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "KiraJe — Kalkulator & Tools Online Malaysia",
    description: "Kalkulator dan tools online percuma untuk kegunaan harian di Malaysia.",
    url: siteUrl,
    siteName: "KiraJe",
    locale: "ms_MY",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KiraJe",
  url: siteUrl,
  description: "Kalkulator dan tools online percuma untuk kegunaan harian di Malaysia."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}