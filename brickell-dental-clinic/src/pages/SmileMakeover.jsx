import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const SmileMakeover = () => {
  return (
    <div className="service-detail-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Smile Makeover</h1>
          <p className="page-subtitle">A comprehensive, custom blueprint for your perfect smile.</p>
        </div>
      </div>

      <section className="section container">
        <div className="service-detail-content">
          <div className="service-main">
            <div className="hero-image-placeholder" style={{backgroundColor: '#bae6fd'}}>
               Smile Makeover Result Example
            </div>
            
            <p className="lead">At Brickell Dental & Aesthetics, our Smile Makeover is a bespoke combination of cosmetic and restorative treatments designed specifically for your unique facial features, coloring, and aesthetic goals.</p>
            
            <h2>What is a Smile Makeover?</h2>
            <p>A smile makeover is not a single procedure, but a comprehensive approach to completely transforming your smile. We analyze everything from the alignment and color of your teeth to the shape of your gums and lips. By leveraging our in-house premium lab and Digital Smile Design technology, we provide an unparalleled level of customization.</p>

            <h2>Treatments often included:</h2>
            <ul>
              <li>Ultra-thin Porcelain Veneers</li>
              <li>Dental Implants to replace missing teeth</li>
              <li>Invisalign for correcting alignment</li>
              <li>Laser Gum Contouring to fix "gummy smiles"</li>
              <li>Professional Zoom Teeth Whitening</li>
            </ul>

            <h2>The Brickell Dental Difference</h2>
            <p>Our founder, Dr. Melissa Quintana, has dedicated her career to the art of smile design. Using advanced techniques, she ensures that every smile makeover is minimally invasive, highly durable, and breathtakingly natural. "The result should be rejuvenating without looking done."</p>
          </div>

          <div className="service-sidebar">
             <div className="sidebar-card text-center">
                <h3>Ready for a change?</h3>
                <p style={{marginBottom: '1.5rem', color: 'var(--text-light)'}}>Book a consultation to get your personalized smile blueprint.</p>
                <Link to="/contact" className="btn btn-primary" style={{width: '100%'}}>Book Consultation</Link>
             </div>
             
             <div className="sidebar-card">
                <h3>Related Services</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
                   <Link to="/services/veneers" className="btn btn-outline">Porcelain Veneers</Link>
                   <Link to="/services/dental-implants" className="btn btn-outline">Dental Implants</Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmileMakeover;
