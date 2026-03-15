import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Heart, Star } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container text-center">
          <h1>Meet Your Doctors</h1>
          <p className="page-subtitle">World-class aesthetic dentistry, tailored to you.</p>
        </div>
      </div>

      <section className="section container">
        {/* Dr. Melissa Quintana */}
        <div className="doctor-profile">
          <div className="profile-image-col">
            <div className="profile-img-placeholder" style={{backgroundColor: '#e2e8f0', height: '500px', borderRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', fontSize: '1.2rem', fontWeight: 600}}>
              Dr. Melissa Quintana Portrait
            </div>
          </div>
          <div className="profile-content-col">
            <h2 className="doctor-name">Melissa Quintana, DMD</h2>
            <h3 className="doctor-title">Cosmetic Dentist & Founder</h3>
            
            <div className="badges-row">
              <span className="badge"><Award size={16}/> Elite Smile Designer</span>
              <span className="badge"><BookOpen size={16}/> NSU Graduate</span>
            </div>

            <p>Dr. Melissa Quintana initially developed her passion for dentistry working as a dental assistant at the age of 18. After obtaining her Bachelor's Degree in Biology and Chemistry, she continued her studies and received a Masters Degree in Biomedical Science. She then decided to attend graduate school at Nova Southeastern University College of Dentistry in South Florida to obtain her Doctor of Dental Medicine Degree.</p>

            <p>Following dental school, Dr. Quintana has been committed to advanced continuing education, attending lectures throughout the US where she focuses her studies on Cosmetics and Full Mouth Rehabilitation. Her extensive schooling and continuing education has led her to truly become an elite leader in quality porcelain veneers, smile design, and general dentistry.</p>

            <div className="philosophy-box">
              <Heart className="philosophy-icon" size={24} />
              <h4>Philosophy of Care</h4>
              <p>"I have a keen eye for esthetics and love having a positive influence on my patients' lives by improving their smile and overall oral health. My focus is solely on Smile Design & Smile Makeovers in a relaxing, luxury atmosphere."</p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* Dr. Nav Atwal */}
        <div className="doctor-profile reverse">
          <div className="profile-content-col">
            <h2 className="doctor-name">Nav Atwal, MS-DMD</h2>
            <h3 className="doctor-title">Cosmetic Dentist</h3>
            
            <div className="badges-row">
              <span className="badge"><Award size={16}/> Magna Cum Laude</span>
              <span className="badge"><BookOpen size={16}/> Boston University</span>
            </div>

            <p>Dr. Nav Atwal is a cosmetic dentist based in Miami, known for creating rejuvenated, natural-looking smiles. A graduate of Boston University, where he earned dual degrees (MS and DMD) and graduated Magna Cum Laude, Dr. Atwal combines advanced education with meticulous attention to detail.</p>

            <p>He continues to refine his craft through the Kois Center and advanced programs focused on ceramics, smile design, and functional occlusion, ensuring every result is both beautiful and biomechanically sound.</p>

            <p>Patients trust Dr. Atwal for his calm, collaborative approach and dedication to excellence. From porcelain veneers and smile makeovers to full-mouth rehabilitation, each treatment plan is tailored to the patient's individuality.</p>

            <div className="philosophy-box quote">
              <h4>Philosophy</h4>
              <p>“The result should be rejuvenating without looking done.”</p>
            </div>
          </div>
          <div className="profile-image-col">
            <div className="profile-img-placeholder" style={{backgroundColor: '#e2e8f0', height: '500px', borderRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', fontSize: '1.2rem', fontWeight: 600}}>
               Dr. Nav Atwal Portrait
            </div>
          </div>
        </div>
      </section>

      {/* Internal CTA */}
      <section className="section bg-light text-center">
        <div className="container">
          <h2>Ready to meet our team?</h2>
          <p className="mb-xl">Schedule a consultation to discuss your smile goals with our expert doctors.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Book Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
