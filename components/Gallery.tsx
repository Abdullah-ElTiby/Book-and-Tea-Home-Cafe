import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import FadeIn from './ui/FadeIn';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  className?: string; // Tailwind classes for grid positioning
}

const galleryItems: GalleryItem[] = [
  { 
    id: '1', 
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop', 
    alt: 'Huzurlu Köşeler', 
    className: 'md:col-span-2 md:row-span-2' // Large main image
  },
  { 
    id: '2', 
    src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop', 
    alt: 'Kitap & Çay',
    className: 'md:col-span-1 md:row-span-2' // Extended to fill the column
  },
  // Removed 'Kütüphane' image as requested
  { 
    id: '4', 
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop', 
    alt: 'Çay Ritüeli',
    className: 'md:col-span-1 md:row-span-1'
  },
  { 
    id: '5', 
    src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200&auto=format&fit=crop', 
    alt: 'Sessiz Okuma',
    className: 'md:col-span-2 md:row-span-1' // Wide image
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Lock body scroll when lightbox is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-brand-charcoal relative">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
            <FadeIn>
                <h2 className="font-serif text-5xl text-brand-white mb-4">
                    <span className="italic text-brand-wood">Atmosfer</span>
                </h2>
                <div className="w-24 h-1 bg-brand-olive mb-6 mx-auto"></div>
                <p className="text-brand-gray font-light max-w-2xl text-lg mx-auto">
                    Zamanın yavaşladığı, her köşesinde bir hikayenin saklı olduğu mekanımızı keşfedin.
                </p>
            </FadeIn>
        </div>

        {/* Mosaic Grid */}
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
                {galleryItems.map((img, idx) => (
                    <FadeIn 
                        key={img.id} 
                        delay={idx * 100} 
                        className={`relative group overflow-hidden rounded-lg cursor-pointer shadow-lg ${img.className || ''}`}
                    >
                        <div onClick={() => setSelectedImage(img)} className="h-full w-full relative">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-charcoal/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                                <ZoomIn className="text-brand-white w-8 h-8 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100" />
                                <span className="text-brand-white font-serif tracking-widest text-xl border-b border-brand-olive pb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
            <div 
                className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                onClick={() => setSelectedImage(null)}
            >
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 text-brand-white/70 hover:text-brand-white transition-colors p-2 z-50 bg-brand-charcoal/50 rounded-full"
                    aria-label="Kapat"
                >
                    <X size={32} />
                </button>
                <div 
                    className="max-w-6xl w-full max-h-[90vh] relative flex flex-col items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                >
                    <img 
                        src={selectedImage.src} 
                        alt={selectedImage.alt} 
                        className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
                    />
                    <div className="mt-6 text-center">
                        <h3 className="text-brand-white font-serif text-3xl tracking-wide mb-2">
                            {selectedImage.alt}
                        </h3>
                        <p className="text-brand-olive text-sm uppercase tracking-widest">
                           Book & Tea Gallery
                        </p>
                    </div>
                </div>
            </div>
        )}
    </section>
  );
};

export default Gallery;