import { PROJECTS, UI } from "../data.js";
import ProjectGallery from "./ProjectGallery.jsx";
import { Arrow, Reveal } from "./Elements.jsx";

function ProjectShowcase({ project }) {
  return <article id={project.id} className={`project project-${project.kind}`}>
    <Reveal><ProjectGallery project={project} /></Reveal>
    <Reveal className="project-info">
      <div className="project-title"><h3>{project.name}</h3><span>{project.year}</span></div>
      <p className="project-role">{project.role}</p>
      <p className="project-summary">{project.summary}</p>
      <div className="project-links">{project.links.map((link) => <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<Arrow diagonal /></a>)}</div>
      <details className="project-details"><summary>{UI.contribution}<span aria-hidden="true" className="plus" /></summary><div className="detail-content"><p className="detail-tech">{project.technologies}</p><ul>{project.detail.map((point) => <li key={point}>{point}</li>)}</ul></div></details>
    </Reveal>
  </article>;
}

export default function Work() {
  return <section id="work" className="work container" aria-labelledby="work-title">
    <Reveal className="section-title"><h2 id="work-title">{UI.work}<span>.</span></h2><span className="work-count">({String(PROJECTS.length).padStart(2, "0")})</span></Reveal>
    <div className="work-grid">{PROJECTS.map((project) => <ProjectShowcase key={project.id} project={project} />)}</div>
  </section>;
}
