'use client';

import {useId, useMemo, useState} from 'react';
import {FAQ, filterFaq} from './faq';

/** faq/search-led: a filter input above an open list, with live count and empty state. */
export function LedgerlineFaq() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => filterFaq(FAQ, query), [query]);
  const inputId = useId();

  return (
    <section id="faq" aria-labelledby="ll-faq-title" className="scroll-mt-4 border-b border-[var(--ll-rule)] px-4 py-16 sm:px-8 sm:py-24 lg:px-14">
      <div className="mx-auto max-w-[88rem]">
        <p className="ll-mono text-xs tracking-wide text-[var(--ll-accent)] uppercase">Questions</p>
        <h2
          id="ll-faq-title"
          className="mt-4 max-w-[20ch] leading-[1.05] font-semibold tracking-tight text-balance"
          style={{fontSize: 'clamp(1.9rem, 4.5vw, 3.25rem)'}}
        >
          Filter to what you are actually asking.
        </h2>

        <form role="search" aria-label="Search the FAQ" onSubmit={(e) => e.preventDefault()} className="mt-10 max-w-3xl">
          <label htmlFor={inputId} className="ll-mono text-xs tracking-wide text-[var(--ll-muted)] uppercase">
            Search questions
          </label>
          <div className="group mt-2 flex items-center gap-3 border-b-2 border-[var(--ll-ink)] py-2 transition-colors focus-within:border-[var(--ll-accent)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true" className="shrink-0 text-[var(--ll-muted)] group-focus-within:text-[var(--ll-accent)]">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="try “refunds” or “tolerance”"
              autoComplete="off"
              className="ll-mono min-w-0 flex-1 bg-transparent py-1 text-base placeholder:text-[var(--ll-muted)] focus-visible:outline-none"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} className="ll-mono shrink-0 px-1 text-xs text-[var(--ll-muted)] underline underline-offset-2 hover:text-[var(--ll-accent)]">
                Clear
              </button>
            )}
          </div>
          <p role="status" aria-live="polite" className="ll-mono mt-3 text-xs text-[var(--ll-muted)]">
            {query.trim() ? `${results.length} of ${FAQ.length} questions match` : `${FAQ.length} questions`}
          </p>
        </form>

        {results.length === 0 ? (
          <div className="mt-10 max-w-3xl border-y border-[var(--ll-rule)] py-10">
            <p className="text-lg font-semibold">Nothing matches “{query.trim()}”.</p>
            <p className="mt-2 text-[var(--ll-muted)]">Try a single word such as “export” or “pricing”, or clear the search to see every question.</p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="ll-mono mt-5 inline-flex h-10 items-center border border-[var(--ll-ink)] px-4 text-sm hover:border-[var(--ll-accent)] hover:text-[var(--ll-accent)]"
            >
              Clear search
            </button>
          </div>
        ) : (
          <dl className="mt-10 border-t-2 border-[var(--ll-rule-strong)]">
            {results.map((row) => (
              <div key={row.q} className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-[var(--ll-rule)] py-5 lg:grid-cols-[22rem_1fr]">
                <dt className="text-lg leading-tight font-semibold">{row.q}</dt>
                <dd className="max-w-[62ch] leading-relaxed text-[var(--ll-muted)]">{row.a}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
