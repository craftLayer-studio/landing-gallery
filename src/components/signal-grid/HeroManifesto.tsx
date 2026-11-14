import styles from './signal.module.css';

/**
 * Archetype: hero/manifesto. One declaration on a dark ground, one phrase
 * punched out in the accent, mono datelines as marginalia. The voice carries it.
 */
const TENETS = [
  'Group the noise before it reaches a human.',
  'Show what changed, where, and who owns it.',
  'Draft the next step. Let the engineer decide.',
];

export function HeroManifesto() {
  return (
    <section id="top" aria-labelledby="sg-title" className={`${styles.grid} relative overflow-hidden border-b border-[var(--line)]`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_10%,rgb(255_107_31/0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1320px] px-4 pt-16 pb-14 sm:px-8 sm:pt-24 lg:pt-28">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={styles.meta}>Manifesto Nº01 — for whoever holds the pager tonight</p>
          <p className={`${styles.meta} flex items-center gap-2`}>
            <span aria-hidden="true" className={`${styles.pulse} inline-block h-2 w-2 rounded-full bg-[var(--accent)]`} />
            AI incident triage · concept
          </p>
        </div>

        <h1
          className="mt-10 max-w-[16ch] leading-[0.95] font-semibold tracking-[-0.035em] text-balance"
          style={{fontSize: 'clamp(2.6rem, 7.6vw, 7rem)'}}
        >
          The pager should bring you a story, <span className="text-[var(--accent)]">not a siren.</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <p className="max-w-[52ch] text-lg leading-relaxed text-[var(--muted)] lg:col-span-5">
            Signal Grid is a fictional triage layer for on-call teams. It reads the alerts, gathers what changed and
            hands the responder a short account of the incident, so the first minutes go on fixing rather than
            searching.
          </p>
          <ol className={`${styles.mono} grid gap-px self-start border border-[var(--line)] bg-[var(--line)] text-sm lg:col-span-7 sm:grid-cols-3`}>
            {TENETS.map((t, i) => (
              <li key={t} className="bg-[var(--bg)] p-5">
                <span className="text-[var(--accent)]">{String(i + 1).padStart(2, '0')}</span>
                <span className="mt-3 block leading-relaxed text-[var(--fg)]">{t}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <p className={styles.meta}>Signed — the Signal Grid team (fictional)</p>
          <a href="#compare" className={`${styles.mono} inline-flex min-h-11 items-center gap-2 text-sm text-[var(--fg)] hover:text-[var(--accent)]`}>
            What changes <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Signal trace: noise on the left, resolved into a single clean pulse. */}
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block h-20 w-full sm:h-28" aria-hidden="true">
        <path d="M0 60 H1440" stroke="rgb(255 255 255 / 0.08)" />
        <path
          className={styles.trace}
          d="M0 60 L40 52 L60 70 L80 40 L100 78 L120 46 L140 72 L160 34 L180 84 L200 50 L220 66 L240 44 L262 74 L284 56 L320 62 L360 58 L420 60 L700 60 L740 60 L770 20 L800 102 L830 60 L1440 60"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  );
}
