/** Registry of landing page examples. Every brand is fictional. */
export type LandingPage = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  /** Inspo MCP reference archetypes this page is composed from (type/id). */
  archetypes: string[];
  href: string;
};

export const pages: LandingPage[] = [
  {
    slug: 'ledgerline',
    name: 'Ledgerline',
    category: 'Fintech API',
    summary: 'Payments-reconciliation API launch page: typographic hero, live terminal workbench, per-use pricing and a searchable FAQ.',
    archetypes: ['nav/inline', 'hero/marquee', 'features/workbench', 'pricing/per-use', 'faq/search-led', 'cta/two-button', 'footer/colophon'],
    href: '/ledgerline/',
  },
  {
    slug: 'kiln',
    name: 'Kiln',
    category: 'Developer tool',
    summary: 'Build-cache CLI landing page: word-as-art hero, numbered process, monthly/annual toggle pricing and a marquee call to action.',
    archetypes: ['nav/floating-pill', 'hero/word-as-art', 'features/numbered-triplet', 'pricing/toggle', 'faq/compact', 'cta/marquee', 'footer/list'],
    href: '/kiln/',
  },
  {
    slug: 'atelier-nord',
    name: 'Atelier Nord',
    category: 'E-commerce launch',
    summary: 'Furniture collection launch: split-screen hero, alternating product stories, a single-offer spotlight and a statement footer.',
    archetypes: ['nav/off-canvas', 'hero/split-screen', 'features/alternating', 'pricing/single-plan', 'faq/two-column', 'cta/inverted', 'footer/statement'],
    href: '/atelier-nord/',
  },
  {
    slug: 'field-notes',
    name: 'Field Notes Weekly',
    category: 'Newsletter / creator',
    summary: 'Independent newsletter sign-up page: question-led hero, long-form feature essay, form-led subscribe and a newsletter footer.',
    archetypes: ['nav/inline', 'hero/question', 'features/long-form', 'faq/numbered', 'cta/form-led', 'footer/newsletter'],
    href: '/field-notes/',
  },
  {
    slug: 'harbour-retreats',
    name: 'Harbour Retreats',
    category: 'Travel and hospitality',
    summary: 'Boutique coastal stays: documentary hero, bento experience grid, contact-led enquiry pricing and an address-card footer.',
    archetypes: ['nav/marginal', 'hero/documentary', 'features/bento', 'pricing/enterprise', 'faq/with-cta', 'cta/quiet', 'footer/address'],
    href: '/harbour-retreats/',
  },
  {
    slug: 'signal-grid',
    name: 'Signal Grid',
    category: 'AI operations platform',
    summary: 'AI incident-triage platform: manifesto hero, before/with comparison, three-card and table pricing, accordion FAQ and a banded call to action.',
    archetypes: ['nav/mega', 'hero/manifesto', 'features/compare', 'pricing/three-card', 'pricing/table', 'faq/accordion', 'cta/banded', 'footer/sitemap'],
    href: '/signal-grid/',
  },
];
