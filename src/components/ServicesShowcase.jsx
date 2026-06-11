import React, { useState } from 'react';
import { Microscope, FlaskConical, Settings2, GraduationCap, Quote, Linkedin } from 'lucide-react';
import { founders } from '../data/team';
import diagnosticsBg from '../../IMages/diagnostics-bg.png';
import researchBg from '../../IMages/research-bg.png';
import manufacturingBg from '../../IMages/manufacturing-bg.png';

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState('diagnostics');

  const services = {
    diagnostics: {
      title: 'Molecular Diagnostics',
      description: 'Signate has recently ventured into the field of animal health disease diagnostics. We have standardized molecular diagnostic techniques to identify various types of protozoans present in dogs’ blood, which will greatly enhance the effectiveness of treatment. Additionally, we are actively working on developing several other molecular diagnostic methods to further advance our diagnostic capabilities.',
      icon: <Microscope size={36} />,
      color: '#e28743'
    },
    research: {
      title: 'Contract Research',
      description: 'Signate’s venture into contract research for animal health and nutrition products brings a wealth of scientific expertise to support your product development journey. Our commitment to accelerating time-to-market and conducting product efficacy trials in ruminants and companion animals sets us apart as a reliable and efficient partner. Together, we can create impactful products that benefit your business and profitable farming.',
      icon: <FlaskConical size={36} />,
      color: '#2a9d8f'
    },
    manufacturing: {
      title: 'Contract Manufacturing',
      description: 'Signate has ventured into the field of contract manufacturing for animal health and nutrition products, further solidifying our commitment to the well-being of animals. Our primary objective is to offer top-tier services that cater to the specific needs of our clients in the animal health industry. Whether you are a start-up looking to enter the market or an established brand seeking to expand your product line, we are here to assist you at every step of the way. One of our key strengths lies in delivering cost-effective solutions without compromising on quality. We strive to optimize the process to ensure competitive pricing, making our services accessible to businesses of all sizes. Whether you require small batches for market testing or large-scale production, we are equipped to meet your needs and deliver on time.',
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
            display: 'flex',
            justifyContent: 'center',
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
            <div style={{
              width: '100%',
              maxWidth: '920px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1,
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-forest)', fontFamily: 'var(--font-serif)' }}>
                  {activeService.title}
                </h3>
              </div>
              
              <p style={{ maxWidth: '82ch', fontSize: '0.98rem', color: 'var(--color-dark-text)', opacity: 0.88, lineHeight: 1.75 }}>
                {activeService.description}
              </p>

              <div style={{ width: '72px', height: '3px', borderRadius: '999px', backgroundColor: activeService.color }} />
            </div>

          </div>
        )}

        {/* ==========================================
            SECTION 2: PHD FOUNDERS BIO GRID
            ========================================== */}
        <div id="founders" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '6rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
           
            <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-forest)' }}>
              Meet The <span style={{ fontStyle: 'italic' }}>Founders</span>
            </h2>
            
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
                    {dr.name},<span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.5px' }}>
                    {dr.credentials}
                  </span>
                  </h3>
                  
                  
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-text)', opacity: 0.8, lineHeight: 1.5, fontWeight: 400 }}>
                  {dr.bio}
                </p>

                <div style={{ borderBottom: '1px solid var(--color-border)', marginTop: 'auto' }} />

            

                <a
                  href={dr.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    marginTop: '0.2rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    border: '1px solid rgba(1, 42, 28, 0.2)',
                    backgroundColor: 'rgba(1, 42, 28, 0.03)',
                    color: 'var(--color-forest)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    padding: '0.58rem 0.95rem',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <Linkedin size={15} />
                  Connect on LinkedIn
                </a>
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
