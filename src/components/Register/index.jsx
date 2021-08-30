import React from 'react';
import HackIcon from '../../assets/icons/Hack_Icon.png';
import VolunteerIcon from '../../assets/icons/Volunteer_Icon.png';
import MentorIcon from '../../assets/icons/Mentor_Icon.png';
import SmokeIcon from '../../assets/icons/Smoke_Icon.png';
import './register.css';

// The Register page
// The cards are in reverse order, but displayed in the correct order so that the tablet view
// looks the way its planned ("Hack" on top row, other 2 on bottom row)
function Register() {
  return (
    <div className="section-container register-container general-style" id="register">
      <h1 className="section-title general-style">Register</h1>
      <p className="register-sub general-style">Sign up to participate, volunteer, or become a mentor</p>
      <p className="register-sub general-style">
        By registering, you are agreeing to the
        <a href="http://mlh.io/code-of-conduct" className="code-of-conduct" rel="noreferrer" target="_blank"> MLH code of conduct</a>
      </p>
      <div className="register-wrapper">
        <div className="register-card">
          <img src={MentorIcon} className="register-img" alt="mentor-register-icon" />
          <a href="https://forms.gle/5mX9rQ6VyLRr5xrVA" className="form-link general-button" rel="noreferrer" target="_blank">Mentor</a>
        </div>
        <div className="register-card">
          <img src={VolunteerIcon} className="register-img" alt="volunteer-register-icon" />
          <img src={SmokeIcon} className="register-smoke" alt="rocket-smoke" />
          <a href="https://forms.gle/mRikt1kchHeVUZPA9" className="form-link general-button" rel="noreferrer" target="_blank">Volunteer</a>
        </div>
        <div className="register-card">
          <img src={HackIcon} className="register-img" alt="hack-register-icon" />
          <a href="https://form.typeform.com/to/lVVb3k9h" className="form-link general-button" rel="noreferrer" target="_blank">Hack</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
