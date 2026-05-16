import { useState } from 'react';
import SectionHeader from '@/src/components/SectionHeader';
import FEFCOCard from '@/src/components/FEFCOCard';
import { FEFCO_CODES } from '@/src/data/siteData';
import { Search } from 'lucide-react';

const SERIES = ['02', '03', '04', '05', '06', '07'];

export default function FEFCO() {
  const [search, setSearch] = useState('');
  const [activeSeries, setActiveSeries] = useState<string | null>(null);

  const filteredItems = FEFCO_CODES.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.code.includes(search);
    const matchesSeries = activeSeries ? item.series === activeSeries : true;
    return matchesSearch && matchesSeries;
  });

  return (
    <main className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="International Standards"
          title="FEFCO Design Catalog"
          className="mb-16"
        />

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" size={18} />
            <input 
              type="text"
              placeholder="Search by code or name... (e.g. 0201)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-brand-green/10 py-5 pl-12 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3">
             <button
              onClick={() => setActiveSeries(null)}
              className={`px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all border ${!activeSeries ? 'bg-brand-green text-brand-bg border-brand-green' : 'bg-transparent text-brand-green border-brand-green/10 hover:border-brand-green'}`}
             >
               All
             </button>
             {SERIES.map(s => (
               <button
                 key={s}
                 onClick={() => setActiveSeries(s)}
                 className={`px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all border ${activeSeries === s ? 'bg-brand-green text-brand-bg border-brand-green' : 'bg-transparent text-brand-green border-brand-green/10 hover:border-brand-green'}`}
               >
                 Series {s}
               </button>
             ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-8 border-b border-brand-green/5 pb-4">
           <span className="text-xs uppercase tracking-widest font-bold text-brand-text/40">
             Showing {filteredItems.length} codes
           </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <FEFCOCard key={item.code} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="py-32 text-center text-brand-text/40 space-y-4">
             <Search size={48} className="mx-auto opacity-10" />
             <p className="text-lg">No FEFCO codes match your search criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
