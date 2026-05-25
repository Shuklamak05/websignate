import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiagnosticDiorama from './components/DiagnosticDiorama';
import ProductCatalog from './components/ProductCatalog';
import ScientificConsultant from './components/ScientificConsultant';
import ServicesShowcase from './components/ServicesShowcase';
import Footer from './components/Footer';

export default function App() {
  // Shared state variables
  const [activeCompanion, setActiveCompanion] = useState('companion');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Quick event handler: triggers catalog filter & opens detailed technical drawer instantly
  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    // Smooth scroll down to the product catalog section
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Glassmorphic Sticky Header */}
      <Navbar />

      {/* Main content divisions */}
      <main style={{ flex: '1 0 auto' }}>
        
        {/* 2. Immersive Hero Banner & Animal Selector */}
        <Hero
          activeCompanion={activeCompanion}
          setActiveCompanion={setActiveCompanion}
        />

        {/* 3. RSPCA-style Interactive Diagnostic Bio-Map */}
        <DiagnosticDiorama
          activeCompanion={activeCompanion}
          setActiveCompanion={setActiveCompanion}
          onProductSelect={handleProductSelect}
        />

        {/* 4. Instant searchable clinical product showcase */}
        <ProductCatalog
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        />

        {/* 5. Scientific Consultant / Dose Calculator */}
        <ScientificConsultant
          onProductSelect={handleProductSelect}
        />

        {/* 6. PhD Bios & Molecular laboratory services */}
        <ServicesShowcase />

      </main>

      {/* 7. Corporate footer with active diagnostic consultation sheet */}
      <Footer />
    </div>
  );
}
