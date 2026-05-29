import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import signateLogo from '../../IMages/signate logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#catalog' },
    { name: 'Services', href: '#services' },
    { name: 'Insights/ Blogs', href: '#insights' },
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
      backgroundColor: 'hsl(60, 38%, 92%)',
      borderBottom: isScrolled ? '1px solid rgba(1, 42, 28, 0.10)' : '1px solid rgba(1, 42, 28, 0.06)',
      color: 'var(--color-forest)',
      padding: '0 2rem'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '260px 1fr 220px',
        alignItems: 'center',
        padding: 0
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800 }}>
          <img
            src={signateLogo}
            alt="Signate logo"
            style={{
              height: '150px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Desktop Links (centered like the reference) */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.6rem' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'rgba(1, 42, 28, 0.78)',
                letterSpacing: '0.1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'rgba(1, 42, 28, 1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(1, 42, 28, 0.78)';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right-side CTA */}
        <div className="desktop-only" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a
            href="#contact"
            style={{
              backgroundColor: 'hsl(46, 68%, 51%)',
              color: 'var(--color-forest)',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.85rem 1.4rem',
              borderRadius: '999px',
              boxShadow: '0 12px 26px rgba(220, 174, 47, 0.25)'
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-forest)',
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
          nav .container { grid-template-columns: 1fr auto !important; }
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
          backgroundColor: 'hsl(60, 38%, 92%)',
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
                color: 'var(--color-forest)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              backgroundColor: 'hsl(46, 68%, 51%)',
              color: 'var(--color-forest)',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.85rem 1.6rem',
              borderRadius: '999px',
              marginTop: '1rem'
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
