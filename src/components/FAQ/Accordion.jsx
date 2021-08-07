import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './faq.css';

// Takes in an object (faq) to display and/or use its values
function Accordion(props) {
  const { faq } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.currentTarget.click();
    }
  };

  return (
    <button className={open ? 'faq open' : 'faq'} key={faq.question} type="button" onClick={handleClick} onKeyDown={e => handleKeyDown(e)} role="listbox">
      <div className="faq-question general-style">
        {faq.question}
        <i className={open ? 'faq-icon fas fa-xs fa-minus' : 'faq-icon fas fa-xs fa-plus'} />
      </div>
      <div className="faq-answer general-style">
        {faq.answer1}
        {faq.link && faq.link}
        {faq.answer2}
      </div>
    </button>
  );
}

// Accordion prop definiton
Accordion.propTypes = {
  faq: PropTypes.shape({
    question: PropTypes.string,
    answer1: PropTypes.string,
    answer2: PropTypes.string,
    link: PropTypes.node,
  }).isRequired,
};

export default Accordion;
