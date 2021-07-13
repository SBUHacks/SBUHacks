import React from 'react'
import { Link } from 'react-scroll'
import './Landing.css'

const Landing = () => {
    return (
        <section className="landing-container" id={"landing"}>
            <Link className="planet" to="about" smooth={true} duration={300} spy={true} exact="true" offset={-10}>About</Link>
            <Link className="planet" to="faq" smooth={true} duration={300} spy={true} exact="true" offset={-10}>FAQ</Link>
            <Link className="planet" to="schedule" smooth={true} duration={300} spy={true} exact="true" offset={-10}>Schedule</Link>
            <Link className="planet" to="sponsors" smooth={true} duration={300} spy={true} exact="true" offset={-10}>Sponsors</Link>
            <Link className="planet" to="contact" smooth={true} duration={300} spy={true} exact="true" offset={-10}>Contact</Link>
            <div className="planet"></div>
            <Link className="register-button" to="register" smooth={true} duration={300} spy={true} exact="true" offset={-10}>Register</Link>
            <div className="slogan-wrapper">
                <h1>SBUHacks</h1>
                <p>Powered by Softheon</p>
                <p className="slogan">Endless space for innovation</p>
                <p className="date">September 24-25, 2021</p>
            </div>
        </section>
    )
}

export default Landing

