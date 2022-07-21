import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="contact-footer">
      <div className="footer-lines-1" />
      <div className="footer-lines-2" />
      <div className="footer-stars" />
      <div className="footer-wrapper">
        <div className="social-wrapper">
          <a className="social-contact" href="https://www.reddit.com/user/SBUHacks/" rel="noreferrer" target="_blank">
            <i className="fab fa-reddit-alien social-icon" />
          </a>
          <a className="social-contact" href="https://twitter.com/sbuhacks" rel="noreferrer" target="_blank">
            <i className="fab fa-twitter social-icon" />
          </a>
          <a className="social-contact" href="https://www.instagram.com/sbuhacks/" rel="noreferrer" target="_blank">
            <i className="fab fa-instagram social-icon" />
          </a>
          <a className="social-contact" href="https://www.facebook.com/SBUHacks/" rel="noreferrer" target="_blank">
            <i className="fab fa-facebook-f social-icon" />
          </a>
          <a className="social-contact" href="https://www.linkedin.com/company/sbuhacks/" rel="noreferrer" target="_blank">
            <i className="fab fa-linkedin-in social-icon" />
          </a>
        </div>
        <div className="email-contact">
          sbuhacks@stonybrook.edu
        </div>
      </div>
    </div>
  );
}

export default Footer;
