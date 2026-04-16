import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Instagram } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onInquiryClick: () => void;
}

export default function Footer({ onInquiryClick }: FooterProps) {
  const INSTAGRAM_URL = "https://www.instagram.com/dvn_coach?igsh=N2N2dHg0aDNlYnpk";

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-carbon-matte">
      <div className="max-w-7xl mx-auto border-l border-white/5 pl-8 md:pl-0 md:border-l-0">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-12 pb-20">
          <div className="flex flex-col items-start text-left md:pr-16">
            <div className="mb-8">
              <BrandLogo />
            </div>
            <p className="text-white/40 max-w-md leading-relaxed mb-8">
               A benchmark in premium bus body engineering. From high-capacity Mofussil and
               Town models to bespoke Staff and College transit, we architect vehicles defined by
               structural integrity, safety, and operational efficiency.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={onInquiryClick}
                className="w-10 h-10 glass-card flex items-center justify-center hover:bg-amber-burnt transition-colors group"
              >
                <MessageSquare size={18} />
              </button>
              <a href={`tel:${CONTACT_PHONE}`} className="w-10 h-10 glass-card flex items-center justify-center hover:bg-amber-burnt transition-colors group">
                <Phone size={18} />
              </a>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center hover:bg-amber-burnt transition-colors group"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start text-left md:border-l md:border-white/5 md:pl-16">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/60">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-amber-burnt shrink-0 mt-1" size={18} />
                <span className="text-sm text-white/50 leading-relaxed">
                  X359+HH5, Ramanujam Nagar, <br />
                  Karur, Tamil Nadu 639002
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-amber-burnt shrink-0" size={18} />
                <a href={`tel:${CONTACT_PHONE}`} className="text-sm text-white/50 hover:text-amber-burnt transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-amber-burnt shrink-0" size={18} />
                <a href="mailto:dvncoach@gmail.com" className="text-sm text-white/50 hover:text-amber-burnt transition-colors">
                  dvncoach@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start text-left md:border-l md:border-white/5 md:pl-16">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/60">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Models', 'About', 'Infrastructure', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-white/40 hover:text-amber-burnt transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 -ml-8 md:ml-0 pl-8 md:pl-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 DVN Coach. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
