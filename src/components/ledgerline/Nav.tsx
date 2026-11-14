/** nav/inline: wordmark left, inline links, a tighter mono utility cluster right. */
const LINKS = [
  {label: 'Workbench', href: '#workbench'},
  {label: 'Pricing', href: '#pricing'},
  {label: 'FAQ', href: '#faq'},
];

export function LedgerlineNav() {
  return (
    <header className="border-y border-[var(--ll-rule)] bg-[var(--ll-paper)] px-4 py-4 sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-[88rem] flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <a href="#main" className="text-2xl font-semibold tracking-tight transition-opacity hover:opacity-70">
          Ledgerline<span className="text-[var(--ll-accent)]">.</span>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--ll-ink)] underline-offset-4 transition-colors hover:text-[var(--ll-accent)] hover:underline"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-1.5">
            <span className="ll-mono hidden h-7 items-center border border-[var(--ll-rule)] px-2 text-xs text-[var(--ll-muted)] md:inline-flex">
              v1 · sample
            </span>
            <a
              href="#request-access"
              className="ll-mono inline-flex h-7 items-center border border-[var(--ll-ink)] bg-[var(--ll-ink)] px-2.5 text-xs text-[var(--ll-paper)] transition-colors hover:border-[var(--ll-accent)] hover:bg-[var(--ll-accent)]"
            >
              Request access
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
