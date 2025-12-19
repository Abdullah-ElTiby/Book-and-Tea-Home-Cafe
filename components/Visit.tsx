import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Visit: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info */}
        <FadeIn>
          <h2 className="font-serif text-4xl text-brand-white mb-10">Bize Ulaşın</h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-olive w-6 h-6 mt-1" />
              <div>
                <h3 className="text-brand-white font-serif text-xl mb-2">Konum</h3>
                <p className="text-brand-gray font-light">
                  Bağdat Caddesi, No: 128, <br />
                  Kadıköy, İstanbul
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-brand-olive w-6 h-6 mt-1" />
              <div className="w-full max-w-xs">
                <h3 className="text-brand-white font-serif text-xl mb-2">Çalışma Saatleri</h3>
                <div className="flex justify-between text-brand-gray font-light text-sm border-b border-brand-gray/20 py-1">
                  <span>Pzt - Cum</span>
                  <span>08:00 - 20:00</span>
                </div>
                <div className="flex justify-between text-brand-gray font-light text-sm border-b border-brand-gray/20 py-1 mt-2">
                  <span>Cumartesi</span>
                  <span>09:00 - 22:00</span>
                </div>
                <div className="flex justify-between text-brand-gray font-light text-sm border-b border-brand-gray/20 py-1 mt-2">
                  <span>Pazar</span>
                  <span>10:00 - 18:00</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4">
                    <Phone className="text-brand-olive w-6 h-6" />
                    <span className="text-brand-gray font-light">+90 (212) 123 45 67</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <Mail className="text-brand-olive w-6 h-6" />
                    <span className="text-brand-gray font-light">merhaba@bookandtea.com</span>
                 </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Map Placeholder */}
        <FadeIn delay={200} className="h-full min-h-[400px]">
           <div className="w-full h-full bg-brand-gray-dark rounded-xl overflow-hidden relative group">
             {/* Simulating a styled map view */}
             <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/29.0,41.0,12,0/800x600?access_token=YOUR_ACCESS_TOKEN')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity">
                {/* Fallback pattern if no map image available */}
                <div className="w-full h-full bg-[#2a2a2a] flex items-center justify-center">
                   <span className="text-brand-gray tracking-widest text-sm uppercase">Harita Yükleniyor...</span>
                </div>
             </div>
             
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="w-4 h-4 bg-brand-olive rounded-full absolute animate-ping opacity-75"></span>
                  <MapPin className="text-brand-white w-8 h-8 relative z-10 drop-shadow-md" fill="#6E7F5A" />
                </div>
             </div>

             <div className="absolute bottom-6 left-6 right-6 bg-brand-charcoal/90 p-4 rounded backdrop-blur-sm">
                <p className="text-xs text-brand-gray uppercase tracking-wider mb-1">Yol Tarifi</p>
                <a href="#" className="text-brand-white hover:text-brand-olive text-sm font-semibold flex items-center gap-2">
                   Google Haritalarda Gör <span className="text-lg">→</span>
                </a>
             </div>
           </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Visit;