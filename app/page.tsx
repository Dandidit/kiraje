import Link from "next/link";

const calculators = [
  {
    title: "Gaji Bersih",
    description: "Anggar gaji bersih selepas potongan utama.",
    href: "/kalkulator/gaji-bersih",
    tag: "Kewangan"
  },
  {
    title: "Overtime",
    description: "Kira bayaran OT berdasarkan gaji dan jam bekerja.",
    href: "/kalkulator/overtime",
    tag: "Kerja"
  },
  {
    title: "Pinjaman",
    description: "Anggar bayaran bulanan untuk pinjaman.",
    href: "/kalkulator/pinjaman",
    tag: "Kewangan"
  }
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <Link href="/" className="brand">Kira<span>Je</span></Link>
        <nav>
          <a href="#kalkulator">Kalkulator</a>
          <a href="#tentang">Tentang</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">🇲🇾 Tools online untuk Malaysia</div>
          <h1>Kira apa-apa,<br /><span>KiraJe.</span></h1>
          <p>Calculator dan tools percuma yang simple, cepat dan senang digunakan.</p>
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
            <div className="eyebrow">Kalkulator</div>
            <h2>Yang paling berguna dulu.</h2>
          </div>
          <p>Kami akan tambah lagi tools dari masa ke masa.</p>
        </div>

        <div className="cards">
          {calculators.map((item) => (
            <Link className="tool-card" href={item.href} key={item.href}>
              <div className="card-top">
                <span className="tag">{item.tag}</span>
                <span className="arrow">↗</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-link">Kira sekarang →</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="tentang" className="about">
        <div>
          <div className="eyebrow">Tentang KiraJe</div>
          <h2>Tak payah pening.<br />KiraJe.</h2>
        </div>
        <p>KiraJe dibina untuk jadikan pengiraan harian lebih mudah — tanpa spreadsheet yang rumit dan tanpa perlu daftar akaun.</p>
      </section>

      <footer>
        <div className="brand">Kira<span>Je</span></div>
        <p>© {new Date().getFullYear()} KiraJe. Dibuat untuk memudahkan hidup.</p>
      </footer>
    </main>
  );
}