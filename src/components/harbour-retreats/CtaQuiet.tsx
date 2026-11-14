import styles from './harbour.module.css';

/**
 * Archetype: cta/quiet. A typographic appeal that reads like the last line of
 * a magazine piece. One text link, no banner.
 */
export function CtaQuiet() {
  return (
    <section aria-labelledby="hr-cta-title" className="px-4 py-24 sm:px-8 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p aria-hidden="true" className={`${styles.display} text-3xl text-[var(--brass)]`}>
          ⁂
        </p>
        <h2
          id="hr-cta-title"
          className={`${styles.display} mt-6 leading-[1.12] text-balance`}
          style={{fontSize: 'clamp(1.85rem, 4vw, 3.1rem)'}}
        >
          Most mornings the fog lifts by nine.{' '}
          <em className="text-[var(--rust)]">Come and see when it does.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-[44ch] text-[var(--muted)]">
          Three stays, six miles of cliff path and a harbour that keeps its own hours. Fictional, all of it.
        </p>
        <a
          href="#enquire"
          className={`${styles.mono} mt-10 inline-flex min-h-11 items-center gap-2 border-b border-[var(--ink)] text-sm transition-colors hover:border-[var(--rust)] hover:text-[var(--rust)]`}
        >
          Begin an enquiry <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
