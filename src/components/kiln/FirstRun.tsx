/**
 * A typeset sample terminal session: real strings, no faux window chrome.
 * Target of the marquee CTA and the plan buttons.
 */
type Tone = 'cmd' | 'hit' | 'miss' | 'dim' | 'plain';
type Line = {tone: Tone; text: string; tag?: string};

const SESSION: Line[] = [
  {tone: 'cmd', text: 'kiln run build --filter=web'},
  {tone: 'dim', text: '  hashing   3 packages · sources, lockfile, env allow-list'},
  {tone: 'miss', text: '  @example/ui      ', tag: 'miss → firing'},
  {tone: 'hit', text: '  @example/utils   ', tag: 'hit  ← restored'},
  {tone: 'miss', text: '  @example/web     ', tag: 'miss → firing'},
  {tone: 'dim', text: '  stored    2 entries in .kiln/cache'},
  {tone: 'plain', text: ''},
  {tone: 'cmd', text: 'kiln run build --filter=web'},
  {tone: 'hit', text: '  @example/ui      ', tag: 'hit  ← restored'},
  {tone: 'hit', text: '  @example/utils   ', tag: 'hit  ← restored'},
  {tone: 'hit', text: '  @example/web     ', tag: 'hit  ← restored'},
  {tone: 'dim', text: '  nothing to fire · 3 of 3 restored'},
];

function SessionLine({line}: {line: Line}) {
  if (line.tone === 'cmd') {
    return (
      <span className="block">
        <span className="text-[var(--kn-ember)]">$ </span>
        <span className="font-bold text-[var(--kn-bone)]">{line.text}</span>
      </span>
    );
  }
  if (line.tone === 'hit' || line.tone === 'miss') {
    return (
      <span className="block">
        <span className="text-[var(--kn-bone)]">{line.text}</span>
        <span className={line.tone === 'hit' ? 'text-[var(--kn-amber)]' : 'text-[#ff8a5c]'}>{line.tag}</span>
      </span>
    );
  }
  return <span className={`block ${line.tone === 'dim' ? 'text-[var(--kn-muted)]' : ''}`}>{line.text || ' '}</span>;
}

export function KilnFirstRun() {
  return (
    <section id="install" aria-labelledby="kn-install-title" className="scroll-mt-20 px-4 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-[96rem] grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <p className="kn-mono text-xs tracking-[0.14em] text-[var(--kn-ember)] uppercase">A first run</p>
          <h2 id="kn-install-title" className="kn-display mt-5 max-w-[14ch] text-4xl leading-[0.95] tracking-tight uppercase sm:text-6xl">
            Nothing to install.
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-[var(--kn-muted)]">
            Kiln is a fictional brand, so this demo ships no package. The session on the right is typeset to show how two runs of the same build
            would read: the first fires what is new, the second restores everything.
          </p>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <p className="kn-mono mb-2 flex justify-between text-xs tracking-wide text-[var(--kn-muted)] uppercase">
            <span>Terminal</span>
            <span>Sample session</span>
          </p>
          <pre
            tabIndex={0}
            aria-label="Sample terminal session"
            className="kn-mono overflow-x-auto rounded-2xl border border-[var(--kn-rule)] bg-[#0b0806] px-5 py-6 text-[13px] leading-relaxed sm:px-7 sm:text-sm"
          >
            <code>
              {SESSION.map((line, i) => (
                <SessionLine key={i} line={line} />
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
