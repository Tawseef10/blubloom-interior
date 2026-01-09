import React from 'react';
import { PenTool, Ruler, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: "Bespoke Craftsmanship",
    description: "Every texture, fabric, and finish is hand-selected from the world’s finest artisans, ensuring your home is a singular masterpiece.",
    icon: <PenTool className="w-8 h-8 md:w-10 md:h-10" />
  },
  {
    id: 2,
    title: "Architectural Integrity",
    description: "We don't just decorate; we enhance the structural soul of your space, aligning flow and light with modern living standards.",
    icon: <Ruler className="w-8 h-8 md:w-10 md:h-10" />
  },
  {
    id: 3,
    title: "Biophilic Harmony",
    description: "Integrating living elements and organic materials to reduce stress and improve well-being. Nature is our primary palette.",
    icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-blubloom-linen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blubloom-dark/20 to-transparent" />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-40 w-64 h-64 bg-blubloom-gold/5 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-20 bottom-20 w-80 h-80 bg-blubloom-dark/5 rounded-full blur-3xl pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-blubloom-gold text-xs md:text-sm tracking-[0.3em] uppercase block mb-4 font-semibold"
          >
            The Blubloom Edge
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-blubloom-dark font-medium">
            Why We Are Different
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#1A3C34", color: "#C5A059" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 rounded-full bg-white border border-blubloom-dark/10 flex items-center justify-center text-blubloom-dark transition-colors duration-500 shadow-lg relative z-10"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-blubloom-dark group-hover:text-blubloom-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-blubloom-text/70 leading-relaxed font-light text-base md:text-lg max-w-sm mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;