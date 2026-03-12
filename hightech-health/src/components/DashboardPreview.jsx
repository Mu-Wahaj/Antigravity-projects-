import React from 'react';
import './DashboardPreview.css';
import { LineChart, Activity, Heart, Droplets, Moon } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="dashboard-preview" id="platform">
      <div className="container">
        
        <div className="dashboard-header text-center animate-fade-in-up">
          <h2 className="section-title">
            Your Health, <span className="text-gradient">Visualized</span>
          </h2>
          <p className="section-subtitle">
            Experience our intuitive patient portal. Track your progress, manage appointments, and view AI-driven insights all in one sleek interface.
          </p>
        </div>

        <div className="dashboard-mockup glass-panel animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Mockup Topbar */}
          <div className="mockup-topbar">
            <div className="mockup-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="mockup-search glass-panel">
               Search health records...
            </div>
            <div className="mockup-profile">
               <div className="mockup-avatar"></div>
            </div>
          </div>

          <div className="mockup-body">
            {/* Mockup Sidebar */}
            <div className="mockup-sidebar">
              <div className="sidebar-item active"><Activity size={18} /> Overview</div>
              <div className="sidebar-item"><LineChart size={18} /> Analytics</div>
              <div className="sidebar-item"><Heart size={18} /> Vitals</div>
              <div className="sidebar-item"><Droplets size={18} /> Aesthetics</div>
            </div>
            
            {/* Mockup Content */}
            <div className="mockup-content">
              <div className="mockup-welcome">
                <h3>Good Morning, Alex</h3>
                <p>Your wellness score is up 12% this week.</p>
              </div>

              <div className="mockup-stats-grid">
                 <div className="mockup-stat-card glass-panel">
                    <div className="stat-card-header">
                       <Heart size={20} className="text-teal" />
                       <span className="stat-card-title">Heart Rate</span>
                    </div>
                    <div className="stat-card-value">72 <span className="stat-card-unit">bpm</span></div>
                    <div className="stat-card-trend positive">+2% from avg</div>
                 </div>
                 <div className="mockup-stat-card glass-panel">
                    <div className="stat-card-header">
                       <Moon size={20} className="text-purple" />
                       <span className="stat-card-title">Sleep Quality</span>
                    </div>
                    <div className="stat-card-value">8.2 <span className="stat-card-unit">hrs</span></div>
                    <div className="stat-card-trend positive">Optimal</div>
                 </div>
                 <div className="mockup-stat-card glass-panel">
                    <div className="stat-card-header">
                       <Activity size={20} className="text-teal" />
                       <span className="stat-card-title">Metabolism</span>
                    </div>
                    <div className="stat-card-value">High</div>
                    <div className="stat-card-trend neutral">Stable</div>
                 </div>
              </div>

              <div className="mockup-chart glass-panel">
                 <div className="chart-header">
                    <h4>Recovery Trend</h4>
                 </div>
                 <div className="chart-placeholder">
                   {/* CSS generated chart lines */}
                   <div className="chart-line-1"></div>
                   <div className="chart-line-2"></div>
                   <div className="chart-grid"></div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
