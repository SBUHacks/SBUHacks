import React from 'react';
import HackIcon from '../../assets/icons/Hack_Icon.png';
import VolunteerIcon from '../../assets/icons/Volunteer_Icon.png';
import MentorIcon from '../../assets/icons/Mentor_Icon.png';
import './register.css';

// The Register page
// The cards are in reverse order, but displayed in the correct order so that the tablet view
// looks the way its planned ("Hack" on top row, other 2 on bottom row)
function Register() {
  return (
    <div className="section-container register-container general-style" id="register">
      <h1 className="section-title general-style">Register</h1>
      <p className="register-sub general-style">Sign up to participate, volunteer, or become a mentor</p>
      <div className="register-wrapper">
        <div className="register-card">
          <a href="https://forms.gle/5mX9rQ6VyLRr5xrVA" className="form-link general-button" rel="noreferrer" target="_blank">Mentor</a>
          <img src={MentorIcon} className="register-img" alt="mentor-register-icon" />
        </div>
        <div className="register-card">
          <a href="https://forms.gle/mRikt1kchHeVUZPA9" className="form-link general-button" rel="noreferrer" target="_blank">Volunteer</a>
          <img src={VolunteerIcon} className="register-img" alt="volunteer-register-icon" />
        </div>
        <div className="register-card">
          <a href="https://form.typeform.com/to/lVVb3k9h" className="form-link general-button" rel="noreferrer" target="_blank">Hack</a>
          <img src={HackIcon} className="register-img" alt="hack-register-icon" />
        </div>
      </div>
    </div>
  );
}

export default Register;
