'use client';

import {useId, useState, useSyncExternalStore, type FormEvent} from 'react';
import {STAYS, toIsoDay, validateEnquiry, type EnquiryErrors, type EnquiryInput} from './enquiry';
import styles from './harbour.module.css';

const noopSubscribe = () => () => {};
const FIELD_ORDER: (keyof EnquiryInput)[] = ['arrival', 'departure', 'stay', 'guests', 'email'];

type Outcome = {stay: string; nights: number; guests: string} | null;

export function EnquiryForm() {
  const uid = useId();
  // Today's date only exists in the browser; the static HTML renders without a min.
  const today = useSyncExternalStore(noopSubscribe, () => toIsoDay(new Date()), () => '');
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [outcome, setOutcome] = useState<Outcome>(null);
  const [arrival, setArrival] = useState('');

  const id = (name: string) => `${uid}-${name}`;

  function clearError(name: keyof EnquiryInput) {
    setOutcome(null);
    if (errors[name]) setErrors((prev) => ({...prev, [name]: undefined}));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const input: EnquiryInput = {
      arrival: String(data.get('arrival') ?? ''),
      departure: String(data.get('departure') ?? ''),
      guests: String(data.get('guests') ?? ''),
      stay: String(data.get('stay') ?? ''),
      email: String(data.get('email') ?? ''),
    };
    const result = validateEnquiry(input, toIsoDay(new Date()));
    setErrors(result.errors);
    if (!result.valid) {
      setOutcome(null);
      const first = FIELD_ORDER.find((f) => result.errors[f]);
      if (first) {
        const el = form.querySelector<HTMLElement>(`[name="${first}"]`);
        el?.focus();
      }
      return;
    }
    const stayName = input.stay === 'any' ? 'any of the three stays' : (STAYS.find((s) => s.id === input.stay)?.name ?? '');
    setOutcome({stay: stayName, nights: result.nights ?? 0, guests: input.guests});
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  function describedBy(name: keyof EnquiryInput, hint?: string) {
    return [hint, errors[name] ? id(`${name}-err`) : null].filter(Boolean).join(' ') || undefined;
  }

  function errorText(name: keyof EnquiryInput) {
    return errors[name] ? (
      <p id={id(`${name}-err`)} className="mt-1.5 text-sm font-medium text-[var(--rust)]">
        {errors[name]}
      </p>
    ) : null;
  }

  const label = 'mb-1.5 block text-sm font-medium';

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby={id('title')} className="border border-[var(--ink)] bg-[#fbfaf7] p-5 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id={id('title')} className={`${styles.display} text-2xl`}>
          Enquiry card
        </h3>
        <p className={styles.meta}>Demo form · sends nothing</p>
      </div>
      <p id={id('note')} className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
        This form only checks your answers in the browser. No stay is booked, nothing is stored and nothing is sent.
      </p>

      <div aria-live="polite" className="mt-4">
        {errorCount > 0 ? (
          <p className="border-l-4 border-[var(--rust)] bg-[#f6e9e1] px-4 py-3 text-sm">
            {errorCount === 1 ? 'One answer needs a look.' : `${errorCount} answers need a look.`}
          </p>
        ) : null}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id('arrival')} className={label}>
            Arrival
          </label>
          <input
            id={id('arrival')}
            name="arrival"
            type="date"
            min={today || undefined}
            required
            value={arrival}
            onChange={(e) => {
              setArrival(e.target.value);
              clearError('arrival');
            }}
            aria-invalid={errors.arrival ? true : undefined}
            aria-describedby={describedBy('arrival')}
            className={styles.field}
          />
          {errorText('arrival')}
        </div>
        <div>
          <label htmlFor={id('departure')} className={label}>
            Departure
          </label>
          <input
            id={id('departure')}
            name="departure"
            type="date"
            min={arrival || today || undefined}
            required
            onChange={() => clearError('departure')}
            aria-invalid={errors.departure ? true : undefined}
            aria-describedby={describedBy('departure')}
            className={styles.field}
          />
          {errorText('departure')}
        </div>
      </div>

      <fieldset className="mt-6" aria-describedby={describedBy('stay')}>
        <legend className={label}>Which stay</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[...STAYS.map((s) => ({id: s.id, name: s.name, note: `sleeps ${s.sleeps}`})), {id: 'any', name: 'Any of the three', note: 'we suggest one'}].map(
            (s) => (
              <label
                key={s.id}
                className="flex min-h-11 cursor-pointer items-center gap-3 border border-[var(--rule)] px-3 py-2 has-[:checked]:border-[var(--harbour)] has-[:checked]:bg-[#e8edf0]"
              >
                <input
                  type="radio"
                  name="stay"
                  value={s.id}
                  onChange={() => clearError('stay')}
                  className="h-4 w-4 shrink-0 accent-[var(--harbour)]"
                />
                <span className="text-[15px]">
                  {s.name} <span className={`${styles.mono} text-xs text-[var(--muted)]`}>· {s.note}</span>
                </span>
              </label>
            ),
          )}
        </div>
        {errorText('stay')}
      </fieldset>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-[8rem_1fr]">
        <div>
          <label htmlFor={id('guests')} className={label}>
            Guests
          </label>
          <input
            id={id('guests')}
            name="guests"
            type="number"
            inputMode="numeric"
            min={1}
            max={4}
            defaultValue={2}
            required
            onChange={() => clearError('guests')}
            aria-invalid={errors.guests ? true : undefined}
            aria-describedby={describedBy('guests')}
            className={styles.field}
          />
          {errorText('guests')}
        </div>
        <div>
          <label htmlFor={id('email')} className={label}>
            Email
          </label>
          <input
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            required
            onChange={() => clearError('email')}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy('email')}
            className={styles.field}
          />
          {errorText('email')}
        </div>
      </div>

      <button
        type="submit"
        className={`${styles.mono} mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[var(--harbour)] px-6 text-sm text-[var(--salt)] transition-colors hover:bg-[var(--harbour-2)] sm:w-auto`}
      >
        Check my enquiry <span aria-hidden="true">→</span>
      </button>

      <div role="status" className="mt-5">
        {outcome ? (
          <div className="border-l-4 border-[var(--harbour)] bg-[#e8edf0] px-4 py-4 text-[15px] leading-relaxed">
            <p className="font-medium">
              Your enquiry checks out: {outcome.nights} {outcome.nights === 1 ? 'night' : 'nights'} at {outcome.stay} for{' '}
              {outcome.guests} {outcome.guests === '1' ? 'guest' : 'guests'}.
            </p>
            <p className="mt-1 text-[var(--muted)]">
              This is a concept demo. No stay was booked and nothing was sent. Harbour Retreats is fictional.
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
