
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate luxury brand loading experience
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-stone-700 selection:text-white">
      {/* Cinematic Frame Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] cinematic-frame"></div>

      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-stone-400 tracking-[1em] text-xs uppercase"
            >
              Initializing Intelligence
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        
        <AboutSection />

        <PortfolioSection 
          id="visuals"
          title="VISUAL INTELLIGENCE" 
          subtitle="Cinematic brand narratives powered by gen-AI architecture."
          imageUrl="https://picsum.photos/id/101/1600/900?grayscale&blur=2"
          reversed={false}
        />

        <PortfolioSection 
          id="strategy"
          title="STRATEGIC GROWTH" 
          subtitle="Precision marketing scaled through neural networks."
          imageUrl="https://picsum.photos/id/102/1600/900?grayscale&sepia=10"
          reversed={true}
        />

        <PortfolioSection 
          id="digital"
          title="DIGITAL COUTURE" 
          subtitle="Bespoke digital experiences that redefine luxury interfaces."
          imageUrl="https://picsum.photos/id/103/1600/900?grayscale"
          reversed={false}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
