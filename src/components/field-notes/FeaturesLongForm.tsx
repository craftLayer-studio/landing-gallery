/**
 * Archetype: features/long-form (Inspo reference, references/features-long-form.tsx.txt).
 * Features written as connected essay paragraphs with marginal headings:
 * read, not scanned.
 */
const NOTES = [
  {
    label: 'On the workbench',
    body: 'Each letter opens at the bench: one small project, start to finish, with the parts that went wrong left in. A dovetail that gapped, a glue-up that slid, a finish that blotched. The point is not the finished object; it is the decisions in between, written down while they are still fresh enough to be useful.',
  },
  {
    label: 'On tools',
    body: 'Then a tool, considered slowly. Not a review and never a list of affiliate links: an old block plane, a marking gauge, a cheap chisel made good. What it is for, how to set it up, how to tell when it is lying to you. You will not be told to buy anything.',
  },
  {
    label: 'On the people who make',
    body: 'Last, a short note from the wider world of making: a technique from a basket weaver, a trick from a bookbinder, a question a reader sent in. In this concept every contributor is fictional, but the shape is the promise: other hands, other materials, the same patience.',
  },
];

export function FeaturesLongForm() {
  return (
    <section id="why" aria-labelledby="fn-why-title" className="border-b border-[var(--fn-rule)] bg-[var(--fn-paper-deep)] px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="fn-meta">Three notes on what arrives</p>
        <h2
          id="fn-why-title"
          className="mt-4 max-w-[20ch] leading-[1.05] font-medium tracking-tight text-balance"
          style={{fontSize: 'clamp(2rem, 4.5vw, 3.5rem)'}}
        >
          What a Friday letter is <em className="italic">actually</em> made of.
        </h2>
        <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-14">
          {NOTES.map((n, i) => (
            <article key={n.label} className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-[var(--fn-rule)] pt-6 lg:grid-cols-12">
              <h3 className="fn-meta text-[var(--fn-ink)] lg:col-span-3">{n.label}</h3>
              <p className={`max-w-[64ch] text-lg leading-[1.7] lg:col-span-9 ${i === 0 ? 'fn-dropcap' : ''}`}>{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
