import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Comprehensive Dental Services</h1>
          <p className="page-subtitle">Elevating your oral health and aesthetic appeal through advanced dentistry.</p>
        </div>
      </div>

      <section className="section container">
         <div className="text-center" style={{marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem'}}>
            <p className="section-subtitle" style={{fontSize: '1.2rem', color: 'var(--text-dark)'}}>
               At Brickell Dental & Aesthetics, we believe in Comprehensive dentistry providing an array of specialized dental services where our elite doctors formulate a specific treatment plan unique for each patient.
            </p>
         </div>

         <div className="services-list-grid">
            {/* Cosmetic Dentistry */}
            <div className="service-category card">
               <div className="category-icon-wrapper">
                  <Sparkles size={32} />
               </div>
               <h2>Cosmetic Dentistry</h2>
               <p className="category-desc">Transform the appearance of your teeth, gums, and bite with our luxury aesthetic treatments designed to give you a flawless, natural-looking smile.</p>
               
               <ul className="sub-services">
                  <li>
                     <Link to="/services/veneers">
                        <strong>Porcelain Veneers</strong>
                        <span>Ultra-thin ceramic shells for a perfect Hollywood smile.</span>
                        <ArrowRight size={16}/>
                     </Link>
                  </li>
                  <li>
                     <Link to="/services/smile-makeover">
                        <strong>Smile Makeover</strong>
                        <span>Comprehensive redesign of your complete facial aesthetic.</span>
                        <ArrowRight size={16}/>
                     </Link>
                  </li>
                  <li>
                     <Link to="/services/teeth-whitening">
                        <strong>Professional Whitening</strong>
                        <span>Safe, highly effective in-office brightening treatments.</span>
                        <ArrowRight size={16}/>
                     </Link>
                  </li>
                  <li>
                     <Link to="/services/invisalign">
                        <strong>Invisalign & Clear Aligners</strong>
                        <span>Discreet orthodontic solutions for adults.</span>
                        <ArrowRight size={16}/>
                     </Link>
                  </li>
               </ul>
            </div>

            {/* Restorative & General */}
            <div className="service-category card">
               <div className="category-icon-wrapper">
                  <Activity size={32} />
               </div>
               <h2>Restorative & General</h2>
               <p className="category-desc">Restore the function, health, and structural integrity of your teeth while maintaining a beautiful, natural aesthetic appearance.</p>
               
               <ul className="sub-services">
                  <li>
                     <Link to="/services/dental-implants">
                        <strong>Dental Implants</strong>
                        <span>Permanent, natural-feeling tooth replacements.</span>
                        <ArrowRight size={16}/>
                     </Link>
                  </li>
                  <li>
                     <Link to="#">
                        <strong>Full Mouth Rehabilitation</strong>
                        <span><ShieldCheck size={14} style={{display:'inline', marginRight:'4px'}}/> Comprehensive restorative care.</span>
                     </Link>
                  </li>
                  <li>
                     <Link to="#">
                        <strong>Dental Crowns & Bridges</strong>
                        <span><ShieldCheck size={14} style={{display:'inline', marginRight:'4px'}}/> Custom lab-fabricated restorations.</span>
                     </Link>
                  </li>
                  <li>
                     <Link to="#">
                        <strong>Routine Exams & Cleanings</strong>
                        <span><ShieldCheck size={14} style={{display:'inline', marginRight:'4px'}}/> Preventative healthcare foundation.</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      <section className="cta-section text-center">
        <div className="container">
          <h2>Not sure which treatment is right for you?</h2>
          <p>Book a consultation and let our experts design a customized treatment plan tailored to your goals.</p>
          <Link to="/contact" className="btn btn-primary btn-lg" style={{backgroundColor: 'white', color: 'var(--primary-color)', marginTop: '2rem'}}>Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
