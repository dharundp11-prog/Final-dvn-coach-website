import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Shield, Zap, Settings } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1562620644-65bb4d9948ff?auto=format&fit=crop&q=80&w=1920'
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
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 md:pt-[100px] md:pb-12">
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
          className="max-w-3xl flex flex-col justify-between md:justify-center min-h-full py-8 md:py-0 mt-0 md:mt-[120px] mb-0 md:mb-[10vh]"
        >
          <div className="flex flex-col">
            <h1 className="text-[8vw] md:text-[5vw] font-bold tracking-tighter leading-[1.1] mb-4 md:mb-8 max-w-[800px]">
              DVN COACH - BUS BODY BUILDER. <br />
              <span className="text-amber-burnt">LEGACY</span> <br />
              ON THE ROAD.
            </h1>

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

          <div className="!flex !visible shrink-0 flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-4 sm:gap-8 mt-8 md:mt-20 mb-4 md:mb-12 pb-4 md:pb-10 w-full px-4 sm:px-0">
            {[
              { icon: Shield, label: 'AIS-153', sub: 'Compliance' },
              { icon: Zap, label: '60+ Years', sub: 'Excellence' },
              { icon: Settings, label: '4th Gen', sub: 'Family Conglomerate' }
            ].map((item, i) => (
              <div key={i} className="!flex !visible items-center gap-2 md:gap-3 shrink-0">
                <item.icon className="text-amber-burnt shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                <div className="flex flex-col">
                  <div className="text-[11px] sm:text-xs md:text-xl font-bold whitespace-nowrap">
                    {item.label}
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40 whitespace-nowrap">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
