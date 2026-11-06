import { PROFILE, NAVIGATION, UI } from "../data.js";
import { Arrow } from "./Elements.jsx";

export default function Navigation() {
  return <>
    <a className="skip-link" href="#main">{UI.skip}</a>
    <header className="navigation container">
      <a href="#top" className="wordmark" aria-label={UI.home}>ig<span>.</span></a>
      <nav aria-label={UI.navigation}>{NAVIGATION.map(({ id, href, label }) => <a key={id || href} href={href || `#${id}`} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined}>{label}{href && <Arrow diagonal />}</a>)}</nav>
      <a className="nav-email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}<Arrow diagonal /></a>
    </header>
  </>;
}
