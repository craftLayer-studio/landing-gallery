'use client';

import {useEffect, useRef, useState, type FormEvent} from 'react';
import {DEMO_DELAY_MS, validateEmail, type SubscribeState} from './subscribe';

type Props = {
  /** Unique prefix so both forms on the page have distinct ids. */
  id: string;
  variant?: 'large' | 'compact';
};

/**
 * One subscribe form, used by both the form-led CTA and the newsletter footer.
 * Inline email field with submit (as in the Inspo references), plus real
 * validation, a loading state, an error under the input and a success line
 * that says plainly nothing was stored.
 */
export function SubscribeForm({id, variant = 'large'}: Props) {
  const [state, setState] = useState<SubscribeState>({status: 'idle', error: null});
  const inputRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLParagraphElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === 'submitting') return;
    const error = validateEmail(inputRef.current?.value ?? '');
    if (error) {
      setState({status: 'invalid', error});
      inputRef.current?.focus();
      return;
    }
    setState({status: 'submitting', error: null});
    // Demo only: no request is made and the address is discarded.
    timer.current = window.setTimeout(() => {
      setState({status: 'done', error: null});
      requestAnimationFrame(() => doneRef.current?.focus());
    }, DEMO_DELAY_MS);
  }

  const large = variant === 'large';
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  if (state.status === 'done') {
    return (
      <p
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className={`border-l-4 border-[var(--fn-mark)] pl-4 leading-relaxed ${large ? 'mt-10 text-lg' : 'mt-8 text-base'}`}
      >
        <span aria-hidden>✓ </span>
        <strong>Thanks, that worked.</strong> This is a demo: no email was stored or sent, and you are not on any list.
      </p>
    );
  }

  const submitting = state.status === 'submitting';
  const invalid = state.status === 'invalid';

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={submitting} className={large ? 'mt-10' : 'mt-8 max-w-[34rem]'}>
      <label htmlFor={`${id}-email`} className="fn-meta block">
        Your email address
      </label>
      <div
        className={`group mt-2 flex items-center gap-3 border-b-2 py-3 transition-colors duration-200 focus-within:border-[var(--fn-ink)] ${
          invalid ? 'border-[var(--fn-error)]' : 'border-[var(--fn-ink)]/40 hover:border-[var(--fn-ink)]/70'
        }`}
      >
        <svg
          aria-hidden
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-[var(--fn-muted)] group-focus-within:text-[var(--fn-ink)]"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        <input
          ref={inputRef}
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="reader@example.com"
          readOnly={submitting}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? `${errorId} ${hintId}` : hintId}
          onChange={() => invalid && setState({status: 'idle', error: null})}
          className={`fn-mono min-w-0 flex-1 bg-transparent placeholder:text-[var(--fn-muted)] read-only:opacity-60 ${
            large ? 'text-base sm:text-lg' : 'text-sm'
          }`}
        />
        <button
          type="submit"
          aria-disabled={submitting || undefined}
          className={`fn-mono inline-flex min-h-11 shrink-0 items-center gap-2 bg-[var(--fn-ink)] px-4 text-[var(--fn-paper)] transition-colors hover:opacity-85 aria-disabled:cursor-progress aria-disabled:opacity-80 ${
            large ? 'text-sm' : 'text-xs'
          }`}
        >
          {submitting ? (
            <>
              <span aria-hidden className="inline-block size-3 animate-spin rounded-full border-2 border-current border-r-transparent" />
              Subscribing…
            </>
          ) : (
            <>
              Subscribe <span aria-hidden>↵</span>
            </>
          )}
        </button>
      </div>
      <p id={errorId} aria-live="polite" className="fn-mono mt-2 min-h-5 text-xs text-[var(--fn-error)]">
        {state.error}
      </p>
      <p id={hintId} className="mt-1 text-sm text-[var(--fn-muted)]">
        Demo form: nothing is stored or sent.
      </p>
    </form>
  );
}
