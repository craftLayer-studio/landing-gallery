'use client';

import {useRef, useState} from 'react';
import {validateAccessRequest, type AccessErrors, type AccessRequest} from './validate';

const VOLUMES = [
  {value: 'under-10k', label: 'Under 10,000 lines a month'},
  {value: '10k-100k', label: '10,000 to 100,000 lines a month'},
  {value: 'over-100k', label: 'Over 100,000 lines a month'},
];

const EMPTY: AccessRequest = {name: '', email: '', volume: ''};

/** In-page "Request access" target for both CTA buttons. Validates; sends nothing. */
export function LedgerlineRequestAccess() {
  const [values, setValues] = useState<AccessRequest>(EMPTY);
  const [errors, setErrors] = useState<AccessErrors>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  function update(field: keyof AccessRequest, value: string) {
    setValues((v) => ({...v, [field]: value}));
    if (errors[field]) setErrors((e) => ({...e, [field]: undefined}));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validateAccessRequest(values);
    setErrors(next);
    const first = (Object.keys(next) as (keyof AccessRequest)[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setDone(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setDone(false);
  }

  const field = 'h-12 w-full border bg-white px-3 text-base';
  const border = (k: keyof AccessRequest) => (errors[k] ? 'border-[var(--ll-error)] border-2' : 'border-[var(--ll-ink)]');

  return (
    <section id="request-access" aria-labelledby="ll-access-title" className="scroll-mt-4 border-b border-[var(--ll-rule)] px-4 py-16 sm:px-8 sm:py-24 lg:px-14">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <p className="ll-mono text-xs tracking-wide text-[var(--ll-accent)] uppercase">Request access</p>
          <h2 id="ll-access-title" className="mt-4 max-w-[16ch] leading-[1.05] font-semibold tracking-tight" style={{fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)'}}>
            Ask for a sandbox key.
          </h2>
          <p className="mt-4 max-w-[40ch] leading-relaxed text-[var(--ll-muted)]">
            This form checks what you type, then stops. It is part of a design example: no request is sent and nothing is stored.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-8 lg:border-l lg:border-[var(--ll-rule)] lg:pl-10">
          {done ? (
            <div ref={successRef} tabIndex={-1} role="status" className="border-2 border-[var(--ll-accent)] bg-[var(--ll-accent-soft)] p-6 sm:p-8">
              <p className="ll-mono text-xs tracking-wide text-[var(--ll-accent)] uppercase">Demo only · nothing was sent</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">Thanks, {values.name.trim()}. Your entries were valid.</p>
              <p className="mt-3 max-w-[56ch] leading-relaxed">
                Ledgerline is fictional, so there is no sandbox to issue. Nothing was submitted, emailed or saved, including{' '}
                <span className="ll-mono break-all">{values.email.trim()}</span>.
              </p>
              <button type="button" onClick={reset} className="ll-mono mt-6 inline-flex h-11 items-center border border-[var(--ll-ink)] px-5 text-sm hover:bg-[var(--ll-ink)] hover:text-[var(--ll-paper)]">
                Reset the demo form
              </button>
            </div>
          ) : (
            <form ref={formRef} noValidate onSubmit={onSubmit} className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="ll-name" className="font-semibold">Name</label>
                <input
                  id="ll-name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'll-name-error' : undefined}
                  className={`mt-2 ${field} ${border('name')}`}
                />
                {errors.name && <p id="ll-name-error" className="mt-2 text-sm text-[var(--ll-error)]">{errors.name}</p>}
              </div>
              <div className="min-w-0">
                <label htmlFor="ll-email" className="font-semibold">Work email</label>
                <input
                  id="ll-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'll-email-error' : undefined}
                  className={`mt-2 ${field} ${border('email')} placeholder:text-[#767b81]`}
                />
                {errors.email && <p id="ll-email-error" className="mt-2 text-sm text-[var(--ll-error)]">{errors.email}</p>}
              </div>
              <fieldset className="min-w-0 sm:col-span-2" aria-describedby={errors.volume ? 'll-volume-error' : undefined}>
                <legend className="font-semibold">Monthly volume</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {VOLUMES.map((v) => (
                    <label
                      key={v.value}
                      className={`flex min-h-12 cursor-pointer items-center gap-3 border bg-white px-3 py-2 text-sm has-[:checked]:border-[var(--ll-accent)] has-[:checked]:bg-[var(--ll-accent-soft)] ${errors.volume ? 'border-[var(--ll-error)]' : 'border-[var(--ll-rule)]'}`}
                    >
                      <input
                        type="radio"
                        name="volume"
                        value={v.value}
                        checked={values.volume === v.value}
                        onChange={() => update('volume', v.value)}
                        className="accent-[var(--ll-accent)]"
                      />
                      {v.label}
                    </label>
                  ))}
                </div>
                {errors.volume && <p id="ll-volume-error" className="mt-2 text-sm text-[var(--ll-error)]">{errors.volume}</p>}
              </fieldset>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button type="submit" className="ll-mono inline-flex h-12 items-center gap-3 bg-[var(--ll-ink)] px-7 text-sm text-[var(--ll-paper)] transition-colors hover:bg-[var(--ll-accent)]">
                  Request access <span aria-hidden="true">→</span>
                </button>
                <p className="text-sm text-[var(--ll-muted)]">Demo form. Nothing is sent.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
