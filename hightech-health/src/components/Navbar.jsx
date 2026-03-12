import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container flex justify-between items-center navbar-content">
        
        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <div className="logo-icon">
            <Activity size={28} color="var(--accent-teal)" />
          </div>
          <span className="logo-text">Pulse<span className="text-gradient">Tech</span></span>
        </div>

        {/* Desktop Links */}
        <div className="desktop-links flex gap-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#platform" className="nav-link">Platform</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* CTA */}
        <div className="desktop-cta">
          <button className="btn-primary">Patient Portal</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel animate-fade-in-up">
          <a href="#services" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#platform" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Platform</a>
          <a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button className="btn-primary mobile-btn">Patient Portal</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
