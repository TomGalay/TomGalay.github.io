import { PROFILE, UI } from "../data.js";
import { Arrow } from "./Elements.jsx";

export default function Footer() {
  return <footer className="footer container"><span>{UI.copyright(new Date().getFullYear())}</span><a href={PROFILE.archive} target="_blank" rel="noreferrer">{UI.archive}<Arrow diagonal /></a><a href="#top">{UI.backTop}<Arrow className="arrow-up" /></a></footer>;
}
