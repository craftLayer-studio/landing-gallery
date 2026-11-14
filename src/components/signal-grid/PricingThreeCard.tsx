'use client';

import {useId, useState} from 'react';
import {ANNUAL_DISCOUNT, clampResponders, estimate, formatUsd, MAX_RESPONDERS, TIERS, type Cycle} from './pricing';
import styles from './signal.module.css';

/**
 * Archetype: pricing/three-card. Three tiers side by side; the recommended one
 * is raised by an accent rule, not a badge. Every figure is a sample.
 */
const COPY: Record<string, {description: string; features: string[]; cta: string; href: string; accent: boolean}> = {
  shift: {
    description: 'For a single rotation that wants calmer nights.',
    features: ['Alert grouping into incidents', 'Triage summary on every page', 'Incident timeline', 'Chat and email notifications'],
    cta: 'Compare tiers',
    href: '#plans-table',
    accent: false,
  },
  rotation: {
    description: 'For teams with several services and handoffs between shifts.',
    features: ['Everything in Shift', 'Change context from deploys', 'Runbook drafts for approval', 'Shift handoff summaries', 'Post-incident review drafts'],
    cta: 'Request a walkthrough',
    href: '#walkthrough',
    accent: true,
  },
  command: {
    description: 'For organisations running many rotations and a review practice.',
    features: ['Everything in Rotation', 'Cross-team escalation policies', 'Custom retention settings', 'Single sign-on', 'A named contact for rollout'],
    cta: 'Ask about Command',
    href: '#walkthrough',
    accent: false,
  },
};

export function PricingThreeCard() {
  const uid = useId();
  const [cycle, setCycle] = useState<Cycle>('annual');
  const [responders, setResponders] = useState('8');
  const seats = clampResponders(responders);

  return (
    <div>
      <div className="flex flex-col gap-6 border border-[var(--line)] bg-[var(--surface)] p-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <fieldset>
          <legend className={`${styles.meta} mb-2`}>Billing</legend>
          <div className="inline-flex border border-[var(--line-2)] p-1">
            {(['monthly', 'annual'] as const).map((c) => (
              <label
                key={c}
                className={`${styles.mono} relative inline-flex min-h-10 cursor-pointer items-center px-4 text-[13px] capitalize transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--accent)] ${
                  cycle === c ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : 'text-[var(--fg)] hover:text-[var(--accent)]'
                }`}
              >
                <input
                  type="radio"
                  name={`${uid}-cycle`}
                  value={c}
                  checked={cycle === c}
                  onChange={() => setCycle(c)}
                  className="sr-only"
                />
                {c}
                {c === 'annual' ? <span className="ml-2 text-[11px] opacity-80">−{ANNUAL_DISCOUNT * 100}%</span> : null}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor={`${uid}-seats`} className={`${styles.meta} mb-2 block`}>
            Responders on call
          </label>
          <input
            id={`${uid}-seats`}
            type="number"
            inputMode="numeric"
            min={1}
            max={MAX_RESPONDERS}
            value={responders}
            onChange={(e) => setResponders(e.target.value)}
            onBlur={() => setResponders(String(seats))}
            aria-describedby={`${uid}-seats-note`}
            className={`${styles.mono} min-h-11 w-32 border border-[var(--line-2)] bg-[var(--bg)] px-3 text-base text-[var(--fg)]`}
          />
          <p id={`${uid}-seats-note`} className="sr-only">
            Updates the sample estimates on each plan.
          </p>
        </div>
        <p className="max-w-[34ch] text-sm text-[var(--muted)] sm:text-right">
          Sample pricing for a fictional product. Nothing is for sale.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3" aria-live="polite">
        {TIERS.map((t) => {
          const c = COPY[t.id];
          const est = t.monthly === null ? null : estimate(t.monthly, cycle, seats);
          return (
            <article
              key={t.id}
              aria-labelledby={`${uid}-${t.id}`}
              className={`relative flex flex-col border bg-[var(--surface)] transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none ${
                c.accent ? 'border-[var(--accent)] border-t-4' : 'border-[var(--line)]'
              }`}
            >
              <div className="px-6 pt-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 id={`${uid}-${t.id}`} className="text-xl font-semibold">
                    {t.name}
                  </h3>
                  {c.accent ? <p className={`${styles.meta} text-[var(--accent)]`}>Recommended</p> : null}
                </div>
                <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-5xl font-semibold tracking-tight">{est ? formatUsd(est.perResponder) : 'Custom'}</span>
                  <span className={`${styles.mono} text-xs text-[var(--muted)]`}>
                    {est ? '/ responder / month' : 'priced with you'}
                  </span>
                </p>
                <p className={`${styles.mono} mt-2 min-h-10 text-xs leading-relaxed text-[var(--muted)]`}>
                  {est ? (
                    <>
                      Sample · {seats} {seats === 1 ? 'responder' : 'responders'} = {formatUsd(est.billed)} {est.billedLabel}
                    </>
                  ) : (
                    'Sample tier · no published price'
                  )}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">{c.description}</p>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] px-6 py-6 text-[15px]">
                {c.features.map((f) => (
                  <li key={f} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="text-[var(--accent)]">
                      ▸
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={c.href}
                className={`${styles.mono} m-6 mt-auto inline-flex min-h-11 items-center justify-between border px-4 text-[13px] transition-colors ${
                  c.accent
                    ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[var(--accent-soft)]'
                    : 'border-[var(--line-2)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {c.cta}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
