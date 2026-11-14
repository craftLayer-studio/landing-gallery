import Link from 'next/link';
import {STUDIO_URL} from '@/lib/paths';

/**
 * Archetype: footer/statement (Inspo reference, references/footer-statement.tsx.txt).
 * One big sentence, one quiet sign-off row.
 */
export function FooterStatement() {
  return (
    <footer id="visit" data-an-behind className="px-4 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="an-display leading-[1.05] tracking-tight text-balance" style={{fontSize: 'clamp(2.1rem, 5.5vw, 4.5rem)'}}>
          Furniture should outlast the trend that sold it.{' '}
          <em className="text-[var(--an-accent)] italic">Make fewer things, better.</em>
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-[var(--an-ink)]/25 pt-6 text-sm text-[var(--an-muted)] sm:grid-cols-3">
          <address className="not-italic leading-relaxed">
            <span className="block font-semibold text-[var(--an-ink)]">Atelier Nord (fictional)</span>
            Strandgata 4, Northport
            <br />
            Visits by appointment
          </address>
          <p className="leading-relaxed">
            <a className="text-[var(--an-ink)] underline underline-offset-4 hover:text-[var(--an-accent)]" href="mailto:studio@example.com">
              studio@example.com
            </a>
            <br />
            All details on this page are fictional.
          </p>
          <p className="leading-relaxed sm:text-right">
            <a className="text-[var(--an-ink)] underline underline-offset-4 hover:text-[var(--an-accent)]" href={STUDIO_URL}>
              Concept demo by CraftLayer Studio <span aria-hidden>↗</span>
            </a>
            <br />
            <Link className="underline underline-offset-4 hover:text-[var(--an-accent)]" href="/">
              All landing pages
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
