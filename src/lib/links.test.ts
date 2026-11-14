import {describe, expect, it} from 'vitest';
import {contactUrl, templateUrl} from './links';

describe('templateUrl', () => {
  it('links sold templates to scriptly.store with UTM tags', () => {
    expect(templateUrl('kiln')).toBe(
      'https://scriptly.store/products/kiln?utm_source=craftlayer&utm_medium=gallery&utm_campaign=gsap-collection',
    );
    expect(templateUrl('harbour-retreats')).toContain('/products/harbour-retreats?');
  });

  it('returns undefined for pages that are not sold', () => {
    expect(templateUrl('ledgerline')).toBeUndefined();
    expect(templateUrl('field-notes')).toBeUndefined();
  });
});

describe('contactUrl', () => {
  it('adds the referring page', () => {
    expect(contactUrl('kiln')).toBe('https://craftlayer-studio.github.io/contact/?ref=kiln');
  });

  it('works without a ref', () => {
    expect(contactUrl()).toBe('https://craftlayer-studio.github.io/contact/');
  });
});
