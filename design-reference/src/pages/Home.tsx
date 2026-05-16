import { useState, useEffect } from 'react';
import { ArrowRight, Package, Box, ShieldCheck, Truck, Recycle, Award, History, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from '@/src/components/SectionHeader';
import ProductCard from '@/src/components/ProductCard';
import FEFCOCard from '@/src/components/FEFCOCard';
import { PRODUCTS, FEFCO_CODES } from '@/src/data/siteData';

const Fefco0201Flat = () => (
  <svg viewBox="0 0 100 70" fill="none" className="w-full h-full drop-shadow-sm">
    <pattern id="dotGrid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
      <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
    </pattern>
    <rect width="100" height="70" fill="url(#dotGrid)" />
    <text x="5" y="8" className="text-[3px] font-bold fill-brand-green opacity-40 uppercase tracking-widest">FEFCO 0201</text>
    <text x="5" y="12" className="text-[2px] fill-brand-green opacity-30 uppercase tracking-[0.2em]">RSC — Regular Slotted Container</text>
    <g transform="translate(10, 15)">
      <g className="stroke-brand-green" opacity="0.5" strokeWidth="0.8">
        <rect x="0" y="15" width="18" height="25" />
        <rect x="18" y="15" width="22" height="25" />
        <rect x="40" y="15" width="18" height="25" />
        <rect x="58" y="15" width="22" height="25" />
        <path d="M80 15 L84 18 V37 L80 40 Z" />
      </g>
      <g className="stroke-brand-green" opacity="0.5" strokeWidth="0.8">
        <rect x="0" y="0" width="18" height="15" />
        <rect x="18" y="0" width="22" height="15" />
        <rect x="40" y="0" width="18" height="15" />
        <rect x="58" y="0" width="22" height="15" />
      </g>
      <g className="stroke-brand-green" opacity="0.5" strokeWidth="0.8">
        <rect x="0" y="40" width="18" height="15" />
        <rect x="18" y="40" width="22" height="15" />
        <rect x="40" y="40" width="18" height="15" />
        <rect x="58" y="40" width="22" height="15" />
      </g>
      <g className="stroke-brand-green" opacity="0.3" strokeWidth="0.5" strokeDasharray="1.5 1">
        <line x1="0" y1="15" x2="80" y2="15" />
        <line x1="0" y1="40" x2="80" y2="40" />
        <line x1="18" y1="0" x2="18" y2="55" />
        <line x1="40" y1="0" x2="40" y2="55" />
        <line x1="58" y1="0" x2="58" y2="55" />
        <line x1="80" y1="15" x2="80" y2="40" />
      </g>
      <g className="fill-brand-green opacity-20 text-[1.5px] font-bold uppercase tracking-widest text-center">
        <text x="9" y="30" textAnchor="middle">Left</text>
        <text x="29" y="30" textAnchor="middle">Front</text>
        <text x="49" y="30" textAnchor="middle">Right</text>
        <text x="69" y="30" textAnchor="middle">Back</text>
        <text x="9" y="8" textAnchor="middle">Flap</text>
        <text x="29" y="8" textAnchor="middle">Flap</text>
        <text x="9" y="48" textAnchor="middle">Flap</text>
        <text x="29" y="48" textAnchor="middle">Flap</text>
      </g>
      <g className="stroke-brand-green opacity-40" strokeWidth="0.3">
        <line x1="18" y1="62" x2="40" y2="62" />
        <path d="M18 62 L20 61.5 M18 62 L20 62.5 M40 62 L38 61.5 M40 62 L38 62.5" />
        <text x="29" y="65" className="fill-brand-green text-[2px] font-bold" textAnchor="middle">L</text>
        <line x1="0" y1="62" x2="18" y2="62" />
        <path d="M0 62 L2 61.5 M0 62 L2 62.5 M18 62 L16 61.5 M18 62 L16 62.5" />
        <text x="9" y="65" className="fill-brand-green text-[2px] font-bold" textAnchor="middle">W</text>
        <line x1="-5" y1="15" x2="-5" y2="40" />
        <path d="M-5 15 L-5.5 17 M-5 15 L-4.5 17 M-5 40 L-5.5 38 M-5 40 L-4.5 38" />
        <text x="-8" y="27" className="fill-brand-green text-[2px] font-bold" textAnchor="middle">H</text>
      </g>
    </g>
  </svg>
);

const Fefco0201Assembled = () => (
  <svg viewBox="0 0 100 70" fill="none" className="w-full h-full drop-shadow-sm">
    <pattern id="dotGrid2" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
      <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
    </pattern>
    <rect width="100" height="70" fill="url(#dotGrid2)" />
    <text x="5" y="8" className="text-[3px] font-bold fill-brand-green opacity-40 uppercase tracking-widest">FEFCO 0201</text>
    <text x="5" y="12" className="text-[2px] fill-brand-green opacity-30 uppercase tracking-[0.2em]">Assembled View</text>
    
    <g transform="translate(50, 40) scale(0.8)">
      {/* 3D Box Skeleton */}
      <g className="stroke-brand-green" opacity="0.5" strokeWidth="1.2">
        <path d="M-25 -15 L10 0 L10 35 L-25 20 Z" /> {/* Front layer */}
        <path d="M10 0 L40 -15 L40 20 L10 35" /> {/* Right layer */}
        <path d="M-25 -15 L5 -30 L40 -15" /> {/* Top layer */}
      </g>
      
      {/* Hidden edges */}
      <g className="stroke-brand-green" opacity="0.3" strokeWidth="0.8" strokeDasharray="2 1.5">
        <path d="M-25 20 L5 5 L40 20" />
        <path d="M5 -30 L5 5" />
      </g>

      {/* Dimension arrows */}
      <g className="stroke-brand-green opacity-40" strokeWidth="0.5">
        {/* H */}
        <line x1="-32" y1="-15" x2="-32" y2="20" />
        <text x="-38" y="5" className="fill-brand-green text-[3px] font-bold" textAnchor="middle">H</text>
        <path d="M-32 -15 L-33 -12 M-32 -15 L-31 -12 M-32 20 L-33 17 M-32 20 L-31 17" />
        
        {/* L */}
        <line x1="-25" y1="28" x2="10" y2="43" />
        <text x="-7.5" y="42" className="fill-brand-green text-[3px] font-bold" textAnchor="middle">L</text>
        <path d="M-25 28 L-22 28.5 M10 43 L7 42.5" />
        
        {/* W */}
        <line x1="18" y1="43" x2="48" y2="28" />
        <text x="33" y="42" className="fill-brand-green text-[3px] font-bold" textAnchor="middle">W</text>
        <path d="M18 43 L21 42.5 M48 28 L45 28.5" />
      </g>
    </g>
  </svg>
);

const Fefco0300Telescope = () => (
  <svg viewBox="0 0 100 70" fill="none" className="w-full h-full drop-shadow-sm">
    <pattern id="dotGrid3" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
      <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
    </pattern>
    <rect width="100" height="70" fill="url(#dotGrid3)" />
    <text x="5" y="8" className="text-[3px] font-bold fill-brand-green opacity-40 uppercase tracking-widest">FEFCO 0300</text>
    <text x="5" y="12" className="text-[2px] fill-brand-green opacity-30 uppercase tracking-[0.2em]">Telescope View</text>

    <g transform="translate(50, 35) scale(0.7)">
      {/* Lid */}
      <g className="stroke-brand-green" opacity="0.5" strokeWidth="1.2">
        <path d="M-30 -35 L10 -20 L10 -5 L-30 -20 Z" />
        <path d="M10 -20 L45 -35 L45 -20 L10 -5" />
        <path d="M-30 -35 L5 -50 L45 -35" />
        <text x="7" y="-22" className="fill-brand-green opacity-30 text-[4px] font-bold uppercase tracking-widest" textAnchor="middle">LID</text>
      </g>
      
      {/* Base */}
      <g transform="translate(0, 30)">
        <g className="stroke-brand-green" opacity="0.5" strokeWidth="1.2">
          <path d="M-30 -35 L10 -20 L10 5 L-30 -10 Z" />
          <path d="M10 -20 L45 -35 L45 -10 L10 5" />
          <path d="M-30 -35 L5 -50 L45 -35" />
          <text x="7" y="-12" className="fill-brand-green opacity-30 text-[4px] font-bold uppercase tracking-widest" textAnchor="middle">BASE</text>
        </g>
      </g>
    </g>
  </svg>
);

const CustomDieCutSVG = () => (
  <svg viewBox="0 0 100 70" fill="none" className="w-full h-full drop-shadow-sm">
    <pattern id="dotGridCustom" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
      <circle cx="0.5" cy="0.5" r="0.2" fill="#1A3A2A" opacity="0.1" />
    </pattern>
    <rect width="100" height="70" fill="url(#dotGridCustom)" />
    
    <text x="5" y="8" className="text-[3px] font-bold fill-brand-green opacity-40 uppercase tracking-widest font-mono">CUSTOM DIE-CUT / BESPOKE CONSTRUCTION</text>
    
    <g transform="translate(10, 12)">
      {/* Die-cut Layout Outlines */}
      <g className="stroke-brand-green" opacity="0.5" strokeWidth="0.8">
        {/* Middle Row: 4 Panels */}
        <rect x="0" y="15" width="15" height="20" /> {/* Left */}
        <rect x="15" y="15" width="25" height="20" /> {/* Front */}
        <rect x="40" y="15" width="15" height="20" /> {/* Right */}
        <rect x="55" y="15" width="20" height="20" /> {/* Back */}
        <path d="M75 15 L78 17 V33 L75 35 Z" /> {/* Glue Flap */}

        {/* Top Row: 3 Flaps */}
        <rect x="0" y="5" width="15" height="10" />
        <rect x="15" y="0" width="25" height="15" />
        <rect x="40" y="5" width="15" height="10" />

        {/* Bottom Row: 3 Flaps */}
        <rect x="0" y="35" width="15" height="10" />
        <rect x="15" y="35" width="25" height="15" />
        <rect x="40" y="35" width="15" height="10" />
      </g>

      {/* Fold Lines (Dashed) */}
      <g className="stroke-brand-green" opacity="0.3" strokeWidth="0.5" strokeDasharray="2 1">
        <line x1="15" y1="0" x2="15" y2="50" />
        <line x1="40" y1="0" x2="40" y2="50" />
        <line x1="55" y1="15" x2="55" y2="35" />
        <line x1="0" y1="15" x2="75" y2="15" />
        <line x1="0" y1="35" x2="75" y2="35" />
      </g>

      {/* Labels */}
      <g className="fill-brand-green opacity-30 text-[1.5px] font-bold uppercase tracking-widest text-center font-mono">
        <text x="7.5" y="27" textAnchor="middle">LEFT</text>
        <text x="27.5" y="27" textAnchor="middle">FRONT</text>
        <text x="47.5" y="27" textAnchor="middle">RIGHT</text>
        <text x="65" y="27" textAnchor="middle">BACK</text>
        <text x="76.5" y="26" textAnchor="middle" transform="rotate(90, 76.5, 26)">FLAP</text>
      </g>

      {/* Dimensions */}
      <g className="stroke-brand-green" opacity="0.5" strokeWidth="0.3">
        {/* H */}
        <path d="M-5 15 V35 M-6 17 L-5 15 L-4 17 M-6 33 L-5 35 L-4 33" />
        <text x="-8" y="26" className="fill-brand-green text-[2.5px] font-bold" textAnchor="middle">H</text>

        {/* L */}
        <path d="M15 55 H40 M17 54 L15 55 L17 56 M38 54 L40 55 L38 56" />
        <text x="27.5" y="58" className="fill-brand-green text-[2.5px] font-bold" textAnchor="middle">L</text>

        {/* W */}
        <path d="M0 55 H15 M2 54 L0 55 L2 56 M13 54 L15 55 L13 56" />
        <text x="7.5" y="58" className="fill-brand-green text-[2.5px] font-bold" textAnchor="middle">W</text>
      </g>
    </g>
  </svg>
);

const HERO_SLIDES = [
  {
    code: 'FEFCO 0201',
    label: 'RSC — Regular Slotted Container',
    visual: <Fefco0201Flat />,
    material: 'Cardboard',
    strength: 'Double Wall',
    impact: '100% Eco'
  },
  {
    code: 'FEFCO 0201',
    label: 'Assembled Container Drawing',
    visual: <Fefco0201Assembled />,
    material: 'Cardboard',
    strength: 'Double Wall',
    impact: '100% Eco'
  },
  {
    code: 'FEFCO 0300',
    label: 'Telescope-type separate parts',
    visual: <Fefco0300Telescope />,
    material: 'Cardboard',
    strength: 'Single Wall',
    impact: '100% Eco'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-24 bg-brand-bg overflow-hidden border-b border-brand-border">
        <div className="kraft-texture" />
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Content */}
          <div className="px-8 lg:px-12 flex flex-col justify-center lg:border-r border-brand-border relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10 py-20"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-brand-kraft/60" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-brand-kraft">
                    Premium Industrial Solutions
                  </span>
                </div>
                <h1 className="text-7xl md:text-[100px] lg:text-[120px] font-serif text-brand-green leading-[0.85] tracking-tight italic">
                  We create <span className="text-brand-kraft">packaging</span> <br />
                  <span className="not-italic">that protects.</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-brand-text/70 max-w-xl leading-relaxed font-light">
                Premium corrugated cardboard solutions engineered for industrial reliability. We combine Scandinavian minimalism with 20+ years of manufacturing expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link
                  to="/contact"
                  className="bg-brand-green text-brand-bg px-10 py-5 rounded-sm font-bold text-xs uppercase tracking-widest shadow-2xl shadow-brand-green/20 transition-all hover:-translate-y-1 hover:bg-black"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/fefco"
                  className="border border-brand-text px-10 py-5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all hover:bg-brand-text hover:text-brand-bg"
                >
                  Browse Catalog
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Carousel */}
          <div className="bg-[#EAE8E1]/40 relative flex items-center justify-center p-12 lg:p-24">
            <div className="absolute inset-0 opacity-[0.03] kraft-texture pointer-events-none" />
            
            <motion.div 
               key="hero-card"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative w-full h-full border border-brand-border flex flex-col bg-white/50 backdrop-blur-sm shadow-xl"
            >
              <div className="p-6 border-b border-brand-border flex justify-between items-center bg-white/40">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[10px] uppercase font-bold opacity-40 tracking-widest"
                  >
                    Construction Code: {HERO_SLIDES[currentSlide].code}
                  </motion.span>
                </AnimatePresence>
                <div className="flex gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full border border-brand-green transition-all ${currentSlide === idx ? 'bg-brand-green' : 'bg-transparent'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-full aspect-[4/3] max-w-lg"
                  >
                    {HERO_SLIDES[currentSlide].visual}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="p-6 border-t border-brand-border grid grid-cols-3 gap-4 bg-white/40">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="contents"
                  >
                    <div>
                      <p className="text-[9px] uppercase font-bold opacity-40 mb-1">Material</p>
                      <p className="text-xs font-medium">{HERO_SLIDES[currentSlide].material}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold opacity-40 mb-1">Strength</p>
                      <p className="text-xs font-medium">{HERO_SLIDES[currentSlide].strength}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold opacity-40 mb-1">Impact</p>
                      <p className="text-xs font-medium">{HERO_SLIDES[currentSlide].impact}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Strip */}
      <section className="bg-white border-y border-brand-green/5 py-12 px-8 lg:px-12">
        <div className="w-full flex flex-wrap justify-between gap-12">
          {[
            { icon: <Package size={24} />, label: "From 1 piece" },
            { icon: <Box size={24} />, label: "Custom dimensions" },
            { icon: <Award size={24} />, label: "AA credit rating" },
            { icon: <Truck size={24} />, label: "Delivery included" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-brand-green font-display font-medium">
              <div className="text-brand-kraft">{item.icon}</div>
              <span className="text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 px-8 lg:px-12 bg-brand-bg">
        <div className="w-full">
          <SectionHeader 
            subtitle="Industrial Expertise"
            title="Packaging Categories"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-brand-green/5 border border-brand-green/5">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24 px-8 lg:px-12 bg-white flex items-center">
         <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="aspect-video bg-brand-bg border border-brand-green/5 p-1 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full border border-brand-green/10 flex items-center justify-center">
                    <CustomDieCutSVG />
                  </div>
                  <div className="absolute bottom-8 right-8 bg-white p-4 shadow-xl flex items-center gap-4">
                     <Factory size={24} className="text-brand-kraft" />
                     <div>
                        <p className="text-[10px] font-bold text-brand-green/40 uppercase tracking-widest">Innovation</p>
                        <p className="text-sm font-bold text-brand-green">Custom Cutting Lines</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
               <SectionHeader 
                  subtitle="Bespoke Design"
                  title={<>Packaging built to your <br /> exact specs</>}
                  className="mb-0"
               />
               <p className="text-lg text-brand-text/60 leading-relaxed max-w-lg">
                  Every product is unique, and its packaging should be too. From specialist electronics to delicate retail displays, we engineer solutions that balance protection with presentation.
               </p>
               <Link to="/contact" className="inline-flex items-center gap-3 text-brand-green font-bold group">
                  Explore custom solutions
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
         </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-40 px-8 lg:px-12 bg-brand-bg border-y border-brand-green/5 min-h-[380px]">
        <div className="w-full">
          <SectionHeader centered subtitle="Our Workflow" title="The Journey of a Box" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
             {/* Connector line (desktop only) */}
             <div className="hidden lg:block absolute top-[5rem] left-[10%] right-[10%] h-[1px] bg-brand-green/[0.2] -z-0" />
             
             {[
               { n: '01', title: 'Design', desc: 'Custom construction drawing and prototyping.' },
               { n: '02', title: 'Production', desc: 'Precision cutting and high-speed assembly.' },
               { n: '03', title: 'Quality', desc: 'Rigorous checks on strength and finish.' },
               { n: '04', title: 'Delivery', desc: 'Final logistics across Northern Europe.' },
             ].map((step, i) => (
               <div key={i} className="relative z-10 space-y-8 flex flex-col items-center text-center">
                  <div className="font-serif text-[120px] lg:text-[140px] leading-none text-brand-green/[0.12] font-extralight select-none">
                    {step.n}
                  </div>
                  <div className="space-y-3 -mt-16 md:-mt-20 lg:-mt-24">
                    <h4 className="text-sm font-bold text-brand-green uppercase tracking-[0.15em]">{step.title}</h4>
                    <p className="text-[15px] text-[#4A4A4A] leading-[1.6] max-w-[220px] mx-auto">{step.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FEFCO Preview */}
      <section className="py-24 px-8 lg:px-12 bg-white">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <SectionHeader className="mb-0" subtitle="Standards" title="FEFCO Global Catalog" />
            <Link to="/fefco" className="bg-brand-green text-brand-bg px-8 py-4 rounded-sm text-sm font-bold">
               View Full Catalog (147 codes)
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEFCO_CODES.map((item) => (
              <FEFCOCard key={item.code} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Tartupak / Trust Signals */}
      <section className="py-32 px-8 lg:px-12 bg-[#FBF9F6]">
        <div className="w-full">
           <SectionHeader centered subtitle="Excellence" title="Why Industry Leaders Choose Us" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 mt-24">
              {[
                { label: "AA", title: "Credit Rating", desc: "Long-standing financial stability and reliability as a partner." },
                { label: "20+", title: "Years Experience", desc: "Two decades of refining packaging engineering and logistics." },
                { label: "100%", title: "Sustainable Materials", desc: "Recyclable corrugated cardboard sourced from certifed mills." },
                { label: "1pc", title: "Scale Flexible", desc: "Production that scales from tiny startups to industrial giants." },
                { label: "EE", title: "Edukas Eesti Ettevõte", desc: "Recognized as a leading successful Estonian enterprise multiple times." },
                { label: "EST", title: "Rapid Delivery", desc: "Integrated logistics for fast fulfillment across the Baltics and Scandinavia." },
              ].map((item, idx) => (
                <div key={idx} className="space-y-6 flex flex-col items-start">
                  <div className="min-h-[80px] flex items-center">
                    <span className="text-6xl md:text-7xl font-serif text-brand-kraft opacity-80 leading-none">{item.label}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-brand-green uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-brand-text/50 leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-green py-32 px-8 lg:px-12 relative overflow-hidden">
         {/* Decorative grid pattern */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
         
         <div className="w-full text-center relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif text-brand-bg leading-tight">
               Ready to pack <span className="italic pl-4 text-brand-kraft">smarter?</span>
            </h2>
            <p className="text-xl text-brand-bg/60 font-light max-w-xl mx-auto">
               Consult with our specialists for a tailored quote that fits your technical requirements and budget.
            </p>
            <div className="pt-8">
               <Link 
                  to="/contact" 
                  className="bg-brand-bg text-brand-green px-12 py-6 rounded-sm font-bold text-lg shadow-2xl transition-all hover:-translate-y-1 hover:brightness-110 active:translate-y-0"
               >
                  Get a Free Quote
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
