import React from 'react';
import PropTypes from 'prop-types';
import './why.css';

// Takes in an array (card) to display and/or use its values,
function WhyCard({ card }) {
  return (
    <div className="card" key={card.title}>
      <div className="card-icon">
        <div className="card-circle" style={{ background: card.color }}>
          {card.icon}
        </div>
      </div>
      <div className="card-content">
        <span className="card-title">{card.title}</span>
        <p className="card-text">{card.text}</p>
      </div>
    </div>
  );
}

// The Why page
function Why() {
  const cards = [
    {
      icon: <i className="fas fa-users" />,
      title: 'Sponsors',
      color: 'linear-gradient(-45deg, #ff4242, #ff8845)',
      text: 'Large companies and inspiring startups looking for talented students like you',
    },
    {
      icon: <i className="fas fa-chalkboard-teacher" />,
      title: 'Workshops',
      color: 'linear-gradient(-45deg, #fff73a, #ffa132)',
      text: 'Learn about how to transfer your skills to industry or academia',
    },
    {
      icon: <i className="fas fa-laptop-code" />,
      title: 'Hacks',
      color: 'linear-gradient(-45deg, #cfff46, #ffdf35)',
      text: 'Work on an amazing hack with help from your peers and mentors',
    },
    {
      icon: <i className="fas fa-calendar" />,
      title: 'Events',
      color: 'linear-gradient(-45deg, #3effd1, #43fd6c)',
      text: 'Fun-packed festivities to make friends and distress',
    },
    {
      icon: <i className="fas fa-comments" />,
      title: 'Community',
      color: 'linear-gradient(-45deg, #43ddff, #3e74ff)',
      text: 'Create bonds and have unforgettable memories with friends from all over',
    },
    {
      icon: <i className="fas fa-trophy" />,
      title: 'Prizes',
      color: 'linear-gradient(-45deg, #d331fc, #8f3afc)',
      text: 'Over $4000 in prizes ranging from Airpods to Corsair Keyboards!',
    },
  ];

  return (
    <div className="section-container why-container general-style">
      <div className="blue-planet" />
      <div className="green-star" />
      <div className="purple-star" />
      <span className="section-title general-style">Why SBUHacks?</span>
      <div className="cards-container">
        {cards.map(card => (
          <WhyCard card={card} key={card.title} />
        ))}
      </div>
    </div>
  );
}

// WhyCard prop definition
WhyCard.propTypes = {
  card: PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.shape({}),
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Why;
