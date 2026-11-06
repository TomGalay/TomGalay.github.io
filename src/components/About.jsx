import { PROFILE, EXPERIENCE, SKILL_GROUPS, EDUCATION, CREDENTIALS, UI } from "../data.js";
import { Arrow, Reveal, Star } from "./Elements.jsx";

export default function About() {
  return <section id="about" className="about" aria-labelledby="about-title"><div className="container">
    <Reveal className="about-heading"><h2 id="about-title">{UI.about}<span>.</span></h2><Star className="about-star" /></Reveal>
    <div className="about-grid">
      <Reveal className="about-copy"><p className="about-statement">{PROFILE.statement.map((line) => <span key={line}>{line}</span>)}</p><p className="about-description">{PROFILE.about}</p><div className="skills">{SKILL_GROUPS.map((group) => <div key={group.name}><h3>{group.name}</h3><p>{group.items}</p></div>)}</div></Reveal>
      <Reveal className="background" delay={0.08}>
        <h3 className="background-title">{UI.experience}</h3>
        {EXPERIENCE.map((company) => <div className="company" key={company.company}><h4>{company.company}</h4>{company.roles.map((role) => <div className="experience-role" key={role.title}><div className="role-title"><h5>{role.title}</h5><span>{role.period}</span></div><p>{role.summary}</p></div>)}</div>)}
        <details className="education"><summary>{UI.background}<span className="plus" aria-hidden="true" /></summary><div className="education-content"><h4>{EDUCATION.institution}</h4><p>{EDUCATION.degree}<br />{EDUCATION.specialization}</p><p>{EDUCATION.honors} · {EDUCATION.period}</p><div className="credentials">{CREDENTIALS.map((credential) => <a href={credential.href} key={credential.href} target="_blank" rel="noreferrer">{credential.name}<Arrow diagonal /></a>)}</div></div></details>
      </Reveal>
    </div>
  </div></section>;
}
