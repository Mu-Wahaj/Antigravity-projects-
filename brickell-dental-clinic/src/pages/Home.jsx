import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, ArrowRight, Shield, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          {/* Subtle gradient overlay on a nice stock image replacement */}
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text-box">
            <span className="hero-badge">Welcome to Brickell Dental & Aesthetics</span>
            <h1 className="hero-headline">Rejuvenating Smiles<br/>Naturally & Beautifully</h1>
            <p className="hero-subtext">
              Miami's premier destination for luxury full mouth rehabilitation, cosmetic dentistry, and advanced family care. Experience a higher standard of dentistry.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Book Appointment</Link>
              <a href="tel:+13054032120" className="btn btn-outline btn-lg" style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'white'}}>Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-stats">
              <div className="stat-item">
                <div className="stars">
                   {[...Array(5)].map((_, i) => <Star key={i} fill="#f59e0b" color="#f59e0b" size={24} />)}
                </div>
                <h3>4.9/5 Average</h3>
                <p>Based on over 500 patient reviews</p>
              </div>
              <div className="stat-item">
                <Shield className="stat-icon" size={32} />
                <h3>Elite Credentials</h3>
                <p>Advanced training at Kois Center & NSU</p>
              </div>
              <div className="stat-item">
                <Users className="stat-icon" size={32} />
                <h3>Luxury Care</h3>
                <p>Personalized, VIP treatment plans</p>
              </div>
            </div>
            
            <div className="trust-testimonial card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                "The most stunning dental office I've ever visited. Dr. Quintana gave me the smile I've always dreamed of with porcelain veneers. The entire process was painless and five-star from start to finish."
              </p>
              <div className="testimonial-author">
                <strong>— Sarah L.</strong>
                <span>Miami, FL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Elevate Your Smile</h2>
            <p className="section-subtitle">Comprehensive premium dental services tailored to your unique facial aesthetics.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon-wrapper">
                <span className="icon-veneer">🦷</span>
              </div>
              <h3 className="service-title">Porcelain Veneers</h3>
              <p className="service-desc">Custom-crafted, ultra-thin porcelain shells designed to give you a flawless, Hollywood-worthy smile.</p>
              <Link to="/services/veneers" className="service-link">Learn More <ArrowRight size={16}/></Link>
            </div>

            <div className="service-card card">
              <div className="service-icon-wrapper">
                <span className="icon-implant">🔩</span>
              </div>
              <h3 className="service-title">Dental Implants</h3>
              <p className="service-desc">Permanent, natural-looking tooth replacements that restore both function and unparalleled aesthetics.</p>
              <Link to="/services/dental-implants" className="service-link">Learn More <ArrowRight size={16}/></Link>
            </div>

            <div className="service-card card">
              <div className="service-icon-wrapper">
                <span className="icon-makeover">✨</span>
              </div>
              <h3 className="service-title">Smile Makeover</h3>
              <p className="service-desc">A comprehensive approach combining multiple cosmetic procedures to completely transform your smile.</p>
              <Link to="/services/smile-makeover" className="service-link">Learn More <ArrowRight size={16}/></Link>
            </div>

            <div className="service-card card">
              <div className="service-icon-wrapper">
                <span className="icon-invisalign">😁</span>
              </div>
              <h3 className="service-title">Invisalign®</h3>
              <p className="service-desc">Clear, comfortable aligners that discreetly straighten your teeth without traditional metal braces.</p>
              <Link to="/services/invisalign" className="service-link">Learn More <ArrowRight size={16}/></Link>
            </div>
          </div>
          <div className="text-center" style={{marginTop: '3rem'}}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Interactive Before & After */}
      <section className="ba-section section">
        <div className="container">
          <div className="ba-layout">
            <div className="ba-content">
              <h2 className="section-title">Transformations That Speak for Themselves</h2>
              <p className="section-subtitle">Slide to see the dramatic difference our specialized cosmetic treatments can make. We design smiles that look naturally breathtaking.</p>
              <Link to="/gallery" className="btn btn-primary" style={{marginTop: '1.5rem'}}>View Full Gallery</Link>
            </div>
            <div className="ba-slider-container">
               <div className="image-comparison">
                 {/* Placeholder for After Image */}
                 <div className="img-after" style={{ backgroundColor: '#ebf4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2b6cb0', fontWeight: 'bold' }}>AFTER (Beautiful White Teeth)</div>
                 {/* Placeholder for Before Image */}
                 <div className="img-before" style={{ width: `${sliderPos}%`, backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096', fontWeight: 'bold' }}>BEFORE</div>
                 <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
                    <div className="handle-arrows">
                      <ChevronLeft size={16} color="var(--primary-color)" />
                      <ChevronRight size={16} color="var(--primary-color)" />
                    </div>
                 </div>
                 <input 
                    type="range" 
                    min="0" max="100" 
                    value={sliderPos} 
                    onChange={handleSliderChange}
                    className="slider-input"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section className="doctors-section section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Meet Our Elite Team</h2>
            <p className="section-subtitle">Dedicated professionals committed to excellence, aesthetics, and patient comfort.</p>
          </div>
          
          <div className="doctors-grid">
             <div className="doctor-card card">
                <div className="doctor-img-placeholder" style={{backgroundColor: '#cbd5e1', height: '300px', borderTopLeftRadius: 'var(--border-radius-lg)', borderTopRightRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: 600}}>
                   Dr. Melissa Quintana
                </div>
                <div className="doctor-info">
                   <h3 className="doctor-name">Dr. Melissa Quintana, DMD</h3>
                   <span className="doctor-title">Cosmetic Dentist & Founder</span>
                   <p className="doctor-bio">A leader in quality porcelain veneers and smile design. Dr. Q fulfills her vision of bringing the very best in aesthetic dentistry to a national and international clientele.</p>
                   <Link to="/about" className="btn btn-outline" style={{width: '100%', marginTop: '1rem'}}>Read Full Bio</Link>
                </div>
             </div>

             <div className="doctor-card card">
                <div className="doctor-img-placeholder" style={{backgroundColor: '#94a3b8', height: '300px', borderTopLeftRadius: 'var(--border-radius-lg)', borderTopRightRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: 600}}>
                   Dr. Nav Atwal
                </div>
                <div className="doctor-info">
                   <h3 className="doctor-name">Dr. Nav Atwal, MS-DMD</h3>
                   <span className="doctor-title">Cosmetic Dentist</span>
                   <p className="doctor-bio">Graduated Magna Cum Laude from Boston University. Known for creating rejuvenated, natural-looking smiles through precision, aesthetics, and natural balance.</p>
                   <Link to="/about" className="btn btn-outline" style={{width: '100%', marginTop: '1rem'}}>Read Full Bio</Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section section">
        <div className="container text-center">
          <h2 className="section-title">State-of-the-Art Technology</h2>
          <p className="section-subtitle mb-xl">Our in-house premium lab allows for unmatched precision and customization, creating a seamless experience.</p>
          
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon"><CheckCircle size={32} color="var(--primary-color)" /></div>
              <h4>In-House Lab</h4>
              <p>Direct access between technicians and doctors for perfect customization.</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><CheckCircle size={32} color="var(--primary-color)" /></div>
              <h4>Digital Imaging</h4>
              <p>3D scanning for precise, comfortable, and highly accurate impressions.</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><CheckCircle size={32} color="var(--primary-color)" /></div>
              <h4>Digital Smile Design</h4>
              <p>Visualizing your final results before treatment even begins.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to transform your smile?</h2>
          <p>Schedule your consultation today and take the first step towards the smile you've always wanted.</p>
          <div className="hero-actions" style={{justifyContent: 'center', marginTop: '2rem'}}>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{backgroundColor: 'white', color: 'var(--primary-color)'}}>Book Appointment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
