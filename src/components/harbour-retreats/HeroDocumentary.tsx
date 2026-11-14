import {PlateScene} from './Scenes';
import styles from './harbour.module.css';

/**
 * Archetype: hero/documentary. The headline is the caption of a plate; a mono
 * documentary credit block sits in the margin like a Sunday-supplement credit.
 */
const CREDITS = [
  ['Plate', 'Nº 01 of 06'],
  ['Location', 'Hollin Head, Calder Reach'],
  ['Light', '07:40, sea fog lifting'],
  ['Medium', 'Drawn vector. No photography.'],
  ['Filed', 'Concept edition, autumn'],
];

export function HeroDocumentary() {
  return (
    <section id="plate" aria-labelledby="hr-title" className="scroll-mt-20 px-4 pt-8 pb-16 sm:px-8 lg:px-14 lg:pt-12 lg:pb-24">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[var(--ink)] pb-3">
        <p className={styles.meta}>Plate Nº 01 — The Calder Reach</p>
        <p className={styles.meta}>A collection of three coastal stays</p>
      </div>

      <figure className="mt-6">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--fog)] sm:aspect-[16/8] lg:aspect-[21/8]">
          <PlateScene
            className="absolute inset-0 h-full w-full"
            label="Drawn plate: a lighthouse and keeper's cottage on a green headland, sea fog lifting off a dark harbour-blue sea."
          />
        </div>
        <figcaption className="sr-only">Plate 01: Hollin Head at first light, drawn for this concept.</figcaption>
      </figure>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <h1
            className={`${styles.display} max-w-[20ch] leading-[1.04] tracking-[-0.01em] text-balance`}
            style={{fontSize: 'clamp(2.25rem, 5.2vw, 4.5rem)'}}
          >
            Three houses on the Calder Reach, where the <em className="text-[var(--rust)]">fog decides</em> the
            shape of the day.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-[var(--muted)]">
            A lighthouse keeper&rsquo;s cottage, a glass room on the cliff and a loft above the quay. Small, quiet
            and kept by hand on an invented stretch of coast.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#stays"
              className={`${styles.mono} inline-flex min-h-12 items-center gap-3 bg-[var(--harbour)] px-6 text-sm text-[var(--salt)] transition-colors hover:bg-[var(--harbour-2)]`}
            >
              Read about the stays <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#enquire"
              className={`${styles.mono} inline-flex min-h-12 items-center gap-3 border-2 border-[var(--ink)] px-6 text-sm transition-colors hover:border-[var(--rust)] hover:text-[var(--rust)]`}
            >
              Send an enquiry
            </a>
          </div>
        </div>

        <aside aria-label="Plate credit" className="lg:col-span-3 lg:border-l lg:border-[var(--rule)] lg:pl-6">
          <p className={styles.meta}>Credit</p>
          <dl className={`${styles.mono} mt-4 grid grid-cols-[5rem_1fr] gap-x-3 gap-y-2.5 text-[12.5px] leading-snug`}>
            {CREDITS.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-[var(--muted)]">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-[var(--rule)] pt-4 text-sm leading-relaxed text-[var(--muted)]">
            Harbour Retreats and the Calder Reach are fictional. The plates are drawn for this page.
          </p>
        </aside>
      </div>
    </section>
  );
}
