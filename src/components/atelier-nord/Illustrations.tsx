/**
 * Original SVG furniture illustrations for Atelier Nord (no stock photos).
 * Colours come from the page tokens so they follow the palette.
 */
type IllustrationProps = {title: string; className?: string};

const WOOD = 'var(--an-wood)';
const WOOD_DEEP = 'var(--an-wood-deep)';
const INK = 'var(--an-ink)';
const ACCENT = 'var(--an-accent)';
const ACCENT_DEEP = 'var(--an-accent-deep)';

export function LuneChair({title, className}: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label={title} className={className}>
      <ellipse cx="122" cy="186" rx="92" ry="6" fill={INK} opacity="0.1" />
      {/* far legs */}
      <line x1="84" y1="118" x2="74" y2="180" stroke={WOOD_DEEP} strokeWidth="6" strokeLinecap="round" />
      <line x1="158" y1="120" x2="168" y2="180" stroke={WOOD_DEEP} strokeWidth="6" strokeLinecap="round" />
      {/* back cushion */}
      <rect x="44" y="34" width="30" height="92" rx="14" fill={ACCENT_DEEP} transform="rotate(-16 59 80)" />
      {/* seat cushion */}
      <rect x="62" y="98" width="122" height="22" rx="11" fill={ACCENT} />
      {/* seat rail */}
      <line x1="58" y1="122" x2="186" y2="124" stroke={WOOD} strokeWidth="8" strokeLinecap="round" />
      {/* back frame */}
      <line x1="40" y1="34" x2="66" y2="124" stroke={WOOD} strokeWidth="7" strokeLinecap="round" />
      {/* near legs */}
      <line x1="66" y1="120" x2="50" y2="182" stroke={WOOD} strokeWidth="7" strokeLinecap="round" />
      <path d="M172 90 L188 182" stroke={WOOD} strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* armrest */}
      <path d="M62 92 Q120 82 184 90" stroke={WOOD} strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function HalvoTable({title, className}: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label={title} className={className}>
      <ellipse cx="120" cy="186" rx="104" ry="6" fill={INK} opacity="0.1" />
      {/* far legs */}
      <path d="M74 92 L66 178 L72 178 L82 92 Z" fill={WOOD_DEEP} />
      <path d="M158 92 L168 178 L174 178 L166 92 Z" fill={WOOD_DEEP} />
      {/* apron */}
      <rect x="36" y="82" width="168" height="10" rx="2" fill={WOOD_DEEP} />
      {/* near legs (splayed, tapered) */}
      <path d="M42 90 L28 182 L37 182 L54 90 Z" fill={WOOD} />
      <path d="M186 90 L203 182 L212 182 L198 90 Z" fill={WOOD} />
      {/* top */}
      <rect x="16" y="70" width="208" height="13" rx="3" fill={WOOD} />
      <rect x="16" y="80" width="208" height="3" fill={WOOD_DEEP} opacity="0.5" />
      {/* bowl and bread */}
      <path d="M92 70 Q92 50 120 50 Q148 50 148 70 Z" fill={ACCENT} />
      <ellipse cx="120" cy="51" rx="28" ry="4" fill={ACCENT_DEEP} />
      <rect x="160" y="40" width="6" height="30" rx="3" fill={INK} />
      <ellipse cx="163" cy="40" rx="9" ry="4" fill={INK} />
    </svg>
  );
}

export function VinterLamp({title, className}: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label={title} className={className}>
      <defs>
        <linearGradient id="an-lamp-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1cf" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff1cf" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M70 108 L170 108 L224 198 L16 198 Z" fill="url(#an-lamp-light)" />
      <line x1="120" y1="0" x2="120" y2="52" stroke={INK} strokeWidth="2" />
      <rect x="114" y="48" width="12" height="10" rx="2" fill={WOOD_DEEP} />
      <path d="M64 108 Q64 56 120 56 Q176 56 176 108 Z" fill={INK} />
      <path d="M78 74 Q96 62 116 61" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="120" cy="108" rx="56" ry="7" fill="#efe3c9" />
      <ellipse cx="120" cy="110" rx="12" ry="6" fill="#fff6dd" />
    </svg>
  );
}
