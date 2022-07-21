import React, { lazy, Suspense } from 'react';
import './App.css';
import Footer from './components/Footer';

const Navbar = lazy(() => import('./components/Navbar'));
const Landing = lazy(() => import('./components/Landing'));
const About = lazy(() => import('./components/About'));
const Why = lazy(() => import('./components/Why'));
const Register = lazy(() => import('./components/Register'));
const FAQ = lazy(() => import('./components/FAQ'));
const Schedule = lazy(() => import('./components/Schedule'));
const Sponsors = lazy(() => import('./components/Sponsors'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Landing />
        <About />
        <Why />
        <Register />
        <Schedule />
        <Sponsors />
        <FAQ />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
