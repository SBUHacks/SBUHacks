import React from 'react';
import PropTypes from 'prop-types';
import '../css/FAQ.css';

function Accordian(props) {
  const { faq, index, toggleFAQ } = props;

  return (
    <button className={faq.open ? 'faq open' : 'faq'} key={faq.question} type="button" onClick={() => toggleFAQ(index)} onKeyDown={() => toggleFAQ(index)} role="listbox">
      <div className="faq-question">
        {faq.question}
        <i className={faq.open ? 'faq-icon fas fa-xs fa-minus' : 'faq-icon fas fa-xs fa-plus'} />
      </div>
      <div className="faq-answer">
        {faq.answer1}
        {faq.link}
        {faq.answer2}
      </div>
    </button>
  );
}

Accordian.propTypes = {
  faq: PropTypes.isRequired,
  index: PropTypes.isRequired,
  toggleFAQ: PropTypes.isRequired,
};

export default Accordian;
