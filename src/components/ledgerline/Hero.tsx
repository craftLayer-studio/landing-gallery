/**
 * hero/marquee: one thought set big, a mono dateline as the editorial
 * anchor at the left margin. The ledger strip underneath is typeset
 * sample data, not imagery.
 */
const SAMPLE_ROWS = [
  {ref: 'PO-2291', source: 'processor payout', ours: '1,240.00', bank: '1,240.00', state: 'matched'},
  {ref: 'PO-2292', source: 'processor payout', ours: '3,918.55', bank: '3,918.55', state: 'matched'},
  {ref: 'RF-0418', source: 'refund batch', ours: '-212.40', bank: '-212.40', state: 'matched'},
  {ref: 'PO-2293', source: 'processor payout', ours: '2,075.10', bank: '—', state: 'in review'},
];

export function LedgerlineHero() {
  return (
    <section aria-labelledby="ll-hero-title" className="ll-ruled border-b border-[var(--ll-rule)] px-4 pt-14 pb-16 sm:px-8 sm:pt-20 lg:px-14 lg:pt-28 lg:pb-24">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
        <p className="ll-mono text-xs leading-relaxed tracking-wide text-[var(--ll-muted)] uppercase lg:col-span-2 lg:pt-3">
          Ledger Nº 01
          <br />
          Reconciliation API
          <br />
          <span className="text-[var(--ll-accent)]">Concept edition</span>
        </p>
        <div className="min-w-0 lg:col-span-10">
          <h1
            id="ll-hero-title"
            className="max-w-[16ch] text-[2.75rem] leading-[0.95] font-semibold tracking-[-0.035em] text-balance sm:text-7xl lg:text-[6.5rem]"
          >
            Every payout, <span className="text-[var(--ll-accent)] underline decoration-double decoration-2 underline-offset-[0.12em]">matched</span> to the
            cent.
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-[var(--ll-muted)] sm:text-xl">
            Ledgerline is a fictional reconciliation API for small finance teams. It pairs processor payouts with bank deposits, splits out
            fees and refunds, and queues only what needs a human.
          </p>

          <figure className="mt-14 max-w-4xl">
            <table className="ll-mono w-full border-collapse text-left text-[13px] sm:text-sm">
              <caption className="mb-2 text-left text-xs tracking-wide text-[var(--ll-muted)] uppercase">
                Sample ledger lines · fictional data
              </caption>
              <thead>
                <tr className="border-y-2 border-[var(--ll-rule-strong)] text-xs text-[var(--ll-muted)] uppercase">
                  <th scope="col" className="py-2 pr-3 font-medium">Ref</th>
                  <th scope="col" className="hidden py-2 pr-3 font-medium md:table-cell">Source</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Payout</th>
                  <th scope="col" className="hidden py-2 pr-3 text-right font-medium sm:table-cell">Bank</th>
                  <th scope="col" className="py-2 text-right font-medium">State</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_ROWS.map((r) => (
                  <tr key={r.ref} className="border-b border-[var(--ll-rule)]">
                    <td className="py-2 pr-3">{r.ref}</td>
                    <td className="hidden py-2 pr-3 text-[var(--ll-muted)] md:table-cell">{r.source}</td>
                    <td className="py-2 pr-3 text-right">{r.ours}</td>
                    <td className="hidden py-2 pr-3 text-right sm:table-cell">{r.bank}</td>
                    <td className={`py-2 text-right ${r.state === 'matched' ? 'text-[var(--ll-accent)]' : 'text-[var(--ll-error)]'}`}>
                      {r.state === 'matched' ? '✓ ' : '○ '}
                      {r.state}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        </div>
      </div>
    </section>
  );
}
