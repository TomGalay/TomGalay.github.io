import { useRef, useState } from "react";
import { UI } from "../data.js";
import ImageViewer from "./ImageViewer.jsx";

export default function ProjectGallery({ project, single = false }) {
  const [active, setActive] = useState(project.initialImage);
  const [viewerOpen, setViewerOpen] = useState(false);
  const opener = useRef(null);
  const image = project.media[active];
  const secondary = project.media[(active + 1) % project.media.length];
  return <div className={`gallery gallery-${project.kind}`}>
    <div className="project-stage">
      <button ref={opener} type="button" className="gallery-open" onClick={() => setViewerOpen(true)} aria-label={UI.enlarge(project.name)} aria-haspopup="dialog"><span className="gallery-enlarge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6" stroke="currentColor" strokeWidth="1.5" /></svg></span></button>
      {project.kind === "mobile" ? <div className="mobile-composition">
        {!single && <div className="phone-frame phone-secondary" aria-hidden="true"><img src={secondary.src} alt="" width={secondary.width} height={secondary.height} loading="lazy" /></div>}
        <div className="phone-frame phone-primary"><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" /></div>
      </div> : <div className="web-composition">
        <div className="web-sheet" aria-hidden="true" />
        <div className="project-browser"><span className="browser-bar" aria-hidden="true"><i /><i /><i /></span><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" /></div>
      </div>}
    </div>
    {viewerOpen && <ImageViewer project={project} active={active} onChange={setActive} onClose={() => setViewerOpen(false)} opener={opener} />}
    <div className="gallery-controls" role="group" aria-label={UI.gallery(project.name)}>
      <div className="gallery-pages">{project.media.map((_, index) => <button key={index} type="button" aria-label={UI.viewScreen(project.name, index + 1)} aria-pressed={index === active} onClick={() => setActive(index)}>{String(index + 1).padStart(2, "0")}</button>)}</div>
      <span className="gallery-status" aria-live="polite" aria-atomic="true">{image.label}</span>
    </div>
  </div>;
}
