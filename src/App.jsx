import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductCatalog from './components/ProductCatalog';
import ServicesShowcase from './components/ServicesShowcase';
import Footer from './components/Footer';

export default function App() {
  // Shared state variables
  const [activeCategory, setActiveCategory] = useState('ruminant');
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Glassmorphic Sticky Header */}
      <Navbar />

      {/* Main content divisions */}
      <main style={{ flex: '1 0 auto' }}>
        
        {/* 2. Homepage Hero */}
        <Hero />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Instant searchable clinical product showcase */}
        <ProductCatalog
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        />

        {/* 5. PhD Bios & Molecular laboratory services */}
        <ServicesShowcase />

      </main>

      {/* 7. Corporate footer with active diagnostic consultation sheet */}
      <Footer />
    </div>
  );
}
