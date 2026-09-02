"use client";
import {useState} from "react";
export default function Tool(){
 const [text,setText]=useState('{"nama":"KiraJe","status":"ok"}'); const [out,setOut]=useState("");
 function format(){try{setOut(JSON.stringify(JSON.parse(text),null,2))}catch{setOut("JSON tidak sah. Semak tanda kurung, koma dan quote.")}}
 return <div className="calculator-box"><label>JSON</label><textarea className="plain-input text-area mono" rows={12} value={text} onChange={e=>setText(e.target.value)}/><button className="primary-button tool-button" onClick={format}>Format JSON</button>{out&&<><label>Keputusan</label><textarea className="plain-input text-area mono" rows={12} readOnly value={out}/></>}</div>
}