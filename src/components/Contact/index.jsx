import React from 'react';
import ContactBgSm from '../../assets/backgrounds/Contact_Bg_Sm.png';
import ContactBgMd from '../../assets/backgrounds/Contact_Bg_Md.png';
import ContactBgLg from '../../assets/backgrounds/Contact_Bg_Lg.png';
import RedditIcon from '../../assets/icons/Reddit_Icon.png';
import TwitterIcon from '../../assets/icons/Twitter_Icon.png';
import InstagramIcon from '../../assets/icons/Instagram_Icon.png';
import FacebookIcon from '../../assets/icons/Facebook_Icon.png';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container general-style" id="contact">
      <img src={ContactBgLg} alt="contact-bg" className="bg-lg" />
      <img src={ContactBgMd} alt="contact-bg" className="bg-md" />
      <img src={ContactBgSm} alt="contact-bg" className="bg-sm" />
      <a className="reddit-icon" href="https://www.reddit.com/user/SBUHacks/" rel="noreferrer" target="_blank">
        <img className="social-icon" src={RedditIcon} alt="reddit-icon" />
      </a>
      <a className="twitter-icon" href="https://twitter.com/sbuhacks" rel="noreferrer" target="_blank">
        <img className="social-icon" src={TwitterIcon} alt="twitter-icon" />
      </a>
      <a className="instagram-icon" href="https://www.instagram.com/sbuhacks/" rel="noreferrer" target="_blank">
        <img className="social-icon" src={InstagramIcon} alt="instagram-icon" />
      </a>
      <a className="facebook-icon" href="https://www.facebook.com/SBUHacks/" rel="noreferrer" target="_blank">
        <img className="social-icon" src={FacebookIcon} alt="facebook-icon" />
      </a>
      <h1 className="section-title general-style" id="contact-title">Stay Connected!</h1>
      <p className="contact-hashtag general-style">Use #SBUHacks when you post photos to take part with us on social media!</p>
      <p className="contact-email general-style">Email us at sbuhacks@stonybrook.edu</p>
    </div>
  );
}

export default Contact;
