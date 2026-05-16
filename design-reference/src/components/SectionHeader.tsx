import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface Props {
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({ title, subtitle, centered, className, dark }: Props) {
  return (
    <div className={cn(
      'max-w-4xl space-y-4 mb-12 sm:mb-16',
      centered ? 'mx-auto text-center' : '',
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold block",
            dark ? "text-brand-bg/60" : "text-brand-green/60"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight",
          dark ? "text-brand-bg" : "text-brand-green"
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}
