import {STUDIO_URL} from '@/lib/paths';
import styles from './harbour.module.css';

/**
 * Archetype: footer/address. The footer as the back of a printed brochure:
 * postal address, email, hours. No social row, no link map.
 */
export function FooterAddress() {
  return (
    <footer
      id="visit"
      aria-labelledby="hr-visit-title"
      className={`${styles.onDark} scroll-mt-20 bg-[var(--harbour)] px-4 pt-16 pb-10 text-[var(--salt)] sm:px-8 lg:px-14 lg:pt-20`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#3c5a72] pb-6">
        <h2 id="hr-visit-title" className={`${styles.display} text-3xl sm:text-4xl`}>
          Harbour <em className="text-[var(--brass)]">Retreats</em>
        </h2>
        <p className={styles.meta}>05 — Find us</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className={styles.meta}>Harbour office</h3>
          <address className="mt-4 text-[15px] leading-relaxed not-italic">
            The Net Store, 4 Quay Steps
            <br />
            Merrowick, Calder Reach
            <br />
            <span className="text-[#b9c6cf]">A fictional address</span>
          </address>
        </div>
        <div>
          <h3 className={styles.meta}>Write</h3>
          <p className="mt-4 text-[15px] leading-relaxed">
            <a href="mailto:stays@example.com" className="underline decoration-[var(--brass)] underline-offset-4 hover:text-[var(--brass)]">
              stays@example.com
            </a>
            <br />
            <span className="text-[#b9c6cf]">Example address. Not monitored.</span>
          </p>
        </div>
        <div>
          <h3 className={styles.meta}>Harbour hours</h3>
          <p className="mt-4 text-[15px] leading-relaxed">
            Two hours either side of high water
            <br />
            <span className="text-[#b9c6cf]">Sample hours, for the story</span>
          </p>
        </div>
        <div>
          <h3 className={styles.meta}>Made by</h3>
          <p className="mt-4 text-[15px] leading-relaxed">
            <a href={STUDIO_URL} className="underline decoration-[var(--brass)] underline-offset-4 hover:text-[var(--brass)]">
              Concept demo by CraftLayer Studio
            </a>
            <br />
            <span className="text-[#b9c6cf]">Drawn plates, no photography</span>
          </p>
        </div>
      </div>

      <p className={`${styles.meta} mt-14 border-t border-[#3c5a72] pt-6 normal-case tracking-[0.04em]`}>
        Harbour Retreats is a fictional brand. Nothing on this page can be booked, bought or sent.
      </p>
    </footer>
  );
}
