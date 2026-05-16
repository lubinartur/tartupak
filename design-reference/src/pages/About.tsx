import SectionHeader from '@/src/components/SectionHeader';
import { Award, Factory, Users, Leaf, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
           <div className="space-y-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-kraft">Established 2001</span>
              <h1 className="text-5xl md:text-8xl font-serif text-brand-green leading-[0.9]">Reliable by <br /> <span className="italic pl-12 text-brand-green/70">Nature.</span></h1>
              <p className="text-xl text-brand-text/60 font-light leading-relaxed max-w-lg">
                Tartu Pak OÜ was founded in Tõrvandi, Estonia, with a simple goal: to provide industrial-grade packaging that never compromises on quality.
              </p>
              <p className="text-lg text-brand-text/50 leading-relaxed max-w-lg">
                Today, we operate one of Tartu County&apos;s most modern corrugated cardboard production lines, serving clients across the Baltics and Scandinavia.
              </p>
           </div>
           <div className="aspect-square bg-white border border-brand-green/5 relative p-4 group">
              <div className="w-full h-full border border-brand-green/10 flex items-center justify-center bg-brand-bg/30 relative overflow-hidden">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/20 z-10">Production facility Tõrvandi</span>
                 <div className="absolute inset-x-0 bottom-0 h-1/4 bg-brand-green/5 border-t border-brand-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </div>
           </div>
        </div>

        {/* Values */}
        <section className="mb-32">
           <SectionHeader subtitle="Our Philosophy" title="Manufacturing Excellence" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { icon: <CheckCircle2 />, title: "Precision Engineering", desc: "Our CAD-driven design process ensures that every box fits your product down to the millimeter." },
                { icon: <Factory />, title: "Modern Production", desc: "Ongoing investment in high-speed cutting and printing technology ensures efficiency and accuracy." },
                { icon: <Leaf />, title: "Eco Commitment", desc: "100% of our production waste is recycled and all raw materials are from sustainable sources." },
                { icon: <Users />, title: "Client Focused", desc: "From small local businesses to multinational industrial giants, we treat every order with equal focus." },
                { icon: <Award />, title: "Verified Trust", desc: "Consistently rated AA in financial performance, marking us as a safe and stable long-term partner." },
                { icon: <Globe />, title: "Export Ready", desc: "Our logistics are tuned for cross-border shipments to Scandinavia, ensuring timely delivery." }
              ].map((val, i) => (
                <div key={i} className="space-y-4 p-8 border border-brand-green/5 hover:border-brand-green/20 transition-all bg-white shadow-sm">
                   <div className="text-brand-kraft mb-4">{val.icon}</div>
                   <h4 className="text-xl font-serif text-brand-green">{val.title}</h4>
                   <p className="text-sm text-brand-text/50 leading-relaxed">{val.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Sustainability Block */}
        <section className="bg-brand-green py-24 px-8 lg:px-20 text-brand-bg mb-32 relative overflow-hidden">
           <div className="max-w-4xl space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif">Sustainability is <br /> our substrate.</h2>
              <p className="text-xl text-brand-bg/60 font-light max-w-2xl">
                Corrugated cardboard is naturally one of the most sustainable packaging materials on earth. We take it further by optimizing cut-plans to minimize waste and using non-toxic inks for all flexo-printing.
              </p>
              <div className="flex flex-wrap gap-8 pt-8">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-brand-bg/30 flex items-center justify-center">
                       <CheckCircle2 size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">100% Recyclable</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-brand-bg/30 flex items-center justify-center">
                       <CheckCircle2 size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">Minimal Transport Footprint</span>
                 </div>
              </div>
           </div>
           <Leaf size={300} className="absolute -bottom-20 -right-20 text-brand-bg/5 rotate-12 pointer-events-none" />
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-brand-green/5">
           <SectionHeader centered title="Ready to partner with us?" />
           <Link 
            to="/contact" 
            className="bg-brand-green text-brand-bg px-12 py-5 rounded-sm font-bold inline-flex items-center gap-3 shadow-xl shadow-brand-green/10"
           >
             Start your first order
           </Link>
        </section>
      </div>
    </main>
  );
}
