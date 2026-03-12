import React from 'react';
import { Activity, Database, Smartphone, Users } from 'lucide-react';
import './Features.css';

const Features = () => {
  const featuresList = [
    {
      icon: <Activity size={32} className="text-teal" />,
      title: 'Real-Time Health Tracking',
      description: 'Continuous monitoring of vitals with our advanced AI algorithms, providing immediate feedback.',
      delay: '0.1s'
    },
    {
      icon: <Database size={32} className="text-purple" />,
      title: 'Secure Health Records',
      description: 'Encrypted, decentralized storage ensures your medical data remains private and accessible only to you.',
      delay: '0.2s'
    },
    {
      icon: <Smartphone size={32} className="text-teal" />,
      title: 'Telehealth Integration',
      description: 'Connect instantly with specialists via high-definition video consultations from anywhere.',
      delay: '0.3s'
    },
    {
      icon: <Users size={32} className="text-purple" />,
      title: 'Personalized Care Plans',
      description: 'Custom-tailored aesthetic and wellness programs designed specifically for your unique biology.',
      delay: '0.4s'
    }
  ];

  return (
    <section className="features" id="services">
      <div className="container">
        
        <div className="features-header text-center animate-fade-in-up">
          <h2 className="section-title">
            Empowering Your <span className="text-gradient">Wellness Journey</span>
          </h2>
          <p className="section-subtitle">
            Leveraging state-of-the-art technology to provide unparalleled insights and treatments for a healthier, more vibrant you.
          </p>
        </div>

        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass-panel animate-fade-in-up"
              style={{ animationDelay: feature.delay }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
                <div className="icon-glow"></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
