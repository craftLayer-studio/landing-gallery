import {describe, expect, it} from 'vitest';
import {PLANS, formatDollars, priceFor} from './pricing';

const shared = PLANS.find((p) => p.id === 'shared')!;
const local = PLANS.find((p) => p.id === 'local')!;

describe('priceFor', () => {
  it('returns the monthly price per month', () => {
    expect(priceFor(shared, 'monthly')).toEqual({amount: 24, period: 'month', perMonth: 24, savings: 0});
  });
  it('returns the annual price per year with effective monthly and savings', () => {
    expect(priceFor(shared, 'annual')).toEqual({amount: 240, period: 'year', perMonth: 20, savings: 48});
  });
  it('changes the shown amount when the cadence changes', () => {
    expect(priceFor(shared, 'monthly').amount).not.toBe(priceFor(shared, 'annual').amount);
  });
  it('keeps the free plan free in both cadences', () => {
    expect(priceFor(local, 'monthly').amount).toBe(0);
    expect(priceFor(local, 'annual').savings).toBe(0);
  });
});

describe('formatDollars', () => {
  it('drops cents for whole dollars and keeps them otherwise', () => {
    expect(formatDollars(24)).toBe('$24');
    expect(formatDollars(20.5)).toBe('$20.50');
  });
});
