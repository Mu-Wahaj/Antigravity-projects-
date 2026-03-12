import React from 'react';
import './BookMe.css';
import { Calendar, Clock, Video, User } from 'lucide-react';

const BookMe = () => {
  return (
    <section className="book-me" id="contact">
      <div className="container">
        <div className="book-me-content glass-panel animate-fade-in-up">
          
          <div className="book-me-info">
            <h2 className="section-title">Schedule Your<br/><span className="text-gradient">AI Consultation</span></h2>
            <p className="book-me-description">
              Take the first step towards optimized health and aesthetics. Book a high-definition virtual consultation with our specialists.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                 <div className="contact-icon-wrapper"><Calendar size={20} className="text-teal" /></div>
                 <div>
                    <h4>Availability</h4>
                    <p>Mon-Sat, 8am - 8pm (EST)</p>
                 </div>
              </div>
              <div className="contact-item">
                 <div className="contact-icon-wrapper"><Video size={20} className="text-purple" /></div>
                 <div>
                    <h4>Platform</h4>
                    <p>Secure Telehealth Portal</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="book-me-form-container">
            <form className="book-me-form">
              <h3 className="form-header">Request Appointment</h3>
              
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder="Alex Jensen" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <div className="input-wrapper">
                    <Calendar size={18} className="input-icon" />
                    <input type="date" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Time slot</label>
                  <div className="input-wrapper">
                     <Clock size={18} className="input-icon" />
                    <select required>
                      <option value="" disabled selected>Select time</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Primary Interest</label>
                <select className="full-width-select" required>
                  <option value="" disabled selected>Select area of interest</option>
                  <option value="aesthetics">Medical Aesthetics</option>
                  <option value="longevity">Longevity & Wellness</option>
                  <option value="vitals">Diagnostics & Vitals</option>
                </select>
              </div>

              <button type="button" className="btn-primary form-submit-btn" onClick={(e) => {
                e.preventDefault();
                alert('Booking request sent successfully. Our AI scheduler will confirm your slot shortly.');
              }}>
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookMe;
