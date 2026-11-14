import styles from './harbour.module.css';

/**
 * Original vector scenes for Harbour Retreats. No photography: every plate is
 * drawn here. Each scene uses fixed, prefixed gradient ids and is rendered once.
 */

type SceneProps = {className?: string; label?: string};

function a11y(label?: string) {
  return label ? ({role: 'img', 'aria-label': label} as const) : ({'aria-hidden': true} as const);
}

/** Hero plate: fog lifting off a headland with the lighthouse. */
export function PlateScene({className, label}: SceneProps) {
  return (
    <svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid slice" className={className} {...a11y(label)}>
      <defs>
        <linearGradient id="hr-plate-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9d1d2" />
          <stop offset="0.55" stopColor="#e7e7e1" />
          <stop offset="1" stopColor="#f1ede4" />
        </linearGradient>
        <linearGradient id="hr-plate-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7d9099" />
          <stop offset="0.35" stopColor="#3f5f74" />
          <stop offset="1" stopColor="#143049" />
        </linearGradient>
        <radialGradient id="hr-plate-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fbf6ea" />
          <stop offset="0.5" stopColor="#f3ead6" stopOpacity="0.7" />
          <stop offset="1" stopColor="#f3ead6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hr-plate-fog" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f4f2ec" stopOpacity="0" />
          <stop offset="0.3" stopColor="#f4f2ec" stopOpacity="0.85" />
          <stop offset="0.7" stopColor="#f4f2ec" stopOpacity="0.7" />
          <stop offset="1" stopColor="#f4f2ec" stopOpacity="0" />
        </linearGradient>
        <filter id="hr-plate-blur" x="-10%" y="-100%" width="120%" height="300%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <linearGradient id="hr-plate-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff7e2" stopOpacity="0" />
          <stop offset="1" stopColor="#fff7e2" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="1600" height="760" fill="url(#hr-plate-sky)" />
      <circle cx="470" cy="300" r="190" fill="url(#hr-plate-sun)" />
      {/* distant headlands */}
      <path d="M0 418 C 140 396 230 404 330 392 S 520 380 600 410 L 600 440 L 0 440 Z" fill="#a9b6b8" opacity="0.7" />
      <path d="M760 420 C 860 400 980 396 1060 408 L 1060 440 L 760 440 Z" fill="#b7c2c2" opacity="0.6" />
      {/* sea */}
      <rect y="430" width="1600" height="330" fill="url(#hr-plate-sea)" />
      <g stroke="#e9e4d6" strokeLinecap="round" opacity="0.45">
        <path d="M300 470 H520" strokeWidth="2" />
        <path d="M380 500 H700" strokeWidth="1.5" />
        <path d="M200 540 H460" strokeWidth="1.5" />
        <path d="M560 470 H640" strokeWidth="2" />
        <path d="M620 590 H900" strokeWidth="1" />
      </g>
      {/* small boat */}
      <g transform="translate(690 452)" fill="#1d2f3c">
        <path d="M0 10 H44 L38 18 H6 Z" />
        <rect x="18" y="-14" width="2" height="24" />
        <path d="M20 -14 L36 6 H20 Z" fill="#33495a" />
      </g>
      {/* beam */}
      <polygon className={styles.beam} points="1268,236 560,170 560,330" fill="url(#hr-plate-beam)" opacity="0.35" />
      {/* foreground cliff */}
      <path
        d="M1010 760 L1040 520 C1070 470 1120 430 1170 410 L1210 330 C1260 300 1320 296 1380 300 L1440 280 C1500 278 1560 290 1600 300 L1600 760 Z"
        fill="#24323b"
      />
      <path d="M1040 520 C1080 500 1110 520 1140 560 L1120 760 L1030 760 Z" fill="#1a262e" />
      <path d="M1210 330 C1260 300 1320 296 1380 300 L1440 280 C1500 278 1560 290 1600 300 L1600 318 C1500 310 1400 314 1220 344 Z" fill="#5d6f5a" />
      {/* lighthouse */}
      <g>
        <path d="M1252 318 L1262 216 H1284 L1294 318 Z" fill="#f4f2ec" />
        <path d="M1256 280 H1290 L1292 298 H1254 Z" fill="#984721" />
        <path d="M1259 246 H1287 L1288 258 H1258 Z" fill="#984721" />
        <rect x="1258" y="206" width="30" height="12" fill="#24323b" />
        <rect x="1262" y="190" width="22" height="16" fill="#fff4d6" />
        <path d="M1258 190 L1273 176 L1288 190 Z" fill="#24323b" />
        {/* keeper's cottage */}
        <path d="M1310 318 V292 L1336 274 L1362 292 V318 Z" fill="#e9e5db" />
        <path d="M1306 294 L1336 270 L1366 294" stroke="#24323b" strokeWidth="5" fill="none" />
        <rect x="1328" y="300" width="10" height="12" fill="#c49548" />
      </g>
      {/* drifting fog */}
      <g className={styles.drift} filter="url(#hr-plate-blur)">
        <rect x="-100" y="370" width="1100" height="70" fill="url(#hr-plate-fog)" />
        <rect x="700" y="330" width="1000" height="60" fill="url(#hr-plate-fog)" opacity="0.8" />
        <rect x="100" y="500" width="900" height="40" fill="url(#hr-plate-fog)" opacity="0.35" />
      </g>
    </svg>
  );
}

