import SectionHeader from '@/src/components/SectionHeader';
import QuoteForm from '@/src/components/QuoteForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Get in Touch"
          title="Start Your Project"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
           {/* Info Col */}
           <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                 <p className="text-xl text-brand-text/60 font-light leading-relaxed">
                   Whether you need a custom one-off box or a high-volume supply chain solution, our team is ready to assist.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex gap-6 p-6 border border-brand-green/5 bg-white">
                       <div className="w-12 h-12 bg-brand-bg flex items-center justify-center text-brand-kraft rounded-full shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-green/40 mb-1">Office & Production</h4>
                          <address className="not-italic text-brand-green font-medium">
                            Tamme 35, Tõrvandi alevik, <br />
                            Ülenurme vald, 61715 Tartumaa, <br />
                            Estonia
                          </address>
                       </div>
                    </div>

                    <div className="flex gap-6 p-6 border border-brand-green/5 bg-white">
                       <div className="w-12 h-12 bg-brand-bg flex items-center justify-center text-brand-kraft rounded-full shrink-0">
                          <Mail size={24} />
                       </div>
                       <div>
                          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-green/40 mb-1">Email Enquiries</h4>
                          <a href="mailto:info@tartupak.ee" className="text-brand-green font-medium underline underline-offset-4 decoration-brand-green/20">info@tartupak.ee</a>
                       </div>
                    </div>

                    <div className="flex gap-6 p-6 border border-brand-green/5 bg-white">
                       <div className="w-12 h-12 bg-brand-bg flex items-center justify-center text-brand-kraft rounded-full shrink-0">
                          <Phone size={24} />
                       </div>
                       <div>
                          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-green/40 mb-1">Direct Lines</h4>
                          <div className="flex flex-col text-brand-green font-medium">
                            <span>+372 741 5333 (Landline)</span>
                            <span>+372 5349 9642 (Mobile)</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex gap-6 p-6 border border-brand-green/5 bg-white">
                       <div className="w-12 h-12 bg-brand-bg flex items-center justify-center text-brand-kraft rounded-full shrink-0">
                          <Clock size={24} />
                       </div>
                       <div>
                          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-green/40 mb-1">Working Hours</h4>
                          <p className="text-brand-green font-medium">Monday — Friday: 08:00 – 16:30</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-white border border-brand-green/10 p-1 flex items-center justify-center relative overflow-hidden">
                 <div className="w-full h-full border border-brand-green/5 bg-brand-bg/50 flex flex-col items-center justify-center gap-4">
                    <MapPin size={40} className="text-brand-green/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/30">Interactive Map — Tõrvandi</span>
                 </div>
              </div>
           </div>

           {/* Form Col */}
           <div className="lg:col-span-7">
              <QuoteForm />
           </div>
        </div>
      </div>
    </main>
  );
}
