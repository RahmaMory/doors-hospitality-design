'use client';

import { useEffect, useRef } from 'react';

export default function MotionEffects() {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    root.classList.add('motion-ready');
    revealElements.forEach((element) => {
      const delay = Number(element.dataset.delay ?? 0);
      element.style.setProperty('--reveal-delay', `${Math.min(delay, 420)}ms`);
    });

    const supportsIntersectionObserver = 'IntersectionObserver' in window;
    const revealObserver = reducedMotion || !supportsIntersectionObserver
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.target.classList.toggle('is-visible', entry.isIntersecting);
            });
          },
          {
            threshold: 0.12,
            rootMargin: '0px 0px -7% 0px',
          },
        );

    revealElements.forEach((element) => {
      if (reducedMotion || !supportsIntersectionObserver) {
        element.classList.add('is-visible');
      } else {
        revealObserver?.observe(element);
      }
    });

    const updateScroll = () => {
      if (frame.current !== null) return;

      if (typeof window.requestAnimationFrame !== 'function') {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        root.style.setProperty('--scroll-progress', String(progress));
        return;
      }

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
      revealObserver?.disconnect();
      root.classList.remove('motion-ready');
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('pointermove', updatePointer);
      if (frame.current !== null && typeof window.cancelAnimationFrame === 'function') {
        window.cancelAnimationFrame(frame.current);
      }
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
