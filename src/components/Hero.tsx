import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Shield, Zap, Settings } from 'lucide-react';

const images = [
  'https://res.cloudinary.com/dxufff4iw/image/upload/v1776666458/T_-_2_xlsaww.jpg',
  'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241492/4_-_front_cross_shot_jrfrxi.jpg',
  'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241220/baby_bus_-_back_cross_shot_ynqsrj.jpg'
];

interface HeroProps {
  onInquiryClick: () => void;
}

export default function Hero({ onInquiryClick }: HeroProps) {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-[100px] md:pb-12">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-matte/20 via-carbon-matte/60 to-carbon-matte" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-100px)] pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col justify-between md:justify-center min-h-full py-8 md:py-0 mt-0 md:mt-[60px] mb-0 md:mb-[5vh] w-full"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 pt-0 md:pt-12 w-full">
            <div className="flex flex-col md:w-[60%] flex-1">
              <h1 className="text-[8vw] md:text-[5vw] font-bold tracking-tighter leading-[1.1] mb-4 md:mb-8 max-w-[800px]">
                DVN COACH <br className="hidden md:block" />
                BUS BODY BUILDER. <br />
                <span className="relative inline-block mt-2 mb-1 group">
                  <span className="text-gold-gradient animate-shimmer-gold drop-shadow-[0_0_15px_rgba(255,184,0,0.4)]">
                    <span className="font-black">60 YEARS</span> 
                    <span className="font-bold"> OF LEGACY</span>
                  </span>
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="absolute -bottom-1 left-0 w-[55%] h-[2.5px] gold-underline origin-left" 
                  />
                </span> <br />
                ON THE ROAD.
              </h1>

              <div className="md:hidden mb-10">
                {/* CIRT Mobile Badge */}
                <div className="inline-flex flex-col items-center p-5 rounded-2xl bg-black/40 backdrop-blur-[20px] border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="p-3 rounded-xl bg-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] mb-4">
                      <img 
                        src="https://res.cloudinary.com/dxufff4iw/image/upload/v1776743549/Screenshot_2026-04-21_at_9.21.51_AM_cuo4ia.png" 
                        alt="CIRT Accredited" 
                        className="h-12 w-auto object-contain brightness-125 saturate-150"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-sm font-black text-amber-burnt tracking-wider mb-2">
                      AIS - 153 COMPLIANT
                    </span>
                    <span className="text-[9px] tracking-[0.4em] font-bold text-amber-burnt uppercase">
                      ACCREDITED PUNE
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-white/60 mb-6 md:mb-10 max-w-xl leading-relaxed">
                Pioneering passenger vehicle body manufacturing with a focus on structural durability, 
                regulatory compliance, and aerodynamic efficiency. Built for the future of Indian transport.
              </p>

              <div className="!flex !visible shrink-0 flex-wrap gap-4">
                <motion.a
                  href="#models"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-burnt px-8 py-4 rounded-xl font-bold uppercase tracking-widest amber-glow flex items-center gap-2 group"
                >
                  Explore Models
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.button
                  onClick={onInquiryClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-colors !flex !visible shrink-0"
                >
                  Technical Inquiry
                </motion.button>
              </div>
            </div>

            {/* CIRT Desktop Badge - Vertically Centered with Entire Left Column */}
            <div className="hidden md:flex flex-col items-end md:w-[40%]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="relative p-[1px] rounded-[33px] bg-gradient-to-br from-white/20 via-white/5 to-amber-burnt/20"
              >
                <div className="flex flex-col items-center bg-black/40 backdrop-blur-[20px] rounded-[32px] p-10 min-w-[260px] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] relative overflow-hidden border border-white/5">
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-8 bg-white/5 p-6 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                      <img 
                        src="https://res.cloudinary.com/dxufff4iw/image/upload/v1776743549/Screenshot_2026-04-21_at_9.21.51_AM_cuo4ia.png" 
                        alt="CIRT Accredited" 
                        className="h-24 w-auto object-contain brightness-125 saturate-150 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-xl md:text-2xl font-black text-amber-burnt tracking-widest mb-4 uppercase">
                      AIS - 153 COMPLIANT
                    </span>
                    <span className="text-[11px] tracking-[0.5em] font-bold text-amber-burnt uppercase text-center whitespace-nowrap">
                      ACCREDITED PUNE
                    </span>
                  </div>
                  {/* Subtle vignette effect and glass shine */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] rounded-[32px]" />
                  <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none opacity-30" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative mt-auto pt-12 md:pt-20 mb-8 md:mb-12 w-full px-4 sm:px-0">
            {/* The DNA Ribbon Capsule - Adaptive Shape */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between bg-black/30 backdrop-blur-[40px] border border-white/5 rounded-[2.5rem] md:rounded-full py-10 md:py-5 px-10 md:px-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group gap-8 md:gap-4">
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
              
              {[
                { icon: Shield, label: 'AIS-153', sub: 'Compliance' },
                { icon: Zap, label: '60+ Years', sub: 'Excellence' },
                { icon: Settings, label: '4th Gen', sub: 'Family Conglomerate' }
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-5 md:gap-4 transition-all duration-500 hover:scale-105 w-full md:w-auto">
                    {/* Inset Glass Box for Icon */}
                    <div className="p-3 md:p-2.5 rounded-xl bg-black/40 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] border border-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="text-[#FFB800] w-4 h-4 drop-shadow-[0_0_10px_rgba(255,184,0,0.6)]" />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="text-[13px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-white/90 leading-tight whitespace-nowrap">
                        {item.label}
                      </div>
                      <div className="text-[9px] md:text-[9px] font-medium uppercase tracking-[0.2em] text-[#FFB800]/50 mt-1 whitespace-nowrap">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                  
                  {/* Ultra-thin Vertical Architectural Divider - Desktop Only */}
                  {i < 2 && (
                    <div className="hidden md:block h-8 w-[0.5px] bg-gradient-to-b from-transparent via-white/20 to-transparent mx-4 lg:mx-8" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
