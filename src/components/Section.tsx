import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
}

export default function Section({ id, title, subtitle, children, imageSrc, imageAlt, reverse = false, className }: SectionProps) {
  return (
    <section id={id} className={clsx("py-20 overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={clsx("flex flex-col gap-12 items-center", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
          
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-accent font-medium">
                {subtitle}
              </p>
            )}
            <div className="text-gray-300 leading-relaxed text-lg">
              {children}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-square">
               <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10" />
               <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
