import type {ReactNode} from 'react';
import {HarbourScene, HorizonScene, LighthouseScene, TideScene, WindowScene} from './Scenes';
import styles from './harbour.module.css';

/**
 * Archetype: features/bento. Irregular spans: the lead tile (two columns, two
 * rows) carries the idea; smaller tiles extend it. Each stay gets a drawn plate.
 */
type StayTileProps = {
  plate: ReactNode;
  kicker: string;
  name: string;
  body: string;
  facts: string;
  className?: string;
};

function StayTile({plate, kicker, name, body, facts, className = ''}: StayTileProps) {
  return (
    <article className={`group flex flex-col border border-[var(--rule)] bg-[#fbfaf7] ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none">
          {plate}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className={styles.meta}>{kicker}</p>
        <h3 className={`${styles.display} mt-2 text-[1.75rem] leading-tight`}>{name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{body}</p>
        <p className={`${styles.mono} mt-auto pt-5 text-xs text-[var(--ink)]`}>{facts}</p>
      </div>
    </article>
  );
}

export function FeaturesBento() {
  return (
    <section id="stays" aria-labelledby="hr-stays-title" className="scroll-mt-20 border-t border-[var(--rule)] bg-[var(--fog)] px-4 py-16 sm:px-8 lg:px-14 lg:py-24">
      <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-12 lg:gap-x-10">
        <p className={`${styles.meta} lg:col-span-3`}>02 — Three stays</p>
        <h2
          id="hr-stays-title"
          className={`${styles.display} max-w-[22ch] leading-[1.06] text-balance lg:col-span-9`}
          style={{fontSize: 'clamp(1.9rem, 3.8vw, 3.1rem)'}}
        >
          Each house faces the water a different way.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Lead tile: two columns, two rows */}
        <article
          className={`${styles.onDark} relative flex min-h-[26rem] flex-col overflow-hidden bg-[var(--harbour)] text-[var(--salt)] md:col-span-2 md:row-span-2`}
        >
          <HorizonScene className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d2236]/85 via-[#0d2236]/30 to-[#0d2236]/80" />
          <div className="relative flex flex-1 flex-col p-7 sm:p-10">
            <p className={styles.meta}>The idea</p>
            <p className={`${styles.display} mt-5 max-w-[16ch] text-4xl leading-[1.02] text-balance sm:text-[3.4rem]`}>
              <em>Arrive</em> by the tide, not the clock.
            </p>
            <p className="mt-auto max-w-[46ch] pt-12 text-[15px] leading-relaxed text-[#dfe6ea]">
              Three stays on six miles of the Reach, each within walking distance of the next. No reception, no
              lobby: a key in a tin, a tide table on the door, and the sea doing most of the work.
            </p>
          </div>
        </article>

        <StayTile
          plate={<LighthouseScene className="h-full w-full" />}
          kicker="Hollin Head"
          name="The Pilot House"
          body="The keeper's cottage under a retired light. Thick walls, a stove, a window facing the shipping lane."
          facts="Sleeps 2 · 1 bedroom · stove"
        />
        <StayTile
          plate={<WindowScene className="h-full w-full" />}
          kicker="Gull Stair"
          name="Saltglass"
          body="A single room with a floor-to-ceiling window on the cliff edge. Morning light reaches the bed first."
          facts="Sleeps 2 · studio · bath with a view"
        />

        <article className="flex flex-col justify-between gap-8 border border-[var(--rule)] bg-[var(--salt)] p-6 sm:p-8 md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <p className={styles.meta}>On every door</p>
              <p className={`${styles.display} mt-3 max-w-[24ch] text-2xl leading-snug sm:text-[1.9rem]`}>
                A tide table, a map of the cliff paths, and a note on where the fog sits.
              </p>
            </div>
            <div className={`${styles.mono} text-xs text-[var(--muted)] sm:text-right`}>
            <dl className="grid grid-cols-[auto_auto] gap-x-4 gap-y-1">
              <dt>High water</dt>
              <dd className="text-[var(--ink)]">06:12 · 18:31</dd>
              <dt>Low water</dt>
              <dd className="text-[var(--ink)]">12:20 · 00:44</dd>
            </dl>
            <p className="pt-2 text-[11px]">Sample tide table, for the story</p>
            </div>
          </div>
          <TideScene className="h-24 w-full" />
        </article>

        <StayTile
          plate={<HarbourScene className="h-full w-full" />}
          kicker="Merrowick Quay"
          name="The Netloft"
          body="Two floors above the old net store. Boats below, a long table, room for a small family."
          facts="Sleeps 4 · 2 bedrooms · quay steps"
        />
      </div>
    </section>
  );
}
