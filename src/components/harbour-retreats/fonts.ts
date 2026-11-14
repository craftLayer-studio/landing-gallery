import {IBM_Plex_Mono, Instrument_Sans, Playfair_Display} from 'next/font/google';

export const display = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--hr-display',
  display: 'swap',
});

export const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--hr-sans',
  display: 'swap',
});

export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--hr-mono',
  display: 'swap',
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
