import React from 'react';

export default function BrandLogo() {
  return (
    <a 
      href="#home" 
      className="inline-flex items-center gap-4 sm:gap-5 bg-[#0A0A0A] border border-white/10 rounded-[24px] p-3 sm:p-4 shadow-[0_4px_20px_rgba(255,191,0,0.15)] group transition-all hover:border-amber-burnt/30 hover:shadow-[0_4px_25px_rgba(255,191,0,0.25)]"
    >
      <img 
        src="https://res.cloudinary.com/dxufff4iw/image/upload/q_auto/f_auto/v1776156067/WhatsApp_Image_2026-04-13_at_15.38.30_drtfms.png" 
        alt="DVN Coach - Karur, Coimbatore" 
        className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      
      {/* Vertical Separator Line */}
      <div className="w-[1px] h-6 bg-amber-burnt/40 shadow-[0_0_8px_rgba(255,191,0,0.4)]" />

      <div className="flex flex-col pr-2">
        <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight uppercase leading-none">
          KARUR
        </span>
        <span className="text-[8px] sm:text-[10px] font-bold text-amber-burnt tracking-[0.25em] uppercase leading-none mt-1 drop-shadow-[0_0_8px_rgba(255,191,0,0.4)]">
          COIMBATORE
        </span>
      </div>
    </a>
  );
}
