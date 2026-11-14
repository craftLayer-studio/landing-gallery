import {describe, expect, it} from 'vitest';
import {clampResponders, estimate, formatUsd, perResponderMonthly, TIERS} from './pricing';

describe('perResponderMonthly', () => {
  it('returns the monthly rate on monthly billing', () => {
    expect(perResponderMonthly(25, 'monthly')).toBe(25);
  });

  it('applies the annual discount', () => {
    expect(perResponderMonthly(25, 'annual')).toBe(20);
    expect(perResponderMonthly(45, 'annual')).toBe(36);
    expect(perResponderMonthly(19, 'annual')).toBe(15.2);
  });

  it('rejects invalid rates', () => {
    expect(() => perResponderMonthly(-1, 'monthly')).toThrow(RangeError);
    expect(() => perResponderMonthly(Number.NaN, 'annual')).toThrow(RangeError);
  });
});

describe('clampResponders', () => {
  it('normalises input into 1..500 integers', () => {
    expect(clampResponders(8)).toBe(8);
    expect(clampResponders('12')).toBe(12);
    expect(clampResponders(3.7)).toBe(3);
    expect(clampResponders(0)).toBe(1);
    expect(clampResponders('')).toBe(1);
    expect(clampResponders('abc')).toBe(1);
    expect(clampResponders(9999)).toBe(500);
  });
});

describe('estimate', () => {
  it('bills one month at a time on monthly', () => {
    expect(estimate(25, 'monthly', 8)).toEqual({
      perResponder: 25,
      perMonth: 200,
      billed: 200,
      billedLabel: 'billed monthly',
      yearlySaving: 0,
    });
  });

  it('bills twelve discounted months on annual', () => {
    expect(estimate(45, 'annual', 10)).toEqual({
      perResponder: 36,
      perMonth: 360,
      billed: 4320,
      billedLabel: 'billed yearly',
      yearlySaving: 1080,
    });
  });

  it('clamps the responder count', () => {
    expect(estimate(25, 'monthly', 0).perMonth).toBe(25);
  });
});

describe('tiers and formatting', () => {
  it('has three tiers, the top one priced by conversation', () => {
    expect(TIERS.map((t) => t.id)).toEqual(['shift', 'rotation', 'command']);
    expect(TIERS[2].monthly).toBeNull();
  });

  it('formats dollars', () => {
    expect(formatUsd(4320)).toBe('$4,320');
    expect(formatUsd(15.2)).toBe('$15.20');
  });
});
