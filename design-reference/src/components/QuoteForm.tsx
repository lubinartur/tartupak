import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-bg border border-brand-green/20 p-12 text-center flex flex-col items-center gap-6"
      >
        <div className="w-20 h-20 bg-brand-green text-brand-bg rounded-full flex items-center justify-center">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-serif text-brand-green">Request Received</h3>
          <p className="text-brand-text/60 max-w-sm mx-auto">
            Thank you for your interest. Our specialist will review your specifications and contact you with a detailed quote within 24 hours.
          </p>
        </div>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-sm font-bold text-brand-green underline underline-offset-4"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 shadow-sm border border-brand-green/5 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Smith"
            className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Company</label>
          <input 
            required
            type="text" 
            placeholder="Company Name"
            className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Phone Number</label>
          <input 
            type="tel" 
            placeholder="+372 ..."
            className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Packaging Type</label>
        <select className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors appearance-none cursor-pointer">
          <option>Transport Packaging</option>
          <option>Pizza Boxes</option>
          <option>Frozen Products</option>
          <option>Custom Packaging</option>
          <option>Large Format</option>
          <option>Printed Packaging</option>
          <option>FEFCO Catalog</option>
          <option>Other</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Dimensions (Optional)</label>
          <input 
            type="text" 
            placeholder="L x W x H (mm)"
            className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Estimated Quantity</label>
          <input 
            required
            type="text" 
            placeholder="e.g. 500"
            className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/60">Detailed Message</label>
        <textarea 
          rows={4}
          placeholder="Describe your packaging requirements..."
          className="w-full bg-brand-bg/50 border-b border-brand-text/10 py-3 px-1 focus:border-brand-green focus:outline-none transition-colors resize-none"
        />
      </div>

      <button 
        type="submit"
        className="bg-brand-green text-brand-bg py-4 px-10 rounded-sm font-bold flex items-center justify-center gap-3 transition-all hover:bg-opacity-95 hover:-translate-y-0.5 active:translate-y-0 mt-4 shadow-lg shadow-brand-green/10"
      >
        Send Quote Request
        <Send size={18} />
      </button>
      <p className="text-[10px] text-brand-text/40 text-center uppercase tracking-widest">
        We typically respond within 1 business day.
      </p>
    </form>
  );
}
