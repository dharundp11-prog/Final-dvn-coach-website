import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUS_MODELS, WHATSAPP_LINK } from '../constants';
import { BusModel } from '../types';
import { X, ArrowUpRight, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BusModels() {
  const [selectedModel, setSelectedModel] = useState<BusModel | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="models" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-amber-burnt font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Vehicle Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              ENGINEERED <br /> VARIANTS
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed">
            Our models are not just designed; they are structurally simulated to ensure maximum safety 
            and operational efficiency across diverse Indian terrains.
          </p>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BUS_MODELS.map((model, index) => (
            <ModelCard 
              key={model.id} 
              model={model} 
              index={index} 
              onClick={() => setSelectedModel(model)}
              mousePos={mousePos}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedModel && (
          <ModelPopup 
            model={selectedModel} 
            onClose={() => setSelectedModel(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

interface ModelCardProps {
  key?: string | number;
  model: BusModel;
  index: number;
  onClick: () => void;
  mousePos: { x: number; y: number };
}

function ModelCard({ model, index, onClick, mousePos }: ModelCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const localMousePos = {
    x: mousePos.x - (cardRef.current?.offsetLeft || 0),
    y: mousePos.y - (cardRef.current?.offsetTop || 0),
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="glass-card group cursor-pointer relative overflow-hidden h-[450px] flex flex-col"
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${localMousePos.x}px ${localMousePos.y}px, rgba(230, 126, 34, 0.08), transparent 40%)`
        }}
      />

      <div className="relative h-64 overflow-hidden">
        <img 
          src={model.imageUrl} 
          alt={model.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-carbon-matte/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {model.type}
          </span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-burnt transition-colors">
            {model.name}
          </h3>
          <p className="text-white/50 text-sm line-clamp-2 leading-relaxed">
            {model.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
              <Info size={14} className="text-white/40" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-burnt group-hover:gap-4 transition-all">
            View Specs
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ModelPopup({ model, onClose }: { model: BusModel; onClose: () => void }) {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6 bg-carbon-matte/90 backdrop-blur-xl overflow-y-auto"
    >
      {/* Backdrop Close Area */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card max-w-4xl w-full my-auto relative z-10 rounded-[24px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Responsive Strategy */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:absolute md:top-6 md:right-6 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/10 shadow-2xl group"
          aria-label="Close modal"
        >
          <X size={24} className="text-white group-hover:scale-110 transition-transform" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-full">
            <img 
              src={model.imageUrl} 
              alt={model.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="text-amber-burnt font-bold text-xs uppercase tracking-widest mb-4">
              Technical Specifications
            </div>
            <h2 className="text-4xl font-bold mb-6">{model.name}</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              {model.description}
            </p>

            <div className="space-y-6 mb-10">
              {Object.entries(model.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-white/5 pb-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                    {key}
                  </div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              ))}
            </div>

            <a
              href={`${WHATSAPP_LINK}?text=I am interested in the ${model.name} model.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-burnt py-4 rounded-xl font-bold uppercase tracking-widest text-center block amber-glow hover:scale-[1.02] transition-transform"
            >
              Request Quote
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
