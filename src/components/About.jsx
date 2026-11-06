import { PROFILE, EXPERIENCE, SKILL_GROUPS, EDUCATION, CREDENTIALS, AWARDS, COMPETITIONS, UI } from "../data.js";
import { Arrow, Reveal, Star } from "./Elements.jsx";

function EducationLinks({ title, records }) {
  return <details className="education-extra"><summary>{title}<span className="plus" aria-hidden="true" /></summary><ul className="education-list">{records.map(record => <li key={record.href}><a href={record.href} target="_blank" rel="noreferrer"><span><strong>{record.title}</strong><span className="education-meta">{record.result && <em>{record.result} · </em>}{record.event || `${record.issuer} · ${record.year}`}</span></span><Arrow diagonal /></a></li>)}</ul></details>;
}

function ExperienceRole({ role }) {
  return <div className="experience-role"><div className="role-title"><h5>{role.project || role.title}</h5><span>{role.period}</span></div>{role.project && <p className="role-position">{role.title}</p>}<p>{role.summary}</p>{role.points && <ul className="experience-points">{role.points.map(point => <li key={point}>{point}</li>)}</ul>}</div>;
}

function ExperienceCompany({ company, featured = false }) {
  return <article className={`company${featured ? " company-featured" : ""}`}><header className="company-heading"><h4>{company.company}</h4><span>{company.period}</span></header>{company.summary && <p className="company-summary">{company.summary}</p>}<div className="company-roles">{company.roles.map(role => <ExperienceRole key={`${role.title}-${role.period}`} role={role} />)}</div></article>;
}

export default function About() {
  return <section id="about" className="about" aria-labelledby="about-title"><div className="container">
    <Reveal className="about-heading"><h2 id="about-title">{UI.about}<span>.</span></h2><Star className="about-star" /></Reveal>
    <div className="about-grid">
      <Reveal className="about-copy"><p className="about-statement">{PROFILE.statement.map(line => <span key={line}>{line}</span>)}</p><p className="about-description">{PROFILE.about}</p><div className="skills">{SKILL_GROUPS.map(group => <div key={group.name}><h3>{group.name}</h3><p>{group.items}</p></div>)}</div></Reveal>
      <Reveal className="education" delay={0.08}>
        <h3 className="background-title">{UI.background}</h3>
        <div className="education-content"><div className="education-school"><h4>{EDUCATION.institution}</h4><span>{EDUCATION.period}</span></div><p>{EDUCATION.degree}<br />{EDUCATION.specialization}</p><a className="education-honors" href={EDUCATION.honorsLink} target="_blank" rel="noreferrer">{EDUCATION.honors}<Arrow diagonal /></a></div>
        <details className="education-extra"><summary>{UI.organizations}<span className="plus" aria-hidden="true" /></summary><ul className="education-list organization-list">{EDUCATION.organizations.map(org => <li key={org.name}><strong>{org.name}</strong><span className="education-meta">{org.role} · {org.period}</span></li>)}</ul></details>
        <EducationLinks title={UI.awards} records={AWARDS} />
        <EducationLinks title={UI.competitions} records={COMPETITIONS} />
      </Reveal>
    </div>
    <section className="experience" aria-labelledby="experience-title">
      <Reveal><h3 id="experience-title" className="about-subheading">{UI.experience}</h3><ExperienceCompany company={EXPERIENCE[0]} featured /></Reveal>
      <div className="earlier-experience">{EXPERIENCE.slice(1).map(company => <Reveal key={company.company}><ExperienceCompany company={company} /></Reveal>)}</div>
    </section>
    <Reveal className="certifications"><h3>{UI.certifications}</h3><ul>{CREDENTIALS.map(credential => <li key={credential.href}><a href={credential.href} target="_blank" rel="noreferrer"><span className="credential-name">{credential.name}</span><span className="credential-meta">{credential.issuer} · {credential.issued}</span><Arrow diagonal /></a></li>)}</ul></Reveal>
  </div></section>;
}
