import Tool from "./tool";
export const metadata = {
  title: "Word Counter — Kira Perkataan & Aksara",
  description: "Kira jumlah perkataan, aksara dan baris dalam teks."
};
export default function Page() {
  return <main className="calculator-page">
    <a href="/" className="back">← Kembali ke KiraJe</a>
    <div className="calculator-header">
      <div className="eyebrow">KiraJe Tools</div>
      <h1>Word Counter — Kira Perkataan & Aksara</h1>
      <p>Kira jumlah perkataan, aksara dan baris dalam teks.</p>
    </div>
    <Tool />
    <section className="seo-copy">
      <h2>Tentang Word Counter — Kira Perkataan & Aksara</h2>
      <p>Kira jumlah perkataan, aksara dan baris dalam teks. Gunakan tool ini secara percuma untuk mendapatkan keputusan dengan cepat.</p>
      <h2>Soalan lazim</h2>
      <h3>Perlukah saya daftar akaun?</h3>
      <p>Tidak. Tool ini direka supaya boleh digunakan terus tanpa akaun.</p>
      <h3>Adakah keputusan ini rasmi?</h3>
      <p>Gunakan keputusan sebagai panduan. Untuk perkara yang tertakluk kepada kadar atau peraturan rasmi, semak sumber rasmi yang berkaitan.</p>
    </section>
  </main>;
}