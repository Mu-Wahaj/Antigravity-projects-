import React from 'react';
import { Shield, Zap, Activity, Cpu } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text-content">
          <div className="badge glass-panel animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Activity size={16} className="badge-icon" />
            <span>Next-Gen Healthcare</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The Future of <span className="text-gradient">Digital Health</span> & Aesthetics
          </h1>
          
          <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Experience cutting-edge medical aesthetics and wellness treatments, powered by AI and personalized data-driven insights. 
            Your health, optimized for tomorrow.
          </p>
          
          <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary">Book Consultation</button>
            <button className="btn-secondary">Explore Platform</button>
          </div>

          <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Monitoring</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">10k+</span>
              <span className="stat-label">Active Users</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="3d-element-placeholder glass-panel">
            <div className="scanner-line"></div>
            <div className="floating-card glass-panel card-1">
               <Shield size={24} color="var(--accent-teal)" />
               <div>
                  <div className="card-title">Security</div>
                  <div className="card-subtitle">HIPAA Compliant</div>
               </div>
            </div>
            <div className="floating-card glass-panel card-2">
               <Cpu size={24} color="var(--accent-purple)" />
               <div>
                  <div className="card-title">AI Analysis</div>
                  <div className="card-subtitle">Active</div>
               </div>
            </div>
             <div className="floating-card glass-panel card-3">
               <Zap size={24} color="#f59e0b" />
               <div>
                  <div className="card-title">Energy</div>
                  <div className="card-subtitle">Optimized</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
