import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipOCPZNZhiZ5KiJ497IqZ7cxN_R_wmDSIcFOgTfE=s680-w680-h510-rw"
          alt="Luxury Biophilic Interior"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-blubloom-dark/90" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-blubloom-linen font-medium text-xs md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6 drop-shadow-lg shadow-black"
        >
          Est. 2024
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-white font-medium tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-tight drop-shadow-2xl shadow-black"
        >
          Curating <br />
          <span className="italic text-blubloom-gold">Nature’s</span> Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xs md:max-w-xl text-white text-base md:text-xl font-light leading-relaxed mb-10 md:mb-12 drop-shadow-lg shadow-black mx-auto"
        >
          Where biophilic design meets architectural elegance. We create living spaces that breathe.
        </motion.p>
      </div>

      {/* Scroll Down Indicator - Positioned relative to viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <a href="#portfolio" className="flex flex-col items-center text-white hover:text-blubloom-gold transition-colors drop-shadow-lg p-4">
          <span className="text-[10px] md:text-xs uppercase tracking-widest mb-2 opacity-80 text-center">Discover</span>
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;