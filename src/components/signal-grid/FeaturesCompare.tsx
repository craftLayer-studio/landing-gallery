import styles from './signal.module.css';

/**
 * Archetype: features/compare. A categorical before / with comparison. No
 * competitor names and no numbers: it describes what changes, qualitatively.
 */
const ROWS = [
  {
    capability: 'Alert intake',
    before: 'Every alert pages someone, duplicates and echoes included.',
    after: 'Related alerts are grouped into one incident before anyone is paged.',
  },
  {
    capability: 'The first minutes',
    before: 'Open a row of dashboards to work out what is actually broken.',
    after: 'A short triage summary: affected services, recent changes, likely owners.',
  },
  {
    capability: 'Ownership',
    before: 'Guess who owns the failing service from an old wiki page.',
    after: 'Routing follows your service catalogue and on-call schedule.',
  },
  {
    capability: 'Runbooks',
    before: 'Search for the runbook and hope it is still current.',
    after: 'Relevant steps drafted inline, marked as suggestions for a person to approve.',
  },
  {
    capability: 'Handoff',
    before: 'Context lives in one tired head and a very long chat thread.',
    after: 'A running timeline the next responder can read before taking over.',
  },
  {
    capability: 'Review',
    before: 'Rebuild the timeline from memory for the post-incident review.',
    after: 'Timeline, decisions and changes exported as a review draft.',
  },
];

export function FeaturesCompare() {
  return (
    <section id="compare" aria-labelledby="sg-compare-title" className="scroll-mt-16 border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-12 lg:gap-x-10">
          <p className={`${styles.meta} lg:col-span-3`}>01 — Before / with</p>
          <div className="lg:col-span-9">
            <h2 className="max-w-[20ch] leading-[1.02] font-semibold tracking-[-0.025em] text-balance" style={{fontSize: 'clamp(2rem, 4.4vw, 3.6rem)'}}>
              What changes when the pager has <span className="text-[var(--accent)]">context</span>.
            </h2>
            <p className="mt-5 max-w-[60ch] text-[var(--muted)]">
              The same incident, handled two ways. Signal Grid does not fix anything on its own: it prepares the
              ground so the person on call can.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--line-2)]">
          <div aria-hidden="true" className={`${styles.meta} hidden grid-cols-[minmax(10rem,1fr)_2fr_2fr] gap-x-8 border-b border-[var(--line)] py-3 md:grid`}>
            <span>Capability</span>
            <span>Before</span>
            <span className="text-[var(--accent)]">With Signal Grid</span>
          </div>
          <ol>
            {ROWS.map((r, i) => (
              <li
                key={r.capability}
                className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-[var(--line)] py-6 transition-colors hover:bg-[var(--surface)] md:grid-cols-[minmax(10rem,1fr)_2fr_2fr] md:items-baseline"
              >
                <h3 className="flex items-baseline gap-3 text-lg font-medium">
                  <span className={`${styles.mono} text-xs text-[var(--muted)]`}>{String(i + 1).padStart(2, '0')}</span>
                  {r.capability}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                  <span className={`${styles.meta} mb-1 block md:sr-only`}>Before</span>
                  {r.before}
                </p>
                <p className="border-l-2 border-[var(--accent)] pl-4 text-[15px] leading-relaxed text-[var(--fg)]">
                  <span className={`${styles.meta} mb-1 block text-[var(--accent)] md:sr-only`}>With Signal Grid</span>
                  {r.after}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
