import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Anasayfa', href: '#home' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Menü', href: '#menu' },
  { label: 'Kütüphane', href: '#library' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'İletişim', href: '#visit' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80; // Approximate height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* New Logo Implementation */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col items-center group cursor-pointer"
        >
          <span className="font-serif text-2xl tracking-[0.1em] font-bold text-brand-white leading-none">
            BOOK & TEA
          </span>
          <div className="w-[110%] h-[1px] bg-brand-white my-1 group-hover:bg-brand-olive transition-colors duration-300"></div>
          <span className="font-serif text-lg tracking-wide text-brand-white leading-none group-hover:text-brand-olive transition-colors duration-300">
            Tea House
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-brand-gray hover:text-brand-olive transition-colors font-medium cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, '#visit')}
            className="px-5 py-2 border border-brand-olive text-brand-olive rounded-full text-sm hover:bg-brand-olive hover:text-white transition-all duration-300 cursor-pointer"
          >
            Rezervasyon
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-charcoal border-t border-brand-gray-dark md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl h-screen">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-serif text-brand-white hover:text-brand-olive cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;