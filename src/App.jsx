import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Why from './components/Why';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Schedule from './components/Schedule';
// import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Why />
      <Register />
      {/*
      <Schedule />
      */}
      <FAQ />
      {/*
        <Sponsors />
      */}
      <Contact />
    </>
  );
}

export default App;
