import React, { useEffect, useMemo, useState } from 'react';
import { Search, CheckCircle2, ChevronRight, X, AlertCircle, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

const CATEGORY_CONFIG = [
  { id: 'ruminant', label: 'Dairy Cattle', productCategory: 'ruminant' },
  { id: 'companion', label: 'Companion Animals', productCategory: 'companion' },
  { id: 'equine', label: 'Equine', productCategory: 'equine' },
  { id: 'poultry', label: 'Poultry', productCategory: null }
];

const getCategoryById = (id) => CATEGORY_CONFIG.find((cat) => cat.id === id);

function ProductCard({ prod, setSelectedProductId }) {
  const hasImage = Boolean(prod.image);
  const primaryIndications = prod.indications.slice(0, 2);

  return (
    <div
      className="glass-card fade-in"
      onClick={() => setSelectedProductId(prod.id)}
      style={{
        padding: '2rem',
        backgroundColor: 'var(--color-white)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        position: 'relative',
        borderTop: `5px solid ${prod.color}`,
        cursor: 'pointer'
      }}
    >
      <div
        style={{
          height: '180px',
          borderRadius: '14px',
          background: `linear-gradient(135deg, ${prod.color}08 0%, ${prod.color}18 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px dashed ${prod.color}45`,
          position: 'relative',
          overflow: 'hidden',
          padding: hasImage ? '0' : '0.5rem'
        }}
      >
        {prod.image ? (
          <img
            src={prod.image}
            alt={prod.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: prod.packaging_side || 'center',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.72)'
            }}
            className="product-card-image"
          />
        ) : (
          <>
            <div
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: prod.color,
                opacity: 0.1,
                filter: 'blur(15px)'
              }}
            />
            <div
              style={{
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
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '8px',
                  backgroundColor: prod.color,
                  borderRadius: '2px',
                  position: 'absolute',
                  top: '-9px'
                }}
              />
              <div
                style={{
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
                }}
              >
                SG
              </div>
            </div>
          </>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <h3 style={{ fontSize: '1.85rem', fontWeight: 700, color: 'var(--color-forest)', lineHeight: 1.1 }}>{prod.name}</h3>
        <span style={{ fontSize: '1.03rem', fontWeight: 700, color: prod.color, fontStyle: 'italic', lineHeight: 1.45 }}>{prod.tagline}</span>
      </div>

      <p
        style={{
          fontSize: '1rem',
          color: 'var(--color-dark-text)',
          opacity: 0.72,
          lineHeight: 1.55,
          minHeight: '74px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}
      >
        {prod.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
        {primaryIndications.map((ind) => (
          <span
            key={ind}
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              backgroundColor: 'rgba(1, 42, 28, 0.045)',
              padding: '0.4rem 0.75rem',
              borderRadius: '100px',
              color: 'var(--color-forest)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <CheckCircle2 size={14} style={{ color: prod.color }} /> {ind}
          </span>
        ))}
      </div>

      {prod.pack_sizes && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginTop: '-0.3rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-forest)', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pack Sizes:</span>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-dark-text)', opacity: 0.85 }}>{prod.pack_sizes}</span>
        </div>
      )}

      <div style={{ borderBottom: '1px solid var(--color-border)', marginTop: 'auto' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span
            style={{
              fontSize: '0.7rem',
              color: 'var(--color-dark-text)',
              opacity: 0.5,
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Clinical Dosage
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-forest)' }}>Scientifically Verified</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedProductId(prod.id);
          }}
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
            cursor: 'pointer'
          }}
        >
          Formula Specs <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function ShowMoreCard({ onClick, label }) {
  return (
    <button
      className="glass-card fade-in"
      type="button"
      style={{
        padding: '2rem',
        backgroundColor: 'var(--color-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.9rem',
        borderTop: '4px solid var(--color-forest)',
        textDecoration: 'none',
        width: '100%',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <h4 style={{ fontSize: '1.1rem', color: 'var(--color-forest)', fontWeight: 700, textAlign: 'center' }}>View All {label} Products</h4>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: 'none',
          backgroundColor: 'var(--color-forest)',
          color: 'var(--color-white)',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '0.65rem 1.2rem',
          borderRadius: '100px'
        }}
      >
        Show More <ChevronRight size={16} />
      </span>
    </button>
  );
}

function ShowLessCard({ onClick, label }) {
  return (
    <button
      className="glass-card fade-in"
      type="button"
      style={{
        padding: '2rem',
        backgroundColor: 'var(--color-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.9rem',
        borderTop: '4px solid var(--color-gold)',
        textDecoration: 'none',
        width: '100%',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <h4 style={{ fontSize: '1.1rem', color: 'var(--color-forest)', fontWeight: 700, textAlign: 'center' }}>Collapse {label}</h4>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '2px solid var(--color-forest)',
          backgroundColor: 'transparent',
          color: 'var(--color-forest)',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '0.65rem 1.2rem',
          borderRadius: '100px'
        }}
      >
        Show Less
      </span>
    </button>
  );
}

export default function ProductCatalog({ selectedProductId, setSelectedProductId }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMainCategoryId, setActiveMainCategoryId] = useState(() => {
    const categoryParam = new URLSearchParams(window.location.search).get('category');
    return getCategoryById(categoryParam)?.id || 'ruminant';
  });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(() => new URLSearchParams(window.location.search).get('expanded') === 'true');

  useEffect(() => {
    const syncFromLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get('category');
      setActiveMainCategoryId(getCategoryById(categoryParam)?.id || 'ruminant');
      setIsCategoryExpanded(params.get('expanded') === 'true');
    };

    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  const activeMainCategory = getCategoryById(activeMainCategoryId) || CATEGORY_CONFIG[0];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('category', activeMainCategoryId);

    if (isCategoryExpanded) {
      params.set('expanded', 'true');
    } else {
      params.delete('expanded');
    }

    window.history.replaceState(
      { category: activeMainCategoryId, expanded: isCategoryExpanded },
      '',
      `${window.location.pathname}?${params.toString()}${window.location.hash || '#catalog'}`
    );
  }, [activeMainCategoryId, isCategoryExpanded]);

  const searchableProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase();
    return products.filter(
      (prod) =>
        prod.name.toLowerCase().includes(q) ||
        prod.tagline.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        prod.ingredients.some((ing) => ing.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const selectedProduct = useMemo(() => products.find((p) => p.id === selectedProductId), [selectedProductId]);

  const CategoryTogglePills = () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1rem',
        backgroundColor: 'rgba(1, 42, 28, 0.03)',
        padding: '0.35rem',
        borderRadius: '100px',
        border: '1px solid rgba(1, 42, 28, 0.06)'
      }}
    >
      {CATEGORY_CONFIG.map((cat) => {
        const isActive = activeMainCategoryId === cat.id;
        const commonStyle = {
          padding: '0.55rem 1.4rem',
          borderRadius: '100px',
          border: 'none',
          fontSize: '0.85rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'var(--transition-smooth)',
          backgroundColor: isActive ? 'var(--color-forest)' : 'transparent',
          color: isActive ? 'var(--color-white)' : 'var(--color-forest)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center'
        };

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setActiveMainCategoryId(cat.id);
              setIsCategoryExpanded(false);
            }}
            style={commonStyle}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
  return (
    <section id="catalog" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', paddingBottom: 0 }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', textAlign: 'center', marginBottom: '4.5rem' }}>
          <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
            PRODUCTS
          </h2>

          <div style={{ position: 'relative', width: '100%', maxWidth: '540px', marginTop: '1.5rem' }}>
            <input
              type="text"
              placeholder="Search formulations by name, active ingredients,"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '3.25rem', fontSize: '0.95rem' }}
            />
            <Search
              size={20}
              style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-forest)', opacity: 0.5 }}
            />
          </div>
        </div>

        <div style={{ marginBottom: 0 }}>
          <div style={{ marginBottom: '1.6rem' }}>
            <CategoryTogglePills />
          </div>

          <h3 style={{ fontSize: '1.65rem', color: 'var(--color-forest)', marginBottom: '1.2rem' }}>{activeMainCategory.label}</h3>

          {activeMainCategory.id === 'poultry' ? (
            <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.25rem' }}>Coming Soon</h4>
            </div>
          ) : (
            (() => {
              const data = searchableProducts.filter((prod) => prod.category === activeMainCategory.productCategory);
              const displayed = isCategoryExpanded ? data : data.slice(0, 5);
              return data.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }} className="product-grid">
                  {displayed.map((prod) => (
                    <ProductCard key={prod.id} prod={prod} setSelectedProductId={setSelectedProductId} />
                  ))}
                  {!isCategoryExpanded && data.length > 5 && (
                    <ShowMoreCard onClick={() => setIsCategoryExpanded(true)} label={activeMainCategory.label} />
                  )}
                  {isCategoryExpanded && data.length > 5 && (
                    <ShowLessCard
                      onClick={() => {
                        setIsCategoryExpanded(false);
                        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      label={activeMainCategory.label}
                    />
                  )}
                </div>
              ) : (
                <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
                  <AlertCircle size={48} style={{ color: 'var(--color-forest)', opacity: 0.2, marginBottom: '1.25rem' }} />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>No formulations found</h3>
                </div>
              );
            })()
          )}
        </div>

        {selectedProduct && (
          <div className="drawer-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} onClick={() => { setSelectedProductId(null); setIsLightboxOpen(false); }} />
            <div
              className="drawer-content"
              style={{
                width: '100%',
                maxWidth: '1000px',
                height: '100%',
                backgroundColor: 'var(--color-white)',
                boxShadow: '-10px 0 50px rgba(0,0,0,0.15)',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden',
                borderLeft: `6px solid ${selectedProduct.color}`
              }}
            >
              {/* Left pane: Show the detailed brochure panel image */}
              {selectedProduct.image && (
                <div
                  className="modal-left-pane"
                  style={{
                    flex: '1.2 1.2 52%',
                    backgroundColor: 'var(--color-ivory)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    borderRight: '1px solid rgba(1, 42, 28, 0.08)',
                    overflowY: 'auto',
                    gap: '1.5rem'
                  }}
                >
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} brochure panel`}
                    style={{
                      width: '100%',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 8px 24px rgba(1, 42, 28, 0.08)',
                      border: '1px solid rgba(1, 42, 28, 0.08)'
                    }}
                  />
                  {selectedProduct.image && (
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        border: '2px solid var(--color-forest)',
                        backgroundColor: 'transparent',
                        color: 'var(--color-forest)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        padding: '0.6rem 1.25rem',
                        borderRadius: '100px',
                        cursor: 'pointer',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      View Full Brochure Page
                    </button>
                  )}
                </div>
              )}

              {/* Right pane: Technical specifications text details */}
              <div
                className="modal-right-pane"
                style={{
                  flex: '0.8 0.8 48%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.5rem',
                  overflowY: 'auto'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: selectedProduct.color,
                      backgroundColor: `${selectedProduct.color}15`,
                      padding: '0.35rem 0.8rem',
                      borderRadius: '100px',
                      letterSpacing: '1px'
                    }}
                  >
                    {selectedProduct.category} formulation
                  </span>
                  <button
                    onClick={() => { setSelectedProductId(null); setIsLightboxOpen(false); }}
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
                      color: 'var(--color-forest)'
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-forest)', lineHeight: 1.15 }}>
                    {selectedProduct.name}
                  </h3>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: selectedProduct.color, fontStyle: 'italic' }}>{selectedProduct.tagline}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-dark-text)', opacity: 0.8, lineHeight: 1.6, marginTop: '0.5rem' }}>
                    {selectedProduct.description}
                  </p>
                </div>

                {selectedProduct.pack_sizes && (
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      backgroundColor: 'rgba(1, 42, 28, 0.02)',
                      padding: '1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(1, 42, 28, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)', letterSpacing: '0.5px' }}>
                      Available Pack Sizes
                    </span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-dark-text)' }}>
                      {selectedProduct.pack_sizes}
                    </span>
                  </div>
                )}

                <div style={{ borderBottom: '1px solid var(--color-border)', marginBottom: '1.5rem' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-forest)' }}>
                    Composition
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {selectedProduct.ingredients.map((ing) => (
                      <div
                        key={ing}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(1, 42, 28, 0.02)',
                          border: '1px solid rgba(1, 42, 28, 0.05)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--color-forest)'
                        }}
                      >
                        {ing}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 'auto',
                    backgroundColor: 'var(--color-sage)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(1, 42, 28, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)', letterSpacing: '0.5px' }}>
                    Veterinary Dosage Guidelines
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', fontWeight: 600, lineHeight: 1.4 }}>{selectedProduct.dosage}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href="#contact"
                    onClick={() => { setSelectedProductId(null); setIsLightboxOpen(false); }}
                    className="btn-primary"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--color-forest)', color: 'var(--color-white)', boxShadow: 'none' }}
                  >
                    Inquire & Order Formula <ShoppingBag size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lightbox for full brochure page viewing */}
        {isLightboxOpen && selectedProduct?.image && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 3000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            {/* Close area */}
            <div
              style={{ position: 'absolute', inset: 0, zIndex: 0 }}
              onClick={() => setIsLightboxOpen(false)}
            />
            
            {/* Lightbox content */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '90%',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                style={{
                  position: 'absolute',
                  top: '-2.5rem',
                  right: 0,
                  border: 'none',
                  background: 'none',
                  color: 'var(--color-white)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <X size={20} /> Close
              </button>
              
              <img
                src={selectedProduct.image}
                alt={`Product Image for ${selectedProduct.name}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}
              />
              
              <span style={{ color: 'var(--color-white)', opacity: 0.7, fontSize: '0.85rem', textAlign: 'center' }}>
                Product Image Preview
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
