'use client';

import {useMemo, useState} from 'react';
import {LINE_ITEMS, MAX_QUANTITY, estimateMonthly, formatMills, formatRate} from './pricing';

/**
 * pricing/per-use: line items read as a menu, not a plan comparison.
 * Each line carries a quantity slot; the monthly estimate is computed
 * by the pure estimateMonthly() function.
 */
export function LedgerlinePricing() {
  const [quantities, setQuantities] = useState<Record<string, string>>(() =>
    Object.fromEntries(LINE_ITEMS.map((i) => [i.id, String(i.defaultQuantity)])),
  );
  const estimate = useMemo(() => estimateMonthly(LINE_ITEMS, quantities), [quantities]);

  return (
    <section id="pricing" aria-labelledby="ll-pricing-title" className="scroll-mt-4 border-b border-[var(--ll-rule)] px-4 py-16 sm:px-8 sm:py-24 lg:px-14">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <p className="ll-mono text-xs tracking-wide text-[var(--ll-accent)] uppercase">Line items</p>
          <h2
            id="ll-pricing-title"
            className="mt-4 max-w-[16ch] leading-[1.05] font-semibold tracking-tight text-balance"
            style={{fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)'}}
          >
            Pay for the lines you reconcile.
          </h2>
          <p className="mt-4 max-w-[40ch] leading-relaxed text-[var(--ll-muted)]">
            No seats, no tiers. Enter a month of volume to see how an estimate would add up.
          </p>
          <p className="ll-mono mt-6 inline-block border border-[var(--ll-rule)] px-2 py-1 text-xs text-[var(--ll-muted)]">
            Sample rates · fictional product
          </p>
        </div>

        <div className="min-w-0 lg:col-span-8 lg:border-l lg:border-[var(--ll-rule)] lg:pl-10">
          <ul className="border-t-2 border-[var(--ll-rule-strong)]">
            {LINE_ITEMS.map((item, idx) => {
              const line = estimate.lines[idx];
              const inputId = `ll-qty-${item.id}`;
              return (
                <li
                  key={item.id}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 border-b border-[var(--ll-rule)] py-5 sm:grid-cols-[1fr_9rem_7rem] sm:gap-x-6"
                >
                  <div className="col-span-2 min-w-0 sm:col-span-1">
                    <label htmlFor={inputId} className="text-lg leading-tight font-semibold sm:text-xl">
                      {item.label}
                    </label>
                    <p className="mt-1 text-sm text-[var(--ll-muted)]">
                      <span className="ll-mono text-[var(--ll-ink)]">{formatRate(item.rateMills)}</span> {item.unit} · {item.note}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <span className="sr-only" id={`${inputId}-hint`}>
                      Quantity per month, whole number
                    </span>
                    <input
                      id={inputId}
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={MAX_QUANTITY}
                      step={1}
                      value={quantities[item.id]}
                      aria-describedby={`${inputId}-hint`}
                      onChange={(e) => setQuantities((q) => ({...q, [item.id]: e.target.value}))}
                      className="ll-mono h-11 w-full max-w-[9rem] border border-[var(--ll-ink)] bg-white px-3 text-right text-base"
                    />
                  </div>
                  <p className="ll-mono text-right text-base" aria-label={`${item.label} subtotal ${formatMills(line.subtotalMills)}`}>
                    {formatMills(line.subtotalMills)}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-[var(--ll-rule-strong)] py-6">
            <p className="font-semibold">
              Sample monthly estimate
              <span className="block text-sm font-normal text-[var(--ll-muted)]">Before tax. Nothing is billed: this product is fictional.</span>
            </p>
            <output
              htmlFor={LINE_ITEMS.map((i) => `ll-qty-${i.id}`).join(' ')}
              aria-live="polite"
              className="ll-mono text-4xl font-medium tracking-tight text-[var(--ll-accent)] sm:text-5xl"
            >
              {formatMills(estimate.totalMills)}
            </output>
          </div>
        </div>
      </div>
    </section>
  );
}
