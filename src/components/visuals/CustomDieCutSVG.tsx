export function CustomDieCutSVG() {
  return (
    <svg viewBox="0 0 100 70" fill="none" className="h-full w-full drop-shadow-sm">
      <pattern id="dotGridCustom" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
        <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
      </pattern>
      <rect width="100" height="70" fill="url(#dotGridCustom)" />
      <text x="5" y="8" className="fill-brand-green text-[3px] font-bold uppercase tracking-widest opacity-40">
        CUSTOM DIE-CUT
      </text>
      <g transform="translate(10, 12)">
        <g className="stroke-brand-green" opacity="0.5" strokeWidth="0.8">
          <rect x="0" y="15" width="15" height="20" />
          <rect x="15" y="15" width="25" height="20" />
          <rect x="40" y="15" width="15" height="20" />
          <rect x="55" y="15" width="20" height="20" />
          <path d="M75 15 L78 17 V33 L75 35 Z" />
          <rect x="0" y="5" width="15" height="10" />
          <rect x="15" y="0" width="25" height="15" />
          <rect x="40" y="5" width="15" height="10" />
          <rect x="0" y="35" width="15" height="10" />
          <rect x="15" y="35" width="25" height="15" />
          <rect x="40" y="35" width="15" height="10" />
        </g>
        <g className="stroke-brand-green" opacity="0.3" strokeWidth="0.5" strokeDasharray="2 1">
          <line x1="15" y1="0" x2="15" y2="50" />
          <line x1="40" y1="0" x2="40" y2="50" />
          <line x1="55" y1="15" x2="55" y2="35" />
          <line x1="0" y1="15" x2="75" y2="15" />
          <line x1="0" y1="35" x2="75" y2="35" />
        </g>
      </g>
    </svg>
  );
}
