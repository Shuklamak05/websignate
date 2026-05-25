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

      <div style={{ backgroundColor: '#020809', color: '#d5d6d7', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            right: '-120px',
            top: '60px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 60%, transparent 70%)',
            filter: 'blur(2px)'
          }}
        />
        <div className="container" style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h3 style={{ textAlign: 'center', color: '#fff', fontSize: 'clamp(2.6rem, 4.3vw, 4rem)', marginBottom: '2.8rem' }}>Values</h3>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.1rem 3.8rem' }}>
            {values.map((item) => (
              <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ color: '#37c570' }}>{item.icon}</div>
                <h4 style={{ color: '#4ed174', fontSize: '2rem' }}>{item.title}</h4>
                <p style={{ fontSize: '1.12rem', lineHeight: 1.65, color: 'rgba(213,214,215,0.82)', maxWidth: '46ch' }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '3rem', textAlign: 'center', color: 'rgba(213,214,215,0.7)', fontSize: '1.08rem', lineHeight: 1.7 }}>
            As an organization, we are driven by these core values, striving to make a positive impact on the animal health and nutrition industry and contribute to the productivity and well-being of animals.
          </p>
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

