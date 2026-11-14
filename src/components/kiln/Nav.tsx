/** nav/floating-pill: a centred pill that floats over the hero instead of a full-width band. */
const LINKS = [
  {label: 'Process', href: '#process'},
  {label: 'Pricing', href: '#pricing'},
  {label: 'FAQ', href: '#faq'},
];

export function KilnNav() {
  return (
    <div className="sticky top-0 z-40 px-3 pt-3 sm:pt-4">
      <header className="mx-auto flex w-fit max-w-full items-center gap-0.5 rounded-full border border-[var(--kn-rule)] bg-[color-mix(in_oklab,var(--kn-surface)_88%,transparent)] px-1.5 py-1.5 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.7)] backdrop-blur-md sm:gap-1">
        <a href="#main" className="kn-display rounded-full px-3 py-1.5 text-lg leading-none tracking-tight transition-opacity hover:opacity-75 sm:px-4">
          KILN<span className="text-[var(--kn-ember)]">.</span>
        </a>
        <span aria-hidden="true" className="h-4 w-px bg-[var(--kn-rule)]" />
        <nav aria-label="Primary" className="flex items-center gap-0.5 sm:gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="kn-mono rounded-full px-2.5 py-1.5 text-xs text-[var(--kn-muted)] transition-colors hover:bg-[color-mix(in_oklab,var(--kn-bone)_8%,transparent)] hover:text-[var(--kn-bone)] sm:px-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#install"
            className="kn-mono ml-1 hidden rounded-full bg-[var(--kn-ember)] px-3.5 py-1.5 text-xs font-bold text-[var(--kn-ink)] transition-colors hover:bg-[var(--kn-amber)] sm:inline-block"
          >
            First run →
          </a>
        </nav>
      </header>
    </div>
  );
}
