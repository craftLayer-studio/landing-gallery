import type {Metadata} from 'next';
import {ConceptBar} from '@/components/shell/ConceptBar';
import {archivo, archivoBlack, jetbrainsMono} from '@/components/kiln/fonts';
import {KilnNav} from '@/components/kiln/Nav';
import {KilnHero} from '@/components/kiln/Hero';
import {KilnProcess} from '@/components/kiln/Process';
import {KilnPricing} from '@/components/kiln/PricingToggle';
import {KilnFaq} from '@/components/kiln/FaqCompact';
import {KilnCtaMarquee} from '@/components/kiln/CtaMarquee';
import {KilnFirstRun} from '@/components/kiln/FirstRun';
import {KilnFooter} from '@/components/kiln/Footer';
import '@/components/kiln/kiln.css';

const description =
  'A fictional landing page example by CraftLayer Studio for Kiln, an invented build-cache CLI for monorepos. Not a real product.';
const url = 'https://craftlayer-studio.github.io/landing-gallery/kiln/';

export const metadata: Metadata = {
  title: 'Kiln',
  description,
  alternates: {canonical: url},
  openGraph: {
    title: 'Kiln | CraftLayer Studio landing page example',
    description,
    url,
    type: 'website',
    images: [{url: '/landing-gallery/og.png', width: 1200, height: 630, alt: 'CraftLayer Studio landing page gallery'}],
  },
};

export default function KilnPage() {
  return (
    <div className={`kn-root ${archivo.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} min-h-screen`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded-full focus:bg-[var(--kn-bone)] focus:px-4 focus:py-2 focus:text-[var(--kn-ink)]"
      >
        Skip to content
      </a>
      <ConceptBar brand="Kiln" slug="kiln" />
      <KilnNav />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <KilnHero />
        <KilnProcess />
        <KilnPricing />
        <KilnFaq />
        <KilnCtaMarquee />
        <KilnFirstRun />
      </main>
      <KilnFooter />
    </div>
  );
}
