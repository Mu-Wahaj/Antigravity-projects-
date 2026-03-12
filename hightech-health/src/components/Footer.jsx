import React from 'react';
import { Activity, Twitter, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer border-t border-white/10 mt-auto">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-brand">
            <div className="logo flex items-center gap-2 mb-4">
              <div className="logo-icon">
                <Activity size={24} color="var(--accent-teal)" />
              </div>
              <span className="logo-text">Pulse<span className="text-gradient">Tech</span></span>
            </div>
            <p className="footer-description">
              Pioneering the future of predictive health, medical aesthetics, and longevity through AI-driven analytics.
            </p>
            <div className="social-links">
               <a href="#" className="social-link"><Twitter size={20} /></a>
               <a href="#" className="social-link"><Linkedin size={20} /></a>
               <a href="#" className="social-link"><Github size={20} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Platform</h4>
            <a href="#" className="footer-link">AI Diagnostics</a>
            <a href="#" className="footer-link">Telehealth</a>
            <a href="#" className="footer-link">Data Security</a>
            <a href="#" className="footer-link">API</a>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Company</h4>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Press</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-title">Stay Updated</h4>
            <p className="footer-description mb-4">
              Subscribe to our clinical insights and wellness research.
            </p>
            <div className="newsletter-input-group">
               <input type="email" placeholder="Email address" className="newsletter-input" />
               <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PulseTech Healthcare. All rights reserved.</p>
          <div className="footer-bottom-links">
             <a href="#">Privacy Policy</a>
             <a href="#">Terms of Service</a>
             <a href="#">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
