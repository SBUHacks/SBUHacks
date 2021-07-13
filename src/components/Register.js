import React from 'react'
import HackIcon from '../images/icons/Hack_Icon.png'
import VolunteerIcon from '../images/icons/Volunteer_Icon.png'
import MentorIcon from '../images/icons/Mentor_Icon.png'
import './Register.css'

const Register = () => {
    return (
        <section className="register-container" id={"register"}>
            <h1 className="section-title">Register</h1>
            <p className="register-sub">Sign up to participate, volunteer, or become a mentor</p>
            <div className="register-wrapper">
                <div className="register-card">
                    <button className="general-button">Mentor</button>
                    <img src={MentorIcon} alt="mentor-register-icon" />
                </div>
                <div className="register-card">
                    <button className="general-button">Volunteer</button>
                    <img src={VolunteerIcon} alt="volunteer-register-icon" />
                </div>
                <div className="register-card">
                    <button className="general-button">Hack</button>
                    <img src={HackIcon} alt="hack-register-icon" />
                </div>
            </div>
        </section>
    )
}

export default Register
