 "use client";

import { useMemo, useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("300000");
  const [rate, setRate] = useState("4");
  const [years, setYears] = useState("30");

  const result = useMemo(() => {
    const p = Number(amount) || 0;
    const r = (Number(rate) || 0) / 100 / 12;
    const n = (Number(years) || 0) * 12;
    const payment = r === 0 ? (n ? p / n : 0) : (n ? p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) : 0);
    const total = payment * n;
    return { payment, total, interest: Math.max(0, total - p) };
  }, [amount, rate, years]);

  const money = (n: number) => `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return <div className="calculator-box">
    <label>Jumlah pinjaman</label>
    <div className="input-wrap"><span>RM</span><input type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} /></div>
    <label>Kadar faedah setahun (%)</label>
    <input className="plain-input" type="number" min="0" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
    <label>Tempoh (tahun)</label>
    <input className="plain-input" type="number" min="1" value={years} onChange={e => setYears(e.target.value)} />
    <div className="result">
      <div className="result-main"><span>Anggaran bayaran bulanan</span><strong>{money(result.payment)}</strong></div>
      <div className="breakdown"><div><span>Jumlah faedah</span><b>{money(result.interest)}</b></div><div><span>Jumlah bayaran</span><b>{money(result.total)}</b></div></div>
    </div>
  </div>;
}