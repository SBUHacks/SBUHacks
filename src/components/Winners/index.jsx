import React from 'react';
import './winners.css';
import Carousel from './Carousel';

const PastWinners = () => {
  const images = [
    '../../assets/backgrounds/About_Bg.png',
  ];

  return (
    <div className="section-container general-style winners-container">
      <div className="winners-carousel">
        <Carousel images={images} />
      </div>
      <div className="winners-text">
        <h1>Past Winners</h1>
      </div>
    </div>
  );
};

export default PastWinners;
