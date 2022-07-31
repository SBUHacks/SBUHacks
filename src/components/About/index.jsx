import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './about.css';

// Takes in a boolean (showModal) that determines whether video will pop up,
// and a function (setShowModal) to set showModal to false if close button is pressed
function AboutModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <div className="modal-wrapper">
          <div className="about-modal">
            <div className="modal-header">
              <button type="button" onClick={() => setShowModal(false)} onKeyDown={() => setShowModal(false)} role="switch" aria-checked="false" className="modal-close">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="modal-content">
              <iframe className="about-vid" title="SBUHacks 2018" frameBorder="0" allowFullScreen src="https://www.youtube.com/embed/6vjZo2qCSrw?rel=0&amp;showinfo=0&amp;autoplay=1" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

// The About page that includes the "About Us" video as a modal (AboutModal)
function About() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="section-container about-container general-style" id="about">
      <div className="title-container">
        <span className="section-title general-style">About Us</span>
      </div>
      <div className="about-wrapper">
        <div className="text-wrapper">
          <p className="about-text general-style">
            SBUHacks is a 48 hour hackathon with endless creativity. Students are challenged to
            further what they know by creating projects following their passions. Spending time on
            projects outside the classroom is the best way to not only learn what you love, but also
            find new interests. In a universe of infinite possibilities, you have 48 hours to
            innovate and show us what you got!
          </p>
          <button className="general-button general-style" type="button" onClick={openModal}>Watch Video</button>
        </div>
      </div>
      <AboutModal showModal={showModal} setShowModal={setShowModal} />
      <div className="pink-planet" />
      <div className="about-stars" />
      <div className="about-twin-stars" />
      <div />
    </div>
  );
}

// AboutModal prop definiton
AboutModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default About;
