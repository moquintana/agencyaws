
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with warm tones overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-40 brightness-50 contrast-125 transition-transform duration-[10s] ease-out"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1518005020251-58296d8f8d21?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'sepia(0.3) contrast(1.1) brightness(0.6)'
        }}
      />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-[0.7rem] md:text-xs uppercase tracking-[1.5em] text-stone-400 mb-8 md:mb-12 font-light">
            Defining the Avant-Garde
          </span>
          
          <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-[0.2em] uppercase">
            AETHER
          </h1>
          
          <h2 className="text-4xl md:text-7xl font-light text-stone-300/30 -mt-2 md:-mt-6 tracking-[0.5em] uppercase">
            SYNT<span className="italic">H</span>ESIS
          </h2>

          <div className="mt-16 md:mt-24 w-px h-16 md:h-24 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute left-12 bottom-24 hidden lg:block origin-left -rotate-90">
        <span className="text-[0.5rem] tracking-[1em] uppercase text-stone-600">
          Neural Architecture / Vol 2025
        </span>
      </div>
    </section>
  );
};
