import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './winners.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map(image => (
          <div className="carousel-item" key={image} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <button type="button" onClick={prevSlide}>Previous</button>
      <button type="button" onClick={nextSlide}>Next</button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(String).isRequired,
};

export default Carousel;
