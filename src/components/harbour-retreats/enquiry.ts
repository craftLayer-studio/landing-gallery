/** Enquiry validation for the fictional Harbour Retreats stays. Pure: no DOM, no clock. */

export const STAYS = [
  {id: 'pilot-house', name: 'The Pilot House', sleeps: 2},
  {id: 'saltglass', name: 'Saltglass', sleeps: 2},
  {id: 'netloft', name: 'The Netloft', sleeps: 4},
] as const;

export type StayId = (typeof STAYS)[number]['id'] | 'any';

export const MAX_NIGHTS = 21;

export type EnquiryInput = {
  arrival: string;
  departure: string;
  guests: string;
  stay: string;
  email: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

export type EnquiryResult = {valid: boolean; errors: EnquiryErrors; nights: number | null};

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Parses YYYY-MM-DD into a UTC day number, or null when it is not a real calendar date. */
export function parseIsoDay(value: string): number | null {
  const m = ISO_DATE.exec(value.trim());
  if (!m) return null;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const t = Date.UTC(y, mo - 1, d);
  const check = new Date(t);
  if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo - 1 || check.getUTCDate() !== d) return null;
  return t / 86_400_000;
}

/** Local calendar date as YYYY-MM-DD. */
export function toIsoDay(date: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

export function stayCapacity(stay: string): number | null {
  if (stay === 'any') return Math.max(...STAYS.map((s) => s.sleeps));
  return STAYS.find((s) => s.id === stay)?.sleeps ?? null;
}

/**
 * Validates an enquiry against `today` (YYYY-MM-DD, the visitor's local date).
 * Arrival may be today or later; departure must be after arrival.
 */
export function validateEnquiry(input: EnquiryInput, today: string): EnquiryResult {
  const errors: EnquiryErrors = {};
  const todayDay = parseIsoDay(today);
  const arrival = parseIsoDay(input.arrival);
  const departure = parseIsoDay(input.departure);

  if (!input.arrival.trim()) errors.arrival = 'Choose an arrival date.';
  else if (arrival === null) errors.arrival = 'Enter the arrival date as a real date.';
  else if (todayDay !== null && arrival < todayDay) errors.arrival = 'Arrival cannot be in the past.';

  if (!input.departure.trim()) errors.departure = 'Choose a departure date.';
  else if (departure === null) errors.departure = 'Enter the departure date as a real date.';
  else if (arrival !== null && departure <= arrival) errors.departure = 'Departure must be after arrival.';
  else if (arrival !== null && departure - arrival > MAX_NIGHTS)
    errors.departure = `Enquiries cover up to ${MAX_NIGHTS} nights.`;

  const capacity = stayCapacity(input.stay);
  if (capacity === null) errors.stay = 'Choose a stay, or “Any of the three”.';

  const guests = Number(input.guests);
  if (!input.guests.trim() || !Number.isInteger(guests) || guests < 1) errors.guests = 'Enter at least 1 guest.';
  else if (capacity !== null && guests > capacity)
    errors.guests = `That stay sleeps ${capacity}. Choose fewer guests or another stay.`;

  if (!input.email.trim()) errors.email = 'Enter an email address.';
  else if (!EMAIL.test(input.email.trim())) errors.email = 'Enter an email address like name@example.com.';

  const valid = Object.keys(errors).length === 0;
  const nights = arrival !== null && departure !== null && departure > arrival ? departure - arrival : null;
  return {valid, errors, nights};
}
