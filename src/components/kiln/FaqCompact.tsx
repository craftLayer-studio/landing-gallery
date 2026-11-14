'use client';

import {useState} from 'react';

const QA = [
  {q: 'Is Kiln a real tool?', a: 'No. Kiln is a fictional brand, and this page is a landing page example by CraftLayer Studio. There is nothing to download.'},
  {q: 'What does it cache?', a: 'In the concept: the outputs and logs of any task you declare, keyed by a hash of its inputs.'},
  {q: 'Does it replace my task runner?', a: 'No. The concept wraps the scripts you already have, so your package scripts stay the source of truth.'},
  {q: 'What decides a cache hit?', a: 'Source files, the lockfile, declared environment variables and the command itself. Change any of them and the task fires again.'},
  {q: 'Where would the remote cache live?', a: 'On the Shared plan, in a hosted bucket scoped per workspace and branch. That plan, like its price, is a sample.'},
  {q: 'Can I wipe the cache?', a: 'Yes, in the concept: kiln cache clear removes local entries. It is a sample command, not a real one.'},
];

/** faq/compact: questions only by default; one answer opens inline at a time. */
export function KilnFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="kn-faq-title" className="scroll-mt-20 border-t border-[var(--kn-rule)] px-4 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-[96rem] grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-12">
        <p className="kn-mono text-xs tracking-[0.14em] text-[var(--kn-ember)] uppercase lg:col-span-3 lg:pt-3">Brief answers</p>
        <div className="lg:col-span-9">
          <h2 id="kn-faq-title" className="kn-display max-w-[18ch] text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl">
            The short version.
          </h2>
          <ul className="mt-12 border-t border-[var(--kn-rule)]">
            {QA.map((row, i) => {
              const isOpen = open === i;
              return (
                <li key={row.q} className="border-b border-[var(--kn-rule)]">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`kn-faq-${i}`}
                      className={`flex w-full items-baseline justify-between gap-6 py-5 text-left text-lg font-semibold transition-colors sm:text-xl ${
                        isOpen ? 'text-[var(--kn-amber)]' : 'hover:text-[var(--kn-amber)]'
                      }`}
                    >
                      <span>{row.q}</span>
                      <span aria-hidden="true" className={`kn-mono text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                  </h3>
                  <div id={`kn-faq-${i}`} hidden={!isOpen}>
                    <p className="max-w-[62ch] pb-6 leading-relaxed text-[var(--kn-muted)]">{row.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
