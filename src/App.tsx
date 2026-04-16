import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusModels from './components/BusModels';
import AboutUs from './components/AboutUs';
import Infrastructure from './components/Infrastructure';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TechnicalInquiryModal from './components/TechnicalInquiryModal';
import BackToTop from './components/BackToTop';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openInquiryModal = () => setIsInquiryModalOpen(true);
  const closeInquiryModal = () => setIsInquiryModalOpen(false);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-burnt z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar onInquiryClick={openInquiryModal} />
      
      <main>
        <Hero onInquiryClick={openInquiryModal} />
        <BusModels />
        <AboutUs />
        <Infrastructure />
        <Testimonials />
      </main>

      <Footer onInquiryClick={openInquiryModal} />

      <TechnicalInquiryModal 
        isOpen={isInquiryModalOpen} 
        onClose={closeInquiryModal} 
      />

      <BackToTop />

      {/* Ambient Glow Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-burnt/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-burnt/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
