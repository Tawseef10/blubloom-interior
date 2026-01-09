import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

const TransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);
  
  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchend', stopDragging);
    } else {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  // Calculate opacity for labels using safe thresholds to avoid clipping text on mobile
  // Before label: fade starts at 30%, fully transparent at 20%
  const beforeLabelOpacity = Math.min(1, Math.max(0, (sliderPosition - 20) / 10));
  
  // After label: fade starts at 70%, fully transparent at 80%
  const afterLabelOpacity = Math.min(1, Math.max(0, (80 - sliderPosition) / 10));

  return (
    <section id="transformation" className="py-16 md:py-24 bg-blubloom-dark text-blubloom-linen overflow-hidden">
      <div className="container mx-auto px-6 mb-8 md:mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-4">The Transformation</h2>
        <p className="text-blubloom-linen/70 max-w-2xl mx-auto font-light text-sm md:text-base">
          Drag to witness the journey from raw potential to refined elegance.
        </p>
      </div>

      <div className="container mx-auto px-0 md:px-6">
        <div 
          ref={containerRef}
          className="relative w-full h-[55vh] md:h-[70vh] cursor-ew-resize select-none overflow-hidden touch-none shadow-2xl md:rounded-sm"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* AFTER Image (Background) - The Luxury Result */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipPTGBF1oMnzt1aaHlFoLpDrQ4JS5GcNteBMq2Rr=s680-w680-h510-rw"
              alt="After - Luxury Interior"
              className="w-full h-full object-cover pointer-events-none"
            />
            <motion.div 
              className="absolute top-1/2 right-4 md:right-10 pointer-events-none z-10"
              style={{ y: "-50%" }}
              animate={{ opacity: afterLabelOpacity }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <span className="bg-blubloom-dark/80 backdrop-blur-md text-blubloom-linen font-serif tracking-widest text-sm md:text-base uppercase px-4 py-2 border border-blubloom-linen/20 shadow-xl rounded-sm">
                  After
                </span>
            </motion.div>
          </div>

          {/* BEFORE Image (Foreground clipped) - The Construction Site */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipMk6SR3tNiCMQwmaWmDpPu7uSJm239cLhfNkozz=s680-w680-h510-rw"
              alt="Before - Construction"
              className="w-full h-full object-cover pointer-events-none"
              style={{ width: '100vw' }} // Ensure image doesn't squash, stays full viewport width
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
             <motion.div 
                className="absolute top-1/2 left-4 md:left-10 pointer-events-none z-10"
                style={{ y: "-50%" }}
                animate={{ opacity: beforeLabelOpacity }}
                transition={{ duration: 0.2, ease: "easeOut" }}
             >
                <span className="bg-white/90 backdrop-blur-md text-blubloom-dark font-serif tracking-widest text-sm md:text-base uppercase px-4 py-2 border border-blubloom-dark/10 shadow-xl rounded-sm font-semibold">
                  Before
                </span>
            </motion.div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border border-blubloom-dark/10">
              <GripVertical className="text-blubloom-dark w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSlider;