import React from 'react';
import FadeIn from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                 <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
                  alt="Person reading a book with tea"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-brand-wood/20 rounded-lg pointer-events-none"></div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gray-dark -z-10 rounded-full opacity-50 hidden md:block"></div>
            </FadeIn>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <FadeIn delay={200}>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-white mb-6">
                Bir Çay Evinden <br/>
                <span className="text-brand-wood italic">Daha Fazlası</span>
              </h2>
              <div className="w-16 h-1 bg-brand-olive mb-8"></div>
              
              <div className="space-y-6 text-brand-gray font-light text-lg leading-relaxed">
                <p>
                  <strong className="text-brand-white font-medium">BOOK & TEA</strong>'de, iyi bir hikaye ile sıcak bir fincanın zamansız uyumuna inanıyoruz. Yavaşlama ilkesi üzerine kurulan mekanımız, modern dünyanın dijital gürültüsünden kaçış olacak şekilde tasarlandı.
                </p>
                <p>
                  Her çay yaprağı sürdürülebilir bahçelerden elle seçiliyor ve raflarımızdaki her kitap size ilham vermek, eğitmek ve başka diyarlara götürmek için özenle derlendi. İster yalnız bir çalışma seansı ister sessiz bir sohbet için burada olun, düşüncelerin yeşermesi için gereken atmosferi sağlıyoruz.
                </p>
              </div>

              <div className="mt-10 flex gap-8">
                <div>
                  <span className="block text-3xl font-serif text-brand-white">50+</span>
                  <span className="text-sm uppercase tracking-wider text-brand-olive mt-1 block">Çay Çeşidi</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-brand-white">2k+</span>
                  <span className="text-sm uppercase tracking-wider text-brand-olive mt-1 block">Seçkin Kitap</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;