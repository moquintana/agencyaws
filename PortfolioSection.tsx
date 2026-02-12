
import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioSectionProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  reversed?: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id, title, subtitle, imageUrl, reversed }) => {
  return (
    <section id={id} className="relative w-full h-screen overflow-hidden group">
      {/* Background with warm tint */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-[3s] ease-out"
        style={{ 
          backgroundImage: `url('${imageUrl}')`,
          filter: 'sepia(0.2) brightness(0.7) contrast(1.1)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${reversed ? 'from-transparent via-transparent to-black/80' : 'from-black/80 via-transparent to-transparent'}`} />

      <div className={`relative h-full flex flex-col justify-end p-12 md:p-24 max-w-screen-2xl mx-auto ${reversed ? 'items-end text-right' : 'items-start text-left'}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl"
        >
          <span className="text-[0.5rem] uppercase tracking-[1em] text-white/50 mb-4 block">Case Study // Alpha</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] text-white mb-6 leading-none">
            {title}
          </h2>
          <p className="text-stone-300 text-sm md:text-lg font-light tracking-widest leading-relaxed">
            {subtitle}
          </p>
          
          <button className="mt-12 text-[0.6rem] uppercase tracking-[0.6em] text-white border-b border-white/30 pb-2 hover:border-white transition-all">
            Examine Narrative
          </button>
        </motion.div>
      </div>

      {/* Decorative floating number */}
      <div className={`absolute top-24 ${reversed ? 'left-24' : 'right-24'} opacity-10 hidden lg:block`}>
        <span className="text-[12rem] font-black tracking-tighter leading-none select-none italic">
          0{id === 'visuals' ? '1' : id === 'strategy' ? '2' : '3'}
        </span>
      </div>
    </section>
  );
};
