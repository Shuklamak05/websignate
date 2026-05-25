import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Flame, Zap, CheckCircle2, ChevronRight, X, AlertCircle, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

export default function ProductCatalog({ activeCategory, setActiveCategory, selectedProductId, setSelectedProductId }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Categories list
  const categories = [
    { id: 'all', label: 'All Scientific Range' },
    { id: 'companion', label: 'Companion Animals' },
    { id: 'ruminant', label: 'Ruminants' },
    { id: 'equine', label: 'Equine Wellness' }
  ];

  // Client-side filtering logic
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
      const matchesQuery = 
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  // Find selected product for the detail drawer
  const selectedProduct = useMemo(() => {
    return products.find(p => p.id === selectedProductId);
  }, [selectedProductId]);

  const getIconComponent = (iconName, color) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles style={{ color }} size={24} />;
      case 'Flame':
        return <Flame style={{ color }} size={24} />;
      case 'Zap':
        return <Zap style={{ color }} size={24} />;
      default:
        return <Sparkles style={{ color }} size={24} />;
    }
  };

  return (
    <section id="catalog" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        
        {/* Header Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center',
          marginBottom: '4.5rem'
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '2.5px' }}>
            PhD Formulated Supplements
          </span>
          <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
            The Scientific <span style={{ fontStyle: 'italic' }}>Formulations</span>
          </h2>
          <p style={{ maxWidth: '650px', color: 'var(--color-dark-text)', opacity: 0.8, fontSize: '1rem' }}>
            Zero fillers, 100% molecular trace integrity. Explore our comprehensive veterinary formulations backed by rigorous clinical trials.
          </p>

          {/* Interactive Search Bar */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '540px',
            marginTop: '1.5rem'
          }}>
            <input
              type="text"
              placeholder="Search formulations by name, active ingredients, or clinical targets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '3.25rem',
                fontSize: '0.95rem'
              }}
            />
            <Search
              size={20}
              style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-forest)',
                opacity: 0.5
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1rem',
            backgroundColor: 'rgba(1, 42, 28, 0.03)',
            padding: '0.35rem',
            borderRadius: '100px',
            border: '1px solid rgba(1, 42, 28, 0.06)'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.4rem',
                  borderRadius: '100px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  backgroundColor: activeCategory === cat.id ? 'var(--color-forest)' : 'transparent',
                  color: activeCategory === cat.id ? 'var(--color-white)' : 'var(--color-forest)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }} className="product-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="glass-card fade-in"
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--color-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative',
                  borderTop: `4px solid ${prod.color}`
                }}
              >
                {/* Visual Science Placeholder Gradients */}
                <div style={{
                  height: '140px',
                  borderRadius: '14px',
                  background: `linear-gradient(135deg, ${prod.color}15 0%, ${prod.color}25 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px dashed ${prod.color}40`,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Glowing Molecule Background */}
                  <div style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: prod.color,
                    opacity: 0.1,
                    filter: 'blur(15px)'
                  }} />

                  {/* Stylized Modern Medicine Bottle Placeholder */}
                  <div style={{
                    width: '45px',
                    height: '75px',
                    borderRadius: '6px 6px 4px 4px',
                    border: `2px solid ${prod.color}`,
                    background: 'var(--color-white)',
                    position: 'relative',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {/* Bottle Cap */}
                    <div style={{
                      width: '26px',
                      height: '8px',
                      backgroundColor: prod.color,
                      borderRadius: '2px',
                      position: 'absolute',
                      top: '-9px'
                    }} />
                    {/* Bottle Label */}
                    <div style={{
                      width: '33px',
                      height: '35px',
                      backgroundColor: `${prod.color}15`,
                      border: `1px solid ${prod.color}30`,
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      color: prod.color
                    }}>
                      SG
                    </div>
                  </div>
                  
                  {/* Category floating tag */}
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: prod.color,
                    backgroundColor: 'var(--color-white)',
                    border: `1px solid ${prod.color}40`,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '100px',
                    letterSpacing: '0.5px'
                  }}>
                    {prod.category}
                  </span>
                </div>

                {/* Info Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                    {prod.name}
                  </h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: prod.color, fontStyle: 'italic' }}>
                    {prod.tagline}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-dark-text)',
                  opacity: 0.75,
                  lineHeight: 1.5,
                  minHeight: '65px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {prod.description}
                </p>

                {/* List of Indications (max 2) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {prod.indications.slice(0, 2).map(ind => (
                    <span key={ind} style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      backgroundColor: 'rgba(1, 42, 28, 0.04)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '100px',
                      color: 'var(--color-forest)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <CheckCircle2 size={12} style={{ color: prod.color }} /> {ind}
                    </span>
                  ))}
                  {prod.indications.length > 2 && (
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-forest)', opacity: 0.5, alignSelf: 'center', paddingLeft: '0.25rem' }}>
                      +{prod.indications.length - 2} more
                    </span>
                  )}
                </div>

                <div style={{ borderBottom: '1px solid var(--color-border)', marginTop: 'auto' }} />

                {/* Card CTA Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-dark-text)', opacity: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Clinical Dosage
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                      Scientifically Verified
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProductId(prod.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      border: 'none',
                      backgroundColor: 'var(--color-forest)',
                      color: 'var(--color-white)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      padding: '0.6rem 1.1rem',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = prod.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-forest)';
                    }}
                  >
                    Formula Specs <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
            <AlertCircle size={48} style={{ color: 'var(--color-forest)', opacity: 0.2, marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
              No formulations found
            </h3>
            <p style={{ color: 'var(--color-dark-text)', opacity: 0.6, fontSize: '0.9rem', maxWidth: '440px', margin: '0 auto' }}>
              We could not find any active biological treatments matching "{searchQuery}". Try searching for terms like "Collagen", "Zinc", "Prebiotics", or "Joint".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              style={{
                marginTop: '1.5rem',
                border: 'none',
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-white)',
                padding: '0.6rem 1.5rem',
                borderRadius: '100px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Reset Search Index
            </button>
          </div>
        )}

        {/* ==========================================
            SCIENTIFIC FORMULA DRAWER (SLIDE-OVER SHEET)
            ========================================== */}
        {selectedProduct && (
          <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(1, 42, 28, 0.4)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'flex-end',
            animation: 'scaleUp 0.25s ease-out'
          }}>
            {/* Click-away backdrop */}
            <div
              style={{ position: 'absolute', inset: 0, zIndex: 0 }}
              onClick={() => setSelectedProductId(null)}
            />

            {/* Slide Sheet Content */}
            <div style={{
              width: '100%',
              maxWidth: '560px',
              height: '100%',
              backgroundColor: 'var(--color-white)',
              boxShadow: '-10px 0 50px rgba(0,0,0,0.15)',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              padding: '2.5rem',
              overflowY: 'auto',
              borderLeft: `6px solid ${selectedProduct.color}`
            }}>
              
              {/* Close Button Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: selectedProduct.color,
                  backgroundColor: `${selectedProduct.color}15`,
                  padding: '0.35rem 0.8rem',
                  borderRadius: '100px',
                  letterSpacing: '1px'
                }}>
                  {selectedProduct.category} formulation
                </span>
                <button
                  onClick={() => setSelectedProductId(null)}
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-forest)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.07)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.03)'}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Product Profile Title */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-forest)', lineHeight: 1.15 }}>
                  {selectedProduct.name}
                </h3>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: selectedProduct.color, fontStyle: 'italic' }}>
                  {selectedProduct.tagline}
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-dark-text)', opacity: 0.8, lineHeight: 1.6, marginTop: '0.75rem' }}>
                  {selectedProduct.description}
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--color-border)', marginBottom: '1.75rem' }} />

              {/* Traceable Ingredients List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-forest)' }}>
                  Active Biological Composition (Per Serving)
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProduct.ingredients.map((ing) => (
                    <div key={ing} style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(1, 42, 28, 0.02)',
                      border: '1px solid rgba(1, 42, 28, 0.05)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-forest)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ color: selectedProduct.color }}>✔</span> {ing}
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Benefits Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-forest)' }}>
                  Clinical & Biological Efficacies
                </h4>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProduct.benefits.map((ben, idx) => (
                    <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', opacity: 0.85, lineHeight: 1.5 }}>
                      {ben}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indications Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-forest)' }}>
                  Recommended Indications
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {selectedProduct.indications.map(ind => (
                    <span key={ind} style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      backgroundColor: 'rgba(1, 42, 28, 0.04)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '100px',
                      color: 'var(--color-forest)'
                    }}>
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderBottom: '1px solid var(--color-border)', marginBottom: '1.75rem' }} />

              {/* Dosage footer */}
              <div style={{
                marginTop: 'auto',
                backgroundColor: 'var(--color-sage)',
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(1, 42, 28, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem'
              }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)', letterSpacing: '0.5px' }}>
                  Veterinary Dosage Guidelines
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', fontWeight: 600, lineHeight: 1.4 }}>
                  {selectedProduct.dosage}
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProductId(null)}
                className="btn-primary"
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--color-forest)',
                  color: 'var(--color-white)',
                  boxShadow: 'none'
                }}
              >
                Inquire & Order Formula <ShoppingBag size={16} />
              </a>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
