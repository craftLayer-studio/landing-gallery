/** cta/two-button: one tight headline, a primary action and a quiet secondary. */
export function LedgerlineCta() {
  return (
    <section aria-labelledby="ll-cta-title" className="border-b border-[var(--ll-rule)] bg-[var(--ll-ink)] px-4 py-20 text-[var(--ll-paper)] sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="ll-cta-title" className="leading-[1.05] font-semibold tracking-tight text-balance" style={{fontSize: 'clamp(2rem, 4.5vw, 3.75rem)'}}>
          Close the month on the odd lines only.
        </h2>
        <p className="mx-auto mt-6 max-w-[48ch] text-lg text-[#c9ccc6]">
          Ask for a sandbox key, or read the sample request again first. Both stay on this page.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#request-access"
            className="group ll-mono inline-flex h-12 items-center gap-3 bg-[#7fd6a5] px-7 text-sm font-medium text-[var(--ll-ink)] transition-colors hover:bg-[var(--ll-paper)] focus-visible:outline-[#7fd6a5]"
          >
            Request access
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#workbench"
            className="ll-mono inline-flex h-12 items-center border border-[#5b6067] px-7 text-sm text-[var(--ll-paper)] transition-colors hover:border-[#7fd6a5] hover:text-[#7fd6a5] focus-visible:outline-[#7fd6a5]"
          >
            See the sample request
          </a>
        </div>
      </div>
    </section>
  );
}
