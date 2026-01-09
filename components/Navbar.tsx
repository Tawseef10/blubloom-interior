import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Transformation', href: '#transformation' },
    { name: 'Philosophy', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  const textColorClass = isScrolled ? 'text-blubloom-dark' : 'text-white';
  
  // Mobile toggle button color: 
  // If menu is open, we need to see the X. The menu background is dark, so X should be light (linen/white).
  // If menu is closed, it follows the navbar state (white on hero, dark on scroll).
  const toggleButtonColor = isMobileMenuOpen ? 'text-blubloom-linen' : textColorClass;

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
      }
    }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    })
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-blubloom-linen/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center relative z-50">
            <motion.a 
              href="#" 
              onClick={scrollToTop}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // If menu is open, logo should be visible on top of dark background -> linen color
              className={`font-serif text-2xl md:text-3xl font-bold tracking-wider transition-colors duration-300 drop-shadow-sm ${isMobileMenuOpen ? 'text-blubloom-linen' : textColorClass}`}
            >
            BLUBLOOM
            </motion.a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${textColorClass} drop-shadow-sm`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-blubloom-gold' : 'bg-white'}`} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
             <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                   <motion.div
                     key="close"
                     initial={{ opacity: 0, rotate: -90 }}
                     animate={{ opacity: 1, rotate: 0 }}
                     exit={{ opacity: 0, rotate: 90 }}
                     transition={{ duration: 0.2 }}
                   >
                     <X className={`w-8 h-8 ${toggleButtonColor}`} />
                   </motion.div>
                ) : (
                   <motion.div
                     key="menu"
                     initial={{ opacity: 0, rotate: 90 }}
                     animate={{ opacity: 1, rotate: 0 }}
                     exit={{ opacity: 0, rotate: -90 }}
                     transition={{ duration: 0.2 }}
                   >
                     <Menu className={`w-8 h-8 ${toggleButtonColor} drop-shadow-sm`} />
                   </motion.div>
                )}
             </AnimatePresence>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-blubloom-dark flex flex-col justify-center items-center z-40"
          >
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-blubloom-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col space-y-8 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={mobileLinkVariants}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl md:text-5xl text-blubloom-linen hover:text-blubloom-gold transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 1 }}
               className="absolute bottom-12 text-white/30 text-xs tracking-[0.3em] uppercase"
            >
                Est. 2024
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;