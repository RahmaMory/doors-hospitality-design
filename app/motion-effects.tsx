'use client';

import { useEffect, useRef } from 'react';

export default function MotionEffects() {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const updateScroll = () => {
      if (frame.current !== null) return;

      frame.current = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

        root.style.setProperty('--scroll-progress', String(progress));
        root.style.setProperty('--scroll-shift', `${window.scrollY * 0.035}px`);
        frame.current = null;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('pointermove', updatePointer, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('pointermove', updatePointer);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="motion-layer" aria-hidden="true">
      <div className="motion-progress"><span /></div>
      <div className="motion-pointer" />
      <div className="motion-orb motion-orb-one" />
      <div className="motion-orb motion-orb-two" />
    </div>
  );
}
