import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const heroImages = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop", // Original Library
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2670&auto=format&fit=crop", // Tea Detail
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop"  // Bookshelf
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Atmosphere ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Gradient: Darker on left for text readability, clearer on right to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-transparent"></div>
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-charcoal to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-7xl text-brand-white mb-6 leading-tight">
                Kitapların Çayla <br />
                <span className="italic text-brand-wood">Buluştuğu Yer</span>
              </h1>
              <p className="font-sans text-brand-gray text-lg md:text-xl mb-10 font-light leading-relaxed max-w-xl">
                Okumak, düşünmek ve şehrin kalbinde el yapımı çayın tadını çıkarmak için sessiz bir sığınak.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#menu"
                  className="px-8 py-3 bg-brand-olive text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-brand-olive/20 font-medium tracking-wide w-full sm:w-auto text-center"
                >
                  Menüyü Gör
                </a>
                <a
                  href="#visit"
                  className="px-8 py-3 bg-transparent border border-brand-white text-brand-white rounded-full hover:bg-brand-white hover:text-brand-charcoal transition-all duration-300 font-medium tracking-wide w-full sm:w-auto text-center"
                >
                  Bize Ulaşın
                </a>
              </div>
            </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-white/50 z-20">
        <ArrowDown className="w-6 h-6" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentImage 
                ? 'bg-brand-white w-8' 
                : 'bg-brand-white/30 w-4 hover:bg-brand-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;