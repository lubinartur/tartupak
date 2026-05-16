import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Products', href: '/products' },
  { name: 'FEFCO Catalog', href: '/fefco' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const location = useLocation();
  const isMobileMenuOpen = mobileMenuPath === location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 lg:px-12 py-6',
        isScrolled ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent border-b border-brand-border'
      )}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-green flex items-center justify-center rounded-sm transition-transform group-hover:scale-110">
            <span className="text-brand-bg font-serif text-xl font-bold">T</span>
          </div>
          <span className="text-2xl font-serif tracking-tight font-bold text-brand-green">Tartupak</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-brand-green/70',
                location.pathname === link.href ? 'text-brand-green' : 'text-brand-text/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand-green transition-colors pr-4 border-r border-brand-border">
            <Globe size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">ET</span>
          </div>
          <Link
            to="/contact"
            className="bg-brand-green text-brand-bg px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:-translate-y-0.5 active:translate-y-0 ml-2"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-green p-2"
          onClick={() => setMobileMenuPath(isMobileMenuOpen ? null : location.pathname)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-green/10 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-serif text-brand-green border-b border-brand-green/5 pb-2 ml-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-4 p-2">
                  <span className="text-xs font-bold underline">ET</span>
                  <span className="text-xs font-bold opacity-40">EN</span>
                  <span className="text-xs font-bold opacity-40">RU</span>
                </div>
                <Link
                   to="/contact"
                   className="bg-brand-green text-white px-6 py-3 rounded-sm text-sm"
                >
                  Quote Request
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
