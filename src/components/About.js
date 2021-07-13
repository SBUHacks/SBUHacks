import React, { useState, useRef } from 'react'
import './About.css'

const AboutModal = ({showModal, setShowModal}) => {
    // Closes modal when user clicks outside of video box
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return (
        <>
            {showModal ? (
                <div className="modal-wrapper" ref={modalRef} onClick={closeModal}>
                    <div className={"about-modal"}>
                        <div className="modal-header">
                            <i className="fas fa-times modal-close" onClick={() => setShowModal(false)}></i>
                        </div>
                        <div className="modal-content">
                            <iframe className="about-vid" title="SBUHacks 2018" frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/6vjZo2qCSrw?rel=0&amp;showinfo=0&amp;autoplay=1"></iframe>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

function About() {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(!showModal)
    }

    return (
        <section className="about-container" id={"about"}>
            <h1 className="section-title">About Us</h1>
            <p className="about-text">
                SBUHacks is a 24 hour hackathon with endless creativity. Students are challenged to 
                further what they know by creating projects following their passions. Spending time on 
                projects outside the classroom is the best way to not only learn what you love, but also 
                find new interests. In a universe of infinite possibilities, you have 24 hours to innovate 
                and show us what you got!
            </p>
            <button className="general-button" onClick={openModal}>Watch Video</button>
            <AboutModal showModal={showModal} setShowModal={setShowModal} />
        </section>
    )
}

export default About