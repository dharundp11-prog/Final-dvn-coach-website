import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK, FORMSPREE_URL } from '../constants';
import { cn } from '../lib/utils';

interface TechnicalInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechnicalInquiryModal({ isOpen, onClose }: TechnicalInquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-carbon-matte/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.95, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card relative w-full max-w-4xl my-auto shadow-2xl z-10 rounded-[24px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Responsive Strategy */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:absolute md:top-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/10 shadow-2xl group"
              aria-label="Close modal"
            >
              <X size={24} className="text-white group-hover:scale-110 transition-transform" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: WhatsApp & Info */}
              <div className="p-8 md:p-12 bg-amber-burnt/5 border-r border-white/5">
                <div className="text-amber-burnt font-bold text-xs uppercase tracking-widest mb-4">
                  Direct Support
                </div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Technical <br /> Consultation</h2>
                <p className="text-white/60 mb-10 leading-relaxed">
                  Connect directly with our engineering team for immediate technical specifications, 
                  compliance queries, or custom fabrication requirements.
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-burnt py-4 rounded-xl font-bold uppercase tracking-widest text-center flex items-center justify-center gap-3 amber-glow hover:scale-[1.02] transition-transform mb-8"
                >
                  <MessageSquare size={20} />
                  Connect on WhatsApp
                </a>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-burnt shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50">Real-time engineering feedback</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-burnt shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50">Direct access to design leads</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-amber-burnt/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-amber-burnt" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Inquiry Received</h3>
                    <p className="text-white/50">Our technical team will review your requirements and contact you shortly.</p>
                    <button
                      onClick={onClose}
                      className="mt-8 text-amber-burnt font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-white/40 font-bold text-xs uppercase tracking-widest mb-4">
                      Detailed Inquiry
                    </div>
                    <h3 className="text-2xl font-bold mb-8">Submit Specifications</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Full Name</label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-burnt transition-colors"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Email</label>
                          <input
                            required
                            name="email"
                            type="email"
                            placeholder="mail@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-burnt transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Phone</label>
                          <input
                            required
                            name="phone"
                            type="tel"
                            placeholder="+91"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-burnt transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Requirements</label>
                        <textarea
                          required
                          name="message"
                          rows={4}
                          placeholder="Describe your fleet requirements..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-burnt transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all",
                          isSubmitting ? "bg-white/10 text-white/30 cursor-not-allowed" : "bg-white text-carbon-matte hover:bg-amber-burnt hover:text-white"
                        )}
                      >
                        {isSubmitting ? "Processing..." : (
                          <>
                            <Send size={18} />
                            Send Inquiry
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
