import { Link } from 'react-router-dom';
import { FEFCOCode } from '@/src/data/siteData';

const FEFCOSchematic = ({ code }: { code: string }) => {
  const strokeColor = "currentColor";
  const strokeWidth = 0.5;

  switch (code) {
    case '0201': // Slotted-type / American box
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
           <rect x="20" y="30" width="60" height="40" stroke={strokeColor} strokeWidth={strokeWidth} />
           <line x1="20" y1="35" x2="80" y2="35" stroke={strokeColor} strokeWidth={strokeWidth} />
           <line x1="35" y1="30" x2="35" y2="70" stroke={strokeColor} strokeWidth={strokeWidth} />
           <line x1="65" y1="30" x2="65" y2="70" stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case '0427': // Folder-type box
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
           <path d="M10 30 H90 V70 H10 Z" stroke={strokeColor} strokeWidth={strokeWidth} />
           <path d="M30 30 V70 M70 30 V70" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="1 1" />
           <path d="M10 45 H90 M10 55 H90" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="1 1" />
        </svg>
      );
    case '0203': // Fully overlapping slotted box
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
           <rect x="25" y="25" width="50" height="50" stroke={strokeColor} strokeWidth={strokeWidth} />
           <rect x="20" y="20" width="60" height="60" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" />
        </svg>
      );
    case '0300': // Telescope-type box
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
           <rect x="20" y="25" width="60" height="20" stroke={strokeColor} strokeWidth={strokeWidth} />
           <rect x="20" y="55" width="60" height="20" stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case '0711': // Ready-glued case
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
           <rect x="25" y="25" width="50" height="50" stroke={strokeColor} strokeWidth={strokeWidth} />
           <path d="M25 25 L75 75 M75 25 L25 75" stroke={strokeColor} strokeWidth={strokeWidth} opacity="0.2" />
        </svg>
      );
    case '0421': // Die-cut folder
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
           <path d="M20 20 H80 V80 H20 Z" stroke={strokeColor} strokeWidth={strokeWidth} />
           <circle cx="50" cy="50" r="10" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="1 1" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
           <rect x="30" y="30" width="40" height="40" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" />
        </svg>
      );
  }
};

export default function FEFCOCard({ item }: { item: FEFCOCode, key?: string }) {
  return (
    <Link 
      to={`/fefco/${item.code}`}
      className="bg-white border border-brand-green/5 p-8 hover:bg-brand-bg hover:border-brand-green/20 transition-all group flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-8">
        <span className="text-5xl font-serif text-brand-green/10 group-hover:text-brand-green/20 transition-colors">
          #{item.code}
        </span>
        <div className="w-px h-12 bg-brand-green/10 group-hover:h-16 transition-all" />
      </div>
      
      <div className="flex-grow space-y-3">
        <h3 className="text-lg font-semibold text-brand-green leading-tight">{item.name}</h3>
        <p className="text-sm text-brand-text/50 leading-relaxed">{item.description}</p>
      </div>
      
      <div className="mt-8 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green group-hover:translate-x-1 transition-transform">
          View details →
        </span>
      </div>
    </Link>
  );
}
