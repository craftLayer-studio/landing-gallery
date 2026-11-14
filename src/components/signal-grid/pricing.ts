/** Sample pricing maths for the fictional Signal Grid. Pure functions only. */

export type Cycle = 'monthly' | 'annual';

/** Annual billing takes this share off the monthly rate (sample terms). */
export const ANNUAL_DISCOUNT = 0.2;
export const MIN_RESPONDERS = 1;
export const MAX_RESPONDERS = 500;

export type Tier = {
  id: 'shift' | 'rotation' | 'command';
  name: string;
  /** Sample price per responder per month on monthly billing; null = priced by conversation. */
  monthly: number | null;
};

export const TIERS: Tier[] = [
  {id: 'shift', name: 'Shift', monthly: 25},
  {id: 'rotation', name: 'Rotation', monthly: 45},
  {id: 'command', name: 'Command', monthly: null},
];

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Effective price per responder per month for a billing cycle. */
export function perResponderMonthly(monthly: number, cycle: Cycle): number {
  if (!Number.isFinite(monthly) || monthly < 0) throw new RangeError('monthly must be a non-negative number');
  return cycle === 'annual' ? round2(monthly * (1 - ANNUAL_DISCOUNT)) : monthly;
}

/** Normalises free-text responder counts into an integer within range. */
export function clampResponders(value: number | string): number {
  const n = typeof value === 'string' ? Number.parseInt(value, 10) : Math.floor(value);
  if (!Number.isFinite(n)) return MIN_RESPONDERS;
  return Math.min(MAX_RESPONDERS, Math.max(MIN_RESPONDERS, n));
}

export type Estimate = {
  perResponder: number;
  perMonth: number;
  /** What one invoice would show: one month, or twelve months up front. */
  billed: number;
  billedLabel: string;
  /** Saving over a year compared with paying monthly. */
  yearlySaving: number;
};

export function estimate(monthly: number, cycle: Cycle, responders: number | string): Estimate {
  const seats = clampResponders(responders);
  const perResponder = perResponderMonthly(monthly, cycle);
  const perMonth = round2(perResponder * seats);
  const billed = cycle === 'annual' ? round2(perMonth * 12) : perMonth;
  const yearlySaving = round2((monthly - perResponder) * seats * 12);
  return {perResponder, perMonth, billed, billedLabel: cycle === 'annual' ? 'billed yearly' : 'billed monthly', yearlySaving};
}

export function formatUsd(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);
}
