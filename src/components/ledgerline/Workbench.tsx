/**
 * features/workbench: explanatory copy left, a typeset sample request
 * and response right. Real strings, no faux window chrome.
 */
const REQUEST = `POST https://api.example.com/v1/reconciliations
Authorization: Bearer sk_sample_••••••••
Content-Type: application/json

{
  "period": "2026-10",
  "sources": ["processor:sample_payouts", "bank:sample_operating"],
  "tolerance": { "amount": "0.00", "days": 2 },
  "split": ["fees", "refunds"]
}`;

const RESPONSE = `HTTP/1.1 201 Created

{
  "id": "rec_sample_8f2c",
  "status": "completed",
  "lines": { "matched": 412, "in_review": 3 },
  "exceptions": [
    { "ref": "PO-2293", "reason": "missing_deposit" },
    { "ref": "PO-2307", "reason": "amount_mismatch" },
    { "ref": "RF-0421", "reason": "duplicate_refund" }
  ]
}`;

const FEATURES = [
  {key: 'tolerance', title: 'Tolerance rules', body: 'An amount and date window per source, so a deposit that clears two days late still matches.'},
  {key: 'split', title: 'Fee and refund splits', body: 'Net deposits are broken back into gross charges, fees and refunds before matching.'},
  {key: 'exceptions', title: 'Exception queue', body: 'Anything unmatched arrives with a reason code, ready for review instead of a spreadsheet hunt.'},
];

function Transcript({label, code}: {label: string; code: string}) {
  return (
    <div className="min-w-0">
      <p className="ll-mono mb-2 flex items-center justify-between text-xs tracking-wide text-[var(--ll-muted)] uppercase">
        <span>{label}</span>
        <span>sample</span>
      </p>
      <pre
        tabIndex={0}
        aria-label={`${label}, sample code`}
        className="ll-mono overflow-x-auto border border-[var(--ll-rule)] bg-[color-mix(in_oklab,var(--ll-ink)_4%,var(--ll-paper))] px-4 py-4 text-[13px] leading-relaxed sm:px-5 sm:text-sm"
      >
        {code}
      </pre>
    </div>
  );
}

export function LedgerlineWorkbench() {
  return (
    <section id="workbench" aria-labelledby="ll-workbench-title" className="scroll-mt-4 border-b border-[var(--ll-rule)] px-4 py-16 sm:px-8 sm:py-24 lg:px-14">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <p className="ll-mono text-xs tracking-wide text-[var(--ll-accent)] uppercase">From the workbench</p>
          <h2
            id="ll-workbench-title"
            className="mt-4 max-w-[18ch] leading-[1.05] font-semibold tracking-tight text-balance"
            style={{fontSize: 'clamp(1.9rem, 4vw, 3.25rem)'}}
          >
            One request reconciles a month.
          </h2>
          <p className="mt-6 max-w-[44ch] leading-relaxed text-[var(--ll-muted)]">
            Name the period and the sources. Ledgerline would return matched lines and a short list of exceptions with reasons, so close is
            about the three odd lines, not the four hundred good ones.
          </p>
          <dl className="mt-10 border-t border-[var(--ll-rule-strong)]">
            {FEATURES.map((f) => (
              <div key={f.key} className="grid grid-cols-1 gap-1 border-b border-[var(--ll-rule)] py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="font-semibold">{f.title}</dt>
                <dd className="text-sm leading-relaxed text-[var(--ll-muted)]">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid min-w-0 gap-6 lg:col-span-7">
          <Transcript label="Request" code={REQUEST} />
          <Transcript label="Response" code={RESPONSE} />
          <p className="text-sm text-[var(--ll-muted)]">
            Illustrative only: <span className="ll-mono">api.example.com</span> is a reserved example domain and these figures are sample
            data.
          </p>
        </div>
      </div>
    </section>
  );
}
