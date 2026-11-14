import type {Metadata} from 'next';
import './globals.css';
import {SITE_URL} from '@/lib/paths';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + '/'),
  title: {default: 'Landing page gallery | CraftLayer Studio', template: '%s | CraftLayer Studio landing page example'},
  description:
    'Six fictional landing page examples by CraftLayer Studio, each composed from named, reusable section archetypes. Not real businesses.',
  icons: {icon: [{url: '/landing-gallery/favicon.ico', sizes: 'any'}, {url: '/landing-gallery/brand/icon.svg', type: 'image/svg+xml'}]},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
