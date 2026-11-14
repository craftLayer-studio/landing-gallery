import type {Metadata} from 'next';
import {ConceptBar} from '@/components/shell/ConceptBar';
import {SITE_URL} from '@/lib/paths';
import {CtaBanded} from '@/components/signal-grid/CtaBanded';
import {FaqAccordion} from '@/components/signal-grid/FaqAccordion';
import {FeaturesCompare} from '@/components/signal-grid/FeaturesCompare';
import {FooterSitemap} from '@/components/signal-grid/FooterSitemap';
import {HeroManifesto} from '@/components/signal-grid/HeroManifesto';
import {MegaNav} from '@/components/signal-grid/MegaNav';
import {PricingTable} from '@/components/signal-grid/PricingTable';
import {PricingThreeCard} from '@/components/signal-grid/PricingThreeCard';
import {fontVariables} from '@/components/signal-grid/fonts';
import styles from '@/components/signal-grid/signal.module.css';

const url = `${SITE_URL}/signal-grid/`;
const description =
  'Signal Grid is a fictional landing page example by CraftLayer Studio: an AI incident-triage platform with a mega menu and sample pricing.';

export const metadata: Metadata = {
  title: 'Signal Grid',
  description,
  alternates: {canonical: url},
  openGraph: {
    title: 'Signal Grid | CraftLayer Studio landing page example',
    description,
    url,
    siteName: 'CraftLayer Studio',
    type: 'website',
    images: [{url: '/landing-gallery/og.png', width: 1200, height: 630, alt: 'CraftLayer Studio landing page gallery'}],
  },
};

export default function SignalGridPage() {
  return (
    <div className={`${fontVariables} ${styles.root} min-h-screen`}>
      <ConceptBar brand="Signal Grid" />
      <MegaNav />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <HeroManifesto />
        <FeaturesCompare />
        <section id="pricing" aria-labelledby="sg-pricing-title" className="scroll-mt-16 border-b border-[var(--line)]">
          <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 lg:py-28">
            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-12 lg:gap-x-10">
              <p className={`${styles.meta} lg:col-span-3`}>02 — Sample pricing</p>
              <h2
                id="sg-pricing-title"
                className="max-w-[18ch] leading-[1.02] font-semibold tracking-[-0.025em] text-balance lg:col-span-9"
                style={{fontSize: 'clamp(2rem, 4.4vw, 3.6rem)'}}
              >
                Priced per responder, not per alert.
              </h2>
            </div>
            <div className="mt-12">
              <PricingThreeCard />
            </div>
            <PricingTable />
          </div>
        </section>
        <FaqAccordion />
        <CtaBanded />
      </main>
      <FooterSitemap />
    </div>
  );
}
