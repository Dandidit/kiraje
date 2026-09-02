 "use client";

import { useMemo, useState } from "react";

export default function OvertimeCalculator() {
  const [salary, setSalary] = useState("3000");
  const [hours, setHours] = useState("10");
  const [days, setDays] = useState("26");
  const result = useMemo(() => {
    const monthly = Number(salary) || 0;
    const h = Number(hours) || 0;
    const d = Number(days) || 26;
    const hourly = d > 0 ? monthly / d / 8 : 0;
    const ot = hourly * 1.5 * h;
    return { hourly, ot };
  }, [salary, hours, days]);
  const money = (n: number) => `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return <div className="calculator-box">
    <label>Gaji bulanan</label>
    <div className="input-wrap"><span>RM</span><input type="number" min="0" value={salary} onChange={e => setSalary(e.target.value)} /></div>
    <label>Jam OT</label>
    <input className="plain-input" type="number" min="0" value={hours} onChange={e => setHours(e.target.value)} />
    <label>Hari bekerja sebulan</label>
    <input className="plain-input" type="number" min="1" value={days} onChange={e => setDays(e.target.value)} />
    <div className="result">
      <div className="result-main"><span>Anggaran bayaran OT</span><strong>{money(result.ot)}</strong></div>
      <div className="breakdown"><div><span>Anggaran kadar sejam</span><b>{money(result.hourly)}</b></div><div><span>Kadar OT</span><b>1.5×</b></div></div>
    </div>
  </div>;
}