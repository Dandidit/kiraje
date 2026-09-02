"use client";
import {useState} from "react";
export default function Tool(){
 const [text,setText]=useState("");
 const words=text.trim()?text.trim().split(/\s+/).length:0;
 const chars=text.length;
 const lines=text?text.split(/\n/).length:0;
 return <div className="calculator-box"><label>Masukkan teks</label><textarea className="plain-input text-area" rows={10} value={text} onChange={e=>setText(e.target.value)} placeholder="Taip atau tampal teks di sini..." /><div className="result"><div className="breakdown"><div><span>Perkataan</span><b>{words}</b></div><div><span>Aksara</span><b>{chars}</b></div><div><span>Baris</span><b>{lines}</b></div></div></div></div>
}