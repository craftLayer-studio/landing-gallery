/**
 * Archetype: faq/numbered (Inspo reference, references/faq-numbered.tsx.txt).
 * Questions read as a numbered list of arguments; mono prefix, display
 * question, answer flush underneath. No collapsing.
 */
const QA = [
  {q: 'How often does it arrive?', a: 'Once a week, on Friday morning. One letter, no daily digests, no "quick updates" in between.'},
  {q: 'What does it cost?', a: 'In this concept the letter is free to read. Nothing on this page asks for payment.'},
  {
    q: 'Who writes it?',
    a: 'A small, fictional editorial desk. Field Notes Weekly is a concept by CraftLayer Studio, so there are no real authors, and no real issues to read yet.',
  },
  {q: 'Will my email be shared or sold?', a: 'No. And on this demo page it is not even kept: the forms check your address and then forget it.'},
  {q: 'Can I unsubscribe easily?', a: 'A real version would put a one-click unsubscribe link at the foot of every letter. No questions, no guilt.'},
];

export function FaqNumbered() {
  return (
    <section id="questions" aria-labelledby="fn-faq-title" className="border-b border-[var(--fn-rule)] px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="fn-meta">Asked, briefly answered</p>
        <h2 id="fn-faq-title" className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
          Before you subscribe
        </h2>
        <ol className="mt-12 space-y-10 sm:space-y-12">
          {QA.map((row, i) => (
            <li key={row.q} className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-2 sm:grid-cols-[5rem_1fr] sm:gap-x-10">
              <span aria-hidden className="fn-mono pt-1.5 text-sm text-[var(--fn-muted)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-2xl leading-tight font-medium sm:text-3xl">{row.q}</h3>
                <p className="mt-3 max-w-[58ch] text-lg leading-relaxed text-[var(--fn-muted)]">{row.a}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
