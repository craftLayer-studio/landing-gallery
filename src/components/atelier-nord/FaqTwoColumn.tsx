/**
 * Archetype: faq/two-column (Inspo reference, references/faq-two-column.tsx.txt).
 * Every question open at once: question in the left column, answer on the
 * right. Reads like a magazine interview rather than a help-desk index.
 */
const QA = [
  {
    q: 'When would a reserved chair ship?',
    a: 'In this concept, the first run is made in a single batch once enough places are reserved. A sample lead time of ten to twelve weeks is shown for illustration; a real studio would confirm dates by email.',
  },
  {
    q: 'Where does the timber come from?',
    a: 'The story here is birch and oak from certified northern forests, dried slowly and chosen for straight grain. Atelier Nord is fictional, so treat this as an example of how a sourcing answer could be written.',
  },
  {
    q: 'Can I see the pieces before deciding?',
    a: 'The page imagines a small studio showroom open by appointment. Nothing can actually be visited: the address and contact details on this page are fictional.',
  },
  {
    q: 'What if something breaks in ten years?',
    a: 'Every joint is mechanical and every part is sold separately, so a cushion, a strap of webbing or a leg can be replaced without replacing the chair. That is the promise the collection is designed around.',
  },
  {
    q: 'Is anything charged when I reserve?',
    a: 'No. This is a concept demo by CraftLayer Studio: the reserve form only checks what you type. Nothing is ordered, charged, stored or sent.',
  },
];

export function FaqTwoColumn() {
  return (
    <section id="questions" aria-labelledby="an-faq-title" className="border-b border-[var(--an-rule)] px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 grid grid-cols-1 gap-y-3 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <p className="an-meta">Questions</p>
          </div>
          <h2
            id="an-faq-title"
            className="an-display max-w-[22ch] text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:col-span-8"
          >
            Asked in the studio, answered plainly.
          </h2>
        </div>
        <dl className="border-t border-[var(--an-ink)]/25">
          {QA.map((row) => (
            <div key={row.q} className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-[var(--an-rule)] py-8 lg:grid-cols-12">
              <dt className="an-display text-2xl leading-tight lg:col-span-4">{row.q}</dt>
              <dd className="max-w-[62ch] leading-relaxed text-[var(--an-muted)] lg:col-span-8">{row.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
