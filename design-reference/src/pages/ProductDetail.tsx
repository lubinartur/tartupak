import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS } from '@/src/data/siteData';
import SectionHeader from '@/src/components/SectionHeader';
import ProductCard from '@/src/components/ProductCard';
import { ArrowLeft, Box, ShieldCheck, Recycle } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" />;

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green/60 hover:text-brand-green mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to products
        </Link>

        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
          <div className="aspect-square bg-white border border-brand-green/5 p-4 relative">
             <div className="w-full h-full border border-brand-green/10 flex items-center justify-center bg-brand-bg/30">
               <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/20">High resolution visualization</span>
               <Box size={100} className="absolute text-brand-green/5" />
             </div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-kraft">Industrial Model</span>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-green leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-brand-text/60 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="space-y-8">
               <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green/60">Key Applications</h4>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-brand-bg/50 border border-brand-green/5 text-sm font-medium text-brand-green">
                      <ShieldCheck size={16} className="text-brand-kraft" />
                      {app}
                    </li>
                  ))}
               </ul>
            </div>

            {product.specs && (
              <div className="space-y-6 pt-8 border-t border-brand-green/5">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green/60">Technical Specifications</h4>
                <div className="grid grid-cols-1 gap-px bg-brand-green/10 border border-brand-green/10">
                   {product.specs.map((spec, i) => (
                     <div key={i} className="grid grid-cols-2 bg-white p-4 items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-green/60">{spec.label}</span>
                        <span className="text-sm text-brand-text font-medium">{spec.value}</span>
                     </div>
                   ))}
                </div>
              </div>
            )}

            <div className="pt-8">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-brand-green text-brand-bg px-12 py-5 rounded-sm font-bold inline-flex items-center justify-center gap-3 shadow-xl shadow-brand-green/10 transition-all hover:-translate-y-1"
              >
                Request a quote for this product
              </Link>
            </div>
          </div>
        </div>

        {/* Sustainability & Trust */}
        <section className="bg-brand-green p-12 lg:p-20 mb-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-brand-bg/80">
          <div className="space-y-4">
            <Recycle size={32} className="text-brand-bg" />
            <h4 className="text-xl font-serif text-brand-bg">100% Recyclable</h4>
            <p className="text-sm leading-relaxed">Sourced from sustainably managed European forests with full traceability.</p>
          </div>
          <div className="space-y-4">
            <ShieldCheck size={32} className="text-brand-bg" />
            <h4 className="text-xl font-serif text-brand-bg">Premium Protection</h4>
            <h4 className="text-sm leading-relaxed">Engineered structural integrity designed specifically for industrial transport.</h4>
          </div>
          <div className="space-y-4">
             <Box size={32} className="text-brand-bg" />
             <h4 className="text-xl font-serif text-brand-bg">Custom Sizing</h4>
             <p className="text-sm leading-relaxed">Available in standard FEFCO codes or bespoke dimensions for non-standard goods.</p>
          </div>
        </section>

        {/* Related Products */}
        <section>
          <SectionHeader subtitle="More solutions" title="Explore Related Packaging" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-green/5 border border-brand-green/5">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
