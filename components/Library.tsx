import React from 'react';
import FadeIn from './ui/FadeIn';

const Library: React.FC = () => {
  return (
    <section id="library" className="py-24 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
             <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-white mb-6">
                Seçkin <span className="text-brand-wood">Kütüphane</span>
              </h2>
              <p className="text-brand-gray text-lg mb-8 font-light">
                Raflarımız özenle seçilmiş klasikler, felsefe, sanat ve şiir koleksiyonlarıyla dolu. Sizi bir kitap seçmeye, bir köşe bulmaya ve dünyadan kopmaya davet ediyoruz.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Sessiz Okuma Alanları",
                  "Çalışmak İçin Ücretsiz Wi-Fi",
                  "Kitap Takas Topluluğu",
                  "Aylık Edebiyat Söyleşileri"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-brand-white">
                    <span className="w-2 h-2 bg-brand-olive rounded-full mr-4"></span>
                    <span className="font-sans font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-brand-wood pl-6 italic text-brand-gray mb-8">
                "Kitapsız bir oda, ruhsuz bir beden gibidir." 
                <footer className="mt-2 text-sm text-brand-olive not-italic">— Marcus Tullius Cicero</footer>
              </blockquote>
             </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <FadeIn delay={200} className="space-y-4 mt-8">
               <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1998&auto=format&fit=crop" 
                alt="Bookshelf" 
                className="w-full h-64 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
               <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop" 
                alt="Open book" 
                className="w-full h-40 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
             </FadeIn>
             <FadeIn delay={400} className="space-y-4">
               <img 
                src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1974&auto=format&fit=crop" 
                alt="Reading corner" 
                className="w-full h-40 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
               <img 
                src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop" 
                alt="Library interior" 
                className="w-full h-64 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Library;