import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KiraJe — Kira apa-apa, KiraJe.",
  description: "Kalkulator dan tools online percuma untuk kegunaan harian di Malaysia.",
  metadataBase: new URL("https://kiraje.my"),
  openGraph: {
    title: "KiraJe — Kira apa-apa, KiraJe.",
    description: "Kalkulator dan tools online percuma untuk kegunaan harian di Malaysia.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}