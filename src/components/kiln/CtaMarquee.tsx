/**
 * cta/marquee: one phrase loops across the strip and the whole strip is
 * the link. Pauses on hover and keyboard focus (CSS in kiln.css) and
 * collapses to a single static line under prefers-reduced-motion.
 */
const PHRASE = 'Fire it once ✦ Restore it after ✦ ';

export function KilnCtaMarquee() {
  return (
    <section aria-labelledby="kn-cta-title" className="border-y border-[var(--kn-rule)]">
      <h2 id="kn-cta-title" className="sr-only">
        Get started
      </h2>
      <a
        href="#install"
        className="kn-marquee group block overflow-hidden bg-[var(--kn-ember)] py-8 text-[var(--kn-ink)] transition-colors duration-300 hover:bg-[var(--kn-amber)] focus-visible:outline-offset-[-6px] focus-visible:outline-[var(--kn-ink)] sm:py-12"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
        }}
      >
        <span className="sr-only">Fire it once: see a sample first run</span>
        <span aria-hidden="true" className="kn-marquee-track flex w-max whitespace-nowrap will-change-transform">
          {[0, 1, 2].map((i) => (
            <span key={i} className="kn-marquee-copy kn-display px-4 text-5xl leading-none tracking-tight uppercase sm:text-8xl">
              {PHRASE}
              <span className="kn-marquee-dup">{PHRASE}</span>
            </span>
          ))}
        </span>
      </a>
    </section>
  );
}
