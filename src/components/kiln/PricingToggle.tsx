'use client';

import {useRef, useState} from 'react';
import {PLANS, formatDollars, priceFor, type Cadence} from './pricing';

const OPTIONS: {label: string; value: Cadence}[] = [
  {label: 'Monthly', value: 'monthly'},
  {label: 'Annual', value: 'annual'},
];

/**
 * pricing/toggle: a monthly/annual segmented control with radio
 * semantics (roving tabindex, arrow keys) above two plans.
 */
export function KilnPricing() {
  const [cadence, setCadence] = useState<Cadence>('monthly');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, idx: number) {
    let next = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % OPTIONS.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + OPTIONS.length) % OPTIONS.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = OPTIONS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setCadence(OPTIONS[next].value);
    refs.current[next]?.focus();
  }

  return (
    <section id="pricing" aria-labelledby="kn-pricing-title" className="scroll-mt-20 border-t border-[var(--kn-rule)] px-4 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-[96rem]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kn-mono text-xs tracking-[0.14em] text-[var(--kn-ember)] uppercase">Sample pricing</p>
            <h2 id="kn-pricing-title" className="kn-display mt-5 max-w-[14ch] text-4xl leading-[0.95] tracking-tight uppercase sm:text-6xl">
              Free on one machine.
            </h2>
          </div>
          <div className="w-full max-w-xs">
            <p id="kn-cadence-label" className="kn-mono mb-2 text-xs text-[var(--kn-muted)]">
              Billing cadence
            </p>
            <div role="radiogroup" aria-labelledby="kn-cadence-label" className="kn-mono flex w-full rounded-full border border-[var(--kn-rule)] p-1 text-sm">
              {OPTIONS.map((opt, idx) => {
                const checked = cadence === opt.value;
                return (
                  <button
                    key={opt.value}
                    ref={(el) => {
                      refs.current[idx] = el;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={checked}
                    tabIndex={checked ? 0 : -1}
                    onClick={() => setCadence(opt.value)}
                    onKeyDown={(e) => onKeyDown(e, idx)}
                    className={`flex-1 rounded-full px-3 py-2 transition-colors ${
                      checked ? 'bg-[var(--kn-bone)] font-bold text-[var(--kn-ink)]' : 'text-[var(--kn-muted)] hover:text-[var(--kn-bone)]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PLANS.map((plan) => {
            const price = priceFor(plan, cadence);
            return (
              <article
                key={plan.id}
                aria-labelledby={`kn-plan-${plan.id}`}
                className={`flex flex-col rounded-[1.75rem] border p-7 sm:p-10 ${
                  plan.accent ? 'border-[var(--kn-ember)] bg-[var(--kn-surface)] shadow-[0_0_80px_-30px_rgba(255,91,31,0.6)]' : 'border-[var(--kn-rule)]'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 id={`kn-plan-${plan.id}`} className="kn-display text-2xl tracking-tight uppercase">
                    {plan.name}
                  </h3>
                  {price.savings > 0 && (
                    <span className="kn-mono rounded-full bg-[var(--kn-amber)] px-3 py-1 text-xs font-bold text-[var(--kn-ink)]">
                      Save {formatDollars(price.savings)} / year
                    </span>
                  )}
                </div>
                <p className="mt-6 flex flex-wrap items-baseline gap-x-3" aria-live="polite">
                  <span className="kn-display text-6xl leading-none tracking-tight sm:text-7xl">{formatDollars(price.amount)}</span>
                  <span className="kn-mono text-sm text-[var(--kn-muted)]">/ {price.period}</span>
                </p>
                <p className="kn-mono mt-3 min-h-5 text-xs text-[var(--kn-muted)]">
                  {plan.monthly === 0
                    ? 'Free in both cadences · sample'
                    : cadence === 'annual'
                      ? `${formatDollars(price.perMonth)} a month, billed yearly · sample`
                      : 'Billed monthly · sample'}
                </p>
                <p className="mt-6 max-w-[42ch] leading-relaxed text-[var(--kn-muted)]">{plan.description}</p>
                <ul className="mt-8 flex-1 space-y-3 border-t border-[var(--kn-rule)] pt-6">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="text-[var(--kn-ember)]">
                        ▲
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#install"
                  className={`kn-mono mt-10 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition-colors ${
                    plan.accent
                      ? 'bg-[var(--kn-ember)] text-[var(--kn-ink)] hover:bg-[var(--kn-amber)]'
                      : 'border border-[var(--kn-bone)] hover:border-[var(--kn-amber)] hover:text-[var(--kn-amber)]'
                  }`}
                >
                  See a first run with {plan.name}
                </a>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-[var(--kn-muted)]">Kiln is fictional. Prices are sample figures and nothing can be bought.</p>
      </div>
    </section>
  );
}
