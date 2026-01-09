import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "The Verdant Spa",
    category: "Bathroom",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNoAK-sjC_QlCv-GnpGGDSZEVtB7lcPk0-AP9jS=s680-w680-h510-rw"
  },
  {
    id: 2,
    title: "Serenity Suite",
    category: "Bedroom",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNTOpSBk8NaKQsUFKHtbbPDWYYlroLcOL9bkxZa=s680-w680-h510-rw"
  },
  {
    id: 3,
    title: "Botanical Lounge",
    category: "Living Room",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipOvXEGLtV2Ff3ZxV6HbQJ9uO8VbwIPoFWvorW4B=s680-w680-h510-rw"
  },
  {
    id: 4,
    title: "The Artisan Study",
    category: "Study Room",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPhtmo1ObFHQfVco6OCi6tT2ZY8HT-996zg03aN=s680-w680-h510-rw"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number; onClick: (project: Project) => void }> = ({ project, index, onClick }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-16' : ''}`}
      onClick={() => onClick(project)}
    >
      <div 
        ref={containerRef}
        className="relative overflow-hidden aspect-[4/5] md:aspect-[4/3] mb-4 md:mb-6 shadow-sm bg-blubloom-linen/30"
      >
        <div className="absolute inset-0 bg-blubloom-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
        
        {/* Placeholder background */}
        <div className={`absolute inset-0 bg-blubloom-dark/5 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />

        {isInView && (
          <motion.img
            layoutId={`image-${project.id}`}
            src={project.imageUrl}
            alt={project.title}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          />
        )}
      </div>
      <div className="flex justify-between items-center border-t border-gray-100 pt-4 md:pt-6">
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-blubloom-dark group-hover:text-blubloom-gold transition-colors duration-500">
            {project.title}
          </h3>
          <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-1 block">
            {project.category}
          </span>
        </div>
        <motion.span 
          variants={{
            hover: { x: 0, opacity: 1 }
          }}
          initial={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-blubloom-gold text-xl md:text-2xl font-serif hidden md:block"
        >
          &rarr;
        </motion.span>
         <span className="text-blubloom-gold text-xl md:text-2xl font-serif md:hidden">
          &rarr;
        </span>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-16 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl text-blubloom-dark mb-4 md:mb-6">
              Selected Works
            </h2>
            <p className="text-blubloom-text/70 text-base md:text-lg font-light leading-relaxed">
              A curation of our most recent architectural endeavors, blending natural materials with modern luxury.
            </p>
          </div>
          <div className="hidden md:block">
             <a href="#contact" className="text-blubloom-gold hover:text-blubloom-dark transition-colors uppercase tracking-widest text-sm font-bold border-b border-blubloom-gold pb-1 inline-block">
               Request Full Access
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={setSelectedProject}
            />
          ))}
        </div>
        
        <div className="md:hidden mt-12 text-center">
             <a href="#contact" className="text-blubloom-gold hover:text-blubloom-dark transition-colors uppercase tracking-widest text-xs font-bold border-b border-blubloom-gold pb-1 inline-block">
               Request Full Access
             </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-blubloom-dark/95 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedProject(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(null);
              }}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </motion.button>

            <div 
              className="relative w-full max-w-6xl max-h-full flex flex-col md:flex-row bg-white overflow-hidden shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh]">
                <motion.img
                  layoutId={`image-${selectedProject.id}`}
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-blubloom-linen"
              >
                <span className="text-blubloom-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-blubloom-dark mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-blubloom-text/70 leading-relaxed mb-8 font-light">
                  A study in biophilic minimalism. This space features custom-milled oak cabinetry, hand-applied lime plaster walls, and a curated selection of living flora to purify the air and the mind.
                </p>
                <div className="mt-auto">
                   <a 
                    href="#contact" 
                    onClick={() => setSelectedProject(null)}
                    className="inline-block bg-blubloom-dark text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-blubloom-gold transition-colors duration-300"
                   >
                     Inquire About This Look
                   </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;