import type {Metadata} from 'next';
import {DM_Serif_Display, Hanken_Grotesk} from 'next/font/google';
import {ConceptBar} from '@/components/shell/ConceptBar';
import {SITE_URL} from '@/lib/paths';
import {NavOffCanvas} from '@/components/atelier-nord/NavOffCanvas';
import {HeroSplitScreen} from '@/components/atelier-nord/HeroSplitScreen';
import {FeaturesAlternating} from '@/components/atelier-nord/FeaturesAlternating';
import {PricingSinglePlan} from '@/components/atelier-nord/PricingSinglePlan';
import {FaqTwoColumn} from '@/components/atelier-nord/FaqTwoColumn';
import {CtaInverted} from '@/components/atelier-nord/CtaInverted';
import {FooterStatement} from '@/components/atelier-nord/FooterStatement';
import '@/components/atelier-nord/atelier.css';

const display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-an-display',
  display: 'swap',
});
const sans = Hanken_Grotesk({subsets: ['latin'], variable: '--font-an-sans', display: 'swap'});

const CANONICAL = `${SITE_URL}/atelier-nord/`;
const DESCRIPTION =
  'Atelier Nord is a fictional Nordic furniture studio: a landing page example by CraftLayer Studio for a small collection launch.';

export const metadata: Metadata = {
  title: 'Atelier Nord',
  description: DESCRIPTION,
  alternates: {canonical: CANONICAL},
  openGraph: {
    title: 'Atelier Nord (fictional landing page example)',
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'CraftLayer Studio',
    type: 'website',
    images: [{url: '/landing-gallery/og.png', width: 1200, height: 630, alt: 'CraftLayer Studio landing page gallery'}],
  },
};

export default function AtelierNordPage() {
  return (
    <div className={`an-root ${display.variable} ${sans.variable} min-h-screen`}>
      <ConceptBar brand="Atelier Nord" slug="atelier-nord" />
      <NavOffCanvas />
      <main id="main" data-an-behind>
        <HeroSplitScreen />
        <FeaturesAlternating />
        <PricingSinglePlan />
        <FaqTwoColumn />
        <CtaInverted />
      </main>
      <FooterStatement />
    </div>
  );
}
