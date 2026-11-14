import {EnquiryForm} from './EnquiryForm';
import styles from './harbour.module.css';

/**
 * Archetype: pricing/enterprise (contact-led). No rate card: what every stay
 * includes, what is arranged on request, and an enquiry card as the action.
 */
const INCLUDED = [
  'Linen, towels and a stocked larder for the first morning',
  'Dry wood for the stove, all season',
  'Tide tables and walking maps at the door',
  'Late arrival by the key tin, any hour',
];
const ARRANGED = [
  'Week-long stays outside the summer',
  'Two stays booked together for a group',
  'A boat out to the seal ledges, weather allowing',
  'Quiet arrival for a writing or painting retreat',
];

export function PricingEnterprise() {
  return (
    <section id="enquire" aria-labelledby="hr-enquire-title" className="scroll-mt-20 px-4 py-16 sm:px-8 lg:px-14 lg:py-24">
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <p className={styles.meta}>03 — Rates &amp; enquiry</p>
          <h2
            id="hr-enquire-title"
            className={`${styles.display} mt-4 max-w-[16ch] leading-[1.05] text-balance`}
            style={{fontSize: 'clamp(2rem, 4.2vw, 3.4rem)'}}
          >
            No rate card. A <em className="text-[var(--rust)]">conversation</em> instead.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-[var(--muted)]">
            Rates change with the tides and the season, so each stay is quoted by reply. Tell us your dates and
            we would set out what is possible. In this concept, the card below simply checks your answers.
          </p>

          <div className="mt-10 space-y-9 border-t border-[var(--rule)] pt-8">
            <div>
              <h3 className={styles.meta}>Included with every stay</h3>
              <ul className="mt-4 space-y-2.5">
                {INCLUDED.map((l) => (
                  <li key={l} className="flex items-baseline gap-3 text-[15px] leading-snug">
                    <span aria-hidden="true" className="text-[var(--rust)]">
                      ◆
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.meta}>Arranged on request</h3>
              <ul className="mt-4 space-y-2.5">
                {ARRANGED.map((l) => (
                  <li key={l} className="flex items-baseline gap-3 text-[15px] leading-snug">
                    <span aria-hidden="true" className="text-[var(--muted)]">
                      ◇
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="xl:col-span-7 xl:border-l xl:border-[var(--rule)] xl:pl-12">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
