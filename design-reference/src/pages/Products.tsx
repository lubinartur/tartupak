import SectionHeader from '@/src/components/SectionHeader';
import ProductCard from '@/src/components/ProductCard';
import { PRODUCTS } from '@/src/data/siteData';

export default function Products() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Our Portfolio"
          title="Premium Packaging Solutions"
          className="mb-16 md:mb-24"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-green/5 border border-brand-green/5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
