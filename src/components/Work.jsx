import { PROJECTS, FEATURED_PROJECT, UI } from "../data.js";
import ProjectGallery from "./ProjectGallery.jsx";
import { Reveal } from "./Elements.jsx";
import ProjectLinks from "./ProjectLinks.jsx";

function ProjectShowcase({ project }) {
  return <article id={project.id} className={`project project-${project.kind}`}>
    <Reveal><ProjectGallery project={project} /></Reveal>
    <Reveal className="project-info">
      <div className="project-title"><h3>{project.name}</h3><span>{project.year}</span></div>
      <p className="project-summary">{project.summary}</p>
      <ProjectLinks links={project.links} />
    </Reveal>
  </article>;
}

export default function Work() {
  const featured = FEATURED_PROJECT;
  return <section id="work" className="work container" aria-labelledby="work-title">
    <Reveal className="section-title"><h2 id="work-title">{UI.work}<span>.</span></h2></Reveal>
    <article id={featured.id} className="featured-project" aria-labelledby="mycarehub-title">
      <Reveal className="featured-heading">
        <div className="project-title"><h3 id="mycarehub-title">{featured.name}</h3><span>{featured.year}</span></div>
        <div><p className="project-summary">{featured.summary}</p><ProjectLinks links={featured.links} /></div>
      </Reveal>
      <div className="featured-galleries">{[featured.web, featured.mobile].map(project => <Reveal className={`featured-${project.kind}`} key={project.id}><section id={project.id} aria-labelledby={`${project.id}-title`}><h4 id={`${project.id}-title`} className="gallery-title">{project.label}</h4><ProjectGallery project={project} single /></section></Reveal>)}</div>
    </article>
    <div className="work-grid">{PROJECTS.map((project) => <ProjectShowcase key={project.id} project={project} />)}</div>
  </section>;
}
