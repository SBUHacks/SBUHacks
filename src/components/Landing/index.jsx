import React from 'react';
import Logo from '../../assets/icons/Astronaut_Icon.png';
import './landing.css';

function Landing() {
  return (
    <div className="section-container landing-container general-style" id="landing">
      <div className="ombre-stripes-1" />
      <div className="ombre-stripes-2" />
      {/*
      <Link className="register-button" to="register" smooth duration={300}
      spy exact="true" offset={-50}>
        <button className="general-button general-style" type="button">Register</button>
      </Link>
      */}
      <img className="astronaut-logo" alt="astronaut-logo" src={Logo} />
      <div className="slogan-wrapper general-style">
        <h1 id="sbuhacks-title" className="general-style">SBUHacks</h1>
        <h1 id="sbuhacks-year" className="sbuhacks-title">2022</h1>
      </div>
      {/*
      <div className="landing-sub">
        <p id="sbuhacks-date">September 24-25</p>
        <p id="sbuhacks-slogan">Endless Space for Innovation</p>
      </div>
      */}
    </div>
  );
}

export default Landing;
