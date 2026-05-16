import SectionHeader from '@/src/components/SectionHeader';

export default function Terms() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeader subtitle="Legal" title="Terms of Service" />
        <div className="prose prose-brand text-brand-text/60 space-y-6">
          <p>Last updated: May 2024</p>
          <section className="space-y-4 text-sm leading-relaxed">
            <h3 className="text-lg font-serif text-brand-green">1. Quotes and Orders</h3>
            <p>All quotes provided by Tartupak are valid for 30 days unless otherwise stated. Orders are considered binding once a purchase order is received and confirmed.</p>
            
            <h3 className="text-lg font-serif text-brand-green">2. Production and Quality</h3>
            <p>We manufacture according to international FEFCO standards and specific client tolerances. Minor color variations in raw cardboard materials are natural and not considered defects.</p>
            
            <h3 className="text-lg font-serif text-brand-green">3. Delivery</h3>
            <p>Delivery terms are usually DAP (Incoterms 2020) unless otherwise negotiated. Risk of loss passes to the client upon delivery to the specified location.</p>
            
            <h3 className="text-lg font-serif text-brand-green">4. Payments</h3>
            <p>Standard payment terms are 14 days net for established clients, or prepayment for initial orders.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
