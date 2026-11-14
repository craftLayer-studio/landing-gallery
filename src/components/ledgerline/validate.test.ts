import {describe, expect, it} from 'vitest';
import {validateAccessRequest} from './validate';

describe('validateAccessRequest', () => {
  it('passes a complete request', () => {
    expect(validateAccessRequest({name: 'Ada Ledger', email: 'ada@example.com', volume: 'under-10k'})).toEqual({});
  });
  it('flags every missing field', () => {
    const e = validateAccessRequest({name: ' ', email: '', volume: ''});
    expect(Object.keys(e).sort()).toEqual(['email', 'name', 'volume']);
  });
  it('rejects malformed emails', () => {
    expect(validateAccessRequest({name: 'Ada', email: 'ada@example', volume: 'x'}).email).toMatch(/example\.com/);
  });
});
