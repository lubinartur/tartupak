import SectionHeader from '@/src/components/SectionHeader';

export default function Privacy() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeader subtitle="Legal" title="Privacy Policy" />
        <div className="prose prose-brand text-brand-text/60 space-y-6">
          <p>Last updated: May 2024</p>
          <section className="space-y-4 text-sm leading-relaxed">
            <h3 className="text-lg font-serif text-brand-green">1. Data Controller</h3>
            <p>Tartu Pak OÜ (registry code 10769352), located at Tamme 35, 61715 Tõrvandi, Estonia.</p>
            
            <h3 className="text-lg font-serif text-brand-green">2. Purpose of Collection</h3>
            <p>We only collect data necessary to provide quotes, fulfill orders, and maintain professional B2B communications. This includes names, company details, emails, and phone numbers provided through our quote form.</p>
            
            <h3 className="text-lg font-serif text-brand-green">3. Data Retention</h3>
            <p>Customer data is stored for the duration required by Estonian accounting laws and for ongoing business relationships.</p>
            
            <h3 className="text-lg font-serif text-brand-green">4. Your Rights</h3>
            <p>You have the right to request access to, correction of, or deletion of your personal data at any time by contacting info@tartupak.ee.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
