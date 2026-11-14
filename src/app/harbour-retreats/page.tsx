import type {Metadata} from 'next';
import {ConceptBar} from '@/components/shell/ConceptBar';
import {SITE_URL} from '@/lib/paths';
import {CtaQuiet} from '@/components/harbour-retreats/CtaQuiet';
import {FaqWithCta} from '@/components/harbour-retreats/FaqWithCta';
import {FeaturesBento} from '@/components/harbour-retreats/FeaturesBento';
import {FooterAddress} from '@/components/harbour-retreats/FooterAddress';
import {HeroDocumentary} from '@/components/harbour-retreats/HeroDocumentary';
import {MarginalNav} from '@/components/harbour-retreats/MarginalNav';
import {PricingEnterprise} from '@/components/harbour-retreats/PricingEnterprise';
import {fontVariables} from '@/components/harbour-retreats/fonts';
import styles from '@/components/harbour-retreats/harbour.module.css';

const url = `${SITE_URL}/harbour-retreats/`;
const description =
  'Harbour Retreats is a fictional landing page example by CraftLayer Studio: three boutique coastal stays, drawn plates and a demo enquiry form.';

export const metadata: Metadata = {
  title: 'Harbour Retreats',
  description,
  alternates: {canonical: url},
  openGraph: {
    title: 'Harbour Retreats | CraftLayer Studio landing page example',
    description,
    url,
    siteName: 'CraftLayer Studio',
    type: 'website',
    images: [{url: '/landing-gallery/og.png', width: 1200, height: 630, alt: 'CraftLayer Studio landing page gallery'}],
  },
};

export default function HarbourRetreatsPage() {
  return (
    <div className={`${fontVariables} ${styles.root} min-h-screen`}>
      <ConceptBar brand="Harbour Retreats" slug="harbour-retreats" />
      <div className="lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)]">
        <MarginalNav />
        <div className="min-w-0">
          <main id="main" tabIndex={-1} className="focus:outline-none">
            <HeroDocumentary />
            <FeaturesBento />
            <PricingEnterprise />
            <FaqWithCta />
            <CtaQuiet />
          </main>
          <FooterAddress />
        </div>
      </div>
    </div>
  );
}
