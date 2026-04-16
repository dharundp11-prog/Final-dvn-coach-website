import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import { WHATSAPP_LINK } from '../constants';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onInquiryClick: () => void;
}

export default function Navbar({ onInquiryClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Models', href: '#models' },
    { name: 'About', href: '#about' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      {/* Backdrop Blur for Mobile Menu - Viewport Locked */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-[12px] z-[998] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-6 py-3 md:py-4 max-h-[90px] flex items-start md:items-center',
          isScrolled 
            ? 'bg-carbon-matte/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
            : 'bg-gradient-to-b from-black/40 to-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-start md:items-center justify-between w-full relative z-[1000]">
        <div className="mr-auto md:mr-12">
          <BrandLogo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-x-8 lg:gap-x-12 px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-amber-burnt transition-colors uppercase tracking-widest whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center ml-auto">
          <button
            onClick={onInquiryClick}
            className="bg-amber-burnt px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform amber-glow flex items-center gap-2 whitespace-nowrap"
          >
            <MessageSquare size={16} />
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle - Strictly Hidden on Desktop (md:hidden) */}
        <button
          className="flex md:hidden text-white p-0 mt-[7px] items-start self-start focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 bg-carbon-matte border-b border-white/5 p-6 pt-10 md:hidden flex flex-col gap-6 shadow-2xl z-[1001]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-amber-burnt transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onInquiryClick();
              }}
              className="text-lg font-medium text-white/70 hover:text-amber-burnt transition-colors uppercase tracking-widest text-left"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </>
  );
}
