import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({name: '', email: '', phone: '', service: '', message: ''});
    }, 4000);
  };

  return (
    <div className="contact-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">We're here to help you achieve the smile of your dreams.</p>
        </div>
      </div>

      <section className="section container">
         <div className="contact-layout">
            <div className="contact-details">
               <h2>Get in Touch</h2>
               <p className="contact-intro">Whether you're ready to book an appointment or simply have a question about our services, our dedicated team is here for you.</p>

               <div className="contact-method">
                  <div className="method-icon"><Phone size={24}/></div>
                  <div className="method-info">
                     <h3>Call Us</h3>
                     <p><a href="tel:+13054032120">(305) 403-2120</a></p>
                  </div>
               </div>

               <div className="contact-method">
                  <div className="method-icon"><Mail size={24}/></div>
                  <div className="method-info">
                     <h3>Email Us</h3>
                     <p><a href="mailto:info@brickelldental.com">info@brickelldental.com</a></p>
                  </div>
               </div>

               <div className="contact-method">
                  <div className="method-icon"><MapPin size={24}/></div>
                  <div className="method-info">
                     <h3>Visit Us</h3>
                     <p>123 Brickell Ave<br/>Miami, FL 33131</p>
                  </div>
               </div>

               <div className="contact-method">
                  <div className="method-icon"><Clock size={24}/></div>
                  <div className="method-info">
                     <h3>Office Hours</h3>
                     <div className="hours-grid">
                        <span>Monday:</span> <span>9:00 am - 6:00 pm</span>
                        <span>Tuesday:</span> <span>9:00 am - 5:00 pm</span>
                        <span>Wednesday:</span> <span>8:00 am - 5:00 pm</span>
                        <span>Thursday:</span> <span>8:00 am - 5:00 pm</span>
                        <span>Friday:</span> <span>9:00 am - 12:00 pm</span>
                        <span>Sat - Sun:</span> <span>Closed</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="contact-form-wrapper card">
               <h2>Request an Appointment</h2>
               {submitted ? (
                  <div className="success-message">
                     <div className="success-icon">✓</div>
                     <h3>Request Sent!</h3>
                     <p>Thank you, {formData.name || 'there'}. Our team will contact you shortly to confirm your appointment details.</p>
                  </div>
               ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                       <label htmlFor="name">Full Name *</label>
                       <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                    </div>
                    
                    <div className="form-row">
                       <div className="form-group half">
                          <label htmlFor="email">Email Address *</label>
                          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                       </div>
                       <div className="form-group half">
                          <label htmlFor="phone">Phone Number *</label>
                          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(305) 000-0000" />
                       </div>
                    </div>

                    <div className="form-group">
                       <label htmlFor="service">Service of Interest</label>
                       <select id="service" name="service" value={formData.service} onChange={handleChange}>
                          <option value="">Select a service...</option>
                          <option value="consultation">Free Smile Consultation</option>
                          <option value="veneers">Porcelain Veneers</option>
                          <option value="implants">Dental Implants</option>
                          <option value="makeover">Smile Makeover</option>
                          <option value="invisalign">Invisalign</option>
                          <option value="general">General Cleaning / Exam</option>
                       </select>
                    </div>

                    <div className="form-group">
                       <label htmlFor="message">Additional Notes (Optional)</label>
                       <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="How can we help you today?"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                       <Send size={18} style={{marginRight: '8px'}}/> Send Request
                    </button>
                  </form>
               )}
            </div>
         </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
         {/* Placeholder for iframe map */}
         <div className="map-placeholder" style={{width: '100%', height: '400px', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dark)', fontSize: '1.2rem'}}>
            Interactive Google Map Placement
         </div>
      </section>
    </div>
  );
};

export default Contact;
