import React from 'react';
import './App.css';
import Navbar from './components/js/Navbar';
import Landing from './components/js/Landing';
import About from './components/js/About';
import Why from './components/js/Why';
import Register from './components/js/Register';
import FAQ from './components/js/FAQ';
import Schedule from './components/js/Schedule';
import Sponsors from './components/js/Sponsors';
import Contact from './components/js/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Why />
      <Register />
      <FAQ />
      <Schedule />
      <Sponsors />
      <Contact />
    </>
  );
}

export default App;
