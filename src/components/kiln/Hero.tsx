/**
 * hero/word-as-art: one word set edge to edge. The page leads with a
 * noun; the marginalia underneath supplies the rest.
 */
export function KilnHero() {
  return (
    <section aria-labelledby="kn-hero-title" className="relative overflow-hidden px-3 pt-10 pb-14 sm:px-6 sm:pt-12 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(255,91,31,0.22),transparent_70%)]"
      />
      <p className="kn-mono relative px-1 text-xs tracking-[0.14em] text-[var(--kn-muted)] uppercase sm:px-4">
        Build cache · CLI · for monorepos
      </p>
      <h1 id="kn-hero-title" className="relative mt-4 sm:mt-6">
        <span aria-hidden="true" className="kn-display kn-word block text-center whitespace-nowrap select-none">
          KILN
        </span>
        <span className="sr-only">Kiln: a build cache for monorepos</span>
      </h1>
      <div className="relative mx-auto mt-8 grid max-w-[96rem] grid-cols-1 gap-x-10 gap-y-4 px-1 sm:mt-10 sm:grid-cols-3 sm:px-4">
        <p className="kn-mono text-sm text-[var(--kn-bone)]">noun · kiln · /kɪln/</p>
        <div className="sm:col-span-2">
          <p className="max-w-[46ch] text-lg leading-snug text-[var(--kn-bone)] sm:text-2xl">
            An oven that fires each piece once. Here: a fictional CLI that fingerprints every task in your monorepo, runs it once, and
            restores the output after that.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <code className="kn-mono inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-[var(--kn-rule)] bg-[var(--kn-surface)] px-4 py-2 text-sm">
              <span className="text-[var(--kn-ember)]" aria-hidden="true">
                $
              </span>
              <span className="truncate">kiln run build</span>
              <span className="text-xs text-[var(--kn-muted)]">sample</span>
            </code>
            <a href="#pricing" className="kn-mono text-sm text-[var(--kn-amber)] underline underline-offset-4 hover:text-[var(--kn-bone)]">
              See sample pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
