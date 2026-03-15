import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const TeethWhitening = () => {
  return (
    <div className="service-detail-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Professional Teeth Whitening</h1>
          <p className="page-subtitle">Instantly brighten your smile with our premium in-office treatments.</p>
        </div>
      </div>

      <section className="section container">
        <div className="service-detail-content">
          <div className="service-main">
            <div className="hero-image-placeholder" style={{backgroundColor: '#f1f5f9'}}>
               Teeth Whitening Example
            </div>
            
            <p className="lead">Erase years of stains and discoloration in a single, comfortable visit. At Brickell Dental & Aesthetics, we offer the most effective professional whitening systems available.</p>
            
            <h2>Why Professional Whitening?</h2>
            <p>While over-the-counter strips and pastes offer minimal, temporary changes, our professional-grade bleaching agents penetrate deep into the enamel to lift severe stains caused by coffee, wine, tea, and aging. The results are dramatically lighter—often up to 8 shades in just one hour.</p>

            <h2>Our Whitening Options:</h2>
            <ul>
              <li><strong>In-Office Zoom Whitening:</strong> The fastest way to achieve a brilliant smile. Relax in our luxury suite while our advanced LED light technology accelerates the whitening gel.</li>
              <li><strong>Take-Home Custom Trays:</strong> Prefer to whiten at home? We create precise custom-fit aligners and provide professional-strength gel so you can safely whiten at your convenience and maintain your results.</li>
            </ul>

            <h2>Safe & Comfortable</h2>
            <p>Patient comfort is our priority. We take special precautions to protect your gums and minimize tooth sensitivity during and after the treatment.</p>
          </div>

          <div className="service-sidebar">
             <div className="sidebar-card text-center">
                <h3>Brighten Your Smile</h3>
                <p style={{marginBottom: '1.5rem', color: 'var(--text-light)'}}>Get a noticeably whiter smile in just one visit.</p>
                <Link to="/contact" className="btn btn-primary" style={{width: '100%'}}>Book Appointment</Link>
             </div>
             
             <div className="sidebar-card">
                <h3>Related Services</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
                   <Link to="/services/veneers" className="btn btn-outline">Porcelain Veneers</Link>
                   <Link to="/services/invisalign" className="btn btn-outline">Invisalign</Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeethWhitening;
