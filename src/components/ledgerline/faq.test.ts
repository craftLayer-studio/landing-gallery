import {describe, expect, it} from 'vitest';
import {FAQ, filterFaq} from './faq';

describe('filterFaq', () => {
  it('returns everything for a blank query', () => {
    expect(filterFaq(FAQ, '   ')).toHaveLength(FAQ.length);
  });
  it('matches case-insensitively across question and answer', () => {
    const r = filterFaq(FAQ, 'TOLERANCE');
    expect(r.length).toBeGreaterThan(0);
    expect(r.every((i) => `${i.q} ${i.a}`.toLowerCase().includes('tolerance'))).toBe(true);
  });
  it('requires every term to match', () => {
    expect(filterFaq(FAQ, 'exception queue')).toHaveLength(1);
    expect(filterFaq(FAQ, 'refunds zebra')).toHaveLength(0);
  });
});
