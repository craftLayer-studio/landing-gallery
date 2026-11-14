import {describe, expect, it} from 'vitest';
import {validateReservation} from './reservation';

const valid = {name: 'Ingrid Sample', email: 'ingrid@example.com', finish: 'birch-natural'};

describe('validateReservation', () => {
  it('accepts a complete reservation and trims whitespace', () => {
    const result = validateReservation({...valid, name: '  Ingrid Sample ', email: ' ingrid@example.com '});
    expect(result).toEqual({ok: true, value: {name: 'Ingrid Sample', email: 'ingrid@example.com', finish: 'birch-natural'}});
  });

  it('reports every empty field', () => {
    const result = validateReservation({name: '', email: '', finish: ''});
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors).toEqual({
      name: 'Enter your name.',
      email: 'Enter your email address.',
      finish: 'Choose a finish.',
    });
  });

  it.each(['plainaddress', 'a@b', 'a @example.com', 'name@example.c', '@example.com'])('rejects email %s', (email) => {
    const result = validateReservation({...valid, email});
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.email).toMatch(/email address/);
  });

  it('rejects names that are too short or too long', () => {
    expect(validateReservation({...valid, name: 'A'}).ok).toBe(false);
    expect(validateReservation({...valid, name: 'x'.repeat(81)}).ok).toBe(false);
  });

  it('rejects a finish that is not offered', () => {
    const result = validateReservation({...valid, finish: 'gold-leaf'});
    expect(result.ok).toBe(false);
    if (!result.ok) expect(Object.keys(result.errors)).toEqual(['finish']);
  });
});
