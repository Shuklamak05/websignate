import React from 'react';
import { Sparkles, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        backgroundColor: 'hsl(60, 38%, 92%)',
        position: 'relative',
        paddingTop: 'calc(var(--header-height) + 1.25rem)',
        paddingBottom: '2.25rem',
        overflow: 'hidden'
      }}
    >
      {/* Soft background wash */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(900px 520px at 78% 35%, rgba(1, 42, 28, 0.05), transparent 60%),
            radial-gradient(900px 520px at 25% 30%, rgba(220, 174, 47, 0.08), transparent 62%)
          `,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(1, 42, 28, 0.10)',
            borderRadius: '44px',
            boxShadow: '0 30px 70px rgba(1, 42, 28, 0.08)',
            padding: 'clamp(1.7rem, 2.7vw, 3rem)',
            paddingTop: 'clamp(1.6rem, 2.4vw, 2.6rem)'
          }}
        >
          {/* Pill label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.7rem',
              backgroundColor: 'hsl(60, 35%, 93%)',
              border: '1px solid rgba(1, 42, 28, 0.10)',
              borderRadius: '999px',
              padding: '0.65rem 1.2rem',
              color: 'var(--color-forest)'
            }}
          >
            <Sparkles size={18} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontWeight: 900, letterSpacing: '1.6px', fontSize: '0.85rem' }}>
              SCIENCE
            </span>
            <Sparkles size={18} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontWeight: 900, letterSpacing: '1.6px', fontSize: '0.85rem' }}>
               NUTRITION
            </span>
            <Sparkles size={18} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontWeight: 900, letterSpacing: '1.6px', fontSize: '0.85rem' }}>
              PERFORMANCE
            </span>
          </div>

          {/* Title + copy (keep narrower to leave open space at right, like the reference) */}
          <div style={{ marginTop: '2.4rem', maxWidth: '920px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 3.2vw, 3rem)',
                lineHeight: 1.04,
                color: 'var(--color-forest)',
                letterSpacing: '-1.2px'
              }}
            >
              Advancing Animal Health & Performance Through Precision Scientific Nutrition
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.15rem' }}>
              <p style={{ fontSize: '1.08rem', color: 'rgba(1, 42, 28, 0.70)', lineHeight: 1.65, maxWidth: '70ch' }}>
                At Signate, we develop scientifically formulated animal health and nutrition solutions that improve performance, productivity, and overall well-being.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'rgba(1, 42, 28, 0.62)', lineHeight: 1.7, maxWidth: '76ch' }}>
                Backed by strong R&amp;D capabilities and industry expertise, we focus on developing effective and sustainable solutions for modern animal production systems.
              </p>
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(1, 42, 28, 0.10)', marginTop: '1.5rem' }} />

          {/* Dark banner bar */}
          <a
            href="#home"
            style={{
              marginTop: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              backgroundColor: 'hsl(160, 95%, 9%)',
              color: 'rgba(255,255,255,0.92)',
              borderRadius: '999px',
              padding: '0.95rem 1.2rem',
              boxShadow: '0 18px 40px rgba(1, 42, 28, 0.18)'
            }}
          >
            <ShieldCheck size={22} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontWeight: 900, letterSpacing: '0.3px', fontSize: '0.98rem' }}>
              WELCOME TO SIGNATE ANIMAL HEALTH &amp; NUTRITION !
            </span>
          </a>

          {/* Two cards row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginTop: '1.1rem' }} className="home-cards">
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(1, 42, 28, 0.08)',
                borderRadius: '26px',
                padding: '1.15rem 1.25rem',
                boxShadow: '0 14px 30px rgba(1, 42, 28, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
                <Sparkles size={18} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 900, letterSpacing: '1.2px', color: 'rgba(1, 42, 28, 0.55)' }}>
                  SCIENTIFIC PROMISE
                </span>
              </div>
              <h3 style={{ fontSize: '1.12rem', lineHeight: 1.35, color: 'var(--color-forest)', fontWeight: 800 }}>
                Scientific Solutions for Better Nutrition, Productivity &amp; Health
              </h3>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 247, 230, 0.88)',
                border: '1px solid rgba(1, 42, 28, 0.08)',
                borderRadius: '26px',
                padding: '1.15rem 1.25rem',
                boxShadow: '0 14px 30px rgba(1, 42, 28, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
                <Sparkles size={18} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 900, letterSpacing: '1.2px', color: 'rgba(1, 42, 28, 0.55)' }}>
                  PERFORMANCE LED
                </span>
              </div>
              <p style={{ fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.6, color: 'rgba(1, 42, 28, 0.85)' }}>
                Innovative health and nutrition solutions for companion animals, dairy, poultry, equine and aqua - developed through science and driven by performance.
              </p>
            </div>
          </div>

          {/* Bottom CTA row */}
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginTop: '1.1rem', flexWrap: 'wrap' }}>
            <a
              href="#catalog"
              style={{
                backgroundColor: 'hsl(46, 68%, 51%)',
                color: 'var(--color-forest)',
                fontWeight: 900,
                fontSize: '1.05rem',
                padding: '0.9rem 1.6rem',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 16px 30px rgba(220, 174, 47, 0.25)'
              }}
            >
              Explore Products <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              style={{
                color: 'rgba(1, 42, 28, 0.35)',
                fontWeight: 800,
                padding: '0.9rem 1.05rem'
              }}
            >
              Talk to Signate
              <span style={{ marginLeft: '0.5rem', display: 'inline-flex', transform: 'translateY(2px)' }}>
                <ChevronRight size={18} />
              </span>
            </a>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 980px) {
              .home-cards { grid-template-columns: 1fr !important; }
            }
          `
          }}
        />
      </div>
    </section>
  );
}
