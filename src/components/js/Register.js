import React from 'react';
import HackIcon from '../../images/icons/Hack_Icon.png';
import VolunteerIcon from '../../images/icons/Volunteer_Icon.png';
import MentorIcon from '../../images/icons/Mentor_Icon.png';
import '../css/Register.css';

function Register() {
  return (
    <section className="register-container" id="register">
      <h1 className="section-title">Register</h1>
      <p className="register-sub">Sign up to participate, volunteer, or become a mentor</p>
      <div className="register-wrapper">
        <div className="register-card">
          <button className="general-button" type="button"><a href="https://forms.gle/5mX9rQ6VyLRr5xrVA" className="form-link" rel="noreferrer" target="_blank">Mentor</a></button>
          <img src={MentorIcon} alt="mentor-register-icon" />
        </div>
        <div className="register-card">
          <button className="general-button" type="button"><a href="https://forms.gle/mRikt1kchHeVUZPA9" className="form-link" rel="noreferrer" target="_blank">Volunteer</a></button>
          <img src={VolunteerIcon} alt="volunteer-register-icon" />
        </div>
        <div className="register-card">
          <button className="general-button" type="button"><a href="https://form.typeform.com/to/lVVb3k9h" className="form-link" rel="noreferrer" target="_blank">Hack</a></button>
          <img src={HackIcon} alt="hack-register-icon" />
        </div>
      </div>
    </section>
  );
}

export default Register;
