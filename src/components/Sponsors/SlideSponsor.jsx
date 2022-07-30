import React from 'react';
import PropTypes from 'prop-types';

function SlideSponsor({ logo, size }) {
  const s = '../../assets/sponsors/Alumni_Icon.png';
  const divStyle = {
    // eslint-disable-next-line prefer-template
    backgroundImage: 'url(' + s + ')',
    width: size,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '200px',
  };

  console.log(logo);

  return (
    <div className="slide">
      <div className="slide-logo" style={divStyle} />
    </div>
  );
}

SlideSponsor.propTypes = {
  logo: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default SlideSponsor;
