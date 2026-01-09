import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-blubloom-dark text-blubloom-linen py-16 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl font-bold tracking-wider mb-2"
          >
            BLUBLOOM
          </motion.h3>
          <p className="text-white/40 text-sm">© 2024 Blubloom Interior. All rights reserved.</p>
        </div>

        <div className="flex space-x-8">
          <motion.a 
            href="#" 
            onClick={handleSocialClick}
            whileHover={{ scale: 1.2, color: "#C5A059" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-white/60 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="#" 
            onClick={handleSocialClick}
            whileHover={{ scale: 1.2, color: "#C5A059" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-white/60 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="#" 
            onClick={handleSocialClick}
            whileHover={{ scale: 1.2, color: "#C5A059" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-white/60 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;