/** Bento lead: low brass sun on the Reach at dusk. */
export function HorizonScene({className}: SceneProps) {
  return (
    <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hr-hz-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#102a40" />
          <stop offset="0.6" stopColor="#2c4f69" />
          <stop offset="1" stopColor="#b9a17a" />
        </linearGradient>
        <linearGradient id="hr-hz-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#36546a" />
          <stop offset="1" stopColor="#0e2235" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#hr-hz-sky)" />
      <circle cx="560" cy="330" r="44" fill="#e9c98c" opacity="0.9" />
      <path d="M0 322 C 120 300 210 312 300 300 S 430 296 470 318 L 470 340 L 0 340 Z" fill="#1c3448" />
      <rect y="336" width="800" height="184" fill="url(#hr-hz-sea)" />
      <g stroke="#e9c98c" strokeLinecap="round">
        <path d="M510 352 H610" strokeWidth="3" opacity="0.8" />
        <path d="M528 372 H596" strokeWidth="2.5" opacity="0.6" />
        <path d="M540 394 H584" strokeWidth="2" opacity="0.45" />
        <path d="M550 420 H574" strokeWidth="2" opacity="0.3" />
      </g>
      <g stroke="#9fb3c0" strokeLinecap="round" opacity="0.35">
        <path d="M60 380 H260" />
        <path d="M120 430 H380" />
        <path d="M640 460 H780" />
      </g>
    </svg>
  );
}

/** The Pilot House: tower and keeper's cottage in fog. */
export function LighthouseScene({className}: SceneProps) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hr-lh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c5ced0" />
          <stop offset="1" stopColor="#eceae3" />
        </linearGradient>
        <filter id="hr-lh-blur" x="-10%" y="-100%" width="120%" height="300%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="url(#hr-lh-sky)" />
      <polygon className={styles.beam} points="212,70 0,40 0,120" fill="#fff8e6" opacity="0.35" />
      <path d="M0 230 C 80 214 140 220 200 212 L 400 206 L 400 300 L 0 300 Z" fill="#53664f" />
      <path d="M0 252 C 120 240 260 246 400 236 L 400 300 L 0 300 Z" fill="#3c4c3a" />
      <path d="M196 218 L204 84 H222 L230 218 Z" fill="#f7f5ef" />
      <path d="M199 170 H227 L228 186 H198 Z" fill="#984721" />
      <path d="M202 120 H224 L225 132 H201 Z" fill="#984721" />
      <rect x="200" y="74" width="26" height="10" fill="#24323b" />
      <rect x="204" y="58" width="18" height="16" fill="#fff1c9" />
      <path d="M200 58 L213 46 L226 58 Z" fill="#24323b" />
      <path d="M244 220 V192 L272 172 L300 192 V220 Z" fill="#ebe7dd" />
      <path d="M240 194 L272 168 L304 194" stroke="#24323b" strokeWidth="5" fill="none" />
      <rect x="266" y="200" width="10" height="14" fill="#c49548" />
      <rect className={styles.drift} x="-40" y="140" width="480" height="36" fill="#f4f2ec" opacity="0.55" filter="url(#hr-lh-blur)" />
    </svg>
  );
}

