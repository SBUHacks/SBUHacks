import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/icons/Astronaut_Icon.png';
import './landing.css';

function Landing() {
  return (
    <div className="section-container landing-container general-style" id="landing">
      <div className="ombre-stripes-1" />
      <div className="ombre-stripes-2" />
      <img className="astronaut-logo" alt="astronaut-logo" src={Logo} />
      <div className="slogan-wrapper general-style">
        <h1 id="sbuhacks-title" className="general-style">SBUHacks 2022</h1>
        <div className="landing-sub">
          <p id="sbuhacks-date">September 23-25</p>
          <a href="https://goo.gl/maps/XpFTggeudBrhq63S7" target="_blank" rel="noreferrer">
            <p className="sbuhacks-slogan">Frank Melville Jr. Memorial Library</p>
            <p className="sbuhacks-slogan">Stony Brook, New York</p>
          </a>
        </div>
      </div>
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
    </div>
  );
}

export default Landing;
