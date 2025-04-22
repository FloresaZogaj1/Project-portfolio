import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import Services from './components/Services'; 
import About from './components/About';
import ProjectsSection from './components/ProjectSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ServicesSection />
            <About />
            <ProjectsSection />
            <ContactForm />
          </>
        } />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsSection/>} />
        <Route path="/contact" element={<ContactForm />} />

        {/* Mund të shtosh edhe rrugë të tjera këtu */}
      </Routes>
    </div>
  );
}

export default App;
