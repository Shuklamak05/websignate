import React from 'react';
import { Award, Lightbulb, Target, Users, ShieldCheck, Scale } from 'lucide-react';

const values = [
  {
    title: 'Quality',
    text: 'We are committed to delivering products and services of the highest quality, ensuring the well-being of animals and the satisfaction of our customers.',
    icon: <Award size={24} />
  },
  {
    title: 'Innovation',
    text: 'We foster a culture of continuous innovation, exploring new ideas and technologies to develop groundbreaking solutions for animal health and nutrition.',
    icon: <Lightbulb size={24} />
  },
  {
    title: 'Customer Focus',
    text: 'Our customers are at the heart of everything we do. We strive to understand their needs and preferences with practical, science-backed support.',
    icon: <Target size={24} />
  },
  {
    title: 'Respect',
    text: 'We value and respect all individuals, treating employees, customers, partners, and stakeholders with dignity and consideration.',
    icon: <Users size={24} />
  },
  {
    title: 'Integrity',
    text: 'We uphold integrity in all actions and interactions. Honesty, transparency, and ethical practices form the foundation of our business conduct.',
    icon: <ShieldCheck size={24} />
  },
  {
    title: 'Ethics',
    text: 'Ethical behavior is paramount to us, and we ensure that our practices are aligned with high moral standards and industry regulations.',
    icon: <Scale size={24} />
  }
];

export default function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: '#eef3f2' }}>
      <div className="container" style={{ paddingTop: '5.5rem', paddingBottom: '4rem' }}>
        <div
          className="glass-card"
          style={{
            backgroundColor: 'rgba(255,255,255,0.88)',
            borderRadius: '32px',
            padding: 'clamp(1.8rem, 3vw, 3rem)',
            boxShadow: '0 18px 46px rgba(1, 42, 28, 0.08)'
          }}
        >
          <h2 style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', color: 'var(--color-forest)', marginBottom: '1.2rem' }}>About us</h2>
          <p style={{ fontSize: 'clamp(1.2rem, 2.3vw, 1.95rem)', color: 'rgba(1,42,28,0.72)', lineHeight: 1.55, maxWidth: '56ch' }}>
            Founded in 2019 by a team of passionate scientists, Signate is an innovative company dedicated to the development, manufacturing, and marketing of animal health and nutrition products.
          </p>
          <p style={{ marginTop: '1.2rem', fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', color: 'rgba(1,42,28,0.67)', lineHeight: 1.65, maxWidth: '70ch' }}>
            Our team is driven by a deep commitment to improving animal well-being and productivity. We strive to deliver cutting-edge solutions based on scientific research and innovation for farmers, veterinarians, and animal caregivers.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#f3f3f5', borderTop: '1px solid rgba(1,42,28,0.08)', borderBottom: '1px solid rgba(1,42,28,0.08)' }}>
        <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '5rem' }}>
          <div
            className="about-unified"
            style={{
              display: 'grid',
              gridTemplateRows: 'auto auto',
              borderRadius: '32px',
              overflow: 'hidden',
              border: '1px solid rgba(1,42,28,0.1)',
              boxShadow: '0 18px 46px rgba(1, 42, 28, 0.06)',
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div
              className="about-left-column"
              style={{
                padding: 'clamp(1.8rem, 3.2vw, 3rem)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                minHeight: 'auto'
              }}
            >
              <div className="about-left-card" style={{ padding: '0.2rem 0.2rem 0.4rem' }}>
                <h3 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', marginBottom: '0.7rem', color: '#0a1018', lineHeight: 1.05 }}>Vision</h3>
                <p style={{ fontSize: 'clamp(1.02rem, 1.9vw, 1.2rem)', lineHeight: 1.65, color: 'rgba(10,16,24,0.84)' }}>
                  To become a prominent and influential player in the animal health and nutrition supplements industry, setting new standards of excellence and leadership.
                </p>
              </div>

              <div className="about-left-card" style={{ padding: '0.2rem 0.2rem 0.4rem' }}>
                <h3 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', marginBottom: '0.7rem', color: '#0a1018', lineHeight: 1.05 }}>Mission</h3>
                <p style={{ fontSize: 'clamp(1.02rem, 1.9vw, 1.2rem)', lineHeight: 1.65, color: 'rgba(10,16,24,0.84)' }}>
                  To enhance the productivity and well-being of animals by providing cutting-edge and innovative solutions that address their health and nutritional needs.
                </p>
              </div>
            </div>

            <div
              className="about-right-column"
              style={{
                padding: 'clamp(1.8rem, 3.2vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '1px solid rgba(1,42,28,0.14)'
              }}
            >
              
              <h3 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', color: 'var(--color-forest)', marginBottom: '1.2rem', textAlign: 'center' }}>Values</h3>

              <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
                {values.map((item) => (
                  <div
                    className="value-card"
                    key={item.title}
                    style={{
                      background: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(1,42,28,0.1)',
                      borderRadius: '16px',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ color: 'var(--color-forest)' }}>{item.icon}</div>
                    <h4 style={{ color: 'var(--color-forest)', fontSize: '1.22rem', lineHeight: 1.2 }}>{item.title}</h4>
                    <p className="value-card-text" style={{ fontSize: '0.92rem', lineHeight: 1.55, color: 'rgba(1,42,28,0.74)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 981px) {
            .about-unified {
              min-height: 0;
            }
            .about-left-column {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 2rem !important;
              min-height: 0 !important;
            }
            .about-left-card {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              background: none;
              border: none;
              box-shadow: none;
            }
            .about-right-column {
              min-height: 0;
            }
            .values-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              grid-template-rows: repeat(2, minmax(0, 1fr));
              grid-auto-rows: 1fr;
              align-content: stretch;
            }
            .value-card {
              min-height: 0;
              height: 100%;
            }
            .value-card-text {
              display: -webkit-box;
              -webkit-line-clamp: 6;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
          @media (max-width: 980px) {
            .about-unified { grid-template-columns: 1fr !important; }
            .about-left-column { grid-template-columns: 1fr !important; min-height: 0 !important; }
            .values-grid { grid-template-columns: 1fr !important; }
            .about-right-column { border-left: none !important; border-top: 1px solid rgba(1,42,28,0.14); }
            .value-card-text {
              display: block;
            }
          }
        `
        }}
      />
    </section>
  );
}
