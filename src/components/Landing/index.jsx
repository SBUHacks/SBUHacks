import React from 'react';
// import { Link } from 'react-scroll';
import './landing.css';

function Landing() {
  return (
    <div className="section-container landing-container general-style" id="landing">
      <div className="radar-signal" />
      <div className="globe-outline" />
      <div className="astronaut-logo" />
      <div className="slogan-wrapper general-style">
        <h1 id="sbuhacks-title" className="general-style">SBUHacks VI</h1>
        <div className="landing-sub">
          <p id="sbuhacks-date">February 9-11</p>
          {/*
          <a href="https://goo.gl/maps/XpFTggeudBrhq63S7" target="_blank" rel="noreferrer">
            <p className="sbuhacks-slogan">Frank Melville Jr. Memorial Library</p>
            <p className="sbuhacks-slogan">Stony Brook, New York</p>
          </a>
  */}
        </div>
      </div>
      {/*
      <Link
        className="register-button"
        to="register"
        smooth
        duration={300}
        spy
        exact="true"
        offset={-100}
      >
        <button className="general-button general-style" type="button">Register</button>
      </Link>
*/}
    </div>
  );
}

export default Landing;
