import React from 'react';
import { FileText, CreditCard, Clock, CheckCircle } from 'lucide-react';
import './NewPatient.css';

const NewPatient = () => {
  return (
    <div className="new-patient-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>New Patient Information</h1>
          <p className="page-subtitle">Welcome to Brickell Dental & Aesthetics. We're honored you chose us.</p>
        </div>
      </div>

      <section className="section container">
        {/* Special Offer Box */}
        <div className="offer-box card text-center">
           <span className="offer-badge">Limited Time Offer</span>
           <h2>Complimentary Smile Consultation</h2>
           <p>Includes a 3D digital scan, personalized smile design preview, and one-on-one consultation with our expert cosmetic dentists.</p>
           <div className="offer-value">Valued at $350 - Yours Free!</div>
           <a href="/contact" className="btn btn-primary" style={{marginTop: '1.5rem'}}>Claim Offer & Book Now</a>
        </div>

        <div className="info-grid mt-xl">
           <div className="info-card">
              <FileText className="info-icon" size={32} />
              <h3>Patient Forms</h3>
              <p>For your convenience, our patient forms are available online. Please fill them out before your first visit to minimize your wait time.</p>
              <button className="btn btn-outline" style={{marginTop: '1rem'}}>Fill Forms Online</button>
           </div>
           
           <div className="info-card">
              <CreditCard className="info-icon" size={32} />
              <h3>Financing Options</h3>
              <p>We believe everyone deserves a beautiful smile. We accept most major PPO insurances and offer flexible financing through CareCredit and LendingClub.</p>
              <ul className="info-list">
                 <li><CheckCircle size={14}/> CareCredit Accepted</li>
                 <li><CheckCircle size={14}/> In-house payment plans available</li>
                 <li><CheckCircle size={14}/> Major credit cards accepted</li>
              </ul>
           </div>
           
           <div className="info-card">
              <Clock className="info-icon" size={32} />
              <h3>What to Expect</h3>
              <p>Your first visit will last about 60-90 minutes. We'll take comprehensive digital x-rays, perform a thorough exam, and discuss your aesthetic goals.</p>
              <ul className="info-list">
                 <li><CheckCircle size={14}/> VIP Tour of our facility</li>
                 <li><CheckCircle size={14}/> Comprehensive Exam & X-rays</li>
                 <li><CheckCircle size={14}/> Personalized Treatment Plan</li>
              </ul>
           </div>
        </div>
      </section>
    </div>
  );
};

export default NewPatient;
