import { useRef } from "react";

export default function useGallerySwipe(onStep) {
  const start = useRef(null);

  function onTouchStart(event) {
    start.current = event.touches.length === 1 ? event.touches[0] : null;
  }

  function onTouchEnd(event) {
    const origin = start.current;
    start.current = null;
    const end = event.changedTouches[0];
    if (!origin || origin.identifier !== end.identifier || event.touches.length) return;

    const dx = end.clientX - origin.clientX;
    const dy = end.clientY - origin.clientY;
    if (Math.abs(dx) < 55 || Math.abs(dx) <= Math.abs(dy) * 1.5) return;

    event.preventDefault();
    onStep(dx < 0 ? 1 : -1);
  }

  return { onTouchStart, onTouchEnd, onTouchCancel: () => { start.current = null; } };
}
