import React from 'react';
import { motion } from 'motion/react';
import { INFRASTRUCTURE } from '../constants';
import * as Icons from 'lucide-react';

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-amber-burnt font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Our Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            ADVANCED MANUFACTURING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFRASTRUCTURE.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 group hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-12 h-12 bg-amber-burnt/10 border border-amber-burnt/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-burnt group-hover:text-white transition-all duration-500">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-20 glass-card p-12 relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-6">Integrated Production Layout</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                We bridge the gap between heavy fabrication and refined finishing through 
                an optimized layout. By monitoring every stage via precision-timed quality gates, 
                we ensure that every DVN build meets AIS-standard compliance before it hits the road.
              </p>
              <div className="flex flex-wrap gap-6">
                {['CAD/CAM Design', 'Hydraulic Pressing', 'Argon Welding', 'Leak Testing'].map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-burnt rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-amber-burnt/5 border border-amber-burnt/10 rounded-2xl p-10 md:p-16 text-center flex flex-col justify-center items-center min-h-[200px] md:min-h-[280px]">
              <div className="text-[clamp(1.25rem,5vw,3.5rem)] font-bold text-amber-burnt mb-3 leading-tight">
                1,60,000 SQ. FT.
              </div>
              <div className="text-[clamp(0.6rem,1.2vw,0.75rem)] uppercase tracking-[0.3em] font-bold text-white/60">
                PRODUCTION AREA
              </div>
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-burnt/5 blur-[100px] -mr-32 -mt-32" />
        </motion.div>
      </div>
    </section>
  );
}
