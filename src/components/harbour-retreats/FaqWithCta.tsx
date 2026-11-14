import styles from './harbour.module.css';

/**
 * Archetype: faq/with-cta. Open question-and-answer rows (no accordion), ending
 * in a quiet conversion strip for readers who still have a question.
 */
const QA = [
  {
    q: 'Can I actually book one of these stays?',
    a: 'No. Harbour Retreats is a fictional brand and the Calder Reach is an invented coastline. This page is a design example by CraftLayer Studio, and the enquiry card only checks answers in your browser.',
  },
  {
    q: 'How do you get there?',
    a: 'In the story of this page: by the coast road to Merrowick, then on foot. Each stay has a short walk from where the road ends, which is part of the point.',
  },
  {
    q: 'Are dogs welcome?',
    a: 'In this concept the Netloft would take one well-mannered dog. The Pilot House and Saltglass sit on cliff paths, so they would be dog-free.',
  },
  {
    q: 'What if the fog never lifts?',
    a: 'Then you stay in. Every house has a stove, a shelf of books about the sea and a window placed for watching weather come in.',
  },
];

export function FaqWithCta() {
  return (
    <section id="questions" aria-labelledby="hr-faq-title" className="scroll-mt-20 border-t border-[var(--rule)] bg-[var(--fog)] px-4 py-16 sm:px-8 lg:px-14 lg:py-24">
      <p className={styles.meta}>04 — Questions</p>
      <h2
        id="hr-faq-title"
        className={`${styles.display} mt-4 max-w-[20ch] leading-[1.05] text-balance`}
        style={{fontSize: 'clamp(2rem, 4vw, 3.1rem)'}}
      >
        Asked at the harbour wall.
      </h2>

      <dl className="mt-12 border-t border-[var(--ink)]">
        {QA.map((row) => (
          <div key={row.q} className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-[var(--rule)] py-7 lg:grid-cols-[minmax(14rem,22rem)_1fr]">
            <dt className={`${styles.display} text-xl leading-snug sm:text-[1.4rem]`}>{row.q}</dt>
            <dd className="max-w-[62ch] text-[15.5px] leading-relaxed text-[var(--muted)]">{row.a}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-y-2 border-[var(--ink)] py-6">
        <p className={`${styles.display} text-2xl leading-tight`}>A question we didn&rsquo;t answer?</p>
        <div className="flex flex-col items-start gap-1">
          <a
            href="mailto:stays@example.com"
            className={`${styles.mono} inline-flex min-h-11 items-center text-[15px] underline decoration-[var(--rust)] underline-offset-4 transition-colors hover:text-[var(--rust)]`}
          >
            stays@example.com <span aria-hidden="true">&nbsp;↗</span>
          </a>
          <span className="text-xs text-[var(--muted)]">Fictional address: no one reads it.</span>
        </div>
      </div>
    </section>
  );
}
