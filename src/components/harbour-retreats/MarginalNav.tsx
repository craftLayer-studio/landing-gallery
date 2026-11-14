'use client';

import {useEffect, useRef, useState} from 'react';
import styles from './harbour.module.css';

/**
 * Archetype: nav/marginal. A numbered, vertical index in the left margin.
 * Fixed (sticky) beside the page on desktop; collapses to a disclosure menu below lg.
 */
export const SECTIONS = [
  {n: '01', label: 'The coast', href: '#plate'},
  {n: '02', label: 'Three stays', href: '#stays'},
  {n: '03', label: 'Rates & enquiry', href: '#enquire'},
  {n: '04', label: 'Questions', href: '#questions'},
  {n: '05', label: 'Find us', href: '#visit'},
];

export function MarginalNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#plate');
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.querySelector(s.href)).filter((el): el is Element => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      {rootMargin: '-35% 0px -55% 0px'},
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const list = (
    <ol className="space-y-0.5">
      {SECTIONS.map((s) => {
        const current = active === s.href;
        return (
          <li key={s.n}>
            <a
              href={s.href}
              onClick={() => setOpen(false)}
              aria-current={current ? 'location' : undefined}
              className={`group flex items-baseline gap-3 py-2 transition-colors hover:text-[var(--rust)] ${
                current ? 'text-[var(--rust)]' : 'text-[var(--ink)]'
              }`}
            >
              <span className={`${styles.mono} text-xs text-[var(--muted)]`}>{s.n}</span>
              <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">
                {s.label}
              </span>
              {current ? (
                <span aria-hidden="true" className="ml-auto hidden h-px w-6 self-center bg-[var(--rust)] lg:block" />
              ) : null}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--rule)] bg-[var(--salt)] lg:flex lg:h-screen lg:flex-col lg:border-r lg:border-b-0 lg:px-8 lg:py-10">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--harbour)] focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:block lg:p-0">
        <a href="#plate" className={`${styles.display} block text-[1.6rem] leading-none tracking-tight`}>
          Harbour <em className="text-[var(--rust)]">Retreats</em>
        </a>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="hr-index"
          onClick={() => setOpen((o) => !o)}
          className={`${styles.mono} inline-flex min-h-11 items-center gap-2 border border-[var(--ink)] px-3 text-xs tracking-[0.12em] uppercase lg:hidden`}
        >
          <span aria-hidden="true">{open ? '×' : '≡'}</span>
          Index
        </button>
      </div>

      <p className={`${styles.meta} mt-3 hidden lg:block`}>Calder Reach · a fictional coast</p>

      <nav aria-label="Page index" className="hidden lg:mt-12 lg:block">
        <p className={`${styles.meta} mb-3`}>Contents</p>
        {list}
      </nav>

      <nav
        id="hr-index"
        aria-label="Page index"
        hidden={!open}
        className="border-t border-[var(--rule)] px-4 pt-2 pb-5 sm:px-8 lg:hidden"
      >
        {list}
      </nav>

      <div className="mt-auto hidden lg:block">
        <p className={`${styles.meta} leading-relaxed normal-case tracking-normal`}>
          Three stays. One coastline.
          <br />
          Nothing here can be booked.
        </p>
        <a
          href="#enquire"
          className={`${styles.mono} mt-5 inline-flex min-h-11 items-center gap-2 border-2 border-[var(--harbour)] px-4 text-xs tracking-[0.1em] text-[var(--harbour)] uppercase transition-colors hover:bg-[var(--harbour)] hover:text-[var(--salt)]`}
        >
          Enquire <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
