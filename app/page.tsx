import Link from "next/link";

const tools = [
  ["Gaji Bersih Malaysia", "Anggar gaji bersih selepas potongan utama.", "/kalkulator/gaji-bersih", "Kewangan"],
  ["Kalkulator Overtime", "Kira anggaran bayaran OT berdasarkan gaji dan jam bekerja.", "/kalkulator/overtime", "Kerja"],
  ["Kalkulator Pinjaman", "Anggar bayaran bulanan dan jumlah faedah pinjaman.", "/kalkulator/pinjaman", "Kewangan"],
  ["Loan Kereta", "Anggar ansuran bulanan untuk pinjaman kereta.", "/kalkulator/loan-kereta", "Kenderaan"],
  ["Loan Rumah", "Anggar ansuran bulanan untuk pinjaman rumah.", "/kalkulator/loan-rumah", "Rumah"],
  ["EPF / KWSP", "Anggar caruman EPF berdasarkan gaji.", "/kalkulator/epf", "Kewangan"],
  ["Zakat Pendapatan", "Anggar zakat pendapatan secara mudah.", "/kalkulator/zakat", "Kewangan"],
  ["Kalkulator Peratus", "Kira peratus daripada sesuatu nilai.", "/kalkulator/percentage", "Harian"],
  ["Kalkulator Diskaun", "Kira harga selepas diskaun dan jumlah penjimatan.", "/kalkulator/discount", "Shopping"],
  ["Kalkulator Umur", "Kira umur berdasarkan tarikh lahir.", "/kalkulator/age", "Harian"],
  ["Beza Tarikh", "Kira jumlah hari antara dua tarikh.", "/kalkulator/working-days", "Harian"],
  ["Kalkulator BMI", "Kira Body Mass Index berdasarkan tinggi dan berat.", "/kalkulator/bmi", "Kesihatan"],
  ["Unit Converter", "Tukar unit dengan cepat.", "/kalkulator/unit", "Tools"],
  ["QR Code Generator", "Jana QR code dengan cepat.", "/tools/qr-code", "Tools"],
  ["Word Counter", "Kira perkataan dan aksara dalam teks.", "/tools/word-counter", "Tools"],
  ["JSON Formatter", "Format dan semak JSON dengan mudah.", "/tools/json-formatter", "Developer"]
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <Link href="/" className="brand">Kira<span>Je</span></Link>
        <nav>
          <a href="#kalkulator">Kalkulator</a>
          <a href="/tentang">Tentang</a>
          <a href="/hubungi">Hubungi</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">🇲🇾 Tools online untuk Malaysia</div>
          <h1>Kira apa-apa,<br /><span>KiraJe.</span></h1>
          <p>Kalkulator dan tools percuma yang simple, cepat dan senang digunakan.</p>
          <a className="primary-button" href="#kalkulator">Mula kira →</a>
        </div>
        <div className="hero-card">
          <div className="mini-label">KIRAJE</div>
          <div className="big-number">RM 3,250</div>
          <div className="muted">Anggaran gaji bersih</div>
          <div className="fake-row"><span>Gaji kasar</span><strong>RM 4,000</strong></div>
          <div className="fake-row"><span>Potongan</span><strong>RM 750</strong></div>
          <div className="fake-line" />
          <div className="fake-row total"><span>Gaji bersih</span><strong>RM 3,250</strong></div>
        </div>
      </section>

      <section id="kalkulator" className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Kalkulator & Tools</div>
            <h2>Yang berguna, semua di sini.</h2>
          </div>
          <p>Tools percuma untuk pengiraan harian, kewangan dan kerja.</p>
        </div>
        <div className="cards">
          {tools.map(([title, description, href, tag]) => (
            <Link className="tool-card" href={href} key={href}>
              <div className="card-top">
                <span className="tag">{tag}</span>
                <span className="arrow">↗</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="card-link">Buka tool →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="seo-intro">
        <div className="eyebrow">Kalkulator Malaysia</div>
        <h2>Calculator online yang mudah digunakan</h2>
        <p>
          KiraJe menyediakan kalkulator dan tools online percuma untuk membantu
          pengiraan harian. Anda boleh kira gaji, overtime, pinjaman, diskaun,
          umur, peratus dan banyak lagi tanpa perlu memasang aplikasi.
        </p>
        <p>
          Untuk pengiraan yang melibatkan caruman, cukai atau peraturan rasmi,
          gunakan keputusan KiraJe sebagai anggaran dan semak kadar semasa
          dengan sumber rasmi yang berkaitan.
        </p>
      </section>

      <section className="about">
        <div>
          <div className="eyebrow">Tentang KiraJe</div>
          <h2>Tak payah pening.<br />KiraJe.</h2>
        </div>
        <p>KiraJe dibina untuk jadikan pengiraan harian lebih mudah — tanpa spreadsheet yang rumit dan tanpa perlu daftar akaun.</p>
      </section>

      <footer>
        <div className="brand">Kira<span>Je</span></div>
        <p><a href="/privacy">Privacy</a> · <a href="/terma">Terma</a> · <a href="/hubungi">Hubungi</a></p>
      </footer>
    </main>
  );
}