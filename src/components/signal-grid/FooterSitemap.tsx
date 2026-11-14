import Link from 'next/link';
import {REPO_URL, STUDIO_URL} from '@/lib/paths';
import styles from './signal.module.css';

/**
 * Archetype: footer/sitemap. A four-column link map. Every link resolves to a
 * section on this page or to a real CraftLayer Studio address: no dead ends.
 */
type FooterLink = {label: string; href: string; internal?: boolean};
const COLUMNS: {label: string; links: FooterLink[]}[] = [
  {
    label: 'Platform',
    links: [
      {label: 'Triage inbox', href: '#compare'},
      {label: 'Change context', href: '#compare'},
      {label: 'Runbook drafts', href: '#compare'},
      {label: 'Incident timeline', href: '#compare'},
    ],
  },
  {
    label: 'Plans',
    links: [
      {label: 'Sample pricing', href: '#pricing'},
      {label: 'Compare tiers', href: '#plans-table'},
      {label: 'Walkthrough', href: '#walkthrough'},
    ],
  },
  {
    label: 'Help',
    links: [
      {label: 'Questions', href: '#faq'},
      {label: 'Is this real?', href: '#faq'},
      {label: 'Back to top', href: '#top'},
    ],
  },
  {
    label: 'CraftLayer Studio',
    links: [
      {label: 'Concept demo by CraftLayer Studio', href: STUDIO_URL},
      {label: 'All landing pages', href: '/', internal: true},
      {label: 'Source on GitHub', href: REPO_URL},
    ],
  },
];

const linkClass = 'inline-block py-1 text-[15px] text-[var(--fg)] transition-colors hover:text-[var(--accent)]';

export function FooterSitemap() {
  return (
    <footer id="site-footer" className="bg-[var(--bg)]">
      <div className="mx-auto max-w-[1320px] px-4 pt-16 pb-10 sm:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <p className="text-xl font-semibold tracking-tight">Signal Grid</p>
            <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-[var(--muted)]">
              A fictional AI incident-triage platform, drawn up as a landing page example.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {COLUMNS.map((c) => (
              <div key={c.label}>
                <h2 className={styles.meta}>{c.label}</h2>
                <ul className="mt-4 space-y-1.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.internal ? (
                        <Link href={l.href} className={linkClass}>
                          {l.label}
                        </Link>
                      ) : (
                        <a href={l.href} className={linkClass}>
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className={`${styles.meta} mt-14 flex flex-wrap items-baseline justify-between gap-3 border-t border-[var(--line)] pt-6 normal-case tracking-[0.02em]`}>
          <span>Signal Grid is fictional · all prices are samples · nothing is sold or sent</span>
          <a href={STUDIO_URL} className="text-[var(--fg)] underline underline-offset-4 hover:text-[var(--accent)]">
            Concept demo by CraftLayer Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
