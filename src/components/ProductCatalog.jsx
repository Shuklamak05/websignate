import React, { useMemo, useState } from 'react';
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
  return (
    <div
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
      <div
        style={{
          height: '140px',
          borderRadius: '14px',
          background: `linear-gradient(135deg, ${prod.color}15 0%, ${prod.color}25 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px dashed ${prod.color}40`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
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
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-forest)' }}>{prod.name}</h3>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: prod.color, fontStyle: 'italic' }}>{prod.tagline}</span>
      </div>

      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--color-dark-text)',
          opacity: 0.75,
          lineHeight: 1.5,
          minHeight: '65px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}
      >
        {prod.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {prod.indications.slice(0, 2).map((ind) => (
          <span
            key={ind}
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              backgroundColor: 'rgba(1, 42, 28, 0.04)',
              padding: '0.25rem 0.6rem',
              borderRadius: '100px',
              color: 'var(--color-forest)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <CheckCircle2 size={12} style={{ color: prod.color }} /> {ind}
          </span>
        ))}
      </div>

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
            cursor: 'pointer'
          }}
        >
          Formula Specs <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function ShowMoreCard({ categoryId, label }) {
  return (
    <a
      className="glass-card fade-in"
      href={`/?category=${categoryId}#catalog`}
      style={{
        padding: '2rem',
        backgroundColor: 'var(--color-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.9rem',
        borderTop: '4px solid var(--color-forest)',
        textDecoration: 'none'
      }}
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
    </a>
  );
}

export default function ProductCatalog({ selectedProductId, setSelectedProductId }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMainCategoryId, setActiveMainCategoryId] = useState('ruminant');
  const params = new URLSearchParams(window.location.search);
  const selectedCategoryId = params.get('category');
  const selectedCategory = getCategoryById(selectedCategoryId);
  const isCategoryPage = Boolean(selectedCategory);
  const activeMainCategory = getCategoryById(activeMainCategoryId) || CATEGORY_CONFIG[0];

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

  const categoryProducts = useMemo(() => {
    if (!selectedCategory?.productCategory) return [];
    return searchableProducts.filter((prod) => prod.category === selectedCategory.productCategory);
  }, [searchableProducts, selectedCategory]);

  return (
    <section id="catalog" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '2.5px' }}>
            PhD Formulated Supplements
          </span>
          <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
            {isCategoryPage ? selectedCategory.label : 'The Scientific Formulations'}
          </h2>
          <p style={{ maxWidth: '650px', color: 'var(--color-dark-text)', opacity: 0.8, fontSize: '1rem' }}>
            Zero fillers, 100% molecular trace integrity.
          </p>

          <div style={{ position: 'relative', width: '100%', maxWidth: '540px', marginTop: '1.5rem' }}>
            <input
              type="text"
              placeholder="Search formulations by name, active ingredients, or clinical targets..."
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

          {isCategoryPage && (
            <a href="/#catalog" style={{ color: 'var(--color-forest)', fontWeight: 700, textDecoration: 'none' }}>
              Back to All Categories
            </a>
          )}
        </div>

        {!isCategoryPage && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1.6rem',
                backgroundColor: 'rgba(1, 42, 28, 0.03)',
                padding: '0.35rem',
                borderRadius: '100px',
                border: '1px solid rgba(1, 42, 28, 0.06)'
              }}
            >
              {CATEGORY_CONFIG.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveMainCategoryId(cat.id)}
                  style={{
                    padding: '0.55rem 1.4rem',
                    borderRadius: '100px',
                    border: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    backgroundColor: activeMainCategoryId === cat.id ? 'var(--color-forest)' : 'transparent',
                    color: activeMainCategoryId === cat.id ? 'var(--color-white)' : 'var(--color-forest)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <h3 style={{ fontSize: '1.65rem', color: 'var(--color-forest)', marginBottom: '1.2rem' }}>{activeMainCategory.label}</h3>

            {activeMainCategory.id === 'poultry' ? (
              <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--color-forest)', fontSize: '1.25rem' }}>Coming Soon</h4>
              </div>
            ) : (
              (() => {
                const data = searchableProducts.filter((prod) => prod.category === activeMainCategory.productCategory);
                return data.length > 0 ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }} className="product-grid">
                    {data.slice(0, 5).map((prod) => (
                      <ProductCard key={prod.id} prod={prod} setSelectedProductId={setSelectedProductId} />
                    ))}
                    {data.length > 5 && <ShowMoreCard categoryId={activeMainCategory.id} label={activeMainCategory.label} />}
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
        )}

        {isCategoryPage &&
          (selectedCategory.id === 'poultry' ? (
            <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.25rem' }}>Coming Soon</h4>
            </div>
          ) : categoryProducts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }} className="product-grid">
              {categoryProducts.map((prod) => (
                <ProductCard key={prod.id} prod={prod} setSelectedProductId={setSelectedProductId} />
              ))}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
              <AlertCircle size={48} style={{ color: 'var(--color-forest)', opacity: 0.2, marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>No formulations found</h3>
            </div>
          ))}

        {selectedProduct && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(1, 42, 28, 0.4)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} onClick={() => setSelectedProductId(null)} />
            <div
              style={{
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
                    color: 'var(--color-forest)'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-forest)', lineHeight: 1.15 }}>
                  {selectedProduct.name}
                </h3>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: selectedProduct.color, fontStyle: 'italic' }}>{selectedProduct.tagline}</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-dark-text)', opacity: 0.8, lineHeight: 1.6, marginTop: '0.75rem' }}>
                  {selectedProduct.description}
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--color-border)', marginBottom: '1.75rem' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-forest)' }}>
                  Active Biological Composition (Per Serving)
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
                  gap: '0.35rem'
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)', letterSpacing: '0.5px' }}>
                  Veterinary Dosage Guidelines
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', fontWeight: 600, lineHeight: 1.4 }}>{selectedProduct.dosage}</p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProductId(null)}
                className="btn-primary"
                style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--color-forest)', color: 'var(--color-white)', boxShadow: 'none' }}
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
