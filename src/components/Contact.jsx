import { useEffect, useRef, useState } from "react";
import { PROFILE, UI } from "../data.js";
import { Arrow, Reveal } from "./Elements.jsx";

export default function Contact() {
  const [copyState, setCopyState] = useState("");
  const timer = useRef();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyState(UI.copied);
    } catch {
      setCopyState(UI.copyFailed);
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopyState(""), 4000);
  }
  return <section id="contact" className="contact container" aria-labelledby="contact-title"><Reveal>
    <h2 id="contact-title">{UI.contact.map((line) => <span key={line}>{line}</span>)}<Arrow diagonal className="contact-arrow" /></h2>
    <div className="email-row"><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a><button type="button" onClick={copyEmail} className="copy-email" aria-label={UI.copy}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={copyState === UI.copied ? "m4 12 5 5L20 6" : "M8 8h12v13H8zM16 8V3H3v13h5"} stroke="currentColor" strokeWidth="1.4" /></svg></button><span className="copy-status" role="status">{copyState}</span></div>
    <div className="social-links"><a href={PROFILE.github} target="_blank" rel="noreferrer">{UI.github}<Arrow diagonal /></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">{UI.linkedin}<Arrow diagonal /></a><a href={PROFILE.resume} target="_blank" rel="noreferrer">{UI.resume}<Arrow diagonal /></a><a href={PROFILE.resume} download={UI.resumeFilename}>{UI.downloadResume}<Arrow className="arrow-down" /></a></div>
  </Reveal></section>;
}
