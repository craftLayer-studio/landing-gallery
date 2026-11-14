import type {Metadata} from 'next';
import {ConceptBar} from '@/components/shell/ConceptBar';
import {plexMono, plexSans} from '@/components/ledgerline/fonts';
import {LedgerlineNav} from '@/components/ledgerline/Nav';
import {LedgerlineHero} from '@/components/ledgerline/Hero';
import {LedgerlineWorkbench} from '@/components/ledgerline/Workbench';
import {LedgerlinePricing} from '@/components/ledgerline/PricingPerUse';
import {LedgerlineFaq} from '@/components/ledgerline/FaqSearch';
import {LedgerlineCta} from '@/components/ledgerline/CtaTwoButton';
import {LedgerlineRequestAccess} from '@/components/ledgerline/RequestAccess';
import {LedgerlineFooter} from '@/components/ledgerline/Footer';
import '@/components/ledgerline/ledgerline.css';

const description =
  'A fictional landing page example by CraftLayer Studio for Ledgerline, an invented payments-reconciliation API for small finance teams.';
const url = 'https://craftlayer-studio.github.io/landing-gallery/ledgerline/';

export const metadata: Metadata = {
  title: 'Ledgerline',
  description,
  alternates: {canonical: url},
  openGraph: {
    title: 'Ledgerline | CraftLayer Studio landing page example',
    description,
    url,
    type: 'website',
    images: [{url: '/landing-gallery/og.png', width: 1200, height: 630, alt: 'CraftLayer Studio landing page gallery'}],
  },
};

export default function LedgerlinePage() {
  return (
    <div className={`ll-root ${plexSans.variable} ${plexMono.variable} min-h-screen`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:bg-[var(--ll-ink)] focus:px-4 focus:py-2 focus:text-[var(--ll-paper)]">
        Skip to content
      </a>
      <ConceptBar brand="Ledgerline" slug="ledgerline" />
      <LedgerlineNav />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <LedgerlineHero />
        <LedgerlineWorkbench />
        <LedgerlinePricing />
        <LedgerlineFaq />
        <LedgerlineCta />
        <LedgerlineRequestAccess />
      </main>
      <LedgerlineFooter />
    </div>
  );
}
