import React from 'react'
import ContactBgSm from '../images/backgrounds/Contact_Bg_Sm.png'
import ContactBgMd from '../images/backgrounds/Contact_Bg_Md.png'
import ContactBgLg from '../images/backgrounds/Contact_Bg_Lg.png'
import RedditIcon from '../images/icons/Reddit_Icon.png'
import TwitterIcon from '../images/icons/Twitter_Icon.png'
import InstagramIcon from '../images/icons/Instagram_Icon.png'
import FacebookIcon from '../images/icons/Facebook_Icon.png'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container" id={"contact"}>
            <img src={ContactBgLg} alt="contact-bg" className="bg-lg" />
            <img src={ContactBgMd} alt="contact-bg" className="bg-md" />
            <img src={ContactBgSm} alt="contact-bg" className="bg-sm" />
            <a className="reddit-icon" href="https://www.reddit.com/user/SBUHacks/">
                <img src={RedditIcon} alt="reddit-icon" />
            </a>
            <a className="twitter-icon" href="https://twitter.com/sbuhacks">
                <img src={TwitterIcon} alt="twitter-icon" />
            </a>
            <a className="instagram-icon" href="https://www.instagram.com/sbuhacks/">
                <img src={InstagramIcon} alt="instagram-icon" />
            </a>
            <a className="facebook-icon" href="https://www.facebook.com/SBUHacks/">
                <img src={FacebookIcon} alt="facebook-icon" />
            </a>
            <h1 className="section-title">Stay Connected!</h1>
            <p className="contact-hashtag">Use #SBUHacks when you post photos to take part with us on social media!</p>
            <p className="contact-email">Email us at sbuhacks@stonybrook.edu</p>
        </div>
    )
}

export default Contact
