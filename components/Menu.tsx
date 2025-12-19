import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  // --- COLD DRINKS ---
  // Mocktails
  { id: 'm1', name: 'Snowblind', price: '150 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'MOCKTAILS' },
  { id: 'm2', name: 'Sweet Leaf', price: '150 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'MOCKTAILS' },
  { id: 'm3', name: 'Heaven & Hell', price: '150 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'MOCKTAILS' },
  { id: 'm4', name: 'Changes', price: '150 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'MOCKTAILS' },
  { id: 'm5', name: 'Sabra Cadabra', price: '150 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'MOCKTAILS' },
  // Lemonades
  { id: 'l1', name: 'Sade Limonata', price: '110 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'LİMONATALAR' },
  { id: 'l2', name: 'Naneli Limonata', price: '110 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'LİMONATALAR' },
  { id: 'l3', name: 'Muz–Maydanoz', price: '110 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'LİMONATALAR' },
  { id: 'l4', name: 'Yaban Mersinli', price: '110 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'LİMONATALAR' },
  { id: 'l5', name: 'Çilekli', price: '110 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'LİMONATALAR' },
  { id: 'l6', name: 'Böğürtlenli', price: '110 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'LİMONATALAR' },
  // Soft Drinks
  { id: 's1', name: 'Su', price: '40 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'SOFT İÇECEKLER' },
  { id: 's2', name: 'Soda', price: '70 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'SOFT İÇECEKLER' },
  { id: 's3', name: 'Churchil', price: '70 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'SOFT İÇECEKLER' },
  // Bubble Tea
  { id: 'bt1', name: 'Mango Passion', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE TEA' },
  { id: 'bt2', name: 'Blueberry', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE TEA' },
  { id: 'bt3', name: 'Butterfly Lemon', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE TEA' },
  { id: 'bt4', name: 'Hibiscus Berry', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE TEA' },
  { id: 'bt5', name: 'Cool Peach', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE TEA' },
  { id: 'bt6', name: 'On The Beach', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE TEA' },
  { id: 'bt7', name: 'Lime Chill', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE TEA' },
  // Bubble Frozen
  { id: 'bf1', name: 'Matcha Strawberry', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE FROZEN' },
  { id: 'bf2', name: 'Raspberry Lemon', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE FROZEN' },
  { id: 'bf3', name: 'Pineapple Mango', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE FROZEN' },
  { id: 'bf4', name: 'Glögg', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE FROZEN' },
  // Bubble Gum
  { id: 'bg1', name: 'Ice King', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE GUM' },
  { id: 'bg2', name: 'Princess Bubble Gum', price: '160 TL', category: 'SOĞUK İÇECEKLER', subcategory: 'BUBBLE GUM' },

  // --- SWEETS ---
  // Desserts
  { id: 'd1', name: 'Mozaik Pasta', price: '150 TL', category: 'TATLILAR', subcategory: 'TATLILAR' },
  { id: 'd2', name: 'Vişneli Kara Orman Pasta', price: '180 TL', category: 'TATLILAR', subcategory: 'TATLILAR' },
  { id: 'd3', name: 'Cookie', price: '110 TL', category: 'TATLILAR', subcategory: 'TATLILAR' },
  { id: 'd4', name: 'Yaban Mersinli Pasta', price: '170 TL', category: 'TATLILAR', subcategory: 'TATLILAR' },
  { id: 'd5', name: 'Apple Pie', price: '150 TL', category: 'TATLILAR', subcategory: 'TATLILAR' },
  // San Sebastian
  { id: 'ss1', name: 'San Sebastian Cheesecake', price: '190 TL', category: 'TATLILAR', subcategory: 'SAN SEBASTIAN' },
  // Combo
  { id: 'c1', name: 'Cookie + Filtre Kahve', price: '190 TL', category: 'TATLILAR', subcategory: 'COMBO' },

  // --- FOOD ---
  // Toasts
  { id: 't1', name: 'Kaşarlı Tost', price: '150 TL', category: 'YİYECEKLER', subcategory: 'TOSTLAR' },
  { id: 't2', name: 'Sucuklu Kaşarlı Tost', price: '170 TL', category: 'YİYECEKLER', subcategory: 'TOSTLAR' },
  { id: 't3', name: 'Otlu 3 Peynirli Tost', price: '170 TL', category: 'YİYECEKLER', subcategory: 'TOSTLAR' },
  { id: 't4', name: 'Nutella Tost', price: '150 TL', category: 'YİYECEKLER', subcategory: 'TOSTLAR' },

  // --- TEA ---
  // Herbal
  { id: 'ht1', name: 'Ayurveda', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BİTKİ ÇAYLARI' },
  { id: 'ht2', name: 'Get The Power', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BİTKİ ÇAYLARI' },
  { id: 'ht3', name: 'Chill Out With Herbs', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BİTKİ ÇAYLARI' },
  { id: 'ht4', name: 'Fruit Camomile', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BİTKİ ÇAYLARI' },
  { id: 'ht5', name: 'Let’s Flammage', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BİTKİ ÇAYLARI' },
  // Rooibos
  { id: 'rb1', name: 'Rooibos Hot Chocolate', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'ROOIBOS ÇAYLARI' },
  { id: 'rb2', name: 'Rooibos Caramel', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'ROOIBOS ÇAYLARI' },
  { id: 'rb3', name: 'Rooibos Cranberry & Vanilla', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'ROOIBOS ÇAYLARI' },
  // Fruit Tea
  { id: 'ft1', name: 'Mango’n Friends', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'MEYVE ÇAYLARI' },
  { id: 'ft2', name: 'Lilac Coconut', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'MEYVE ÇAYLARI' },
  { id: 'ft3', name: 'Pina Colada', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'MEYVE ÇAYLARI' },
  // White Tea
  { id: 'wt1', name: 'Lady T', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BEYAZ ÇAYLAR' },
  { id: 'wt2', name: 'White Melon', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BEYAZ ÇAYLAR' },
  { id: 'wt3', name: 'Chinese Spring', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BEYAZ ÇAYLAR' },
  { id: 'wt4', name: 'Creamy Jasmine', description: 'Tek Kişilik / Çift Kişilik', price: '45 / 60 TL', category: 'ÇAYLAR', subcategory: 'BEYAZ ÇAYLAR' },
  // Green Tea
  { id: 'gt1', name: 'Green Leaf', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'YEŞİL ÇAYLAR' },
  { id: 'gt2', name: 'Morgenta', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'YEŞİL ÇAYLAR' },
  { id: 'gt3', name: 'Jasmine Pearls', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'YEŞİL ÇAYLAR' },
  { id: 'gt4', name: 'Huckleberry Friend', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'YEŞİL ÇAYLAR' },
  { id: 'gt5', name: 'Sencha Goji Berry', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'YEŞİL ÇAYLAR' },
  { id: 'gt6', name: 'Sakura Cherry', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'YEŞİL ÇAYLAR' },
  { id: 'gt7', name: 'Matcha', price: '45 TL', category: 'ÇAYLAR', subcategory: 'YEŞİL ÇAYLAR' },
  // Black Tea
  { id: 'bkt1', name: 'Geleneksel Türk Çayı', description: 'Bardak / Fincan', price: '15 / 20 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },
  { id: 'bkt2', name: 'Earl Grey', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },
  { id: 'bkt3', name: 'Masala Chai', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },
  { id: 'bkt4', name: 'Irish Whiskey Cream', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },
  { id: 'bkt5', name: 'Black Vanilla', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },
  { id: 'bkt6', name: 'Black Mango', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },
  { id: 'bkt7', name: 'Emperor’s Seven', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },
  { id: 'bkt8', name: 'Chocolate Truffle', description: 'Tek Kişilik / Çift Kişilik', price: '38 / 55 TL', category: 'ÇAYLAR', subcategory: 'SİYAH ÇAYLAR' },

  // --- EXTRAS ---
  { id: 'ex1', name: 'Extra Shot', price: '40 TL', category: 'EKSTRALAR', subcategory: 'EKSTRALAR' },
  { id: 'ex2', name: 'Extra Şurup / Püre / Çikolata / Süt', price: '10 TL', category: 'EKSTRALAR', subcategory: 'EKSTRALAR' },
  { id: 'ex3', name: 'Extra Bubble', price: '40 TL', category: 'EKSTRALAR', subcategory: 'EKSTRALAR' },
];

const categories = ['ÇAYLAR', 'SOĞUK İÇECEKLER', 'TATLILAR', 'YİYECEKLER', 'EKSTRALAR'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ÇAYLAR');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  // Group items by subcategory for cleaner display
  const groupedItems = filteredItems.reduce((acc, item) => {
    const sub = item.subcategory || 'Genel';
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <section id="menu" className="py-24 bg-brand-gray-dark min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brand-white mb-4">Menümüz</h2>
            <p className="text-brand-gray">Sizin için taze hazırlandı.</p>
            
            {/* Category Tabs */}
            <div className="flex justify-center gap-4 mt-10 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm uppercase tracking-widest py-2 px-6 rounded-full border transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-brand-olive border-brand-olive text-white shadow-lg' 
                      : 'bg-transparent border-brand-gray/30 text-brand-gray hover:border-brand-white hover:text-brand-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {Object.entries(groupedItems).map(([subcategory, items], groupIndex) => (
            <FadeIn key={subcategory} delay={groupIndex * 100}>
              <div className="mb-8">
                <h3 className="text-brand-wood font-serif text-2xl mb-6 border-b border-brand-gray/20 pb-2 inline-block pr-8">
                  {subcategory}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="group relative py-1">
                        <div className="flex items-end justify-between">
                            <div className="relative z-10 pr-2 bg-brand-gray-dark">
                                <h4 className="font-serif text-lg text-brand-white group-hover:text-brand-olive transition-colors duration-300 inline-block">
                                    {item.name}
                                </h4>
                            </div>

                            {/* Corrected Leader Line: Flex grow to fill space instead of absolute positioning */}
                            <div className="flex-grow border-b border-dotted border-brand-gray/30 mb-2 mx-2"></div>

                            <div className="relative z-10 pl-2 bg-brand-gray-dark shrink-0">
                                <span className="text-brand-white/90 font-medium font-sans tracking-wide">
                                    {item.price}
                                </span>
                            </div>
                        </div>
                        {item.description && (
                            <p className="text-brand-gray text-xs mt-0.5 italic opacity-70">
                                {item.description}
                            </p>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={400}>
          <div className="mt-20 text-center border-t border-brand-gray/10 pt-8">
            <p className="text-brand-gray italic text-sm">
              * Tüm fiyatlar TL cinsindendir. Lütfen alerjileriniz konusunda personelimizi bilgilendiriniz.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Menu;