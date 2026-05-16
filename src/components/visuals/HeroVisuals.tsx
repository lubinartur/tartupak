export function Fefco0201Flat() {
  return (
    <svg viewBox="0 0 100 70" fill="none" className="h-full w-full drop-shadow-sm">
      <pattern id="heroDotGrid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
        <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
      </pattern>
      <rect width="100" height="70" fill="url(#heroDotGrid)" />
      <text x="5" y="8" className="fill-brand-green text-[3px] font-bold uppercase tracking-widest opacity-40">
        FEFCO 0201
      </text>
      <g transform="translate(10, 15)" className="stroke-brand-green" opacity="0.5" strokeWidth="0.8">
        <rect x="0" y="15" width="18" height="25" />
        <rect x="18" y="15" width="22" height="25" />
        <rect x="40" y="15" width="18" height="25" />
        <rect x="58" y="15" width="22" height="25" />
        <path d="M80 15 L84 18 V37 L80 40 Z" />
        <rect x="0" y="0" width="18" height="15" />
        <rect x="18" y="0" width="22" height="15" />
        <rect x="40" y="0" width="18" height="15" />
        <rect x="58" y="0" width="22" height="15" />
        <rect x="0" y="40" width="18" height="15" />
        <rect x="18" y="40" width="22" height="15" />
        <rect x="40" y="40" width="18" height="15" />
        <rect x="58" y="40" width="22" height="15" />
      </g>
    </svg>
  );
}

export function Fefco0201Assembled() {
  return (
    <svg viewBox="0 0 100 70" fill="none" className="h-full w-full drop-shadow-sm">
      <pattern id="heroDotGrid2" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
        <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
      </pattern>
      <rect width="100" height="70" fill="url(#heroDotGrid2)" />
      <text x="5" y="8" className="fill-brand-green text-[3px] font-bold uppercase tracking-widest opacity-40">
        FEFCO 0201
      </text>
      <g transform="translate(50, 40) scale(0.8)" className="stroke-brand-green" opacity="0.5" strokeWidth="1.2">
        <path d="M-25 -15 L10 0 L10 35 L-25 20 Z" />
        <path d="M10 0 L40 -15 L40 20 L10 35" />
        <path d="M-25 -15 L5 -30 L40 -15" />
      </g>
    </svg>
  );
}

export function Fefco0300Telescope() {
  return (
    <svg viewBox="0 0 100 70" fill="none" className="h-full w-full drop-shadow-sm">
      <pattern id="heroDotGrid3" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
        <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
      </pattern>
      <rect width="100" height="70" fill="url(#heroDotGrid3)" />
      <text x="5" y="8" className="fill-brand-green text-[3px] font-bold uppercase tracking-widest opacity-40">
        FEFCO 0300
      </text>
      <g transform="translate(50, 35) scale(0.7)" className="stroke-brand-green" opacity="0.5" strokeWidth="1.2">
        <path d="M-30 -35 L10 -20 L10 -5 L-30 -20 Z" />
        <path d="M10 -20 L45 -35 L45 -20 L10 -5" />
        <path d="M-30 -35 L5 -50 L45 -35" />
        <g transform="translate(0, 30)">
          <path d="M-30 -35 L10 -20 L10 5 L-30 -10 Z" />
          <path d="M10 -20 L45 -35 L45 -10 L10 5" />
          <path d="M-30 -35 L5 -50 L45 -35" />
        </g>
      </g>
    </svg>
  );
}
