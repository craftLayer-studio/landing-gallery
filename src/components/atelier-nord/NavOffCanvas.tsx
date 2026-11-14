'use client';

import {useCallback, useEffect, useRef, useState, type MouseEvent} from 'react';

/**
 * Archetype: nav/off-canvas (Inspo reference N4 Drawer, references/nav-off-canvas.tsx.txt).
 * Minimal top row (wordmark + Menu), full navigation slides in from the right.
 * Adds what the reference leaves out: focus moves into the drawer, Tab is
 * trapped inside it, Esc closes, focus returns to the Menu button and the
 * page behind is inert while the drawer is open.
 */
const LINKS = [
  {href: '#collection', label: 'Collection 04'},
  {href: '#pieces', label: 'The three pieces'},
  {href: '#reserve', label: 'Reserve the Lune chair'},
  {href: '#questions', label: 'Questions'},
  {href: '#visit', label: 'Visit the studio'},
];

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function NavOffCanvas() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(true);

  const close = useCallback((restore = true) => {
    restoreFocus.current = restore;
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Everything behind the drawer becomes inert while it is open.
    const behind = Array.from(document.querySelectorAll<HTMLElement>('[data-an-behind], [aria-label="Concept demo notice"]'));
    behind.forEach((el) => el.setAttribute('inert', ''));

    const trigger = menuButton.current;
    const first = panel.current?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab' || !panel.current) return;
      const items = Array.from(panel.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstItem) {
        e.preventDefault();
        lastItem.focus();
      } else if (!e.shiftKey && document.activeElement === lastItem) {
        e.preventDefault();
        firstItem.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      behind.forEach((el) => el.removeAttribute('inert'));
      if (restoreFocus.current) trigger?.focus({preventScroll: true});
      restoreFocus.current = true;
    };
  }, [open, close]);

  function onLink(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    close(false);
    const target = document.querySelector<HTMLElement>(href);
    requestAnimationFrame(() => {
      if (!target) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({preventScroll: true});
      history.replaceState(null, '', href);
    });
  }

  return (
    <>
      <header data-an-behind className="sticky top-0 z-40 border-b border-[var(--an-rule)] bg-[color-mix(in_oklab,var(--an-birch)_92%,transparent)] px-4 py-4 backdrop-blur-md sm:px-10">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
          <a href="#collection" className="an-display text-[1.6rem] leading-none tracking-tight text-[var(--an-ink)]">
            Atelier Nord<span className="text-[var(--an-accent)]">.</span>
          </a>
          <div className="flex items-center gap-5">
            <span className="an-meta hidden md:inline">Collection 04 · Pre-order preview</span>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="an-drawer"
              aria-haspopup="dialog"
              className="group inline-flex min-h-11 items-center gap-3 border border-[var(--an-ink)] px-4 text-sm font-semibold tracking-wide text-[var(--an-ink)] transition-colors hover:bg-[var(--an-ink)] hover:text-[var(--an-birch)]"
            >
              Menu
              <span aria-hidden className="flex w-5 flex-col gap-[5px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-3/5 bg-current transition-[width] group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="an-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="an-drawer-title"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[color-mix(in_oklab,var(--an-ink)_45%,transparent)] backdrop-blur-[2px]"
          onClick={() => close()}
        />
        <div
          ref={panel}
          className={`absolute top-0 right-0 flex h-full w-[min(440px,88vw)] flex-col overflow-y-auto border-l border-[var(--an-rule)] bg-[var(--an-birch)] px-7 py-7 transition-transform duration-300 ease-out sm:px-10 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <p id="an-drawer-title" className="an-meta">
              Menu
            </p>
            <button
              type="button"
              onClick={() => close()}
              className="inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-[var(--an-ink)] hover:text-[var(--an-accent)]"
            >
              Close <span aria-hidden>✕</span>
            </button>
          </div>
          <nav aria-label="Atelier Nord" className="mt-12">
            <ul className="space-y-1">
              {LINKS.map((l, i) => (
                <li key={l.href} className="border-b border-[var(--an-rule)]">
                  <a
                    href={l.href}
                    onClick={(e) => onLink(e, l.href)}
                    className="an-display flex items-baseline gap-4 py-3 text-[2rem] leading-tight tracking-tight text-[var(--an-ink)] transition-colors hover:text-[var(--an-accent)]"
                  >
                    <span aria-hidden className="w-6 shrink-0 font-sans text-xs tracking-widest text-[var(--an-muted)]">
                      0{i + 1}
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pt-12 text-sm leading-relaxed text-[var(--an-muted)]">
            <p>Studio visits by appointment.</p>
            <p>Strandgata 4 (a fictional address)</p>
            <p>
              <a className="underline underline-offset-4 hover:text-[var(--an-accent)]" href="mailto:studio@example.com">
                studio@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
