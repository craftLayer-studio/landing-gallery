import {STUDIO_URL} from '@/lib/paths';

/** footer/colophon: a magazine end-credit set in mono, read as metadata. */
export function LedgerlineFooter() {
  const label = 'll-mono text-xs tracking-wide text-[var(--ll-muted)] uppercase';
  return (
    <footer className="px-4 py-14 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[88rem]">
        <p className="text-2xl font-semibold tracking-tight">
          Ledgerline<span className="text-[var(--ll-accent)]">.</span>
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 border-t-2 border-[var(--ll-rule-strong)] pt-8 sm:grid-cols-3">
          <div>
            <p className={label}>Typefaces</p>
            <p className="mt-3 text-sm leading-relaxed">
              IBM Plex Sans for text and headings.
              <br />
              IBM Plex Mono for datelines, figures and code.
            </p>
          </div>
          <div>
            <p className={label}>Stack</p>
            <p className="mt-3 text-sm leading-relaxed">
              Next.js 16 and Tailwind CSS v4.
              <br />
              Static export. No API, no tracking, no form backend.
            </p>
          </div>
          <div>
            <p className={label}>Colophon</p>
            <p className="mt-3 text-sm leading-relaxed">
              Ledgerline is a fictional brand. All figures are sample data.
              <br />
              <a href={STUDIO_URL} className="font-semibold underline underline-offset-2 hover:text-[var(--ll-accent)]">
                Concept demo by CraftLayer Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
