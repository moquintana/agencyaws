
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-12 md:px-24 py-8 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl py-6' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-[0.5em] uppercase text-white">Aether</span>
          <span className="text-[0.5rem] tracking-[0.8em] uppercase text-stone-500 mt-1">Intelligence Agency</span>
        </div>

        <div className="hidden md:flex gap-16">
          {['Perspective', 'Couture', 'Intelligence', 'Dialogue'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[0.6rem] uppercase tracking-[0.4em] text-stone-400 hover:text-white transition-colors duration-300 font-light"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="text-[0.6rem] uppercase tracking-[0.4em] border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all duration-500">
          Inquire
        </button>
      </div>
    </motion.nav>
  );
};
