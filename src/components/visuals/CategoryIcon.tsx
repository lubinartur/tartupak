import type { ProductSlug } from "@/data/products";

const strokeColor = "#1A3A2A";
const strokeWidth = 1.5;

export function CategoryIcon({ slug }: { slug: ProductSlug }) {
  switch (slug) {
    case "lainepapp":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="h-[65%] w-[65%]">
          <path d="M15 30 L50 15 L85 30 L85 45 L50 60 L15 45 Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M15 45 L50 60 L85 45" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M15 55 L50 70 L85 55 L85 70 L50 85 L15 70 Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M15 70 L50 85 L85 70" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
        </svg>
      );
    case "transpordipakend":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="h-[65%] w-[65%]">
          <path d="M50 25 L85 40 L85 75 L50 90 L15 75 L15 40 Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M15 40 L50 55 L85 40" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M50 55 L50 90" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M50 25 L50 55" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeOpacity="0.3" />
        </svg>
      );
    case "pizzakarbid":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="h-[65%] w-[65%]">
          <path d="M20 60 L50 50 L80 60 L80 75 L50 85 L20 75 Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M20 60 L50 70 L80 60" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M50 70 L50 85" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M25 45 L50 35 L75 45 L50 55 Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M25 45 L20 60 M75 45 L80 60 M50 35 L50 50" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" strokeOpacity="0.3" />
        </svg>
      );
    case "kulmutatud-toodete-pakend":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="h-[65%] w-[65%]">
          <rect x="20" y="20" width="60" height="60" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M20 20 L80 80 M80 20 L20 80" stroke={strokeColor} strokeWidth={0.5} strokeOpacity="0.3" />
          <g transform="translate(50, 50) scale(0.8)">
            <path d="M0 -15 V15 M-15 0 H15 M-10 -10 L10 10 M10 -10 L-10 10" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          </g>
        </svg>
      );
    case "erilise-kujuga-pakendid":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="h-[65%] w-[65%]">
          <path d="M20 35 L50 20 L80 35 L80 65 L50 80 L20 65 Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M20 35 L50 50 L80 35" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="3 3" strokeOpacity="0.3" />
          <path d="M50 50 L50 80" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="3 3" strokeOpacity="0.3" />
          <circle cx="50" cy="50" r="15" stroke={strokeColor} strokeWidth={0.5} strokeDasharray="1 1" strokeOpacity="0.3" />
        </svg>
      );
    case "suuregabariidilised-pakendid":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="h-[65%] w-[65%]">
          <path d="M30 15 L70 15 L70 85 L30 85 Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <line x1="30" y1="25" x2="70" y2="25" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <line x1="30" y1="75" x2="70" y2="75" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <line x1="35" y1="15" x2="35" y2="85" stroke={strokeColor} strokeWidth={0.5} strokeOpacity="0.3" />
          <line x1="65" y1="15" x2="65" y2="85" stroke={strokeColor} strokeWidth={0.5} strokeOpacity="0.3" />
        </svg>
      );
    case "fleksotrukk":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="h-[65%] w-[65%]">
          <rect x="20" y="20" width="60" height="60" stroke={strokeColor} strokeWidth={strokeWidth} strokeOpacity="0.5" />
          <path d="M20 35 H80 M20 45 H80 M20 55 H80" stroke={strokeColor} strokeWidth={2} strokeOpacity="0.5" />
        </svg>
      );
    default:
      return null;
  }
}
