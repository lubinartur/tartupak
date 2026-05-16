import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-brand-bg pt-16 pb-8 px-8 lg:px-12">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
             <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                <div className="w-4 h-4 border border-white" />
              </div>
              <span className="text-xl font-serif tracking-widest uppercase font-bold text-white">Tartupak</span>
            </Link>
            <p className="text-xs text-brand-bg/60 leading-relaxed max-w-xs">
              Estonian corrugated cardboard packaging manufacturer since 2001. Modern production lines and sustainable industrial solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-green transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-green transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-6 font-display">Logistics Hub</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-kraft mt-0.5" />
                <span className="text-xs text-brand-bg/80 leading-relaxed">Tamme 35, Tõrvandi, 61715 Tartumaa, Estonia</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-brand-kraft" />
                <a href="mailto:info@tartupak.ee" className="text-xs text-brand-bg/80 hover:text-white underline underline-offset-8 decoration-white/10 decoration-1 transition-colors">info@tartupak.ee</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-brand-kraft" />
                <span className="text-xs text-brand-bg/80">+372 741 5333</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="lg:pl-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-6 font-display">Navigation</h4>
             <ul className="flex flex-col gap-3">
              {['Products', 'FEFCO Catalog', 'Manufacturing', 'Sustainability', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-xs text-brand-bg/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-6 font-display">Credentials</h4>
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-[9px] font-bold tracking-widest">AA</div>
               <p className="text-[9px] uppercase tracking-widest text-brand-bg/40 leading-tight">Highest Credit Rating Verified</p>
            </div>
            <div className="flex items-center gap-4">
               <Award size={20} className="text-white/20" />
               <p className="text-[9px] uppercase tracking-widest text-brand-bg/40 leading-tight">Edukas Eesti Ettevõte 2024</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-bg/20">
            © {new Date().getFullYear()} Tartu Pak OÜ. Engineered in Estonia.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-bg/20 hover:text-brand-bg/40">Privacy</Link>
            <Link to="/terms" className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-bg/20 hover:text-brand-bg/40">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
