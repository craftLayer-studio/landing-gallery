import type {CSSProperties} from 'react';
import Link from 'next/link';
import {STUDIO_URL} from '@/lib/paths';
import {SubscribeForm} from './SubscribeForm';

/**
 * Archetype: footer/newsletter (Inspo reference Ft6, references/footer-newsletter.tsx.txt).
 * Subscribe is the only action that earns a row; a minimal index of links
 * sits beside it. Shares its form logic with the form-led CTA.
 */
export function FooterNewsletter() {
  return (
    <footer aria-labelledby="fn-footer-title" className="bg-[var(--fn-ink)] px-4 py-16 text-[var(--fn-paper)] sm:px-10 sm:py-20">
      <div
        className="mx-auto grid max-w-[1180px] grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-12 [&_.fn-meta]:text-[var(--fn-paper)]/75"
        style={
          {
            '--fn-ink': '#f5efe1',
            '--fn-paper': '#1d1a15',
            '--fn-muted': '#cfc5b2',
            '--fn-error': '#ffb4a6',
          } as CSSProperties
        }
      >
        <div className="lg:col-span-7">
          <p className="fn-meta">Field Notes Weekly</p>
          <p id="fn-footer-title" className="mt-4 max-w-[22ch] leading-[1.05] font-medium tracking-tight text-balance" style={{fontSize: 'clamp(1.9rem, 4vw, 3rem)'}}>
            A letter for people who make things. <em className="italic">Fridays.</em>
          </p>
          <SubscribeForm id="fn-footer" variant="compact" />
        </div>
        <nav aria-label="Footer" className="lg:col-span-5 lg:justify-self-end">
          <ul className="space-y-1">
            <li>
              <a href="#issues" className="inline-flex min-h-11 items-center hover:underline">
                Recent issues
              </a>
            </li>
            <li>
              <a href="#questions" className="inline-flex min-h-11 items-center hover:underline">
                Questions
              </a>
            </li>
            <li>
              <a href="mailto:letters@example.com" className="inline-flex min-h-11 items-center hover:underline">
                letters@example.com
              </a>
            </li>
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center hover:underline">
                All landing pages
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="fn-mono mx-auto mt-12 flex max-w-[1180px] flex-wrap justify-between gap-4 border-t border-[#f5efe1]/25 pt-6 text-xs text-[#f5efe1]/80">
        <p>Field Notes Weekly is fictional. No issues, authors or subscribers exist.</p>
        <a href={STUDIO_URL} className="underline underline-offset-4 hover:text-[#f3d54e]">
          Concept demo by CraftLayer Studio <span aria-hidden>↗</span>
        </a>
      </div>
    </footer>
  );
}
