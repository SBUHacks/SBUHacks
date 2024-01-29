import React, { lazy, Suspense } from 'react';
import './App.css';
import Footer from './components/Footer';

const Navbar = lazy(() => import('./components/Navbar'));
const Landing = lazy(() => import('./components/Landing'));
const About = lazy(() => import('./components/About'));
// const PastWinners = lazy(() => import('./components/Winners'));
const Why = lazy(() => import('./components/Why'));
const Register = lazy(() => import('./components/Register'));
const FAQ = lazy(() => import('./components/FAQ'));
const Schedule = lazy(() => import('./components/Schedule'));
const Sponsors = lazy(() => import('./components/Sponsors'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Landing />
        <About />
        {/* <PastWinners /> */}
        <Why />
        <Register />
        <Schedule />
        <Sponsors />
        <FAQ />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
