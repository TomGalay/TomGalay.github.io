import { PROJECTS, FEATURED_PROJECT, UI } from "../data.js";
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
  const featured = FEATURED_PROJECT;
  return <section id="work" className="work container" aria-labelledby="work-title">
    <Reveal className="section-title"><h2 id="work-title">{UI.work}<span>.</span></h2><span className="work-count">({String(PROJECTS.length + 1).padStart(2, "0")})</span></Reveal>
    <article id={featured.id} className="featured-project" aria-labelledby="mycarehub-title">
      <Reveal className="featured-heading">
        <div><div className="project-title"><h3 id="mycarehub-title">{featured.name}</h3><span>{featured.year}</span></div><p className="project-role">{featured.role}</p></div>
        <div><p className="project-summary">{featured.summary}</p><div className="project-links">{featured.links.map(link => <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<Arrow diagonal /></a>)}</div></div>
      </Reveal>
      <div className="featured-galleries">{[featured.web, featured.mobile].map(project => <Reveal className={`featured-${project.kind}`} key={project.id}><section id={project.id} aria-labelledby={`${project.id}-title`}><h4 id={`${project.id}-title`} className="gallery-title">{project.label}</h4><ProjectGallery project={project} single /></section></Reveal>)}</div>
      <Reveal><details className="project-details featured-details"><summary>{UI.contribution}<span aria-hidden="true" className="plus" /></summary><div className="detail-content"><p className="detail-tech">{featured.technologies}</p><ul>{featured.detail.map(point => <li key={point}>{point}</li>)}</ul></div></details></Reveal>
    </article>
    <div className="work-grid">{PROJECTS.map((project) => <ProjectShowcase key={project.id} project={project} />)}</div>
  </section>;
}
