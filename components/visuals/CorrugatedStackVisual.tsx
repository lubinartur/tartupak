/** Abstract stacked corrugated board + flute texture — hero only. */

const KRAFT = "#c79a5b";
const KRAFT_DEEP = "#a67c4a";
const SURFACE = "#f4efea";
const FOREST = "#1f3d2b";

type Props = { className?: string };

export function CorrugatedStackVisual({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 520 390"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="hero-flutes"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(90)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke={FOREST}
            strokeOpacity={0.08}
            strokeWidth={1.2}
          />
        </pattern>
        <linearGradient id="hero-sheet-shade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={KRAFT} stopOpacity={0.35} />
          <stop offset="100%" stopColor={KRAFT_DEEP} stopOpacity={0.22} />
        </linearGradient>
      </defs>
      <rect width="520" height="390" fill={SURFACE} />
      <rect
        x="24"
        y="24"
        width="472"
        height="342"
        fill="url(#hero-flutes)"
        opacity={0.9}
      />

      {/* Back sheet */}
      <path
        d="M88 118 L392 98 L420 142 L116 168 Z"
        fill="url(#hero-sheet-shade)"
        stroke={FOREST}
        strokeOpacity={0.18}
        strokeWidth={1}
      />
      {/* Middle sheet */}
      <path
        d="M72 168 L388 148 L418 198 L98 224 Z"
        fill={KRAFT}
        fillOpacity={0.28}
        stroke={FOREST}
        strokeOpacity={0.28}
        strokeWidth={1.2}
      />
      {/* Front sheet — corrugated edge detail */}
      <path
        d="M56 218 L404 196 L438 252 L78 278 Z"
        fill={KRAFT}
        fillOpacity={0.38}
        stroke={FOREST}
        strokeOpacity={0.35}
        strokeWidth={1.4}
      />
      {/* Flute edge ticks */}
      <g stroke={FOREST} strokeOpacity={0.25} strokeWidth={0.9}>
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={i}
            x1={78 + i * 19}
            y1={276}
            x2={74 + i * 19}
            y2={268}
          />
        ))}
      </g>

      {/* Side stack hint */}
      <path
        d="M418 196 L468 176 L468 232 L438 252 Z"
        fill={KRAFT_DEEP}
        fillOpacity={0.15}
        stroke={FOREST}
        strokeOpacity={0.2}
        strokeWidth={1}
      />
    </svg>
  );
}
