import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import NewPatient from './pages/NewPatient';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SmileMakeover from './pages/SmileMakeover';
import DentalImplants from './pages/DentalImplants';
import Veneers from './pages/Veneers';
import TeethWhitening from './pages/TeethWhitening';
import Invisalign from './pages/Invisalign';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/smile-makeover" element={<SmileMakeover />} />
            <Route path="/services/dental-implants" element={<DentalImplants />} />
            <Route path="/services/veneers" element={<Veneers />} />
            <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
            <Route path="/services/invisalign" element={<Invisalign />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/new-patient" element={<NewPatient />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
