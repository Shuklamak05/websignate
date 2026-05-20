import React from 'react';
import { Activity, ShieldCheck, Flame, Zap, Award, Sparkles } from 'lucide-react';

export default function Hero({ activeCompanion, setActiveCompanion }) {
  const companionsList = [
    {
      id: 'companion',
      label: 'Companion Animals',
      tag: 'Dogs & Cats',
      metric: '98% Collagen Bio-efficacy',
      desc: 'Formulations engineered for cartilage regeneration, gut microflora balance, and senior cellular protection.',
      icon: <Sparkles size={24} />,
      gradient: 'linear-gradient(135deg, #e28743 0%, #e07a5f 100%)',
      glowColor: 'rgba(226, 135, 67, 0.4)'
    },
    {
      id: 'ruminant',
      label: 'Ruminants',
      tag: 'Dairy Cows & Calves',
      metric: '-65% Somatic Cell Count',
      desc: 'Chelated mineral networks and rumen-protected yeast to maximize lactation fat and defend against mastitis.',
      icon: <Flame size={24} />,
      gradient: 'linear-gradient(135deg, #2a9d8f 0%, #264653 100%)',
      glowColor: 'rgba(42, 157, 143, 0.4)'
    },
    {
      id: 'equine',
      label: 'Equine Wellness',
      tag: 'Athletic & Race Horses',
      metric: '+14% Leg Flex & Hock Range',
      desc: 'Heavy-impact tendon structural matrices and skeletal mineralizers crafted for performance horses.',
      icon: <Zap size={24} />,
      gradient: 'linear-gradient(135deg, #b5828f 0%, #a2d2ff 100%)',
      glowColor: 'rgba(181, 130, 143, 0.4)'
    }
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-forest)',
        color: 'var(--color-white)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--header-height)',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Background Molecular Mesh Decoration */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.08,
        backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-gold) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        zIndex: 0
      }} />

      {/* Atmospheric Neon Blurs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        backgroundColor: 'rgba(220, 174, 47, 0.08)',
        filter: 'blur(120px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        backgroundColor: 'rgba(42, 157, 143, 0.08)',
        filter: 'blur(120px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {/* Top Credentials Banner */}
        <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '100px', padding: '0.5rem 1.25rem' }} className="fade-in">
          <Award size={18} style={{ color: 'var(--color-gold)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-gold)' }}>
            Founded & Led by PhD Bio-Scientists
          </span>
        </div>

        {/* Big Editorial Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="hero-split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h1 className="editorial-title" style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
              lineHeight: 1.15,
              fontWeight: 500,
              letterSpacing: '-1px'
            }}>
              Veterinary Science in its <br />
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)' }}>Finest Formulations</span>.
            </h1>
            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '620px',
              fontWeight: 300,
              lineHeight: 1.6
            }}>
              Say goodbye to bloated ingredients and unproven supplements. At Signate, we formulate bio-available, molecularly-sound veterinary solutions designed by doctoral biochemists for cellular health and systemic performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }} className="hero-buttons">
              <a href="#diagnostic-biomap" className="btn-primary">
                Explore Diagnostic Bio-Map <Activity size={18} />
              </a>
              <a href="#dose-finder" className="btn-secondary">
                Dose Finder
              </a>
            </div>
          </div>

          {/* Quick Technical Specs Summary */}
          <div className="glass-card-dark float-animation" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={24} style={{ color: 'var(--color-gold)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Pure Bio-actives</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>Zero heavy metal or yeast impurities</p>
              </div>
            </div>
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-gold)', display: 'block', lineHeight: 1 }}>3+</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PhD Directors</span>
              </div>
              <div>
                <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-gold)', display: 'block', lineHeight: 1 }}>100%</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Traceable Sourcing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gamified Vet-Companion Selection Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-gold)' }}>●</span> Select Your Veterinary Companion to Explore
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }} className="companion-grid">
            {companionsList.map((comp) => {
              const isSelected = activeCompanion === comp.id;
              return (
                <div
                  key={comp.id}
                  onClick={() => {
                    setActiveCompanion(comp.id);
                    // Scroll smoothly down to the interactive map section
                    document.getElementById('diagnostic-biomap')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    padding: '2.25rem 2rem',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    background: isSelected 
                      ? 'rgba(255, 255, 255, 0.08)' 
                      : 'rgba(255, 255, 255, 0.02)',
                    border: isSelected 
                      ? '2px solid var(--color-gold)' 
                      : '1px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: isSelected 
                      ? `0 15px 40px ${comp.glowColor}, 0 0 15px rgba(220, 174, 47, 0.25)` 
                      : 'none',
                    transform: isSelected ? 'translateY(-6px)' : 'translateY(0)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {/* Decorative glowing colored bubble in background */}
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: comp.gradient,
                    opacity: isSelected ? 0.35 : 0.08,
                    filter: 'blur(15px)',
                    transition: 'var(--transition-smooth)'
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: comp.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-white)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                    }}>
                      {comp.icon}
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '100px',
                      color: 'var(--color-gold)'
                    }}>
                      {comp.metric}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
                    {comp.label}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                    {comp.tag}
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, fontWeight: 300 }}>
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .hero-split { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .companion-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}} />
    </section>
  );
}
