import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import BookMe from './components/BookMe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Features />
        <DashboardPreview />
        <BookMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
