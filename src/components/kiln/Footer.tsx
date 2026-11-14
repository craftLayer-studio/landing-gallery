import Link from 'next/link';
import {STUDIO_URL} from '@/lib/paths';

/** footer/list: a hand-set, numbered index at the foot of the page. */
const SECTIONS = [
  {num: '01', label: 'Process', href: '#process', note: 'Hash · fire · restore'},
  {num: '02', label: 'Pricing', href: '#pricing', note: 'Sample figures'},
  {num: '03', label: 'Questions', href: '#faq', note: 'Brief answers'},
  {num: '04', label: 'A first run', href: '#install', note: 'Sample session'},
];

const row = 'group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-b border-[var(--kn-rule)] py-3 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-6';
const label = 'kn-display text-2xl leading-tight uppercase transition-colors group-hover:text-[var(--kn-ember)] sm:text-4xl';

export function KilnFooter() {
  return (
    <footer className="border-t border-[var(--kn-rule)] px-4 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[96rem]">
        <p className="kn-mono text-xs tracking-[0.14em] text-[var(--kn-muted)] uppercase">Index</p>
        <ul className="mt-6 grid grid-cols-1">
          {SECTIONS.map((s) => (
            <li key={s.num}>
              <a href={s.href} className={row}>
                <span className="kn-mono text-sm text-[var(--kn-muted)]">{s.num}</span>
                <span className={label}>{s.label}</span>
                <span className="kn-mono hidden text-right text-xs text-[var(--kn-muted)] sm:inline">{s.note}</span>
              </a>
            </li>
          ))}
          <li>
            <Link href="/" className={row}>
              <span className="kn-mono text-sm text-[var(--kn-muted)]">05</span>
              <span className={label}>All landing pages</span>
              <span className="kn-mono hidden text-right text-xs text-[var(--kn-muted)] sm:inline">The gallery</span>
            </Link>
          </li>
        </ul>
        <div className="kn-mono mt-10 flex flex-col gap-2 text-xs text-[var(--kn-muted)] sm:flex-row sm:justify-between">
          <p>Kiln is a fictional brand · all figures are samples</p>
          <p>
            <a href={STUDIO_URL} className="text-[var(--kn-bone)] underline underline-offset-2 hover:text-[var(--kn-amber)]">
              Concept demo by CraftLayer Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
