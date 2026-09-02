import LoanCalculator from "./calculator";

export const metadata = {
  title: "Kalkulator Pinjaman | KiraJe",
  description: "Kira anggaran bayaran bulanan pinjaman."
};

export default function Page() {
  return (
    <main className="calculator-page">
      <a href="/" className="back">← Kembali ke KiraJe</a>
      <div className="calculator-header">
        <div className="eyebrow">Kewangan</div>
        <h1>Kalkulator Pinjaman</h1>
        <p>Anggar bayaran bulanan berdasarkan jumlah, kadar dan tempoh.</p>
      </div>
      <LoanCalculator />
      <p className="disclaimer">Anggaran menggunakan formula pinjaman berfaedah tetap/berkadar bulanan. Kadar sebenar bank dan caj lain mungkin berbeza.</p>
    </main>
  );
}