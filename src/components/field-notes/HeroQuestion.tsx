/**
 * Archetype: hero/question (Inspo reference, references/hero-question.tsx.txt).
 * The hero asks rather than tells; a short mono answer under a rule frames
 * the rest of the page as the long answer.
 */
export function HeroQuestion() {
  return (
    <section id="top" aria-labelledby="fn-hero-title" className="border-b border-[var(--fn-rule)] px-4 pt-16 pb-14 sm:px-10 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[var(--fn-rule)] pb-3">
          <p className="fn-meta">The Friday letter · sample dateline: Fri 13 Nov 2026</p>
          <p className="fn-meta">On craft, tools and making things</p>
        </div>
        <h1
          id="fn-hero-title"
          className="mt-10 max-w-[17ch] leading-[0.98] font-medium tracking-[-0.025em] text-balance sm:mt-14"
          style={{fontSize: 'clamp(2.6rem, 7.4vw, 6.4rem)'}}
        >
          What did you <span className="fn-mark fn-mark--draw italic">make with your hands</span> this week?
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[var(--fn-ink)] pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-[54ch] text-lg leading-relaxed sm:text-xl">
            Field Notes Weekly is one unhurried letter every Friday about workbenches, hand tools, mistakes worth making
            and the people who keep at it. Read it with coffee. Reply if you made something.
          </p>
          <a href="#issues" className="fn-mono fn-link inline-flex min-h-11 items-center gap-2 text-sm">
            The long answer starts below <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
