
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="perspective" className="relative py-48 bg-[#0a0a0a] px-12 md:px-24">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[0.6rem] uppercase tracking-[1em] text-stone-500 font-bold mb-8"
          >
            The Philosophy
          </motion.h3>
        </div>
        
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl md:text-4xl leading-[1.6] text-stone-300 font-light mb-16">
              In a world saturated by noise, we seek <span className="text-white font-medium italic">silence</span>. 
              Aether is a bespoke collective of minds merging high-art aesthetics with 
              autonomous neural processing. We don’t just automate; we architect 
              emotional intelligence into luxury brands.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-[0.5rem] uppercase tracking-[0.5em] text-white font-bold mb-4">Autonomous Strategy</h4>
                <p className="text-stone-500 text-sm leading-relaxed tracking-wide">
                  Harnessing proprietary predictive models to anticipate market shifts before they occur. 
                  Efficiency is no longer the goal; it is the baseline.
                </p>
              </div>
              <div>
                <h4 className="text-[0.5rem] uppercase tracking-[0.5em] text-white font-bold mb-4">Neural Aesthetics</h4>
                <p className="text-stone-500 text-sm leading-relaxed tracking-wide">
                  Generative design at the intersection of human heritage and algorithmic precision. 
                  Timeless visuals for a future-first era.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
