import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Users, Clock, History } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 min-[1025px]:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-amber-burnt font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Legacy of Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              PIONEERING <br /> BUS BODY <br /> FABRICATION.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Based in Karur, Tamil Nadu, DVN Coach - Bus Body Builder is a leader in passenger vehicle body manufacturing. 
              With a long-standing dynasty of excellence, we specialize in premium engineering, 
              creating structurally superior and high-performance bus bodies for the modern transport sector.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[16/9] lg:aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" 
                alt="Precision Engineering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Overlays - Fluid Scaling */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8 glass-card p-4 md:p-8 backdrop-blur-xl border-white/10 shadow-2xl animate-fade-in">
                <div className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-1 leading-none">Zero</div>
                <div className="text-[clamp(0.5rem,1vw,0.75rem)] uppercase tracking-widest font-bold text-white/60">Compliance Failures</div>
              </div>

              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 glass-card p-4 md:p-8 backdrop-blur-xl border-amber-burnt/20 amber-glow animate-fade-in">
                <div className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-amber-burnt mb-1 leading-none">98%</div>
                <div className="text-[clamp(0.5rem,1vw,0.75rem)] uppercase tracking-widest font-bold text-white/60">Structural Safety</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 min-[1025px]:grid-cols-5 gap-4 md:gap-6 items-stretch"
        >
          {[
            { icon: Clock, label: '60+ Years', desc: 'Heritage Excellence' },
            { icon: Shield, label: 'AIS-153', desc: 'All Models Approved' },
            { icon: Users, label: '20,000+', desc: 'Buses Delivered' },
            { icon: Award, label: 'ISO Certified', desc: 'Accredited Builder' },
            { icon: History, label: '4th Gen', desc: 'Family Conglomerate' }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center text-center h-full min-h-[160px] justify-center">
              <item.icon className="text-amber-burnt mb-4" size={24} />
              <div className="text-lg md:text-xl font-bold leading-tight mb-2">{item.label}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
