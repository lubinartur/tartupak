import { useParams, Link, Navigate } from 'react-router-dom';
import { FEFCO_CODES } from '@/src/data/siteData';
import SectionHeader from '@/src/components/SectionHeader';
import { ArrowLeft, HelpCircle, Package, Layers, Ruler } from 'lucide-react';

export default function FEFCODetail() {
  const { code } = useParams<{ code: string }>();
  const item = FEFCO_CODES.find((i) => i.code === code);

  if (!item) return <Navigate to="/fefco" />;

  return (
    <main className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <Link to="/fefco" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green/60 hover:text-brand-green mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to catalog
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
           <div className="space-y-12">
              <div className="space-y-4">
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-kraft">International Standard #{item.code}</span>
                 <h1 className="text-5xl md:text-7xl font-serif text-brand-green leading-[1.1]">{item.name}</h1>
              </div>

              <div className="prose prose-brand">
                 <p className="text-xl text-brand-text/60 font-light leading-relaxed">
                   {item.description}
                 </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green/60">Typical Use Cases</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {item.useCases.map((use, i) => (
                     <div key={i} className="flex items-center gap-3 p-4 bg-brand-bg/50 border border-brand-green/5 text-sm font-medium text-brand-green">
                        <Package size={16} className="text-brand-kraft" />
                        {use}
                     </div>
                   ))}
                </div>
              </div>

              <div className="pt-8">
                 <Link to="/contact" className="bg-brand-green text-brand-bg px-12 py-5 rounded-sm font-bold inline-flex items-center gap-3">
                   Request a quote for this format
                   <Ruler size={18} />
                 </Link>
              </div>
           </div>

           <div className="sticky top-32 space-y-8">
              <div className="aspect-square bg-white border border-brand-green/10 flex flex-col items-center justify-center p-12 relative">
                 <div className="absolute top-6 left-6 border border-brand-green/5 p-2">
                    <span className="text-[10px] font-bold text-brand-green/20">FEFCO DRAWING #{item.code}</span>
                 </div>
                 <Layers size={140} strokeWidth={0.5} className="text-brand-green/10 mb-8" />
                 <div className="w-full h-px bg-brand-green/5 mb-8" />
                 <p className="text-center text-[10px] uppercase tracking-widest text-brand-text/30 font-bold max-w-[200px]">
                   Technical schematic placeholder. Our CAD designers can adjust this standard to your exact dimensions.
                 </p>
              </div>

              {/* FAQ Accordion-like section */}
              <div className="space-y-4">
                 <h4 className="text-lg font-serif text-brand-green px-2 flex items-center gap-2">
                   <HelpCircle size={20} className="text-brand-kraft" />
                   Questions about {item.code}
                 </h4>
                 <div className="space-y-px bg-brand-green/10 border border-brand-green/10 shadow-sm">
                    {[
                      { q: 'Is this format tape-free?', a: 'Standard ' + item.code + ' formats often require sealing, but we can customize them with self-adhesive strips for no-tape assembly.' },
                      { q: 'What material thickness is best?', a: 'Depending on your product weight, we recommend either E-flute (1.5mm) for small items or BC-flute (6.5mm) for industrial transport.' }
                    ].map((faq, i) => (
                      <div key={i} className="bg-white p-6 space-y-2">
                        <p className="text-sm font-bold text-brand-green">{faq.q}</p>
                        <p className="text-sm text-brand-text/50">{faq.a}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* CTA Banner */}
        <section className="bg-brand-bg border border-brand-green/10 p-12 lg:p-20 text-center space-y-8">
           <h3 className="text-4xl font-serif text-brand-green">Need a different variation?</h3>
           <p className="text-brand-text/60 max-w-xl mx-auto">
             The FEFCO catalog is a starting point. We specialize in modifying these standards into unique packaging solutions that fit your automated packaging lines.
           </p>
           <Link to="/contact" className="inline-block border border-brand-green text-brand-green px-10 py-4 font-bold hover:bg-brand-green hover:text-brand-bg transition-colors">
              Talk to a packaging engineer
           </Link>
        </section>
      </div>
    </main>
  );
}
