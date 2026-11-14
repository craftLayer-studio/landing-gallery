'use client';

import {useEffect, useRef, useState, type FocusEvent, type KeyboardEvent} from 'react';
import styles from './signal.module.css';

/**
 * Archetype: nav/mega. Top-level triggers reveal a multi-column panel on hover
 * or keyboard focus. Keyboard: Tab moves into an open panel, Left/Right move
 * between triggers, Down enters the panel, Up/Down move within it, Esc closes
 * and returns focus to the trigger. Below lg it falls back to a disclosure menu.
 */
type Item = {label: string; note: string; href: string};
type Menu = {id: string; label: string; blurb: string; items: Item[]; aside: {title: string; body: string; href: string; cta: string}};

const MENUS: Menu[] = [
  {
    id: 'platform',
    label: 'Platform',
    blurb: 'One place where alerts become incidents with context attached.',
    items: [
      {label: 'Triage inbox', note: 'Related alerts grouped into one incident', href: '#compare'},
      {label: 'Change context', note: 'Recent deploys and config next to the page', href: '#compare'},
      {label: 'Runbook drafts', note: 'Suggested steps, a human approves', href: '#compare'},
      {label: 'Incident timeline', note: 'Written as the incident happens', href: '#compare'},
    ],
    aside: {title: 'Before / with', body: 'See what the first five minutes look like with and without Signal Grid.', href: '#compare', cta: 'Read the comparison'},
  },
  {
    id: 'workflows',
    label: 'Workflows',
    blurb: 'Built around the way on-call rotations already work.',
    items: [
      {label: 'Escalation routing', note: 'Follows your schedule and service owners', href: '#compare'},
      {label: 'Shift handoff', note: 'A readable summary for the next responder', href: '#compare'},
      {label: 'Status updates', note: 'Drafted from the timeline, sent by you', href: '#compare'},
      {label: 'Post-incident review', note: 'Timeline and decisions as a review draft', href: '#compare'},
    ],
    aside: {title: 'Sample plans', body: 'Three tiers with a monthly or annual toggle. Every price is a sample.', href: '#pricing', cta: 'See sample pricing'},
  },
  {
    id: 'resources',
    label: 'Resources',
    blurb: 'Plain answers about what this concept is and is not.',
    items: [
      {label: 'Questions', note: 'What it does, what it will not do', href: '#faq'},
      {label: 'Compare tiers', note: 'Every feature by plan', href: '#plans-table'},
      {label: 'Is this real?', note: 'No: a fictional concept page', href: '#faq'},
      {label: 'Who made this', note: 'CraftLayer Studio, as a design example', href: '#site-footer'},
    ],
    aside: {title: 'Concept demo', body: 'Signal Grid is fictional. Nothing here is a working product or a real offer.', href: '#faq', cta: 'Read the FAQ'},
  },
];

