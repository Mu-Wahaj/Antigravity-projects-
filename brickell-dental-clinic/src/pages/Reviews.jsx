import React from 'react';
import { Star, MessageCircle, ThumbsUp } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  { id: 1, name: 'Sarah L.', platform: 'Google', text: 'The most stunning dental office I\'ve ever visited. Dr. Quintana gave me the smile I\'ve always dreamed of with porcelain veneers. The entire process was painless and five-star from start to finish.', rating: 5 },
  { id: 2, name: 'Michael R.', platform: 'Yelp', text: 'Dr. Atwal is a true artist. My dental implants look completely natural. The in-house lab makes the process so much faster and customized. Highly recommend Brickell Dental!', rating: 5 },
  { id: 3, name: 'Jessica T.', platform: 'Google', text: 'I had severe anxiety about dentists until I came here. The staff is incredibly warm and the luxury atmosphere completely relaxes you. Best cleaning and whitening experience ever.', rating: 5 },
  { id: 4, name: 'David W.', platform: 'Healthgrades', text: 'My Invisalign treatment was seamless. They use the latest 3D scanning tech so there\'s no messy impressions. Very professional and efficient.', rating: 5 },
  { id: 5, name: 'Elena G.', platform: 'Google', text: 'A completely elevated experience. You are treated like a VIP. Dr. Q\'s attention to facial aesthetics when designing my smile makeover was phenomenal.', rating: 5 },
  { id: 6, name: 'Robert M.', platform: 'Yelp', text: 'Exceptional full mouth rehabilitation. I can finally eat normally and smile with confidence again.', rating: 5 }
];

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="page-header text-center">
        <div className="container">
          <h1>Patient Reviews</h1>
          <p className="page-subtitle">Don't just take our word for it.</p>
        </div>
      </div>

      <section className="section bg-light">
         <div className="container text-center">
            <div className="stats-box card">
               <div className="aggregate-score">
                  <h2 style={{fontSize: '4rem', color: 'var(--primary-color)', margin: 0}}>4.9</h2>
                  <div className="stars" style={{justifyContent: 'center', marginBottom: '1rem'}}>
                     {[...Array(5)].map((_, i) => <Star key={i} fill="#f59e0b" color="#f59e0b" size={28} />)}
                  </div>
                  <p>Average from over 500 verified reviews</p>
               </div>
               <div className="platform-badges">
                  <span className="platform-badge"><MessageCircle size={16}/> Google Reviews</span>
                  <span className="platform-badge"><ThumbsUp size={16}/> Yelp Recommend</span>
               </div>
            </div>
         </div>
      </section>

      <section className="section container">
        <div className="reviews-grid">
           {reviewsData.map(r => (
             <div key={r.id} className="review-card card">
                <div className="review-header">
                  <div className="review-author-avatar">
                    {r.name.charAt(0)}
                  </div>
                  <div className="review-meta">
                    <h4>{r.name}</h4>
                    <span className="review-platform">via {r.platform}</span>
                  </div>
                  <div className="review-stars-small">
                     {[...Array(r.rating)].map((_, i) => <Star key={i} fill="#f59e0b" color="#f59e0b" size={14} />)}
                  </div>
                </div>
                <div className="review-body">
                  <p>"{r.text}"</p>
                </div>
             </div>
           ))}
        </div>
      </section>
      
      <section className="cta-section text-center">
        <div className="container">
          <h2>Experience the difference yourself</h2>
          <a href="/contact" className="btn btn-primary btn-lg" style={{backgroundColor: 'white', color: 'var(--primary-color)', marginTop: '2rem'}}>Book Your Appointment</a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
