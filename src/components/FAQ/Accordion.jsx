import React from 'react';
import PropTypes from 'prop-types';
import './faq.css';

// Takes in an array (faq) to display and/or use its values,
// a function (toggleFAQ) that opens/closes faqs,
// and a number (index) that's used as the parameter for toggleFAQ
function Accordion(props) {
  const { faq, index, toggleFAQ } = props;

  return (
    <button className={faq.open ? 'faq open' : 'faq'} key={faq.question} type="button" onClick={() => toggleFAQ(index)} onKeyDown={() => toggleFAQ(index)} role="listbox">
      <div className="faq-question general-style">
        {faq.question}
        <i className={faq.open ? 'faq-icon fas fa-xs fa-minus' : 'faq-icon fas fa-xs fa-plus'} />
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
    open: PropTypes.bool,
    question: PropTypes.string,
    answer1: PropTypes.string,
    answer2: PropTypes.string,
    link: PropTypes.node,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleFAQ: PropTypes.func.isRequired,
};

export default Accordion;
