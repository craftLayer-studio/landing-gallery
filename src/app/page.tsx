import type {Metadata} from 'next';
import Link from 'next/link';
import {contactUrl, templateUrl} from '@/lib/links';
import {pages} from '@/lib/pages';
import {asset, REPO_URL, SITE_URL, STUDIO_URL} from '@/lib/paths';

export const metadata: Metadata = {
  title: {absolute: 'Landing page gallery | CraftLayer Studio'},
  description:
    'Six fictional landing pages by CraftLayer Studio for fintech, dev tools, e-commerce, newsletters, travel and AI, built from reusable section archetypes.',
  alternates: {canonical: `${SITE_URL}/`},
  openGraph: {
    title: 'Landing page gallery | CraftLayer Studio',
    description: 'Six fictional landing pages composed from named, reusable section archetypes.',
    url: `${SITE_URL}/`,
    siteName: 'CraftLayer Studio',
    type: 'website',
    images: [{url: '/landing-gallery/og.png', width: 1200, height: 630, alt: 'CraftLayer Studio landing page gallery'}],
  },
};

export default function GalleryIndex() {
  return (
    <main id="main" className="min-h-screen bg-[#f7f8f5] px-4 pb-16 text-[#101828] sm:px-10">
      <header className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 border-b border-[#e4e7ec] py-6">
        <a href={STUDIO_URL} className="font-bold tracking-tight">
          CraftLayer Studio
        </a>
        <nav aria-label="Studio" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1">
          <a href={REPO_URL} className="font-medium text-[#3a50e0] underline-offset-4 hover:underline">
            Source on GitHub
          </a>
          <a href={contactUrl('landing-gallery')} className="font-medium text-[#3a50e0] underline-offset-4 hover:underline">
            Start a project
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-[1200px] pt-16 pb-12 sm:pt-28 sm:pb-16" aria-labelledby="title">
        <p className="mb-5 font-mono text-xs tracking-[0.12em] text-[#3a50e0] uppercase">Landing page gallery</p>
        <h1 id="title" className="max-w-[18ch] text-4xl leading-[1.02] font-bold tracking-[-0.035em] sm:text-7xl">
          Six landing pages. Every section has a name.
        </h1>
        <p className="mt-6 max-w-[64ch] text-base leading-relaxed text-[#475467] sm:text-lg">
          Each page is a fictional brand assembled from named section archetypes (heroes, pricing, FAQs, calls to
          action and footers) drawn from a reference library of production patterns, then adapted to the brand. They
          show how we compose a landing page deliberately instead of reaching for the default three-column template.
          None of these businesses are real or are CraftLayer clients.
        </p>
      </section>

      <ul className="mx-auto grid max-w-[1200px] list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((p, i) => {
          const template = templateUrl(p.slug);
          return (
          <li
            key={p.slug}
            className="group relative flex flex-col gap-3 rounded-2xl border border-[#e4e7ec] bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgb(16_24_40/0.35)] focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-[#3a50e0] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {/* Decorative: the card's heading link names the page. Static export, so no next/image optimiser. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`/shots/${p.slug}.webp`)}
              alt=""
              width={800}
              height={480}
              loading={i < 3 ? 'eager' : 'lazy'}
              decoding="async"
              className="-mx-7 -mt-7 mb-2 block aspect-[5/3] w-[calc(100%+3.5rem)] max-w-none rounded-t-2xl border-b border-[#e4e7ec] object-cover object-top"
            />
            <span className="font-mono text-xs text-[#3a50e0]">{String(i + 1).padStart(2, '0')}</span>
            <span className="self-start rounded-full border border-current px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase">
              Concept demo
            </span>
            <h2 className="mt-2 text-3xl leading-tight font-bold tracking-tight">
              <Link href={p.href} className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none">
                {p.name}
              </Link>
            </h2>
            <p className="font-semibold text-[#344054]">{p.category}</p>
            <p className="leading-relaxed text-[#475467]">{p.summary}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-3" aria-label="Section archetypes used">
              {p.archetypes.map(a => (
                <li key={a} className="rounded border border-[#e4e7ec] px-1.5 py-0.5 font-mono text-[11px] text-[#475467]">
                  {a}
                </li>
              ))}
            </ul>
            {template ? (
              // relative z-10 lifts this link above the card's full-area heading link.
              <a
                href={template}
                className="relative z-10 self-start pt-2 font-semibold text-[#3a50e0] underline-offset-4 hover:underline"
              >
                Get the animated template →<span className="sr-only"> for {p.name}</span>
              </a>
            ) : null}
          </li>
          );
        })}
      </ul>

      <footer className="mx-auto mt-14 grid max-w-[1200px] gap-2 border-t border-[#e4e7ec] pt-6 text-sm text-[#475467]">
        <p>
          Built with Next.js, React, TypeScript and Tailwind CSS. Section archetypes are adapted from the Inspo MCP
          reference library. Statically exported to GitHub Pages.
        </p>
        <p>
          <a className="text-[#3a50e0]" href={STUDIO_URL}>
            craftlayer-studio.github.io
          </a>{' '}
          ·{' '}
          <a className="text-[#3a50e0]" href={REPO_URL}>
            github.com/craftLayer-studio/landing-gallery
          </a>
        </p>
      </footer>
    </main>
  );
}
