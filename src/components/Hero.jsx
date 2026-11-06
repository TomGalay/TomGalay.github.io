import { PROFILE, PROJECTS, UI } from "../data.js";
import { Arrow, Star } from "./Elements.jsx";

export default function Hero() {
  const mobile = PROJECTS[0].media[1];
  const web = PROJECTS[1].media[0];
  return <section className="hero container" aria-labelledby="hero-name">
    <div className="hero-type">
      <h1 id="hero-name" aria-label={PROFILE.name}><span>{PROFILE.firstName}</span><span>{PROFILE.lastName}<span className="name-dot">.</span></span></h1>
      <p className="hero-role">{PROFILE.role[0]}<br />{PROFILE.role[1]}</p>
    </div>
    <div className="hero-work">
      <Star className="hero-star" />
      <a className="hero-browser" href="#winli" aria-label={UI.heroWeb}>
        <span className="browser-bar" aria-hidden="true"><i /><i /><i /></span>
        <img src={web.src} alt={web.alt} width={web.width} height={web.height} fetchpriority="high" />
        <span className="preview-title">{PROJECTS[1].name}<Arrow diagonal /></span>
      </a>
      <a className="hero-phone phone-frame" href="#new-life" aria-label={UI.heroMobile}>
        <img src={mobile.src} alt={mobile.alt} width={mobile.width} height={mobile.height} fetchpriority="high" />
      </a>
      <Star className="hero-small-star" />
    </div>
    <div className="hero-bottom"><span>{PROFILE.location}</span><a className="text-link" href="#work">{UI.explore}<Arrow className="arrow-down" /></a></div>
  </section>;
}
