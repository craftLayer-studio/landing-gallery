import {describe, expect, it} from 'vitest';
import {LINE_ITEMS, MAX_QUANTITY, estimateMonthly, formatMills, formatRate, sanitizeQuantity} from './pricing';

describe('sanitizeQuantity', () => {
  it('accepts whole numbers and strips separators', () => {
    expect(sanitizeQuantity('25,000')).toBe(25000);
    expect(sanitizeQuantity(12)).toBe(12);
  });
  it('floors fractions and rejects negatives, blanks and junk', () => {
    expect(sanitizeQuantity('3.9')).toBe(3);
    expect(sanitizeQuantity(-5)).toBe(0);
    expect(sanitizeQuantity('')).toBe(0);
    expect(sanitizeQuantity('abc')).toBe(0);
  });
  it('caps at the maximum', () => {
    expect(sanitizeQuantity(MAX_QUANTITY * 2)).toBe(MAX_QUANTITY);
  });
});

describe('estimateMonthly', () => {
  it('computes the default sample estimate', () => {
    const defaults = Object.fromEntries(LINE_ITEMS.map((i) => [i.id, i.defaultQuantity]));
    const est = estimateMonthly(LINE_ITEMS, defaults);
    // 25,000 x $0.004 + 4 x $15 + 300 x $0.10 + 30 x $0.50 = $205.00
    expect(est.totalMills).toBe(205_000);
    expect(formatMills(est.totalMills)).toBe('$205.00');
  });
  it('treats missing or invalid quantities as zero', () => {
    const est = estimateMonthly(LINE_ITEMS, {transactions: '1000', feeds: 'x'});
    expect(est.lines.find((l) => l.id === 'feeds')?.quantity).toBe(0);
    expect(est.totalMills).toBe(4000);
    expect(formatMills(est.totalMills)).toBe('$4.00');
  });
  it('rounds sub-cent totals to the nearest cent', () => {
    expect(formatMills(estimateMonthly(LINE_ITEMS, {transactions: 1}).totalMills)).toBe('$0.00');
    expect(formatMills(estimateMonthly(LINE_ITEMS, {transactions: 3}).totalMills)).toBe('$0.01');
  });
});

describe('formatRate', () => {
  it('keeps sub-cent precision', () => {
    expect(formatRate(4)).toBe('$0.004');
    expect(formatRate(15000)).toBe('$15.00');
  });
});
