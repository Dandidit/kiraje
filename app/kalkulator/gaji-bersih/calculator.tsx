 "use client";

import { useMemo, useState } from "react";

export default function NetSalaryCalculator() {
  const [salary, setSalary] = useState("4000");

  const result = useMemo(() => {
    const gross = Math.max(0, Number(salary) || 0);
    // Simple MVP estimate. Replace with an official/current contribution engine before
    // marketing this as an exact payroll calculator.
    const epf = gross * 0.11;
    const socso = Math.min(gross * 0.005, 29.75);
    const eis = Math.min(gross * 0.002, 11.90);
    const total = epf + socso + eis;
    return { gross, epf, socso, eis, total, net: Math.max(0, gross - total) };
  }, [salary]);

  const money = (n: number) => `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="calculator-box">
      <label htmlFor="salary">Gaji kasar sebulan</label>
      <div className="input-wrap"><span>RM</span><input id="salary" type="number" min="0" value={salary} onChange={e => setSalary(e.target.value)} /></div>
      <div className="result">
        <div className="result-main"><span>Anggaran gaji bersih</span><strong>{money(result.net)}</strong></div>
        <div className="breakdown">
          <div><span>EPF (anggaran)</span><b>{money(result.epf)}</b></div>
          <div><span>SOCSO (anggaran)</span><b>{money(result.socso)}</b></div>
          <div><span>EIS (anggaran)</span><b>{money(result.eis)}</b></div>
          <div><span>Jumlah potongan</span><b>{money(result.total)}</b></div>
        </div>
      </div>
    </div>
  );
}