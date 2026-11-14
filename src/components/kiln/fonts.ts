import {Archivo, Archivo_Black, JetBrains_Mono} from 'next/font/google';

export const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--kn-font-display',
  display: 'swap',
});

export const archivo = Archivo({
  subsets: ['latin'],
  variable: '--kn-font-sans',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--kn-font-mono',
  display: 'swap',
});
