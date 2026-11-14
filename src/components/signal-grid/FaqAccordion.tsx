'use client';

import {useRef, type SyntheticEvent} from 'react';
import styles from './signal.module.css';

/**
 * Archetype: faq/accordion. Native <details>/<summary>, single-open: the shared
 * `name` gives exclusive behaviour in current browsers, and the toggle handler
 * closes siblings where `name` is not supported.
 */
const QA = [
  {
    q: 'Is Signal Grid a real product?',
    a: 'No. Signal Grid is a fictional brand, and this is a landing page example designed and built by CraftLayer Studio. There is no product, trial or sales team behind it.',
  },
  {
    q: 'Does it fix incidents on its own?',
    a: 'Not in this concept. It groups alerts, gathers context and drafts suggested steps. Every action that touches a system is left for a person on call to approve and run.',
  },
  {
    q: 'What does it connect to?',
    a: 'The concept assumes the usual on-call sources: alerting, metrics, logs, deploy history, a service catalogue and team chat. No specific vendors are implied.',
  },
  {
    q: 'How does it decide what is related?',
    a: 'It looks at timing, the services involved and recent changes, then shows its reasoning next to the grouping so responders can split or merge incidents themselves.',
  },
  {
    q: 'Are the prices real?',
    a: 'No. Every price, limit and discount on this page is a sample used to show how a three-tier plan and comparison table can be laid out.',
  },
  {
    q: 'Can our team get a walkthrough?',
    a: 'Not of Signal Grid, since it does not exist. If you want a page like this for a real product, CraftLayer Studio is linked in the footer.',
  },
];

export function FaqAccordion() {
  const listRef = useRef<HTMLUListElement>(null);

  function onToggle(e: SyntheticEvent<HTMLDetailsElement>) {
    const opened = e.currentTarget;
    if (!opened.open || !listRef.current) return;
    listRef.current.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((d) => {
      if (d !== opened) d.open = false;
    });
  }

  return (
    <section id="faq" aria-labelledby="sg-faq-title" className="scroll-mt-16 border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-x-10 gap-y-10 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <p className={styles.meta}>03 — Questions</p>
          <h2 id="sg-faq-title" className="mt-4 max-w-[14ch] text-4xl leading-[1.04] font-semibold tracking-[-0.02em] sm:text-5xl">
            Asked before the first page.
          </h2>
        </div>
        <ul ref={listRef} className="border-t border-[var(--line-2)] lg:col-span-8">
          {QA.map(({q, a}, i) => (
            <li key={q}>
              <details name="sg-faq" onToggle={onToggle} open={i === 0} className="group border-b border-[var(--line)]">
                <summary
                  className={`${styles.summary} flex min-h-14 cursor-pointer items-center justify-between gap-6 py-5 transition-colors hover:text-[var(--accent)]`}
                >
                  <span className="text-lg leading-snug font-medium sm:text-xl">{q}</span>
                  <span
                    aria-hidden="true"
                    className={`${styles.mono} grid h-8 w-8 shrink-0 place-items-center border border-[var(--line-2)] text-base text-[var(--muted)] group-open:border-[var(--accent)] group-open:text-[var(--accent)]`}
                  >
                    <span className="inline-block transition-transform duration-200 group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="max-w-[62ch] pr-10 pb-6 text-[15.5px] leading-relaxed text-[var(--muted)]">{a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
