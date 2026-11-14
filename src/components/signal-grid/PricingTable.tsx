import styles from './signal.module.css';

/**
 * Archetype: pricing/table. A spec-sheet feature matrix with one column per
 * tier: thin rules, no zebra striping, a row highlight to track across.
 */
const TIERS = ['Shift', 'Rotation', 'Command'];
const GROUPS: {label: string; rows: {label: string; values: (string | boolean)[]}[]}[] = [
  {
    label: 'Triage',
    rows: [
      {label: 'Alert grouping into incidents', values: [true, true, true]},
      {label: 'Triage summary on each page', values: [true, true, true]},
      {label: 'Change context from deploys', values: [false, true, true]},
      {label: 'Runbook drafts for approval', values: [false, true, true]},
    ],
  },
  {
    label: 'Coordination',
    rows: [
      {label: 'Incident timeline', values: [true, true, true]},
      {label: 'Shift handoff summaries', values: [false, true, true]},
      {label: 'Post-incident review drafts', values: [false, true, true]},
      {label: 'Cross-team escalation policies', values: [false, false, true]},
    ],
  },
  {
    label: 'Administration',
    rows: [
      {label: 'Rotations', values: ['1', 'Up to 10', 'Unlimited']},
      {label: 'Timeline retention (sample)', values: ['30 days', '1 year', 'Configurable']},
      {label: 'Single sign-on', values: [false, false, true]},
      {label: 'Named rollout contact', values: [false, false, true]},
    ],
  },
];

function Cell({value}: {value: string | boolean}) {
  if (typeof value === 'string') return <span className="text-[var(--fg)]">{value}</span>;
  return value ? (
    <>
      <span aria-hidden="true" className="text-[var(--accent)]">
        ●
      </span>
      <span className="sr-only">Included</span>
    </>
  ) : (
    <>
      <span aria-hidden="true" className="text-[var(--line-2)]">
        —
      </span>
      <span className="sr-only">Not included</span>
    </>
  );
}

export function PricingTable() {
  return (
    <div id="plans-table" className="mt-20 scroll-mt-20">
      <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-4">
          <p className={styles.meta}>Compare tiers</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">What is in each plan.</h3>
        </div>
        <p className="max-w-[58ch] text-[15px] leading-relaxed text-[var(--muted)] lg:col-span-8">
          The tiers differ in how much of the incident they help coordinate. Shift handles the page; Rotation
          handles the handoff; Command handles many teams at once. Limits shown are samples.
        </p>
      </div>

      <div role="region" aria-label="Plan comparison table" tabIndex={0} className="relative mt-10 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-[15px]">
          <caption className="sr-only">Features included in each sample Signal Grid plan</caption>
          <thead>
            <tr className="border-b border-[var(--line-2)]">
              <th scope="col" className={`${styles.meta} w-[40%] py-4 pr-4 font-normal`}>
                Feature
              </th>
              {TIERS.map((t, i) => (
                <th
                  key={t}
                  scope="col"
                  className={`py-4 pr-4 text-base font-semibold ${i === 1 ? 'text-[var(--accent)]' : 'text-[var(--fg)]'}`}
                >
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          {GROUPS.map((g) => (
            <tbody key={g.label}>
              <tr>
                <th scope="colgroup" colSpan={4} className={`${styles.meta} pt-8 pb-2 font-normal text-[var(--accent)]`}>
                  {g.label}
                </th>
              </tr>
              {g.rows.map((row) => (
                <tr key={row.label} className="border-b border-[var(--line)] transition-colors hover:bg-[var(--surface)]">
                  <th scope="row" className="py-3.5 pr-4 font-normal text-[var(--fg)]">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={i} className={`${styles.mono} py-3.5 pr-4 text-sm ${i === 1 ? 'bg-[rgb(255_107_31/0.04)]' : ''}`}>
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
