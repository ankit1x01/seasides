'use client';
import React from 'react';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'countdown', label: 'Countdown' },
  { id: 'stats', label: 'Stats' },
  { id: 'about', label: 'About' },
  { id: 'nostalgia', label: 'Gallery' },
  { id: 'faq', label: 'FAQ' },
  { id: 'social', label: 'Social' },
  { id: 'contact', label: 'Contact' }
];

export default function StickySubnav() {
  const [active, setActive] = useState('overview');

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <nav className="sticky top-16 z-40 bg-black/40 backdrop-blur-md safari-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <ul className="flex gap-3 overflow-x-auto no-scrollbar py-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? 'page' : undefined}
  className={`px-3 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  active === s.id
        ? 'bg-white/20 text-white ring-1 ring-white/40'
        : 'text-white hover:text-white hover:bg-white/15'
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </nav>
  );
}
