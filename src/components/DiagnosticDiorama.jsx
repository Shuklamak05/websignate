import React, { useState } from 'react';
import { ShieldCheck, Heart, Activity, ArrowRight, AlertCircle, Info } from 'lucide-react';
import { products } from '../data/products';

export default function DiagnosticDiorama({ activeCompanion, setActiveCompanion, onProductSelect }) {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  // Hotspots definitions per animal category
  const hotspotsData = {
    companion: [
      {
        id: 'comp-joints',
        name: 'Articular Joints & Cartilage',
        x: '75%', y: '68%',
        problem: 'Proteoglycan erosion, cartilage thinning, and bone rubbing under heavy impact or aging.',
        solution: 'CollaSig BJ Pro',
        productId: 'collasig-bj-pro',
        actives: ['Type II Bioactive Collagen Peptides', 'Glucosamine HCl', 'Hyaluronic Acid']
      },
      {
        id: 'comp-skin',
        name: 'Dermal Epidermis & Coat',
        x: '48%', y: '35%',
        problem: 'Allergen penetration, excessive shedding, dry alopecia, and broken epidermal skin barrier.',
        solution: 'CollaSig SH Pro',
        productId: 'collasig-sh-pro',
        actives: ['Marine Collagen Peptides', 'Chelated Zinc Glycinate', 'High-purity Biotin']
      },
      {
        id: 'comp-gut',
        name: 'Intestinal Microbiome',
        x: '38%', y: '58%',
        problem: 'Pathogenic bacterial colonization, bowel inflammation (IBD), and flatulence post-antibiotics.',
        solution: 'SigProe',
        productId: 'sigproe',
        actives: ['5 Billion Micro-encapsulated CFUs', 'FOS Prebiotics', 'Amylase Enzymes']
      },
      {
        id: 'comp-brain',
        name: 'Cognitive & Cardiovascular System',
        x: '18%', y: '30%',
        problem: 'Cognitive Dysfunction Syndrome (CDS), sleep disruptions, and cardiovascular lipid peroxidation.',
        solution: 'SenCare',
        productId: 'sencare',
        actives: ['Coenzyme Q10', 'Ginkgo Biloba Extract', 'Resveratrol Antioxidants']
      }
    ],
    ruminant: [
      {
        id: 'rum-udder',
        name: 'Somatic Cell & Udder Defenses',
        x: '62%', y: '70%',
        problem: 'Pathogenic entry into the teat canal leading to mastitis and high milk Somatic Cell Counts (SCC).',
        solution: 'SigMin MST',
        productId: 'sigmin-mst',
        actives: ['Zinc Methionine Complex', 'Antioxidant Vitamin E', 'Keratinizing Biotin']
      },
      {
        id: 'rum-fertility',
        name: 'Ovarian Activity & Fertility',
        x: '78%', y: '52%',
        problem: 'Delayed puberty, silent estrus, repeat breeding, and poor conception rates due to trace mineral lockout.',
        solution: 'SigMin VC',
        productId: 'sigmin-vc',
        actives: ['Chelated Zinc & Copper Glycinates', 'High-stability Vitamin A', 'Vitamin D3']
      },
      {
        id: 'rum-lactation',
        name: 'Lactation Energy & Rumen Health',
        x: '42%', y: '60%',
        problem: 'Lactation fat decline, postpartum energy deficits, and ruminal acidosis under high grain intakes.',
        solution: 'SigMin Premium',
        productId: 'sigmin-premium',
        actives: ['Rumen Bypass Lipids', 'Protected Methionine & Lysine', 'Saccharomyces yeast']
      },
      {
        id: 'rum-digestion',
        name: 'Cellulose Lignin Digestibility',
        x: '25%', y: '45%',
        problem: 'Poor breakdown of straw and dry matter in pastures, causing weight loss and microflora exhaustion.',
        solution: 'MolaSig Lick Block',
        productId: 'molasig',
        actives: ['Dehydrated Sugarcane Molasses', 'Slow-Release Urea NPN', 'Trace Micro-Minerals']
      }
    ],
    equine: [
      {
        id: 'eq-tendons',
        name: 'Tendons & Suspensory Ligaments',
        x: '70%', y: '78%',
        problem: 'Micro-tears in flexor tendons and suspensory hock ligaments caused by hard track impact.',
        solution: 'CollaSig BJ (EQ)',
        productId: 'collasig-bj-eq',
        actives: ['Hydrolyzed Type II Collagen (10g)', 'MSM structural sulfur', 'High MW Hyaluronic Acid']
      },
      {
        id: 'eq-skeleton',
        name: 'Skeletal Density & Myofibrils',
        x: '45%', y: '48%',
        problem: 'Shin splints, micro-fractures in training yearlings, and poor muscular tone from mineral imbalances.',
        solution: 'SigMin VC (EQ)',
        productId: 'sigmin-vc-eq',
        actives: ['Premium Tricalcium Phosphate', 'L-Lysine & DL-Methionine', 'Chelated Copper']
      }
    ]
  };

  const activeHotspots = hotspotsData[activeCompanion] || [];

  // Automatically select first hotspot when companion changes
  React.useEffect(() => {
    if (activeHotspots.length > 0) {
      setSelectedHotspot(activeHotspots[0]);
    }
  }, [activeCompanion]);

  const handleHotspotClick = (hs) => {
    setSelectedHotspot(hs);
  };

  // Helper to get matching product detail from dataset
  const getProductDetail = (prodId) => {
    return products.find(p => p.id === prodId);
  };

  return (
    <section id="diagnostic-biomap" className="section-padding" style={{ backgroundColor: 'var(--color-sage-light)', position: 'relative' }}>
      <div className="molecule-bg" />

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '2.5px' }}>
            Interactive Veterinary Diagnosis
          </span>
          <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
            The Interactive <span style={{ fontStyle: 'italic' }}>Bio-Map</span>
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--color-dark-text)', opacity: 0.8, fontSize: '1rem', fontWeight: 400 }}>
            Select an animal type and interact with the highlighted biological hotspots. Discover the biological problems and see our PhD-formulated molecular solutions.
          </p>

          {/* Quick Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', backgroundColor: 'rgba(1, 42, 28, 0.05)', padding: '0.4rem', borderRadius: '100px' }}>
            {['companion', 'ruminant', 'equine'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCompanion(cat)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '100px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  backgroundColor: activeCompanion === cat ? 'var(--color-forest)' : 'transparent',
                  color: activeCompanion === cat ? 'var(--color-white)' : 'var(--color-forest)'
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Diorama Split Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="diorama-split">
          
          {/* Left Column: Interactive Silhouette Box */}
          <div className="glass-card" style={{
            position: 'relative',
            backgroundColor: 'var(--color-forest)',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '1.6/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(1, 42, 28, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            {/* Dark background grid decoration */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.12,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />

            {/* Glowing active theme light bubble */}
            <div style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              backgroundColor: 'rgba(220, 174, 47, 0.1)',
              filter: 'blur(80px)',
              zIndex: 0
            }} />

            {/* Render Silhouette SVG */}
            {activeCompanion === 'companion' && (
              <svg viewBox="0 0 100 100" style={{ width: '65%', height: '65%', zIndex: 1, fill: 'rgba(255,255,255,0.12)', stroke: 'rgba(255,255,255,0.25)', strokeWidth: '0.8', transition: 'var(--transition-smooth)' }}>
                {/* Clean geometric Dog Silhouette Vector Path */}
                <path d="M 12,28 C 12,28 15,22 19,22 C 23,22 25,26 27,24 C 29,22 29,14 33,14 C 37,14 38,20 37,23 C 36,26 32,32 32,32 C 32,32 38,30 42,30 C 46,30 50,33 55,33 C 60,33 72,28 78,32 C 84,36 86,44 86,44 C 86,44 89,42 90,46 C 91,50 85,55 83,56 C 81,57 78,54 78,54 C 78,54 77,65 74,68 C 71,71 70,82 72,86 C 70,86 67,86 65,84 C 63,82 66,74 65,68 C 64,62 55,62 50,64 C 45,66 42,80 43,86 C 41,86 38,86 37,84 C 36,82 38,72 37,68 C 36,64 30,64 27,65 C 24,66 21,78 22,86 C 20,86 17,86 16,84 C 15,82 17,72 16,66 C 15,60 11,58 9,56 C 7,54 7,50 10,48 C 13,46 16,46 16,40 C 16,34 12,28 12,28 Z" />
              </svg>
            )}

            {activeCompanion === 'ruminant' && (
              <svg viewBox="0 0 100 100" style={{ width: '70%', height: '70%', zIndex: 1, fill: 'rgba(255,255,255,0.12)', stroke: 'rgba(255,255,255,0.25)', strokeWidth: '0.8', transition: 'var(--transition-smooth)' }}>
                {/* Clean geometric Ruminant/Cow Silhouette Vector Path */}
                <path d="M 6,38 C 6,38 9,33 13,33 C 17,33 21,30 24,25 C 27,20 28,15 31,15 C 34,15 35,21 34,25 C 33,29 36,33 42,32 C 48,31 66,28 74,32 C 82,36 85,42 86,48 C 87,54 84,65 82,68 C 80,71 81,84 83,88 C 80,88 77,87 75,85 C 73,83 75,74 74,68 C 73,62 65,64 58,66 C 51,68 47,84 48,88 C 45,88 42,87 40,85 C 38,83 40,74 39,68 C 38,62 30,62 26,63 C 22,64 19,84 20,88 C 17,88 14,87 12,85 C 10,83 12,70 11,62 C 10,54 8,50 6,48 C 4,46 4,42 6,38 Z" />
              </svg>
            )}

            {activeCompanion === 'equine' && (
              <svg viewBox="0 0 100 100" style={{ width: '70%', height: '70%', zIndex: 1, fill: 'rgba(255,255,255,0.12)', stroke: 'rgba(255,255,255,0.25)', strokeWidth: '0.8', transition: 'var(--transition-smooth)' }}>
                {/* Clean geometric Horse Silhouette Vector Path */}
                <path d="M 8,24 C 8,24 12,18 15,18 C 18,18 20,22 22,20 C 24,18 24,10 28,10 C 32,10 33,18 31,22 C 29,26 33,33 39,32 C 45,31 62,28 72,32 C 82,36 86,46 86,52 C 86,58 83,68 81,72 C 79,76 80,86 82,89 C 79,89 76,88 74,86 C 72,84 74,75 73,69 C 72,63 60,65 54,67 C 48,69 44,86 45,89 C 42,89 39,88 37,86 C 35,84 37,75 36,69 C 35,63 28,63 24,65 C 20,67 17,86 18,89 C 15,89 12,88 10,86 C 8,84 10,70 9,62 C 8,54 6,50 4,48 C 2,46 2,42 4,38 Z" />
              </svg>
            )}

            {/* Hotspot Pulsars Overlay */}
            {activeHotspots.map((hs) => {
              const isSelected = selectedHotspot?.id === hs.id;
              return (
                <div
                  key={hs.id}
                  className="hotspot-ring"
                  style={{
                    left: hs.x,
                    top: hs.y
                  }}
                  onClick={() => handleHotspotClick(hs)}
                >
                  <div className="hotspot-pulse" style={{ borderColor: isSelected ? 'var(--color-white)' : 'var(--color-gold)' }} />
                  <div className="hotspot-core" style={{ backgroundColor: isSelected ? 'var(--color-white)' : 'var(--color-gold)' }} />
                </div>
              );
            })}
          </div>

          {/* Right Column: High-contrast Glassmorphic Detail Panel */}
          <div className="flipper-container" style={{ minHeight: '420px' }}>
            {selectedHotspot ? (
              <div
                className="glass-card fade-in"
                style={{
                  padding: '2.5rem',
                  borderLeft: '4px solid var(--color-gold)',
                  backgroundColor: 'var(--color-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                {/* Heading details */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(1, 42, 28, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-forest)'
                  }}>
                    <Info size={16} />
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)', letterSpacing: '1px' }}>
                    Target Clinical Area
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-forest)', lineHeight: 1.25 }}>
                  {selectedHotspot.name}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b71c1c', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <AlertCircle size={14} /> THE BIOLOGICAL IMPEDIMENT
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-text)', opacity: 0.85, lineHeight: 1.5, fontWeight: 400 }}>
                    {selectedHotspot.problem}
                  </p>
                </div>

                <div style={{ borderBottom: '1px solid var(--color-border)' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-forest)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <ShieldCheck size={14} style={{ color: 'var(--color-gold)' }} /> PHD RECOMMENDED FORMULA
                  </span>
                  
                  {/* Matching Product Link Drawer */}
                  <div style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-sage)',
                    border: '1px solid rgba(1, 42, 28, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-forest)', display: 'block' }}>
                        {selectedHotspot.solution}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-dark-text)', opacity: 0.7 }}>
                        {getProductDetail(selectedHotspot.productId)?.tagline}
                      </span>
                    </div>
                    <button
                      onClick={() => onProductSelect(selectedHotspot.productId)}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-forest)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-white)',
                        cursor: 'pointer',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gold)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-forest)'}
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Actives Spec Tag Grid */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {selectedHotspot.actives.map((act) => (
                    <span
                      key={act}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(1, 42, 28, 0.03)',
                        border: '1px solid rgba(1, 42, 28, 0.06)',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '100px',
                        color: 'var(--color-forest)'
                      }}
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="glass-card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3rem',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-white)'
                }}
              >
                <Activity size={48} style={{ color: 'var(--color-forest)', opacity: 0.15, marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
                  Select a Bio-Hotspot
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', opacity: 0.6 }}>
                  Click on any pulsing golden point on the animal's body to view targeted scientific diagnostics and dosage formulas.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .diorama-split { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}} />
    </section>
  );
}
