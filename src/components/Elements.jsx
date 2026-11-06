import { motion, useReducedMotion } from "framer-motion";

export function Arrow({ diagonal = false, className = "" }) {
  return <svg className={`arrow ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-7-7 7 7-7 7"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>;
}

export function Star({ className = "" }) {
  return <svg className={className} viewBox="0 0 100 100" aria-hidden="true"><path d="m50 0 8 31 27-16-16 27 31 8-31 8 16 27-27-16-8 31-8-31-27 16 16-27L0 50l31-8L15 15l27 16Z" fill="currentColor" /></svg>;
}

export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
