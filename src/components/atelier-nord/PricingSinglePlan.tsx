import {ReserveForm} from './ReserveForm';

/**
 * Archetype: pricing/single-plan (Inspo reference, references/pricing-single-plan.tsx.txt).
 * One offer, no comparison: a pre-order spotlight for the Lune chair. Reads
 * as a brochure: headline, what is included, then the action (here a
 * validated reserve form). The price is a labelled sample.
 */
const INCLUDED = [
  'Solid birch frame, hard-wax oiled',
  'Two loose wool cushions, removable covers',
  'Spare webbing and a care kit',
  'Repair service for the life of the chair',
  'Delivered flat in recycled card',
  'Assembly with one included key',
];

export function PricingSinglePlan() {
  return (
    <section id="reserve" aria-labelledby="an-reserve-title" className="border-b border-[var(--an-rule)] bg-[var(--an-oat)] px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="an-meta">Pre-order spotlight · one piece</p>
          <h2
            id="an-reserve-title"
            className="an-display mt-4 max-w-[16ch] leading-[1.02] tracking-tight"
            style={{fontSize: 'clamp(2.25rem, 5vw, 4rem)'}}
          >
            The Lune lounge chair, <em className="italic">first run</em>.
          </h2>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-[var(--an-muted)]">
            One chair, one price, no tiers. Reserving holds a place in the first run; in a real launch you would pay
            only when your chair is ready to ship.
          </p>

          <div className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-4 border-t border-[var(--an-ink)]/20 pt-8">
            <p className="an-display leading-none" style={{fontSize: 'clamp(3rem, 7vw, 5rem)'}}>
              €1,480
            </p>
            <p className="pb-2 text-sm leading-snug text-[var(--an-muted)]">
              <span className="block font-semibold text-[var(--an-ink)]">Sample price</span>
              for illustration only, not a real offer
            </p>
          </div>

          <div className="mt-10 border-t border-[var(--an-ink)]/20 pt-8">
            <p className="an-meta">What&rsquo;s included</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INCLUDED.map((line) => (
                <li key={line} className="flex items-baseline gap-3">
                  <span aria-hidden className="text-[var(--an-accent)]">
                    ·
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="self-start border border-[var(--an-ink)]/15 bg-[color-mix(in_oklab,var(--an-birch)_55%,var(--an-oat))] p-6 sm:p-8">
          <ReserveForm />
        </div>
      </div>
    </section>
  );
}
