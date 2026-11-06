import { Arrow } from "./Elements.jsx";

function PlatformIcon({ platform }) {
  return <svg className="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
    {platform === "ios" ? <path fill="currentColor" d="M17.1 12.5c0-2 1.6-3 1.7-3.1-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.8-.8-2.9-.7c-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7s1.8.7 3 .7 2-1 2.7-2.1c.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.3-.9-2.3-3.8ZM14.8 6.2c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1.1 2.9 1 .1 2.2-.5 2.9-1.3Z" /> : platform === "android" ? <g fill="currentColor"><path d="m7.2 6-1.5-2.6.9-.5 1.5 2.6a9 9 0 0 1 7.8 0l1.5-2.6.9.5L16.8 6A8.8 8.8 0 0 1 21 13H3a8.8 8.8 0 0 1 4.2-7ZM3 14h18v4a2 2 0 0 1-2 2h-1v2h-3v-2H9v2H6v-2H5a2 2 0 0 1-2-2Z"/><circle cx="8" cy="9.5" r="1" fill="var(--paper)"/><circle cx="16" cy="9.5" r="1" fill="var(--paper)"/></g> : <g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6.5h14M5 17.5h14"/></g>}
  </svg>;
}

export default function ProjectLinks({ links }) {
  return <div className="project-links">{links.map(link => <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noreferrer"><PlatformIcon platform={link.platform} /><span>{link.label}</span><Arrow diagonal /></a>)}</div>;
}
