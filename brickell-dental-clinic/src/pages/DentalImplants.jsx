import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const DentalImplants = () => {
  return (
    <div className="service-detail-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Dental Implants</h1>
          <p className="page-subtitle">Permanent, natural-looking replacements for missing teeth.</p>
        </div>
      </div>

      <section className="section container">
        <div className="service-detail-content">
          <div className="service-main">
            <div className="hero-image-placeholder" style={{backgroundColor: '#fed7aa'}}>
               Dental Implants Example
            </div>
            
            <p className="lead">Losing a tooth can impact your confidence and oral health. Dental implants offer the most advanced, permanent solution that looks, feels, and functions exactly like your natural teeth.</p>
            
            <h2>Why Choose Dental Implants?</h2>
            <p>Unlike traditional dentures or bridges that rest on the gums or require altering adjacent teeth, dental implants are titanium posts surgically placed into the jawbone. They act as artificial tooth roots, providing a sturdy foundation for custom-crafted porcelain crowns.</p>

            <h2>Benefits of Implants:</h2>
            <ul>
              <li>Preserves jawbone density and facial structure</li>
              <li>Does not require filing down neighboring healthy teeth</li>
              <li>Permanent solution with proper care (can last a lifetime)</li>
              <li>Restores 100% of chewing power and speech</li>
              <li>Unmatched aesthetic integration with your smile</li>
            </ul>

            <h2>Precision Placement and Custom Lab Results</h2>
            <p>With our state-of-the-art 3D imaging and in-house laboratory, our doctors ensure pinpoint surgical accuracy and flawless prosthetic design. Your implant crown will be color-matched and shaped to perfectly blend with your surrounding teeth.</p>
          </div>

          <div className="service-sidebar">
             <div className="sidebar-card text-center">
                <h3>Restore Your Smile</h3>
                <p style={{marginBottom: '1.5rem', color: 'var(--text-light)'}}>Schedule an implant consultation today.</p>
                <Link to="/contact" className="btn btn-primary" style={{width: '100%'}}>Book Consultation</Link>
             </div>
             
             <div className="sidebar-card">
                <h3>Related Services</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
                   <Link to="/services/smile-makeover" className="btn btn-outline">Smile Makeover</Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalImplants;
