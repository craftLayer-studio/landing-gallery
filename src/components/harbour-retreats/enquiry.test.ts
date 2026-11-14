import {describe, expect, it} from 'vitest';
import {parseIsoDay, stayCapacity, toIsoDay, validateEnquiry, type EnquiryInput} from './enquiry';

const TODAY = '2026-11-14';
const base: EnquiryInput = {
  arrival: '2026-12-01',
  departure: '2026-12-04',
  guests: '2',
  stay: 'pilot-house',
  email: 'reader@example.com',
};

describe('validateEnquiry', () => {
  it('accepts a complete, future enquiry and counts nights', () => {
    const r = validateEnquiry(base, TODAY);
    expect(r.valid).toBe(true);
    expect(r.errors).toEqual({});
    expect(r.nights).toBe(3);
  });

  it('allows arriving today', () => {
    expect(validateEnquiry({...base, arrival: TODAY, departure: '2026-11-15'}, TODAY).valid).toBe(true);
  });

  it('rejects an arrival in the past', () => {
    const r = validateEnquiry({...base, arrival: '2026-11-13'}, TODAY);
    expect(r.errors.arrival).toMatch(/past/);
  });

  it('rejects departure on or before arrival', () => {
    expect(validateEnquiry({...base, departure: '2026-12-01'}, TODAY).errors.departure).toMatch(/after arrival/);
    expect(validateEnquiry({...base, departure: '2026-11-30'}, TODAY).errors.departure).toMatch(/after arrival/);
  });

  it('rejects impossible calendar dates', () => {
    expect(validateEnquiry({...base, arrival: '2027-02-30'}, TODAY).errors.arrival).toMatch(/real date/);
  });

  it('caps the length of stay', () => {
    expect(validateEnquiry({...base, departure: '2027-01-15'}, TODAY).errors.departure).toMatch(/up to 21/);
  });

  it('requires all fields', () => {
    const r = validateEnquiry({arrival: '', departure: '', guests: '', stay: '', email: ''}, TODAY);
    expect(Object.keys(r.errors).sort()).toEqual(['arrival', 'departure', 'email', 'guests', 'stay']);
    expect(r.valid).toBe(false);
    expect(r.nights).toBeNull();
  });

  it('checks guests against the chosen stay', () => {
    expect(validateEnquiry({...base, guests: '3'}, TODAY).errors.guests).toMatch(/sleeps 2/);
    expect(validateEnquiry({...base, stay: 'netloft', guests: '4'}, TODAY).valid).toBe(true);
    expect(validateEnquiry({...base, guests: '0'}, TODAY).errors.guests).toBeDefined();
    expect(validateEnquiry({...base, guests: '1.5'}, TODAY).errors.guests).toBeDefined();
  });

  it('validates email shape', () => {
    expect(validateEnquiry({...base, email: 'not-an-email'}, TODAY).errors.email).toBeDefined();
  });
});

describe('date helpers', () => {
  it('parses and formats days', () => {
    expect(parseIsoDay('2026-11-15')! - parseIsoDay('2026-11-14')!).toBe(1);
    expect(parseIsoDay('14/11/2026')).toBeNull();
    expect(toIsoDay(new Date(2026, 0, 5))).toBe('2026-01-05');
  });

  it('knows stay capacity', () => {
    expect(stayCapacity('any')).toBe(4);
    expect(stayCapacity('nowhere')).toBeNull();
  });
});
