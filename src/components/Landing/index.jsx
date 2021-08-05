import React from 'react';
import { Link } from 'react-scroll';
import './landing.css';

function Landing() {
  return (
    <div className="section-container landing-container general-style" id="landing">
      <Link className="planet" to="about" smooth duration={300} spy exact="true" offset={-10}>
        <button className="planet-title general-style" id="about-planet" type="button" tabIndex="0">
          About
        </button>
      </Link>
      <Link className="planet" to="faq" smooth duration={300} spy exact="true" offset={-10}>
        <button className="planet-title general-style" type="button">
          FAQ
        </button>
      </Link>
      <Link className="planet" to="/" smooth duration={300} spy exact="true" offset={-10}>
        <button className="planet-title general-style" type="button">
          {/*
            Schedule
          */}
        </button>
      </Link>
      <Link className="planet" to="/" smooth duration={300} spy exact="true" offset={-10}>
        <button className="planet-title general-style" type="button">
          {/*
            Sponsors
          */}
        </button>
      </Link>
      <Link className="planet" to="contact" smooth duration={300} spy exact="true" offset={-10}>
        <button className="planet-title general-style contact-title" type="button">
          Contact
        </button>
      </Link>
      <div className="planet" />
      <Link className="register-button" to="register" smooth duration={300} spy exact="true" offset={-10}><button className="planet-title general-style" type="button">Register</button></Link>
      <div className="slogan-wrapper general-style">
        <h1 id="sbuhacks-title" className="general-style">SBUHacks</h1>
        <p className="landing-sub general-style">Powered by Softheon</p>
        <p className="landing-sub general-style">Endless space for innovation</p>
        <p className="date">September 24-25, 2021</p>
      </div>
    </div>
  );
}

export default Landing;
