"use client";
import {useState} from "react";
export default function Tool(){
 const [value,setValue]=useState("https://kiraje.vercel.app");
 const url="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(value);
 return <div className="calculator-box"><label>Teks atau URL</label><input className="plain-input" value={value} onChange={e=>setValue(e.target.value)}/><div className="qr-result"><img src={url} alt="QR code yang dijana" width={220} height={220}/></div></div>
}