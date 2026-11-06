import { PROFILE, FEATURED_PROJECT, UI } from "../data.js";
import { Arrow, Star } from "./Elements.jsx";

export default function Hero() {
  const mobile = FEATURED_PROJECT.mobile.media[1];
  const web = FEATURED_PROJECT.web.media[0];
  return <section className="hero container" aria-labelledby="hero-name">
    <div className="hero-type">
      <h1 id="hero-name" aria-label={PROFILE.name}><span>{PROFILE.firstName}</span><span>{PROFILE.lastName}<span className="name-dot">.</span></span></h1>
      <p className="hero-role">{PROFILE.role[0]}<br />{PROFILE.role[1]}</p>
    </div>
    <div className="hero-work">
      <Star className="hero-star" />
      <a className="hero-browser" href={`#${FEATURED_PROJECT.web.id}`} aria-label={UI.heroWeb}>
        <span className="browser-bar" aria-hidden="true"><i /><i /><i /></span>
        <img src={web.src} alt={web.alt} width={web.width} height={web.height} fetchpriority="high" />
        <span className="preview-title">{FEATURED_PROJECT.name}<Arrow diagonal /></span>
      </a>
      <a className="hero-phone phone-frame" href={`#${FEATURED_PROJECT.mobile.id}`} aria-label={UI.heroMobile}>
        <img src={mobile.src} alt={mobile.alt} width={mobile.width} height={mobile.height} fetchpriority="high" />
      </a>
      <Star className="hero-small-star" />
    </div>
    <div className="hero-bottom"><span>{PROFILE.location}</span><a className="text-link" href="#work">{UI.explore}<Arrow className="arrow-down" /></a></div>
  </section>;
}
