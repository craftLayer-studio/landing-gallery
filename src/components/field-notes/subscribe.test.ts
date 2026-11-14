import {describe, expect, it} from 'vitest';
import {validateEmail} from './subscribe';

describe('validateEmail', () => {
  it.each(['reader@example.com', '  reader@example.com  ', 'first.last+notes@mail.example.org'])('accepts %s', (email) => {
    expect(validateEmail(email)).toBeNull();
  });

  it('asks for an address when empty or blank', () => {
    expect(validateEmail('')).toBe('Enter your email address.');
    expect(validateEmail('   ')).toBe('Enter your email address.');
  });

  it('explains a missing @', () => {
    expect(validateEmail('reader.example.com')).toMatch(/needs an @/);
  });

  it.each(['reader@', '@example.com', 'reader@example', 'read er@example.com', 'reader@example.c'])('rejects %s', (email) => {
    expect(validateEmail(email)).toMatch(/Check the address/);
  });

  it('rejects addresses over 254 characters', () => {
    expect(validateEmail(`${'a'.repeat(250)}@example.com`)).toBe('That email address is too long.');
  });
});
