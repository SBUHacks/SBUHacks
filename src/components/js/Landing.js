import React from 'react';
import { Link } from 'react-scroll';
import '../css/Landing.css';

function Landing() {
  return (
    <section className="landing-container" id="landing">
      <Link className="planet" to="about" smooth duration={300} spy exact="true" offset={-10}><button className="planet-title" type="button" tabIndex="0">About</button></Link>
      <Link className="planet" to="faq" smooth duration={300} spy exact="true" offset={-10}><button className="planet-title" type="button">FAQ</button></Link>
      <Link className="planet" to="schedule" smooth duration={300} spy exact="true" offset={-10}><button className="planet-title" type="button">Schedule</button></Link>
      <Link className="planet" to="sponsors" smooth duration={300} spy exact="true" offset={-10}><button className="planet-title" type="button">Sponsors</button></Link>
      <Link className="planet" to="contact" smooth duration={300} spy exact="true" offset={-10}><button className="planet-title" type="button">Contact</button></Link>
      <div className="planet" />
      <Link className="register-button" to="register" smooth duration={300} spy exact="true" offset={-10}><button className="planet-title" type="button">Register</button></Link>
      <div className="slogan-wrapper">
        <h1>SBUHacks</h1>
        <p>Powered by Softheon</p>
        <p className="slogan">Endless space for innovation</p>
        <p className="date">September 24-25, 2021</p>
      </div>
    </section>
  );
}

export default Landing;
