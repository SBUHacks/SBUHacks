import React from 'react';
import { Link } from 'react-scroll';
import './landing.css';

function Landing() {
  return (
    <div className="section-container landing-container general-style" id="landing">
      <Link className="planet" to="about" smooth duration={300} spy exact="true" offset={-80}>
        <button className="planet-title general-style" id="about-planet" type="button" tabIndex="0">
          About
        </button>
      </Link>
      <Link className="planet" to="faq" smooth duration={300} spy exact="true" offset={-80}>
        <button className="planet-title general-style" type="button">
          FAQ
        </button>
      </Link>
      <Link className="planet" to="/" smooth duration={300} spy exact="true" offset={-80}>
        <button className="planet-title general-style" type="button">
          {/*
            Schedule
          */}
        </button>
      </Link>
      <Link className="planet" to="/" smooth duration={300} spy exact="true" offset={-80}>
        <button className="planet-title general-style" type="button">
          {/*
            Sponsors
          */}
        </button>
      </Link>
      <Link className="planet" to="contact" smooth duration={300} spy exact="true" offset={-80}>
        <button className="planet-title general-style" type="button">
          Contact
        </button>
      </Link>
      <div className="planet" />
      <div className="planet" />
      <div className="planet" />
      <div className="planet" />
      <Link className="register-button" to="register" smooth duration={300} spy exact="true" offset={-80}><button className="general-button general-style" type="button">Register</button></Link>
      <div className="slogan-wrapper general-style">
        <h1 id="sbuhacks-title" className="general-style">SBUHacks</h1>
        <h1 id="sbuhacks-year" className="sbuhacks-title">2021</h1>
      </div>
      <p id="sbuhacks-slogan">Endless Space for Innovation</p>
    </div>
  );
}

export default Landing;
