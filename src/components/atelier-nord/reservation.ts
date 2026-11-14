/** Pure validation for the Lune pre-order reserve form (demo only: nothing is sent). */
export const FINISHES = [
  {value: 'birch-natural', label: 'Natural birch, oat wool'},
  {value: 'birch-lingon', label: 'Natural birch, lingonberry wool'},
  {value: 'oak-smoked', label: 'Smoked oak, charcoal wool'},
] as const;

export type Finish = (typeof FINISHES)[number]['value'];

export type ReservationInput = {name: string; email: string; finish: string};
export type ReservationField = keyof ReservationInput;
export type ReservationErrors = Partial<Record<ReservationField, string>>;

export type ReservationResult =
  | {ok: true; value: {name: string; email: string; finish: Finish}}
  | {ok: false; errors: ReservationErrors};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateReservation(input: ReservationInput): ReservationResult {
  const name = input.name.trim();
  const email = input.email.trim();
  const errors: ReservationErrors = {};

  if (name.length === 0) errors.name = 'Enter your name.';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.';
  else if (name.length > 80) errors.name = 'Name must be 80 characters or fewer.';

  if (email.length === 0) errors.email = 'Enter your email address.';
  else if (email.length > 254 || !EMAIL.test(email)) errors.email = 'Enter an email address like name@example.com.';

  const finish = FINISHES.find((f) => f.value === input.finish);
  if (!finish) errors.finish = 'Choose a finish.';

  if (Object.keys(errors).length > 0 || !finish) return {ok: false, errors};
  return {ok: true, value: {name, email, finish: finish.value}};
}
