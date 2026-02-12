
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="dialogue" className="relative bg-[#0a0a0a] pt-48 pb-24 px-12 md:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-[0.1em] text-white mb-12 leading-none">
              Awaiting Your <br />Perspective.
            </h2>
            <p className="text-stone-500 text-lg tracking-widest font-light max-w-md">
              Available for collaborations that require absolute precision and artistic transcendence.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end lg:items-end gap-12">
            <div className="space-y-4 lg:text-right">
              <p className="text-[0.5rem] uppercase tracking-[0.6em] text-stone-600">Offices</p>
              <p className="text-sm tracking-widest font-light">New York // London // Zurich</p>
            </div>
            
            <div className="space-y-4 lg:text-right">
              <p className="text-[0.5rem] uppercase tracking-[0.6em] text-stone-600">Digital presence</p>
              <div className="flex lg:justify-end gap-8">
                {['Instagram', 'LinkedIn', 'Vimeo', 'X'].map(social => (
                  <a key={social} href="#" className="text-sm tracking-widest font-light hover:text-stone-400 transition-colors uppercase italic text-xs">{social}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-[0.5em] uppercase text-white">Aether</span>
            <span className="text-[0.4rem] tracking-[0.8em] uppercase text-stone-700 mt-1">Intelligence Agency &copy; 2025</span>
          </div>
          
          <div className="text-[0.5rem] tracking-[0.6em] uppercase text-stone-600 text-center md:text-right">
            Curated by the Algorithm / Crafted for Humanity
          </div>
        </div>
      </div>
    </footer>
  );
};
