'use client';

import {useRef, useState, type FormEvent} from 'react';
import {FINISHES, validateReservation, type ReservationErrors, type ReservationField} from './reservation';

type Status = {kind: 'idle'} | {kind: 'done'; name: string; finish: string};

const ORDER: ReservationField[] = ['name', 'email', 'finish'];

/** Reserve form for the single-plan spotlight. Validates locally; never sends anything. */
export function ReserveForm() {
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [status, setStatus] = useState<Status>({kind: 'idle'});
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = validateReservation({
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      finish: String(data.get('finish') ?? ''),
    });
    if (!result.ok) {
      setErrors(result.errors);
      const first = ORDER.find((f) => result.errors[f]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    const label = FINISHES.find((f) => f.value === result.value.finish)?.label ?? '';
    setStatus({kind: 'done', name: result.value.name, finish: label});
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  if (status.kind === 'done') {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="border-l-2 border-[var(--an-accent)] bg-[var(--an-birch)] p-6 sm:p-8"
      >
        <p className="an-display text-3xl leading-tight">Thank you, {status.name}.</p>
        <p className="mt-3 leading-relaxed">
          This is a concept demo, so <strong>nothing was ordered, reserved or charged</strong>, and your details were
          not stored or sent anywhere. In a real launch, this is where a reservation for the Lune chair in{' '}
          {status.finish.toLowerCase()} would be confirmed by email.
        </p>
        <button
          type="button"
          onClick={() => setStatus({kind: 'idle'})}
          className="mt-6 text-sm font-semibold underline decoration-[var(--an-accent)] decoration-2 underline-offset-4"
        >
          Start again
        </button>
      </div>
    );
  }

  const field =
    'mt-2 block min-h-12 w-full border border-[var(--an-ink)]/40 bg-[var(--an-birch)] px-3 text-base text-[var(--an-ink)] placeholder:text-[var(--an-muted)] focus:border-[var(--an-ink)] aria-[invalid=true]:border-[var(--an-accent)]';

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-labelledby="an-reserve-form-title" className="space-y-5">
      <p id="an-reserve-form-title" className="an-meta">
        Reserve a place in the first run
      </p>
      <div>
        <label htmlFor="an-name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="an-name"
          name="name"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'an-name-error' : undefined}
          className={field}
        />
        {errors.name && (
          <p id="an-name-error" className="mt-1.5 text-sm font-medium text-[var(--an-accent)]">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="an-email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="an-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'an-email-error' : undefined}
          className={field}
        />
        {errors.email && (
          <p id="an-email-error" className="mt-1.5 text-sm font-medium text-[var(--an-accent)]">
            {errors.email}
          </p>
        )}
      </div>
      <fieldset
        aria-describedby={errors.finish ? 'an-finish-error' : undefined}
        aria-invalid={errors.finish ? true : undefined}
      >
        <legend className="text-sm font-semibold">Finish</legend>
        <div className="mt-2 space-y-2">
          {FINISHES.map((f) => (
            <label
              key={f.value}
              className="flex min-h-11 cursor-pointer items-center gap-3 border border-[var(--an-rule)] bg-[var(--an-birch)] px-3 text-sm has-[:checked]:border-[var(--an-ink)]"
            >
              <input
                type="radio"
                name="finish"
                value={f.value}
                className="size-4 accent-[var(--an-accent)]"
              />
              {f.label}
            </label>
          ))}
        </div>
        {errors.finish && (
          <p id="an-finish-error" className="mt-1.5 text-sm font-medium text-[var(--an-accent)]">
            {errors.finish}
          </p>
        )}
      </fieldset>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[var(--an-ink)] px-7 text-sm font-semibold tracking-wide text-[var(--an-birch)] transition-colors hover:bg-[var(--an-accent)]"
      >
        Reserve, no payment <span aria-hidden>→</span>
      </button>
      <p className="text-xs leading-relaxed text-[var(--an-muted)]">
        Demo form: nothing is ordered, charged, stored or sent.
      </p>
    </form>
  );
}
