import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  // Origin only: relative metadata URLs in this app already include the basePath.
  metadataBase: new URL('https://craftlayer-studio.github.io/'),
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
