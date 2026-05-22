import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import signateLogo from '../../IMages/signate logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Interactive Bio-Map', href: '#diagnostic-biomap' },
    { name: 'Formulations', href: '#catalog' },
    { name: 'Dose Finder', href: '#dose-finder' },
    { name: 'Research & Services', href: '#services' },
    { name: 'PhD Experts', href: '#founders' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      transition: 'var(--transition-smooth)',
      backgroundColor: isScrolled ? 'rgba(1, 42, 28, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'var(--blur-glass)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      color: 'var(--color-white)',
      padding: '0 2rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0
      }}>
        {/* Modern Scientific Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800 }}>
          <img
            src={signateLogo}
            alt="Signate logo"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.8)',
                letterSpacing: '0.2px'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--color-gold)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.85rem'
            }}
          >
            Scientific Consult
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-white)',
            cursor: 'pointer',
            display: 'none' /* Will show via inline responsiveness helper */
          }}
          className="mobile-toggle"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* CSS Helper for Responsiveness without Tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          width: '100%',
          height: 'calc(100vh - var(--header-height))',
          backgroundColor: 'var(--color-forest)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          zIndex: 999,
          animation: 'scaleUp 0.3s ease forwards'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '1.4rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                color: 'var(--color-white)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              marginTop: '1rem'
            }}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
