import Link from 'next/link';
import {contactUrl, templateUrl} from '@/lib/links';
import {STUDIO_URL} from '@/lib/paths';

/** Required on every page: these are fictional brands, not clients. */
export function ConceptBar({brand, slug}: {brand: string; slug: string}) {
  const template = templateUrl(slug);
  return (
    // A labelled <aside> is a landmark, so the notice is not orphaned content (axe "region").
    <aside
      aria-label="Concept demo notice"
      className="flex flex-wrap items-center gap-x-3.5 gap-y-2 bg-[#101828] px-4 py-2 text-[13px] leading-snug font-medium text-[#e4e7ec] sm:px-10"
      style={{fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"}}
    >
      <span className="rounded-full bg-[#8bddc0] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#101828] uppercase">
        Concept demo
      </span>
      <span className="min-w-[240px] flex-1">
        {brand} is a fictional brand. This landing page was designed and built by{' '}
        <a className="text-white underline underline-offset-2" href={STUDIO_URL}>
          CraftLayer Studio
        </a>{' '}
        as a design example. Nothing is sold, booked or sent.
      </span>
      {template ? (
        <a className="font-bold text-[#8bddc0] underline underline-offset-2" href={template}>
          Get the animated template →
        </a>
      ) : null}
      <a className="text-white underline underline-offset-2" href={contactUrl(slug)}>
        Start a project
      </a>
      <Link href="/" className="text-white underline underline-offset-2">
        All landing pages
      </Link>
    </aside>
  );
}
