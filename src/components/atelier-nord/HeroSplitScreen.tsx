/**
 * Archetype: hero/split-screen (Inspo reference, references/hero-split-screen.tsx.txt).
 * Typography on one half, an atmospheric panel on the other. The panel is a
 * pure CSS composition (window, light, lamp, stool): no photography. On
 * mobile the panel sits under the type, not over it.
 */
export function HeroSplitScreen() {
  return (
    <section id="collection" aria-labelledby="an-hero-title" className="border-b border-[var(--an-rule)]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-12 px-4 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-16">
          <p className="an-meta flex items-center gap-3">
            <span aria-hidden className="inline-block h-px w-8 bg-[var(--an-accent)]" />
            Collection 04 · Winter release
          </p>
          <div>
            <h1
              id="an-hero-title"
              className="an-display max-w-[13ch] leading-[0.98] tracking-[-0.015em] text-balance"
              style={{fontSize: 'clamp(2.6rem, 6.2vw, 5.6rem)'}}
            >
              Three quiet pieces, <em className="text-[var(--an-accent)] italic">made to stay</em>.
            </h1>
            <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-[var(--an-muted)] sm:text-lg">
              A lounge chair, a dining table and a pendant lamp in solid birch, oiled oak and undyed wool. Made in
              small runs, built to be repaired rather than replaced.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#reserve"
                className="inline-flex min-h-12 items-center gap-3 bg-[var(--an-ink)] px-7 text-sm font-semibold tracking-wide text-[var(--an-birch)] transition-colors hover:bg-[var(--an-accent)]"
              >
                Reserve the Lune chair <span aria-hidden>→</span>
              </a>
              <a
                href="#pieces"
                className="text-sm font-semibold text-[var(--an-ink)] underline decoration-[var(--an-accent)] decoration-2 underline-offset-[6px] hover:text-[var(--an-accent)]"
              >
                See the three pieces
              </a>
            </div>
          </div>
          <dl className="grid max-w-md grid-cols-3 gap-4 border-t border-[var(--an-rule)] pt-5 text-sm">
            <div>
              <dt className="an-meta">Woods</dt>
              <dd className="mt-1">Birch, oak</dd>
            </div>
            <div>
              <dt className="an-meta">Textile</dt>
              <dd className="mt-1">Undyed wool</dd>
            </div>
            <div>
              <dt className="an-meta">Finish</dt>
              <dd className="mt-1">Hard-wax oil</dd>
            </div>
          </dl>
        </div>

        {/* Atmospheric panel: pure CSS, no image. */}
        <div
          role="img"
          aria-label="Illustration: morning light through an arched window falls across a quiet room with a floor lamp and a low birch stool."
          className="an-panel min-h-[22rem] sm:min-h-[28rem] lg:min-h-0"
        >
          <div className="an-panel__floor" />
          <div className="an-panel__sun" />
          <div className="an-panel__window" />
          <div className="an-panel__light" />
          <div className="an-panel__lamp-glow" />
          <div className="an-panel__lamp-stem" />
          <div className="an-panel__lamp-shade" />
          <div className="an-panel__lamp-base" />
          <div className="an-panel__shadow" />
          <div className="an-panel__stool-leg an-panel__stool-leg--a" />
          <div className="an-panel__stool-leg an-panel__stool-leg--b" />
          <div className="an-panel__stool-top" />
          <div className="an-panel__twig" />
          <div className="an-panel__vase" />
          <p
            aria-hidden
            className="absolute right-4 bottom-4 left-4 flex justify-between gap-4 text-[0.7rem] tracking-[0.14em] text-[var(--an-ink)] uppercase sm:right-8 sm:bottom-6 sm:left-8"
          >
            <span>Plate I · Morning room</span>
            <span className="hidden sm:inline">CSS composition, no photography</span>
          </p>
        </div>
      </div>
    </section>
  );
}
