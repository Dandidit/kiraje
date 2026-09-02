import OvertimeCalculator from "./calculator";

export const metadata = {
  title: "Kalkulator Overtime Malaysia | KiraJe",
  description: "Kira anggaran bayaran overtime berdasarkan gaji dan jam bekerja."
};

export default function Page() {
  return (
    <main className="calculator-page">
      <a href="/" className="back">← Kembali ke KiraJe</a>
      <div className="calculator-header">
        <div className="eyebrow">Kerja</div>
        <h1>Kalkulator Overtime</h1>
        <p>Kira anggaran bayaran OT dengan cepat.</p>
      </div>
      <OvertimeCalculator />
      <p className="disclaimer">MVP menggunakan kadar 1.5× sebagai anggaran hari bekerja biasa. Semak kontrak dan peraturan pekerjaan yang terpakai untuk kiraan rasmi.</p>
    </main>
  );
}