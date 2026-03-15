import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-contact">
            <a href="tel:+13054032120" className="top-link"><Phone size={14} /> (305) 403-2120</a>
            <span className="top-address">123 Brickell Ave, Miami, FL</span>
          </div>
          <div className="top-actions">
            <Link to="/contact" className="top-link">Patient Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="brand">
            <span className="brand-text">BRICKELL</span>
            <span className="brand-subtext">DENTAL & AESTHETICS</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/services" className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}>Services</Link>
            <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
            <Link to="/reviews" className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`}>Reviews</Link>
            <Link to="/new-patient" className={`nav-link ${location.pathname === '/new-patient' ? 'active' : ''}`}>New Patient</Link>
            
            <div className="mobile-only-btn">
               <Link to="/contact" className="btn btn-primary"><Calendar size={18} /> Book Now</Link>
            </div>
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary desktop-only"><Calendar size={18} style={{marginRight: '8px'}}/> Book Appointment</Link>
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating CTA for Mobile/Desktop */}
      <a href="tel:+13054032120" className="floating-cta">
        <Phone size={24} />
      </a>
    </>
  );
};

export default Navbar;
