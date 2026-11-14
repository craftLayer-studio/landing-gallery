import type {Metadata} from 'next';
import {IBM_Plex_Mono, Newsreader} from 'next/font/google';
import {ConceptBar} from '@/components/shell/ConceptBar';
import {SITE_URL} from '@/lib/paths';
import {NavInline} from '@/components/field-notes/NavInline';
import {HeroQuestion} from '@/components/field-notes/HeroQuestion';
import {RecentIssues} from '@/components/field-notes/RecentIssues';
import {FeaturesLongForm} from '@/components/field-notes/FeaturesLongForm';
import {FaqNumbered} from '@/components/field-notes/FaqNumbered';
import {CtaFormLed} from '@/components/field-notes/CtaFormLed';
import {FooterNewsletter} from '@/components/field-notes/FooterNewsletter';
import '@/components/field-notes/fieldnotes.css';

const serif = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-fn-serif',
  display: 'swap',
});
const mono = IBM_Plex_Mono({subsets: ['latin'], weight: ['400', '500'], variable: '--font-fn-mono', display: 'swap'});

const CANONICAL = `${SITE_URL}/field-notes/`;
const DESCRIPTION =
  'Field Notes Weekly is a fictional newsletter about craft and tools: a landing page example by CraftLayer Studio. No real issues or authors.';

export const metadata: Metadata = {
  title: 'Field Notes Weekly',
  description: DESCRIPTION,
  alternates: {canonical: CANONICAL},
  openGraph: {
    title: 'Field Notes Weekly (fictional landing page example)',
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'CraftLayer Studio',
    type: 'website',
    images: [{url: '/landing-gallery/og.png', width: 1200, height: 630, alt: 'CraftLayer Studio landing page gallery'}],
  },
};

export default function FieldNotesPage() {
  return (
    <div className={`fn-root ${serif.variable} ${mono.variable} min-h-screen`}>
      <ConceptBar brand="Field Notes Weekly" slug="field-notes" />
      <NavInline />
      <main id="main">
        <HeroQuestion />
        <RecentIssues />
        <FeaturesLongForm />
        <FaqNumbered />
        <CtaFormLed />
      </main>
      <FooterNewsletter />
    </div>
  );
}
