import React from 'react';
import ContactBgSm from '../../assets/backgrounds/Contact_Bg_Sm.png';
import ContactBgMd from '../../assets/backgrounds/Contact_Bg_Md.png';
import ContactBgLg from '../../assets/backgrounds/Contact_Bg_Lg.png';
import './contact.css';

// The Contact page
// To ensure that the social media icons stay on the corresponding circles while
// making sure that the background doesn't shrink too much, backgrounds are treated as
// img tags and icons/text have absolute positioning using percentage
function Contact() {
  return (
    <div className="contact-container general-style" id="contact">
      <img src={ContactBgLg} alt="contact-bg" className="bg-lg" />
      <img src={ContactBgMd} alt="contact-bg" className="bg-md" />
      <img src={ContactBgSm} alt="contact-bg" className="bg-sm" />
      <a className="reddit-icon" href="https://www.reddit.com/user/SBUHacks/" rel="noreferrer" target="_blank">
        <i className="fab fa-reddit-alien social-icon" />
      </a>
      <a className="twitter-icon" href="https://twitter.com/sbuhacks" rel="noreferrer" target="_blank">
        <i className="fab fa-twitter social-icon" />
      </a>
      <a className="instagram-icon" href="https://www.instagram.com/sbuhacks/" rel="noreferrer" target="_blank">
        <i className="fab fa-instagram social-icon" />
      </a>
      <a className="facebook-icon" href="https://www.facebook.com/SBUHacks/" rel="noreferrer" target="_blank">
        <i className="fab fa-facebook-f social-icon" />
      </a>
      <a className="linkedin-icon" href="https://www.linkedin.com/company/sbuhacks/" rel="noreferrer" target="_blank">
        <i className="fab fa-linkedin-in social-icon" />
      </a>
      <h1 className="section-title general-style" id="contact-title">Stay Connected!</h1>
      <p className="contact-hashtag general-style">Use #SBUHacks when you post photos to take part with us on social media!</p>
      <p className="contact-email general-style">Email us at sbuhacks@stonybrook.edu</p>
    </div>
  );
}

export default Contact;
