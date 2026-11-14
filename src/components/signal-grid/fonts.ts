import {JetBrains_Mono, Space_Grotesk} from 'next/font/google';

export const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--sg-display',
  display: 'swap',
});

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--sg-mono',
  display: 'swap',
});

export const fontVariables = `${grotesk.variable} ${mono.variable}`;
