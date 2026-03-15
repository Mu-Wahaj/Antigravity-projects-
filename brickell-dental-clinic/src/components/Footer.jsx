import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <Link to="/" className="brand footer-brand">
            <span className="brand-text" style={{color: 'white'}}>BRICKELL</span>
            <span className="brand-subtext" style={{color: 'var(--primary-light)'}}>DENTAL & AESTHETICS</span>
          </Link>
          <p className="footer-bio">
            Miami's premier destination for luxury full mouth rehabilitation, cosmetic, and general dentistry. Rejuvenating smiles naturally.
          </p>
          <div className="social-links">
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Our Doctors</Link></li>
            <li><Link to="/gallery">Smile Gallery</Link></li>
            <li><Link to="/reviews">Patient Reviews</Link></li>
            <li><Link to="/new-patient">New Patients</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/services/smile-makeover">Smile Makeover</Link></li>
            <li><Link to="/services/veneers">Porcelain Veneers</Link></li>
            <li><Link to="/services/dental-implants">Dental Implants</Link></li>
            <li><Link to="/services/invisalign">Invisalign</Link></li>
            <li><Link to="/services">All Services</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Info</h3>
          <ul>
            <li><MapPin size={18} /> <span>123 Brickell Ave, Miami, FL 33131</span></li>
            <li><Phone size={18} /> <a href="tel:+13054032120">(305) 403-2120</a></li>
            <li><Mail size={18} /> <a href="mailto:info@brickelldental.com">info@brickelldental.com</a></li>
            <li><Clock size={18} /> 
              <div className="hours">
                <div>Mon: 9am - 6pm</div>
                <div>Tue: 9am - 5pm</div>
                <div>Wed-Thu: 8am - 5pm</div>
                <div>Fri: 9am - 12pm</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Brickell Dental & Aesthetics. All Rights Reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
