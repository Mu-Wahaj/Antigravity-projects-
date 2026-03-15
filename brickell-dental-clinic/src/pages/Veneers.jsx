import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const Veneers = () => {
  return (
    <div className="service-detail-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Porcelain Veneers</h1>
          <p className="page-subtitle">The ultimate solution for a flawless Hollywood smile.</p>
        </div>
      </div>

      <section className="section container">
        <div className="service-detail-content">
          <div className="service-main">
            <div className="hero-image-placeholder" style={{backgroundColor: '#e2e8f0'}}>
               Veneers Example
            </div>
            
            <p className="lead">Dr. Melissa Quintana is a recognized leader in porcelain veneers and smile design. Utilizing ultra-thin, custom-crafted ceramics, she creates breathtaking smiles that look entirely natural.</p>
            
            <h2>What Are Porcelain Veneers?</h2>
            <p>Veneers are shell-like layers of medical-grade ceramic that are permanently bonded to the front of your teeth. They are the premier choice in cosmetic dentistry for permanently transforming the color, shape, size, and length of your teeth.</p>

            <h2>Ideal For Correcting:</h2>
            <ul>
              <li>Severe staining or discoloration that doesn't respond to whitening</li>
              <li>Chipped, worn, or fractured teeth</li>
              <li>Gaps or uneven spacing between teeth</li>
              <li>Slightly crooked or misaligned teeth (instant orthodontics)</li>
              <li>Teeth that are irregularly shaped or too small</li>
            </ul>

            <h2>The Process</h2>
            <p>Your journey begins with a comprehensive consultation and 3D digital scan. We use Digital Smile Design to map out your new smile so you can see the expected results before we even start. Thanks to our in-house lab, the customization process is highly collaborative, allowing adjustments for a perfect fit and aesthetic harmony.</p>
          </div>

          <div className="service-sidebar">
             <div className="sidebar-card text-center">
                <h3>Design Your Smile</h3>
                <p style={{marginBottom: '1.5rem', color: 'var(--text-light)'}}>Schedule your veneer consultation to view your 3D digital mockup.</p>
                <Link to="/contact" className="btn btn-primary" style={{width: '100%'}}>Book Consultation</Link>
             </div>
             
             <div className="sidebar-card">
                <h3>Related Services</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
                   <Link to="/services/smile-makeover" className="btn btn-outline">Smile Makeover</Link>
                   <Link to="/services/teeth-whitening" className="btn btn-outline">Teeth Whitening</Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Veneers;
