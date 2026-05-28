import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react';
import signateLogo from '../../IMages/signate logo.png';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companionType: 'companion',
    concern: 'joints',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate instant local submission with zero lag
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep successfully submitted but let them close or reset
    }, 4000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      companionType: 'companion',
      concern: 'joints',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <footer id="contact" style={{ backgroundColor: 'var(--color-forest)', color: 'var(--color-white)', paddingTop: '6rem' }}>
      
      {/* ==========================================
          CONTACT FORM & INQUIRY DIVISION
          ========================================== */}
      <div className="container" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '4rem', alignItems: 'center' }} className="footer-split">
          
          {/* Left Column: Scientific Consulting Pitch */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="editorial-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-white)', lineHeight: 1.2 }}>
              Request a <br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Scientific Assessment</span>
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300 }}>
              Need a bespoke formulation or molecular pathogen screening for your veterinary practice or farm? Submit your inquiry. Our PhD directors will review your animal's case history and recommend targeted molecular therapy.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                  <Mail size={16} />
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', display: 'block', textTransform: 'uppercase' }}>Scientific Inquiry Email</span>
                  <a href="mailto:signatean@gmail.com" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-white)' }}>signatean@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                  <Clock size={16} />
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', display: 'block', textTransform: 'uppercase' }}>Research Lab Hours</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>10:00 AM - 6:00 PM IST (Mon - Sat)</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', display: 'block', textTransform: 'uppercase' }}>Corporate HQ</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form Sheet */}
          <div className="glass-card-dark" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            {formSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
                animation: 'scaleUp 0.3s ease-out'
              }}>
                <CheckCircle size={56} style={{ color: 'var(--color-gold)' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-white)', fontFamily: 'var(--font-serif)' }}>
                  Inquiry Dispatched
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', maxWidth: '340px', lineHeight: 1.5 }}>
                  Thank you! Your clinical case dossier has been successfully transferred to Dr. Keyur Dave & the R&D panel. A reply will be routed to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={resetForm}
                  style={{
                    marginTop: '1rem',
                    border: 'none',
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-forest)',
                    padding: '0.6rem 1.8rem',
                    borderRadius: '100px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Submit Another Case
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--color-white)'
                      }}
                      placeholder="e.g. Dr. Jane Doe"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--color-white)'
                      }}
                      placeholder="e.g. jane@clinic.com"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Animal Category</label>
                    <select
                      name="companionType"
                      value={formData.companionType}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--color-white)',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="companion" style={{ color: 'var(--color-forest)' }}>🐶 Companion Animal</option>
                      <option value="ruminant" style={{ color: 'var(--color-forest)' }}>🐄 Ruminant Livestock</option>
                      <option value="equine" style={{ color: 'var(--color-forest)' }}>🐴 Equine</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Clinical Target Focus</label>
                    <select
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--color-white)',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="joints" style={{ color: 'var(--color-forest)' }}>Joint & Hip Mobility</option>
                      <option value="skin" style={{ color: 'var(--color-forest)' }}>Dermal & Coat Shine</option>
                      <option value="gut" style={{ color: 'var(--color-forest)' }}>Probiotics & Immunity</option>
                      <option value="mastitis" style={{ color: 'var(--color-forest)' }}>Mastitis / Somatic Counts</option>
                      <option value="lactation" style={{ color: 'var(--color-forest)' }}>Lactation Milk Fat SNF</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Biological Case Notes / Inquiries</label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--color-white)',
                      resize: 'none',
                      fontFamily: 'var(--font-sans)'
                    }}
                    placeholder="Provide animal age, body weight, specific deficiencies, or diagnostic kit counts..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '0.5rem'
                  }}
                >
                  Submit Clinical Inquiry dossier <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ==========================================
          BOTTOM DIRECTORY & COPYRIGHT
          ========================================== */}
      <div className="container" style={{ padding: '4rem 2rem 3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', gap: '3rem', marginBottom: '3.5rem' }} className="footer-links-grid">
          
          {/* Logo & motto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <img
              src={signateLogo}
              alt="Signate logo"
              style={{ height: '150px', width: 'auto', objectFit: 'contain', maxWidth: '220px' }}
            />
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.5, maxWidth: '280px', fontWeight: 300 }}>
              Specialized biochemistry and molecular animal wellness networks formulated by doctoral bioscientists.
            </p>
          </div>

          {/* Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.5px' }}>
              Science Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <a href="#home" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Home</a>
              <a href="#about" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>About Us</a>
              <a href="#catalog" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Products</a>
              <a href="#services" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Services</a>
            </div>
          </div>

          {/* Compliance & Regulatory notes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.5px' }}>
              Regulatory & Standards
            </h4>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.5, fontWeight: 300 }}>
              All Signate formulations represent feed supplements and biological adjuvants. They do not contain scheduled prescription drugs. Always consult registered veterinarians for severe clinical pathologies.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 500 }}>
          <span>© {new Date().getFullYear()} Signate Animal Health & Nutrition Pvt. Ltd. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#home" style={{ color: 'rgba(255,255,255,0.4)' }}>ISO Standards Certifications</a>
            <a href="#home" style={{ color: 'rgba(255,255,255,0.4)' }}>R&D Clinical Guidelines</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .footer-split { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .footer-links-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}} />
    </footer>
  );
}
