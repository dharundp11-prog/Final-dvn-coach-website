import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02] w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Tier 1: Horizontal Text Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-amber-burnt font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Legacy of Excellence
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              PIONEERING <br /> BUS BODY <br /> FABRICATION.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end h-full"
          >
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
              Based in Karur, Tamil Nadu, DVN Coach - Bus Body Builder is a leader in passenger vehicle body manufacturing. 
              With a long-standing dynasty of excellence, we specialize in premium engineering, 
              creating structurally superior and high-performance bus bodies for the modern transport sector.
            </p>
          </motion.div>
        </div>

        {/* Tier 2: Side-by-Side Dynasty Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Column A: G.A. Ravindran (Grandfather) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col group max-w-md mx-auto w-full"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 mb-8 relative bg-zinc-900/50 shadow-2xl shadow-black/50">
              <img 
                src="https://res.cloudinary.com/dxufff4iw/image/upload/v1777015378/Screenshot_2026-04-24_at_12.51.46_PM_x6dngx.png" 
                alt="GA Ravindran - Mentor and Chief Advisor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
            
            <div className="relative pl-12">
              <Quote className="absolute top-0 left-0 text-amber-burnt/20 w-10 h-10" strokeWidth={1.5} />
              <p className="text-white/80 italic text-lg md:text-xl leading-relaxed mb-6 font-medium">
                "With more than 30 years of experience and expertise heading a 60 years old organisation was always an uphill ride. It takes true hard work and determination to achieve. Mentoring the company is always my priority."
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-amber-burnt uppercase tracking-[0.3em] text-sm mb-1">GA Ravindran</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Mentor and Chief Advisor</span>
              </div>
            </div>
          </motion.div>

          {/* Column B: Vijaya Balaji (Owner) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col group max-w-md mx-auto w-full"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 mb-8 relative bg-zinc-900/50 shadow-2xl shadow-black/50">
              <img 
                src="https://res.cloudinary.com/dxufff4iw/image/upload/v1777015379/Screenshot_2026-04-24_at_12.52.22_PM_soiqsm.png" 
                alt="VIJAYA BALAJI - CMD of DVN COACH"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
            
            <div className="relative pl-12">
              <Quote className="absolute top-0 left-0 text-amber-burnt/20 w-10 h-10" strokeWidth={1.5} />
              <p className="text-white/80 italic text-lg md:text-xl leading-relaxed mb-6 font-medium">
                "I have always been put into the extreme hard situations to test out my abilities and with which I and my team have come in this journey. The brand runs in my blood line for 4 generations and will always keep up the pride of my company always and deliver the best for the customers."
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-amber-burnt uppercase tracking-[0.3em] text-sm mb-1">VIJAYA BALAJI</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">CMD of DVN COACH</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
}
