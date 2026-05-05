/** Minimal packaging silhouettes — variant cycles by card index. */

const STROKE = "#1f3d2b";
const FILL = "#c79a5b";

type Props = { variant: number; className?: string };

export function ProductSilhouetteVisual({ variant, className = "" }: Props) {
  const v = ((variant % 6) + 6) % 6;

  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="160" height="100" fill="#f4efea" rx={2} />

      {v === 0 && (
        <g fill="none" stroke={STROKE} strokeWidth={1.2} strokeLinejoin="round">
          <path
            d="M38 72 L38 38 L78 22 L118 38 L118 72 L78 88 Z"
            fill={FILL}
            fillOpacity={0.12}
          />
          <path d="M38 38 L78 22 L118 38" opacity={0.9} />
          <path d="M78 22 L78 88" opacity={0.45} />
        </g>
      )}

      {v === 1 && (
        <g fill="none" stroke={STROKE} strokeWidth={1.2}>
          <rect
            x={28}
            y={42}
            width={104}
            height={28}
            rx={2}
            fill={FILL}
            fillOpacity={0.14}
          />
          <line x1={48} y1={42} x2={48} y2={70} strokeOpacity={0.35} />
          <line x1={112} y1={42} x2={112} y2={70} strokeOpacity={0.35} />
        </g>
      )}

      {v === 2 && (
        <g fill="none" stroke={STROKE} strokeWidth={1.2} strokeLinejoin="round">
          <path
            d="M52 78 L52 28 L108 28 L108 78 Z"
            fill={FILL}
            fillOpacity={0.1}
          />
          <path d="M52 28 L80 16 L136 16 L108 28" fill={FILL} fillOpacity={0.18} />
          <path d="M108 28 L136 16 L136 66 L108 78" />
        </g>
      )}

      {v === 3 && (
        <g fill="none" stroke={STROKE} strokeWidth={1.2} strokeLinejoin="round">
          <path
            d="M36 70 L52 32 L96 24 L124 58 L108 76 L64 82 Z"
            fill={FILL}
            fillOpacity={0.12}
          />
          <circle cx={74} cy={48} r={3} fill={FILL} fillOpacity={0.35} stroke="none" />
        </g>
      )}

      {v === 4 && (
        <g fill="none" stroke={STROKE} strokeWidth={1.2} strokeLinejoin="round">
          <path
            d="M30 68 L30 36 L130 36 L130 68 Z"
            fill={FILL}
            fillOpacity={0.11}
          />
          <path d="M30 36 L50 24 L150 24 L130 36" fill={FILL} fillOpacity={0.16} />
          <path d="M130 36 L150 24 L150 56 L130 68" />
          <line
            x1={44}
            y1={52}
            x2={116}
            y2={52}
            stroke={STROKE}
            strokeDasharray="3 3"
            strokeOpacity={0.4}
          />
        </g>
      )}

      {v === 5 && (
        <g fill="none" stroke={STROKE} strokeWidth={1.2}>
          <rect
            x={34}
            y={30}
            width={92}
            height={48}
            rx={3}
            fill={FILL}
            fillOpacity={0.13}
          />
          <rect x={42} y={38} width={76} height={14} rx={1} strokeOpacity={0.35} />
          <line x1={80} y1={58} x2={80} y2={72} strokeOpacity={0.3} />
        </g>
      )}
    </svg>
  );
}
