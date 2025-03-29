import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ResumePG from './components/ResumePG';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/resume" element={<ResumePG />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
