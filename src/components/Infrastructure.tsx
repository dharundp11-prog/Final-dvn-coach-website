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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Facility Boxes */}
          <div className="flex flex-col gap-6">
            {INFRASTRUCTURE.map((item, index) => {
              const IconComponent = (Icons as any)[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 group hover:bg-white/[0.05] transition-colors flex items-center gap-8"
                >
                  <div className="shrink-0 w-16 h-16 bg-amber-burnt/10 border border-amber-burnt/20 rounded-xl flex items-center justify-center group-hover:bg-amber-burnt group-hover:text-white transition-all duration-500">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Fabrication Image with Floating Data Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" 
                alt="Precision Engineering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-70"
              />
              
              {/* Overlays - Aligned with AboutUs section styling */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 glass-card p-6 lg:p-10 backdrop-blur-xl border-white/10 shadow-2xl">
                <div className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold mb-1 leading-none">ZERO</div>
                <div className="text-[clamp(0.6rem,1.2vw,0.85rem)] uppercase tracking-[0.2em] font-bold text-white/60">Compliance Failures</div>
              </div>

              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 glass-card p-6 lg:p-10 backdrop-blur-xl border-amber-burnt/20 shadow-[0_0_50px_rgba(255,184,0,0.15)]">
                <div className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold text-amber-burnt mb-1 leading-none">98%</div>
                <div className="text-[clamp(0.6rem,1.2vw,0.85rem)] uppercase tracking-[0.2em] font-bold text-white/60">Structural Safety</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-32 md:mt-48 p-6 md:p-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-24 items-stretch max-w-7xl mx-auto">
            {/* Left Column (40%): The Info Stack */}
            <div className="flex flex-col text-left">
              <div className="mb-10 lg:mb-12">
                <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Integrated Production Layout</h3>
                <p className="text-white/60 leading-relaxed text-lg max-w-xl">
                  We bridge the gap between heavy fabrication and refined finishing through 
                  an optimized layout. By monitoring every stage via precision-timed quality gates, 
                  we ensure that every DVN build meets AIS-standard compliance before it hits the road.
                </p>
              </div>
              
              {/* Capacity Card - Expanded to match Right Column height and centered */}
              <div className="flex-grow bg-amber-burnt/5 border border-amber-burnt/10 rounded-2xl p-10 lg:p-14 flex flex-col justify-center items-center text-center group hover:bg-amber-burnt/[0.08] transition-all duration-500 shadow-2xl relative overflow-hidden">
                {/* Subtle internal glow */}
                <div className="absolute inset-0 bg-radial-gradient from-amber-burnt/5 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-[clamp(2rem,6vw,4rem)] font-bold text-amber-burnt mb-4 leading-tight tracking-[0.05em] drop-shadow-[0_10px_20px_rgba(255,184,0,0.2)]">
                    1,60,000 SQ. FT.
                  </div>
                  <div className="text-[12px] md:text-sm uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white/70 transition-colors">
                    PRODUCTION AREA CAPACITY
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (60%): Scaled-Down Technical Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {[
                { 
                  title: 'CAD/CAM DESIGN', 
                  img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
                  alt: 'Engineer working on CAD'
                },
                { 
                  title: 'HYDRAULIC PRESSING', 
                  img: 'https://images.unsplash.com/photo-1621345474387-f823f66810c9?auto=format&fit=crop&q=80&w=800',
                  alt: 'Heavy duty press machine'
                },
                { 
                  title: 'ARC WELDING', 
                  img: 'https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800',
                  alt: 'Precision TIG welding'
                },
                { 
                  title: 'LEAK TESTING', 
                  img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800',
                  alt: 'Water leakage testing'
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                  <div className="aspect-[4/3] w-full max-w-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                    <img 
                      src={item.img} 
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-amber-burnt transition-colors text-left pl-1">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
          
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-burnt/5 blur-[100px] -mr-32 -mt-32" />
      </div>
    </section>
  );
}
