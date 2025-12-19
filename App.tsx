import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Library from './components/Library';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-white">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Menu />
        <Library />
        <Gallery />
        <Visit />
      </main>

      <Footer />
    </div>
  );
}

export default App;