import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { UI } from "../data.js";
import { Arrow } from "./Elements.jsx";

export default function ImageViewer({ project, active, onChange, onClose, opener }) {
  const dialog = useRef(null);
  const touchStart = useRef(null);
  const image = project.media[active];
  const navigate = (offset) => onChange((active + offset + project.media.length) % project.media.length);

  useEffect(() => {
    const returnFocus = opener.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const element = dialog.current;
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      returnFocus?.focus({ preventScroll: true });
    };
  }, [opener]);

  return createPortal(<dialog ref={dialog} className="image-viewer" aria-labelledby={`${project.id}-viewer-title`} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      navigate(event.key === "ArrowLeft" ? -1 : 1);
    }
  }}>
    <header className="viewer-header"><h2 id={`${project.id}-viewer-title`}>{project.name}</h2><button type="button" className="viewer-close" onClick={onClose} aria-label={UI.closeViewer} autoFocus><span aria-hidden="true">×</span></button></header>
    <div className="viewer-image" onTouchStart={event => { touchStart.current = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }; }} onTouchEnd={event => {
      if (!touchStart.current) return;
      const dx = event.changedTouches[0].clientX - touchStart.current.x;
      const dy = event.changedTouches[0].clientY - touchStart.current.y;
      touchStart.current = null;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) navigate(dx < 0 ? 1 : -1);
    }} onTouchCancel={() => { touchStart.current = null; }}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
    </div>
    <footer className="viewer-footer"><div className="viewer-navigation"><button type="button" onClick={() => navigate(-1)} aria-label={UI.previousImage}><Arrow className="arrow-previous" /></button><p aria-live="polite" aria-atomic="true">{image.label || image.alt}<span>{UI.selectedScreen(active + 1, project.media.length)}</span></p><button type="button" onClick={() => navigate(1)} aria-label={UI.nextImage}><Arrow /></button></div></footer>
  </dialog>, document.body);
}
