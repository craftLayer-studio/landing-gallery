/**
 * Archetype: nav/inline (Inspo reference N1, references/nav-inline.tsx.txt).
 * Wordmark left, links inline, a tighter mono utility on the right. On
 * narrow screens the links wrap to their own row instead of hiding.
 */
const LINKS = [
  {href: '#issues', label: 'Issues'},
  {href: '#why', label: 'Why read it'},
  {href: '#questions', label: 'Questions'},
];

export function NavInline() {
  return (
    <header className="border-b border-[var(--fn-ink)] px-4 py-4 sm:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <a href="#top" className="text-[1.2rem] leading-none sm:text-[1.45rem] font-semibold tracking-tight italic">
          Field Notes <span className="font-normal not-italic">Weekly</span>
        </a>
        <nav aria-label="Primary" className="order-3 w-full sm:order-2 sm:w-auto">
          <ul className="flex flex-wrap items-center gap-x-5 sm:gap-x-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="fn-meta inline-flex min-h-11 items-center text-[var(--fn-ink)] hover:underline hover:decoration-[var(--fn-mark)] hover:decoration-4 hover:underline-offset-4">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#subscribe"
          className="fn-mono order-2 inline-flex min-h-11 items-center gap-1.5 border border-[var(--fn-ink)] px-2.5 sm:px-3 text-xs text-[var(--fn-ink)] transition-colors hover:bg-[var(--fn-mark)] sm:order-3"
        >
          Subscribe <span aria-hidden>↵</span>
        </a>
      </div>
    </header>
  );
}
