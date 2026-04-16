import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0
  });
  
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  const handleInteraction = useCallback(() => {
    setIsPaused(true);
    stopAutoPlay();
    
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(() => {
      setIsPaused(false);
      startAutoPlay();
    }, 10000);
  }, [startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
      if (inactivityRef.current) clearTimeout(inactivityRef.current);
    };
  }, [startAutoPlay, stopAutoPlay]);

  const current = TESTIMONIALS[currentIndex];
  const transition = {
    duration: 1.5,
    ease: [0.45, 0.05, 0.55, 0.95]
  };

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % 4 }));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + 4) % 4 }));
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-amber-burnt font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Client Feedback
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            TRUSTED BY OPERATORS
          </h2>
        </div>

        <div 
          className="relative min-h-[700px] md:min-h-[600px] lg:min-h-[500px]"
          onMouseEnter={() => {
            setIsPaused(true);
            stopAutoPlay();
          }}
          onMouseLeave={() => {
            if (!isPaused) startAutoPlay();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Zero-Gap Geometric Nesting Cluster */}
              <div className="relative w-full max-w-[550px] mx-auto lg:mx-0">
                <div className="flex flex-col gap-3 w-full"> {/* 12px gap */}
                  {/* Top Row: Column A & Column B */}
                  <div className="flex gap-3 h-[350px] md:h-[450px]">
                    {/* Column A: Left (45%) - Master Height Anchor */}
                    <div 
                      className="w-[45%] h-full group/img cursor-zoom-in relative overflow-hidden rounded-tl-[24px]"
                      onClick={() => openLightbox(0)}
                    >
                      <img
                        src={current.images[0]}
                        alt="Testimonial 1"
                        className="w-full h-full object-cover shadow-lg border border-white/5 transition-transform duration-700 group-hover/img:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="text-white w-8 h-8" />
                      </div>
                    </div>
                    
                    {/* Column B: Right (55%) - Stacked Images */}
                    <div className="w-[55%] flex flex-col gap-3 h-full">
                      <div 
                        className="flex-[1.2] group/img cursor-zoom-in relative overflow-hidden rounded-tr-[24px]"
                        onClick={() => openLightbox(1)}
                      >
                        <img
                          src={current.images[1]}
                          alt="Testimonial 2"
                          className="w-full h-full object-cover shadow-lg border border-white/5 transition-transform duration-700 group-hover/img:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="text-white w-6 h-6" />
                        </div>
                      </div>
                      <div 
                        className="flex-[0.8] group/img cursor-zoom-in relative overflow-hidden"
                        onClick={() => openLightbox(2)}
                      >
                        <img
                          src={current.images[2]}
                          alt="Testimonial 3"
                          className="w-full h-full object-cover shadow-lg border border-white/5 transition-transform duration-700 group-hover/img:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="text-white w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Footer: Image 4 (Full Width) */}
                  <div 
                    className="h-[120px] md:h-[160px] w-full group/img cursor-zoom-in relative overflow-hidden rounded-bl-[24px] rounded-br-[24px]"
                    onClick={() => openLightbox(3)}
                  >
                    <img
                      src={current.images[3]}
                      alt="Testimonial 4"
                      className="w-full h-full object-cover shadow-xl border border-white/5 transition-transform duration-700 group-hover/img:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative Amber Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-burnt/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
              </div>

              {/* Testimonial Typography */}
              <div className="flex flex-col justify-center text-center lg:text-left">
                <div className="relative">
                  <Quote 
                    className="absolute -top-16 -left-8 lg:-left-16 text-amber-burnt/10 w-24 h-24 lg:w-40 lg:h-40 -z-10" 
                    strokeWidth={1}
                  />
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, ...transition }}
                  >
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-amber-burnt mb-3 tracking-tight uppercase">
                      {current.name}
                    </h3>
                    <p className="text-xs md:text-sm font-bold tracking-[0.5em] text-white/40 mb-10 uppercase">
                      {current.role}
                    </p>
                    
                    <div className="relative">
                      <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-[1.3] text-white/90 italic">
                        "{current.content}"
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Pagination Indicators - Navigation Bullets */}
                <div className="flex gap-6 mt-16 justify-center lg:justify-start items-center">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx);
                        handleInteraction();
                      }}
                      className="group relative p-2 focus:outline-none"
                      aria-label={`Go to testimonial ${idx + 1}`}
                    >
                      <div className={`h-3 w-3 rounded-full transition-all duration-500 ${
                        idx === currentIndex 
                        ? 'bg-amber-burnt scale-125 shadow-[0_0_15px_rgba(255,191,0,0.5)]' 
                        : 'bg-white/20 group-hover:bg-white/40'
                      }`} />
                      {idx === currentIndex && (
                        <motion.div 
                          layoutId="activeBullet"
                          className="absolute inset-0 border border-amber-burnt/50 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightbox.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
              onClick={closeLightbox}
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-[2001]"
                onClick={closeLightbox}
              >
                <X size={40} strokeWidth={1.5} />
              </button>

              <button 
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 md:text-white/70 hover:text-white transition-colors p-2 md:p-4 z-[2001] bg-black/30 md:bg-white/5 rounded-full backdrop-blur-sm md:backdrop-blur-md"
                onClick={prevImage}
              >
                <ChevronLeft size={24} className="md:w-8 md:h-8" />
              </button>

              <button 
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 md:text-white/70 hover:text-white transition-colors p-2 md:p-4 z-[2001] bg-black/30 md:bg-white/5 rounded-full backdrop-blur-sm md:backdrop-blur-md"
                onClick={nextImage}
              >
                <ChevronRight size={24} className="md:w-8 md:h-8" />
              </button>

              <motion.div 
                key={lightbox.index}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) prevImage();
                  else if (info.offset.x < -100) nextImage();
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full h-full flex items-center justify-center touch-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={current.images[lightbox.index]} 
                  alt={`Gallery image ${lightbox.index + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest uppercase">
                  {lightbox.index + 1} / 4
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
