import React from 'react';
import './register.css';

// The Register page
// The cards are in reverse order, but displayed in the correct order so that the tablet view
// looks the way its planned ("Hack" on top row, other 2 on bottom row)
function Register() {
  return (
    <div className="section-container register-container general-style" id="register">
      <span className="section-title general-style">Register</span>
      <p className="register-sub general-style">Sign up to participate, volunteer, or become a mentor</p>
      <p className="register-sub general-style">
        By registering, you are agreeing to the
        <a href="http://mlh.io/code-of-conduct" className="code-of-conduct" rel="noreferrer" target="_blank"> MLH code of conduct</a>
      </p>
      <div className="register-wrapper">
        <div className="register-card">
          <a href="https://docs.google.com/forms/d/1tSk4DInO5ZpsfGbCs6eABHJj8-Y3lVSsYFZbZj6eXRc/viewform" id="mentor-button" className="form-link general-button" rel="noreferrer" target="_blank">Mentor</a>
        </div>
        <div className="register-card">
          <a href="https://docs.google.com/forms/d/1eaDBWu0XZeQDYwZ-psX0TDBHst2Yfx8pD8A62nGnBpY/viewform" id="volunteer-button" className="form-link general-button" rel="noreferrer" target="_blank">Volunteer</a>
        </div>
        <div className="register-card">
          <a href="https://form.typeform.com/to/JwotNY3e" id="hack-button" className="form-link general-button" rel="noreferrer" target="_blank">Hack</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
