import styles from './signal.module.css';

/**
 * Archetype: cta/banded. A full-bleed accent ribbon with a single action; the
 * only loud band on the page. The inverse button wipes to ink on hover.
 */
export function CtaBanded() {
  return (
    <section
      id="walkthrough"
      aria-labelledby="sg-cta-title"
      className={`${styles.onAccent} scroll-mt-16 relative overflow-hidden bg-[var(--accent)] text-[var(--accent-ink)]`}
    >
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-25" aria-hidden="true">
        <path d="M0 140 H520 L560 60 L600 190 L640 140 H1440" fill="none" stroke="#0b0c0e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-x-10 gap-y-8 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-8">
          <p className={`${styles.mono} text-[13px]`}>Concept demo · nothing is sent</p>
          <h2 id="sg-cta-title" className="mt-4 max-w-[20ch] leading-[0.98] font-semibold tracking-[-0.03em] text-balance" style={{fontSize: 'clamp(2.1rem, 5.2vw, 4.2rem)'}}>
            Make the next page arrive with context.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <a
            href="mailto:walkthrough@example.com?subject=Signal%20Grid%20walkthrough"
            className={`${styles.mono} group/btn relative inline-flex min-h-13 items-center gap-3 overflow-hidden border-2 border-[var(--accent-ink)] bg-[var(--accent-ink)] px-7 text-sm text-[var(--fg)]`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-[var(--fg)] transition-transform duration-300 ease-out group-hover/btn:scale-x-100 motion-reduce:transition-none"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[var(--accent-ink)]">Request a walkthrough</span>
            <span aria-hidden="true" className="relative z-10 transition-[transform,color] duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:text-[var(--accent-ink)]">
              →
            </span>
          </a>
          <p className="mt-3 max-w-[30ch] text-sm">walkthrough@example.com is a fictional address. No one will reply.</p>
        </div>
      </div>
    </section>
  );
}
