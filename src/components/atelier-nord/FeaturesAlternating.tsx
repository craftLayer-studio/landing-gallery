import type {ComponentType} from 'react';
import {HalvoTable, LuneChair, VinterLamp} from './Illustrations';

/**
 * Archetype: features/alternating (Inspo reference, references/features-alternating.tsx.txt).
 * Three rows stacked vertically; the mark slot flips side on every row. The
 * reference's lettered ordinal stays, now sitting over an original SVG
 * illustration of each piece.
 */
type Row = {
  mark: string;
  name: string;
  kind: string;
  label: string;
  body: string;
  specs: string[];
  Art: ComponentType<{title: string; className?: string}>;
  art: string;
};

const ROWS: Row[] = [
  {
    mark: 'A',
    name: 'Lune',
    kind: 'Lounge chair',
    label: 'A low chair for long evenings.',
    body: 'Steam-bent birch arms, a seat set a little lower than usual and loose wool cushions that lift off for cleaning or recovering. The frame joins with wedged tenons, so it can be tightened instead of thrown away.',
    specs: ['Solid birch frame', 'Undyed wool cushions', 'Replaceable webbing'],
    Art: LuneChair,
    art: 'Illustration of the Lune lounge chair: a low birch frame with lingonberry wool cushions.',
  },
  {
    mark: 'B',
    name: 'Halvø',
    kind: 'Dining table',
    label: 'Splayed legs, one honest top.',
    body: 'A single oiled oak top on four splayed legs that tuck in under the apron, so chairs slide close without knees meeting timber. Scratches are expected; the oil finish is meant to be sanded and refreshed at home.',
    specs: ['Oiled oak top', 'Splayed, tapered legs', 'Refinishable at home'],
    Art: HalvoTable,
    art: 'Illustration of the Halvø dining table: an oak top on four splayed legs with a bowl and a candle.',
  },
  {
    mark: 'C',
    name: 'Vinter',
    kind: 'Pendant lamp',
    label: 'Light that falls, not glares.',
    body: 'A deep spun shade that keeps the bulb out of sight and puts a warm pool of light on the table below. A birch collar and a cloth cord; nothing is glued, so every part can be replaced on its own.',
    specs: ['Spun steel shade', 'Birch collar', 'Cloth-covered cord'],
    Art: VinterLamp,
    art: 'Illustration of the Vinter pendant lamp: a deep charcoal shade casting a warm cone of light.',
  },
];

export function FeaturesAlternating() {
  return (
    <section id="pieces" aria-labelledby="an-pieces-title" className="border-b border-[var(--an-rule)] px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--an-rule)] pb-8">
          <h2 id="an-pieces-title" className="an-display max-w-[18ch] text-4xl leading-[1.02] tracking-tight sm:text-5xl">
            The pieces in Collection 04
          </h2>
          <p className="an-meta">Three pieces · one material story</p>
        </div>
        <ul className="mt-16 space-y-20 sm:space-y-28">
          {ROWS.map((r, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={r.mark}
                className={`grid grid-cols-1 items-center gap-x-16 gap-y-8 ${flip ? 'md:grid-cols-[2fr_3fr]' : 'md:grid-cols-[3fr_2fr]'}`}
              >
                <div className={`relative ${flip ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative aspect-[6/5] bg-[var(--an-oat)]">
                    <span
                      aria-hidden
                      className={`an-display absolute top-3 leading-none text-[color-mix(in_oklab,var(--an-ink)_16%,var(--an-oat))] ${flip ? 'left-5' : 'right-5'}`}
                      style={{fontSize: 'clamp(4.5rem, 9vw, 8rem)'}}
                    >
                      {r.mark}
                    </span>
                    <r.Art title={r.art} className="absolute inset-x-[8%] bottom-[6%] h-[78%] w-[84%]" />
                  </div>
                </div>
                <div className={flip ? 'md:order-2' : 'md:order-1'}>
                  <p className="an-meta">
                    Piece {r.mark} · {r.kind}
                  </p>
                  <h3 className="an-display mt-4 text-5xl leading-none tracking-tight sm:text-6xl">{r.name}</h3>
                  <p className="an-display mt-4 max-w-[24ch] text-2xl leading-snug text-[var(--an-accent)] italic">{r.label}</p>
                  <p className="mt-5 max-w-[56ch] leading-relaxed text-[var(--an-muted)]">{r.body}</p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {r.specs.map((s) => (
                      <li key={s} className="border border-[var(--an-rule)] px-3 py-1.5 text-sm">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