/** Saltglass: morning light through a tall window onto boards. */
export function WindowScene({className}: SceneProps) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hr-win-out" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe4e2" />
          <stop offset="0.55" stopColor="#f2eee4" />
          <stop offset="0.56" stopColor="#6d8592" />
          <stop offset="1" stopColor="#2c4b62" />
        </linearGradient>
        <linearGradient id="hr-win-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6e7c4" stopOpacity="0.85" />
          <stop offset="1" stopColor="#f6e7c4" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#3a4148" />
      <rect y="210" width="400" height="90" fill="#4a4238" />
      <g stroke="#3c352d" strokeWidth="1.5">
        <path d="M0 232 H400" />
        <path d="M0 258 H400" />
        <path d="M0 284 H400" />
      </g>
      <rect x="120" y="30" width="130" height="176" fill="url(#hr-win-out)" />
      <g stroke="#2a3036" strokeWidth="6" fill="none">
        <rect x="120" y="30" width="130" height="176" />
        <path d="M185 30 V206" />
        <path d="M120 118 H250" />
      </g>
      <polygon points="126,212 244,212 330,300 168,300" fill="url(#hr-win-light)" />
      <g stroke="#e4c891" strokeWidth="5" opacity="0.6">
        <path d="M187 212 L 252 300" />
      </g>
      <rect x="40" y="170" width="54" height="40" fill="#2a3036" />
      <rect x="44" y="160" width="10" height="12" fill="#c49548" />
    </svg>
  );
}

/** The Netloft: a gabled loft on the quay, boats moored below. */
export function HarbourScene({className}: SceneProps) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hr-hb-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d5dbd9" />
          <stop offset="1" stopColor="#f0ece2" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#hr-hb-sky)" />
      <rect y="196" width="400" height="104" fill="#2b4a61" />
      <rect x="170" y="164" width="230" height="40" fill="#6c6a62" />
      <g stroke="#58564e" strokeWidth="1">
        <path d="M170 176 H400" />
        <path d="M170 190 H400" />
      </g>
      <path d="M220 164 V96 L268 58 L316 96 V164 Z" fill="#e7e1d3" />
      <path d="M212 100 L268 52 L324 100" stroke="#24323b" strokeWidth="7" fill="none" />
      <rect x="254" y="100" width="28" height="34" fill="#24323b" />
      <rect x="258" y="104" width="20" height="26" fill="#f2d9a2" />
      <rect x="236" y="140" width="16" height="24" fill="#984721" />
      <rect x="330" y="110" width="44" height="54" fill="#cfc8b8" />
      <path d="M326 112 L352 92 L378 112" stroke="#24323b" strokeWidth="5" fill="none" />
      <g fill="#984721">
        <path d="M40 214 H120 L110 230 H52 Z" />
      </g>
      <rect x="78" y="168" width="3" height="46" fill="#24323b" />
      <g fill="#f4f2ec">
        <path d="M120 236 H176 L168 248 H128 Z" />
      </g>
      <path d="M40 214 C 20 230 10 250 0 260" stroke="#c49548" strokeWidth="1.5" fill="none" />
      <g stroke="#a9bcc6" strokeLinecap="round" opacity="0.5">
        <path d="M20 266 H120" />
        <path d="M150 280 H300" />
        <path d="M60 252 H90" />
      </g>
    </svg>
  );
}

/** Tide marks: abstract contour lines for the tide-table tile. */
export function TideScene({className}: SceneProps) {
  return (
    <svg viewBox="0 0 400 120" preserveAspectRatio="none" className={className} aria-hidden="true">
      <g fill="none" stroke="#143049" strokeWidth="1.5">
        <path d="M0 30 C 60 10 120 50 200 30 S 340 10 400 30" opacity="0.25" />
        <path d="M0 55 C 70 35 130 75 200 55 S 330 35 400 55" opacity="0.45" />
        <path d="M0 80 C 60 60 140 100 200 80 S 340 60 400 80" opacity="0.7" />
        <path d="M0 105 C 70 85 130 125 200 105 S 330 85 400 105" />
      </g>
    </svg>
  );
}
