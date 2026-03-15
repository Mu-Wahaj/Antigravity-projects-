import React from 'react';
import { Camera } from 'lucide-react';
import './Gallery.css'; // Will also reuse some .page-header from About.css if imported globally, or we redefine

const cases = [
  { id: 1, title: 'Porcelain Veneers - Full Upper', desc: 'Patient wanted a brighter, wider smile to correct spacing and discoloration.' },
  { id: 2, title: 'Smile Makeover', desc: 'Combination of Invisalign and 4 custom porcelain veneers.' },
  { id: 3, title: 'Dental Implants', desc: 'Restored missing front tooth with a permanent, natural-looking implant.' },
  { id: 4, title: 'Teeth Whitening', desc: 'In-office professional whitening removing years of coffee stains.' },
  { id: 5, title: 'Porcelain Veneers - 10 Units', desc: 'Complete smile transformation for a more youthful appearance.' },
  { id: 6, title: 'Invisalign Clear Aligners', desc: 'Corrected severe crowding in 12 months with clear aligners.' }
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Smile Gallery</h1>
          <p className="page-subtitle">Real patients. Life-changing results.</p>
        </div>
      </div>

      <section className="section container">
        <div className="text-center" style={{marginBottom: '3rem'}}>
           <p className="section-subtitle">Browse our collection of before and after photos showcasing the transformative power of our luxury dental treatments.</p>
        </div>

        <div className="gallery-grid">
           {cases.map((c) => (
             <div key={c.id} className="gallery-card card">
               <div className="gallery-images">
                 <div className="image-half before-img">
                   <div className="img-label">Before</div>
                 </div>
                 <div className="image-half after-img">
                   <div className="img-label" style={{backgroundColor: 'var(--primary-color)'}}>After</div>
                 </div>
               </div>
               <div className="gallery-info">
                 <h3 className="gallery-title"><Camera size={18} style={{marginRight: '8px', color: 'var(--primary-color)'}}/>{c.title}</h3>
                 <p className="gallery-desc">{c.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      <section className="cta-section text-center">
        <div className="container">
          <h2>Ready for your own before & after?</h2>
          <p>Book a consultation to see how we can transform your smile.</p>
          <a href="/contact" className="btn btn-primary btn-lg" style={{backgroundColor: 'white', color: 'var(--primary-color)', marginTop: '2rem'}}>Schedule Now</a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
