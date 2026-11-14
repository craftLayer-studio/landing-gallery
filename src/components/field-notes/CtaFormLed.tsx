import {SubscribeForm} from './SubscribeForm';

/**
 * Archetype: cta/form-led (Inspo reference, references/cta-form-led.tsx.txt).
 * The input is the action: one email field with an inline submit, a value
 * proposition above, the success state collapsing the form to one line.
 */
export function CtaFormLed() {
  return (
    <section id="subscribe" aria-labelledby="fn-cta-title" className="border-b border-[var(--fn-ink)] px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="fn-meta">Field Notes Weekly · every Friday</p>
        <h2 id="fn-cta-title" className="mt-4 leading-[1.08] font-medium text-balance" style={{fontSize: 'clamp(1.9rem, 4.4vw, 3rem)'}}>
          One project, one tool, <span className="fn-mark italic">one person who makes</span>. Nothing else.
        </h2>
        <SubscribeForm id="fn-cta" variant="large" />
      </div>
    </section>
  );
}
