import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const Invisalign = () => {
  return (
    <div className="service-detail-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Invisalign® Clear Aligners</h1>
          <p className="page-subtitle">Discreetly straighten your teeth for a healthy, perfectly aligned smile.</p>
        </div>
      </div>

      <section className="section container">
        <div className="service-detail-content">
          <div className="service-main">
            <div className="hero-image-placeholder" style={{backgroundColor: '#e0f2fe'}}>
               Invisalign Aligners Example
            </div>
            
            <p className="lead">Get the straight, beautiful smile you’ve always wanted without the hassle of traditional metal braces. Invisalign is the nearly invisible way to correct your bite and alignment.</p>
            
            <h2>How Invisalign Works</h2>
            <p>Invisalign uses a series of custom-made, clear plastic aligners that you switch out every few weeks. Each set gradually shifts your teeth into their optimal position based on a precise 3D treatment plan designed by our doctors.</p>

            <h2>Why Choose Invisalign?</h2>
            <ul>
              <li><strong>Invisible Aesthetics:</strong> The clear aligners are virtually unnoticeable.</li>
              <li><strong>Removable:</strong> Take them out to eat your favorite foods and easily brush and floss.</li>
              <li><strong>Comfortable:</strong> Smooth plastic without sharp metal brackets or wires.</li>
              <li><strong>Fewer Visits:</strong> You'll spend less time in the dentist's chair for adjustments.</li>
            </ul>

            <h2>Advanced 3D Imaging</h2>
            <p>Our office utilizes advanced digital scanning technology. There are no messy, uncomfortable impressions. We take a rapid 3D scan of your teeth and can show you a digital simulation of your final smile before treatment even begins.</p>
          </div>

          <div className="service-sidebar">
             <div className="sidebar-card text-center">
                <h3>Start Your Journey</h3>
                <p style={{marginBottom: '1.5rem', color: 'var(--text-light)'}}>Schedule a consultation to see your digital smile preview.</p>
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

export default Invisalign;
