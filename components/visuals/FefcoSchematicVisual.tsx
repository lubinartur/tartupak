/** Per-code technical line drawings — orthogonal / schematic, no fills. */

const S = "#1f3d2b";

type Props = { code: string; className?: string };

export function FefcoSchematicVisual({ code, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="160" fill="#f4efea" />
      {/* Drawing frame — catalog sheet */}
      <g fill="none" stroke={S} strokeOpacity={0.22} strokeWidth={0.75}>
        <rect x="12" y="12" width="176" height="136" strokeDasharray="2 3" />
      </g>

      {code === "0201" && (
        <g
          fill="none"
          stroke={S}
          strokeWidth={1.15}
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {/* RSC-style: front panel + flap fold lines */}
          <path d="M52 118 L52 48 L148 48 L148 118 Z" strokeOpacity={0.85} />
          <path d="M52 48 L100 28 L148 48" strokeOpacity={0.55} />
          <path d="M100 28 L100 118" strokeDasharray="4 3" strokeOpacity={0.4} />
          <path d="M52 78 L148 78" strokeDasharray="3 4" strokeOpacity={0.35} />
        </g>
      )}

      {code === "0203" && (
        <g
          fill="none"
          stroke={S}
          strokeWidth={1.15}
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M48 118 L48 52 L152 52 L152 118 Z" strokeOpacity={0.85} />
          <path d="M48 52 L100 34 L152 52" strokeOpacity={0.55} />
          {/* Overlap: outer flap line */}
          <path
            d="M44 50 L100 30 L156 50"
            strokeOpacity={0.65}
            strokeWidth={1.35}
          />
          <path d="M100 34 L100 118" strokeDasharray="4 3" strokeOpacity={0.38} />
        </g>
      )}

      {code === "0210" && (
        <g
          fill="none"
          stroke={S}
          strokeWidth={1.15}
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {/* Folder profile: shallow tray + lid hinge */}
          <path d="M40 92 L160 92 L160 108 L40 108 Z" strokeOpacity={0.8} />
          <path d="M40 92 L40 56 L160 56 L160 92" strokeOpacity={0.75} />
          <path d="M40 56 L100 40 L160 56" strokeOpacity={0.5} />
          <path d="M100 40 L100 92" strokeDasharray="3 3" strokeOpacity={0.42} />
        </g>
      )}

      {code === "0427" && (
        <g
          fill="none"
          stroke={S}
          strokeWidth={1.15}
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M56 112 L56 52 L144 52 L144 112 Z" strokeOpacity={0.85} />
          <path d="M56 52 L100 36 L144 52" strokeOpacity={0.55} />
          {/* Lock tabs */}
          <path d="M68 112 L68 124 L84 112" strokeOpacity={0.7} />
          <path d="M132 112 L132 124 L116 112" strokeOpacity={0.7} />
          <path d="M100 36 L100 112" strokeDasharray="4 3" strokeOpacity={0.38} />
        </g>
      )}

      {code === "0713" && (
        <g
          fill="none"
          stroke={S}
          strokeWidth={1.15}
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {/* Open-front display: back + sides + base */}
          <path d="M48 112 L48 64 L152 64 L152 112" strokeOpacity={0.85} />
          <path d="M48 64 L100 44 L152 64" strokeOpacity={0.55} />
          <path d="M48 112 L100 96 L152 112" strokeOpacity={0.45} />
          <path d="M100 44 L100 112" strokeDasharray="4 3" strokeOpacity={0.4} />
        </g>
      )}

      {!["0201", "0203", "0210", "0427", "0713"].includes(code) && (
        <g fill="none" stroke={S} strokeWidth={1.1} strokeOpacity={0.6}>
          <rect x="56" y="48" width="88" height="72" />
        </g>
      )}
    </svg>
  );
}
