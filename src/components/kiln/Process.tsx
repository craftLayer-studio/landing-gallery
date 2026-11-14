/** features/numbered-triplet: three equal columns prefaced by big mono ordinals. */
const STEPS = [
  {
    n: '01',
    label: 'Hash',
    body: 'Kiln reads each task’s inputs (sources, lockfile, an env allow-list) and turns them into one fingerprint.',
    cmd: 'kiln hash build',
  },
  {
    n: '02',
    label: 'Fire',
    body: 'A fingerprint it has never seen runs the task for real, then stores the outputs and logs under that key.',
    cmd: 'kiln run build',
  },
  {
    n: '03',
    label: 'Restore',
    body: 'Same fingerprint next time, on a laptop or in CI: Kiln restores the outputs and replays the log instead.',
    cmd: 'kiln run build',
  },
];

export function KilnProcess() {
  return (
    <section id="process" aria-labelledby="kn-process-title" className="scroll-mt-20 border-t border-[var(--kn-rule)] px-4 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-[96rem]">
        <p className="kn-mono text-xs tracking-[0.14em] text-[var(--kn-ember)] uppercase">How it fires</p>
        <h2 id="kn-process-title" className="kn-display mt-5 max-w-[16ch] text-4xl leading-[0.95] tracking-tight uppercase sm:text-6xl">
          Three steps. Nothing fired twice.
        </h2>
        <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="border-t-2 border-[var(--kn-bone)] pt-6">
              <p className="kn-mono text-6xl leading-none font-bold text-[var(--kn-ember)] sm:text-7xl" aria-hidden="true">
                {s.n}
              </p>
              <h3 className="kn-display mt-6 text-3xl leading-tight tracking-tight uppercase">
                <span className="sr-only">Step {s.n}: </span>
                {s.label}
              </h3>
              <p className="mt-4 max-w-[40ch] leading-relaxed text-[var(--kn-muted)]">{s.body}</p>
              <p className="kn-mono mt-5 text-sm text-[var(--kn-amber)]">
                <span aria-hidden="true">$ </span>
                {s.cmd}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
