import NetSalaryCalculator from "./calculator";

export const metadata = {
  title: "Kalkulator Gaji Bersih Malaysia | KiraJe",
  description: "Anggar gaji bersih selepas potongan berdasarkan gaji kasar."
};

export default function Page() {
  return (
    <main className="calculator-page">
      <a href="/" className="back">← Kembali ke KiraJe</a>
      <div className="calculator-header">
        <div className="eyebrow">Kewangan</div>
        <h1>Kalkulator Gaji Bersih</h1>
        <p>Masukkan gaji kasar untuk mendapatkan anggaran gaji bersih.</p>
      </div>
      <NetSalaryCalculator />
      <p className="disclaimer">Anggaran sahaja. Kadar dan kelayakan sebenar boleh berbeza mengikut keadaan individu dan peraturan semasa.</p>
    </main>
  );
}