export function MegaNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  /** Set when we move focus back to a trigger on Esc, so focus does not reopen the panel. */
  const suppressFocusOpen = useRef(false);

  const cancelClose = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
      cancelClose();
    };
  }, [mobileOpen]);

  function panelLinks(id: string) {
    return Array.from(document.querySelectorAll<HTMLAnchorElement>(`#sg-panel-${id} a`));
  }

  function focusTrigger(index: number) {
    const id = MENUS[(index + MENUS.length) % MENUS.length].id;
    triggerRefs.current[id]?.focus();
  }

  function onTriggerKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number, id: string) {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        focusTrigger(index + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        focusTrigger(index - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setOpen(id);
        // Panel is rendered (hidden) already; wait a frame for it to become visible.
        requestAnimationFrame(() => panelLinks(id)[0]?.focus());
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(null);
        break;
    }
  }

  function onPanelKeyDown(e: KeyboardEvent<HTMLDivElement>, id: string) {
    const links = panelLinks(id);
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(null);
      suppressFocusOpen.current = true;
      triggerRefs.current[id]?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      links[(i + 1) % links.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (i <= 0) {
        suppressFocusOpen.current = true;
        triggerRefs.current[id]?.focus();
      }
      else links[i - 1]?.focus();
    }
  }

  function onHeaderBlur(e: FocusEvent<HTMLElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null);
  }

  const brand = (
    <a href="#top" className="flex min-h-11 items-center gap-2.5 text-lg font-semibold tracking-tight">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <rect x="1" y="1" width="22" height="22" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <path d="M2 14 H7 L9.5 6 L13 19 L15.5 11 H22" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      Signal Grid
    </a>
  );

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
      onBlur={onHeaderBlur}
      className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_92%,transparent)] backdrop-blur"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[var(--accent-ink)]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 py-2.5 sm:px-8">
        {brand}

        {/* Desktop mega menu */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MENUS.map((m, i) => {
              const isOpen = open === m.id;
              return (
                <li key={m.id}>
                  <button
                    ref={(el) => {
                      triggerRefs.current[m.id] = el;
                    }}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`sg-panel-${m.id}`}
                    onMouseEnter={() => {
                      cancelClose();
                      setOpen(m.id);
                    }}
                    onFocus={(e) => {
                      if (suppressFocusOpen.current) {
                        suppressFocusOpen.current = false;
                        return;
                      }
                      if (e.currentTarget.matches(':focus-visible')) setOpen(m.id);
                    }}
                    onClick={() => setOpen(isOpen ? null : m.id)}
                    onKeyDown={(e) => onTriggerKeyDown(e, i, m.id)}
                    className={`inline-flex min-h-11 items-center gap-1.5 px-3.5 text-[15px] transition-colors ${
                      isOpen ? 'text-[var(--accent)]' : 'text-[var(--fg)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {m.label}
                    <span aria-hidden="true" className={`${styles.mono} inline-block text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      ▾
                    </span>
                  </button>
                  <div
                    id={`sg-panel-${m.id}`}
                    hidden={!isOpen}
                    onKeyDown={(e) => onPanelKeyDown(e, m.id)}
                    className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-[var(--surface)] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.7)]"
                  >
                    <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-8 px-8 py-9">
                      <div className="col-span-3 border-r border-[var(--line)] pr-8">
                        <p className={styles.meta}>
                          {String(i + 1).padStart(2, '0')} / {m.label}
                        </p>
                        <p className="mt-3 text-xl leading-snug">{m.blurb}</p>
                      </div>
                      <ul className="col-span-6 grid grid-cols-2 gap-x-8 gap-y-2">
                        {m.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              onClick={() => setOpen(null)}
                              className="group block border-l-2 border-transparent py-2.5 pl-4 transition-colors hover:border-[var(--accent)] focus-visible:border-[var(--accent)]"
                            >
                              <span className="block text-[16px] font-medium group-hover:text-[var(--accent)]">{item.label}</span>
                              <span className="mt-0.5 block text-sm text-[var(--muted)]">{item.note}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div className="col-span-3 border border-[var(--line)] bg-[var(--surface-2)] p-5">
                        <p className={styles.meta}>{m.aside.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{m.aside.body}</p>
                        <a
                          href={m.aside.href}
                          onClick={() => setOpen(null)}
                          className={`${styles.mono} mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-[var(--accent)] hover:underline`}
                        >
                          {m.aside.cta} <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
            <li>
              <a
                href="#pricing"
                onFocus={() => setOpen(null)}
                onMouseEnter={() => setOpen(null)}
                className="inline-flex min-h-11 items-center px-3.5 text-[15px] hover:text-[var(--accent)]">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#walkthrough"
            className={`${styles.mono} hidden min-h-11 items-center gap-2 bg-[var(--accent)] px-4 text-[13px] font-medium text-[var(--accent-ink)] transition-colors hover:bg-[var(--accent-soft)] sm:inline-flex`}
          >
            Walkthrough <span aria-hidden="true">→</span>
          </a>
          <button
            ref={mobileButtonRef}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="sg-mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
            className={`${styles.mono} inline-flex min-h-11 items-center gap-2 border border-[var(--line-2)] px-3.5 text-[13px] lg:hidden`}
          >
            <span aria-hidden="true">{mobileOpen ? '×' : '≡'}</span>
            Menu
          </button>
        </div>
      </div>

      {/* Mobile fallback: a disclosure menu with native disclosure groups */}
      <nav
        id="sg-mobile-menu"
        aria-label="Main"
        hidden={!mobileOpen}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[var(--line)] bg-[var(--surface)] px-4 pt-2 pb-6 sm:px-8 lg:hidden"
      >
        {MENUS.map((m) => (
          <details key={m.id} className="group border-b border-[var(--line)]">
            <summary className={`${styles.summary} flex min-h-12 cursor-pointer items-center justify-between text-base`}>
              {m.label}
              <span aria-hidden="true" className={`${styles.mono} inline-block text-[var(--muted)] transition-transform group-open:rotate-45`}>
                +
              </span>
            </summary>
            <ul className="pb-3">
              {m.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 pl-3">
                    <span className="block text-[15px]">{item.label}</span>
                    <span className="block text-sm text-[var(--muted)]">{item.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <a href="#pricing" onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center border-b border-[var(--line)] text-base">
          Pricing
        </a>
        <a
          href="#walkthrough"
          onClick={() => setMobileOpen(false)}
          className={`${styles.mono} mt-5 inline-flex min-h-11 items-center gap-2 bg-[var(--accent)] px-4 text-[13px] font-medium text-[var(--accent-ink)]`}
        >
          Walkthrough <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
