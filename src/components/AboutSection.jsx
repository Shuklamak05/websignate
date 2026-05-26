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
        <div className="about-vm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '520px' }}>
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div style={{ padding: 'clamp(2rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2.6rem' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)', marginBottom: '0.8rem', color: '#0a1018' }}>Vision</h3>
              <p style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', lineHeight: 1.6, color: 'rgba(10,16,24,0.82)', maxWidth: '28ch' }}>
                To become a prominent and influential player in the animal health and nutrition supplements industry, setting new standards of excellence and leadership.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)', marginBottom: '0.8rem', color: '#0a1018' }}>Mission</h3>
              <p style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', lineHeight: 1.6, color: 'rgba(10,16,24,0.82)', maxWidth: '30ch' }}>
                To enhance the productivity and well-being of animals by providing cutting-edge and innovative solutions that address their health and nutritional needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#f3f3f5', borderBottom: '1px solid rgba(1,42,28,0.08)' }}>
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5.5rem' }}>
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(247,248,245,0.98) 100%)',
              border: '1px solid rgba(1,42,28,0.08)',
              borderRadius: '32px',
              boxShadow: '0 18px 46px rgba(1, 42, 28, 0.06)',
              padding: 'clamp(1.8rem, 3.4vw, 3.2rem)'
            }}
          >
            <div style={{ maxWidth: '56rem', marginBottom: '2.4rem' }}>
              <p style={{ letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(1,42,28,0.55)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                Core Values
              </p>
              <h3 style={{ fontSize: 'clamp(2.6rem, 4.3vw, 4rem)', color: 'var(--color-forest)', marginBottom: '1rem' }}>Values</h3>
              <p style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.3rem)', lineHeight: 1.7, color: 'rgba(1,42,28,0.72)', maxWidth: '60ch' }}>
                The principles that guide our vision and mission are woven into how we build products, support customers, and grow with integrity.
              </p>
            </div>

            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.25rem' }}>
              {values.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    border: '1px solid rgba(1,42,28,0.08)',
                    borderRadius: '24px',
                    padding: '1.5rem',
                    boxShadow: '0 10px 24px rgba(1, 42, 28, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9rem',
                    minHeight: '100%'
                  }}
                >
                  <div style={{ color: 'var(--color-forest)' }}>{item.icon}</div>
                  <h4 style={{ color: 'var(--color-forest)', fontSize: '1.55rem', lineHeight: 1.15 }}>{item.title}</h4>
                  <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'rgba(1,42,28,0.72)' }}>{item.text}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '2rem', textAlign: 'center', color: 'rgba(1,42,28,0.6)', fontSize: '1.04rem', lineHeight: 1.7, maxWidth: '62rem', marginLeft: 'auto', marginRight: 'auto' }}>
              These values are not separate from our vision and mission. They are the standards that make both of them real in day-to-day work.
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 980px) {
          .about-vm { grid-template-columns: 1fr !important; }
            .about-vm > div:first-child { min-height: 320px; }
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `
        }}
      />
    </section>
  );
}
