import React, { useState } from 'react';
import { Microscope, FlaskConical, Settings2, GraduationCap, Quote, CheckSquare, Award } from 'lucide-react';
import { founders } from '../data/team';
import diagnosticsBg from '../../IMages/diagnostics-bg.png';
import researchBg from '../../IMages/research-bg.png';
import manufacturingBg from '../../IMages/manufacturing-bg.png';

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState('diagnostics');

  const services = {
    diagnostics: {
      title: 'Molecular Diagnostics & Pathogen Screen',
      subtitle: 'Doctoral PCR & DNA Assay Systems',
      description: 'Signate has recently ventured into the field of animal health disease diagnostics. We have standardized molecular diagnostic techniques to identify various types of protozoans present in dogs’ blood, which will greatly enhance the effectiveness of treatment. Additionally, we are actively working on developing several other molecular diagnostic methods to further advance our diagnostic capabilities.',
      capabilities: [
        'Pathogen screening for dairy herds',
        'Polymerase Chain Reaction (PCR) pathogen isolation assays',
        'Somatic cell DNA count indexing',
        'Fast turnaround biomarker screening systems'
      ],
      icon: <Microscope size={36} />,
      color: '#e28743'
    },
    research: {
      title: 'Contract Research & Efficacy Trials',
      subtitle: 'In-vivo Efficacy and Bio-equivalence Studies',
      description: 'Signate’s venture into contract research for animal health and nutrition products brings a wealth of scientific expertise to support your product development journey. Our commitment to accelerating time-to-market and conducting product efficacy trials in ruminants and companion animals sets us apart as a reliable and efficient partner. Together, we can create impactful products that benefit your business and profitable farming.',
      capabilities: [
        'Chelated mineral absorption studies',
        'Gut microflora genomic sequencing assays',
        'Pre-clinical safety and toxicological indexes',
        'Feed digest-efficiency verification trials'
      ],
      icon: <FlaskConical size={36} />,
      color: '#2a9d8f'
    },
    manufacturing: {
      title: 'Contract Veterinary Manufacturing',
      subtitle: 'ISO & WHO Compliant Specialized Blending',
      description: 'Signate has ventured into the field of contract manufacturing for animal health and nutrition products, further solidifying our commitment to the well-being of animals. Our primary objective is to offer top-tier services that cater to the specific needs of our clients in the animal health industry. Whether you are a start-up looking to enter the market or an established brand seeking to expand your product line, we are here to assist you at every step of the way. One of our key strengths lies in delivering cost-effective solutions without compromising on quality. We strive to optimize the process to ensure competitive pricing, making our services accessible to businesses of all sizes. Whether you require small batches for market testing or large-scale production, we are equipped to meet your needs and deliver on time.',
      capabilities: [
        'Micro-encapsulation rumen-bypass processing',
        'Specialized chelated glycinate tableting',
        'High-density energy sugarcane blocks (weatherproof)',
        'Vacuum-sealed moisture-protected Synbiotic powder packaging'
      ],
      icon: <Settings2 size={36} />,
      color: '#b5828f'
    }
  };

  const activeService = services[activeTab];

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-sage-light)', position: 'relative' }}>
      <div className="molecule-bg" />

      <div className="container">
        
        {/* ==========================================
            SECTION 1: SCIENTIFIC SERVICES SHOWCASE
            ========================================== */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
            Services
          </h2>
          <p style={{ maxWidth: '650px', color: 'var(--color-dark-text)', opacity: 0.8, fontSize: '1rem' }}>
            Delivering cutting-edge solutions that are based on scientific research & innovation
          </p>

          {/* Service Selector Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '0.5rem',
            width: '100%',
            maxWidth: '680px',
            marginTop: '2rem',
            backgroundColor: 'rgba(1, 42, 28, 0.04)',
            padding: '0.4rem',
            borderRadius: '16px'
          }} className="services-tabs">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: '1rem 0.5rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  backgroundColor: activeTab === key ? 'var(--color-white)' : 'transparent',
                  color: 'var(--color-forest)',
                  boxShadow: activeTab === key ? 'var(--shadow-premium)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                {services[key].icon}
                <span className="services-tab-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Service Dynamic Card */}
        {activeService && (
          <div className="glass-card fade-in services-card-split" style={{
            padding: '3rem',
            backgroundColor: 'var(--color-white)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '6rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {(activeTab === 'diagnostics' || activeTab === 'research' || activeTab === 'manufacturing') && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: activeTab === 'diagnostics'
                    ? `url(${diagnosticsBg})`
                    : activeTab === 'research'
                      ? `url(${researchBg})`
                      : `url(${manufacturingBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />
            )}
            {(activeTab === 'diagnostics' || activeTab === 'research' || activeTab === 'manufacturing') && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />
            )}
            
            {/* Service details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: activeService.color, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {activeService.subtitle}
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-forest)', fontFamily: 'var(--font-serif)' }}>
                  {activeService.title}
                </h3>
              </div>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--color-dark-text)', opacity: 0.85, lineHeight: 1.6 }}>
                {activeService.description}
              </p>

              <div style={{ borderBottom: '1px solid var(--color-border)' }} />

              {/* Action indicators */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Award size={16} style={{ color: 'var(--color-gold)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                    ISO 9001:2015 Standards
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Award size={16} style={{ color: 'var(--color-gold)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                    Doctoral Quality Audited
                  </span>
                </div>
              </div>
            </div>

            {/* Service Capabilities Checklist */}
            <div style={{
              backgroundColor: 'var(--color-sage)',
              padding: '2rem 2.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(1, 42, 28, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest)', letterSpacing: '0.5px' }}>
                Core Capabilities & Scope
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {activeService.capabilities.map((cap) => (
                  <div key={cap} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckSquare size={16} style={{ color: activeService.color, marginTop: '0.25rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', fontWeight: 600, lineHeight: 1.4 }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==========================================
            SECTION 2: PHD FOUNDERS BIO GRID
            ========================================== */}
        <div id="founders" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '6rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '2.5px' }}>
              Scientist Credentials
            </span>
            <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
              Meet The <span style={{ fontStyle: 'italic' }}>Founders</span>
            </h2>
            <p style={{ maxWidth: '650px', color: 'var(--color-dark-text)', opacity: 0.8, fontSize: '1rem' }}>
              Signate is founded and operationally directed by molecular biochemists. We design formulations from the cellular level up.
            </p>
          </div>

          {/* Founders Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }} className="founders-grid">
            {founders.map((dr, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  backgroundColor: 'var(--color-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative'
                }}
              >
                {/* Academic Quote Mark icon decoration */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '2rem',
                  color: 'var(--color-sage)',
                  opacity: 0.7,
                  pointerEvents: 'none'
                }}>
                  <Quote size={40} strokeWidth={1} />
                </div>

                {/* Founder Photo */}
                <div style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(1, 42, 28, 0.12)',
                  boxShadow: '0 8px 20px rgba(1, 42, 28, 0.12)',
                  backgroundColor: 'var(--color-sage)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {dr.image ? (
                    <img
                      src={dr.image}
                      alt={dr.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <GraduationCap size={30} style={{ color: 'var(--color-forest)' }} />
                  )}
                </div>

                {/* Bios */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                    {dr.name}
                  </h3>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {dr.credentials}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', opacity: 0.6, fontWeight: 600 }}>
                    {dr.role}
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', opacity: 0.8, lineHeight: 1.5, fontWeight: 400 }}>
                  {dr.bio}
                </p>

                <div style={{ borderBottom: '1px solid var(--color-border)', marginTop: 'auto' }} />

                {/* Key scientific breakthroughs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Core Scientific Breakthrough
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-text)', opacity: 0.9, fontWeight: 600, lineHeight: 1.4 }}>
                    {dr.contributions}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .services-card-split { grid-template-columns: 1fr !important; gap: 2rem !important; padding: 2rem !important; }
          .founders-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .services-tabs { grid-template-columns: 1fr !important; }
          .services-tab-label { display: inline !important; }
        }
      `}} />
    </section>
  );
}
