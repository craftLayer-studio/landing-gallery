/**
 * Archetype: cta/inverted (Inspo reference, references/cta-inverted.tsx.txt).
 * Charcoal ground, birch button with a lingonberry fill wipe on hover. The
 * contrast does the work; no gradients, no chrome.
 */
export function CtaInverted() {
  return (
    <section aria-labelledby="an-cta-title" className="an-dark bg-[var(--an-ink)] px-4 py-24 text-[var(--an-birch)] sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--an-birch)]/75 uppercase">
          First run · reservations open in this demo
        </p>
        <h2
          id="an-cta-title"
          className="an-display mt-6 leading-[1.04] tracking-tight text-balance"
          style={{fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)'}}
        >
          Buy one good chair, <em className="italic">then stop looking</em>.
        </h2>
        <a
          href="#reserve"
          className="group/btn relative mt-12 inline-flex min-h-14 items-center gap-3 overflow-hidden bg-[var(--an-birch)] px-8 text-sm font-semibold tracking-wide text-[var(--an-ink)] transition-colors duration-300 ease-out hover:text-[var(--an-accent-ink)]"
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--an-accent)] transition-transform duration-300 ease-out group-hover/btn:scale-y-100"
          />
          <span className="relative z-10">Reserve the Lune chair</span>
          <span aria-hidden className="relative z-10 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5">
            →
          </span>
        </a>
        <p className="mt-6 text-sm text-[var(--an-birch)]/75">No payment, nothing sent: this is a concept page.</p>
      </div>
    </section>
  );
}
