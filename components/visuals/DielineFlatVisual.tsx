/** Flat dieline / die-cut net — custom packaging section. */

const STROKE = "#1f3d2b";
const KRAFT = "#c79a5b";

type Props = { className?: string };

export function DielineFlatVisual({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 248"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="248" fill="#faf8f6" />
      <g
        fill="none"
        strokeWidth={1.15}
        strokeLinejoin="miter"
        strokeLinecap="square"
      >
        {/* Outer cut (solid) */}
        <path
          d="M48 124 L48 48 L128 48 L128 88 L272 88 L272 48 L352 48 L352 124 L312 124 L312 200 L232 200 L232 160 L168 160 L168 200 L88 200 L88 124 Z"
          stroke={STROKE}
          strokeOpacity={0.55}
          fill={KRAFT}
          fillOpacity={0.06}
        />
        {/* Fold lines (dashed) */}
        <path
          d="M128 88 L128 124 M272 88 L272 124 M168 124 L232 124 M168 124 L168 160 M232 124 L232 160"
          stroke={STROKE}
          strokeOpacity={0.35}
          strokeDasharray="4 4"
        />
        {/* Perforation hint */}
        <path
          d="M88 124 L312 124"
          stroke={KRAFT}
          strokeOpacity={0.45}
          strokeDasharray="2 5"
          strokeWidth={0.9}
        />
        {/* Registration marks */}
        <circle cx={48} cy={48} r={2.5} fill={STROKE} fillOpacity={0.35} stroke="none" />
        <circle cx={352} cy={48} r={2.5} fill={STROKE} fillOpacity={0.35} stroke="none" />
      </g>
      <text
        x={200}
        y={228}
        textAnchor="middle"
        fill={STROKE}
        fillOpacity={0.38}
        fontFamily="ui-monospace, monospace"
        fontSize={9}
        letterSpacing={3}
      >
        FOLD · CUT
      </text>
    </svg>
  );
}
