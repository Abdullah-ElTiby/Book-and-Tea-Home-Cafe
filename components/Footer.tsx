import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-gray/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
           <div className="flex flex-col items-center md:items-start group mb-2">
            <span className="font-serif text-xl tracking-[0.1em] font-bold text-brand-white leading-none">
                BOOK & TEA
            </span>
            <div className="w-full h-[1px] bg-brand-white my-1"></div>
            <span className="font-serif text-sm tracking-wide text-brand-white leading-none">
                Tea House
            </span>
          </div>
          <p className="text-xs text-brand-gray tracking-wider mt-2">Bağdat Caddesi'nin en sakin köşesi.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-brand-gray hover:text-brand-olive transition-colors transform hover:-translate-y-1">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-brand-gray hover:text-brand-olive transition-colors transform hover:-translate-y-1">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-brand-gray hover:text-brand-olive transition-colors transform hover:-translate-y-1">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="text-brand-gray text-sm font-light">
          &copy; {new Date().getFullYear()} Book & Tea. Tüm hakları saklıdır.
        </div>

      </div>
    </footer>
  );
};

export default Footer;