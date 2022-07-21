import React from 'react';
import './sponsors.css';
import SchifferLogo from '../../assets/sponsors/Schiffer_Icon.svg';

// The Sponsors page
function Sponsors() {
  return (
    <div className="section-container sponsors-container general-style" id="sponsors">
      <h1 className="section-title general-style">Partners</h1>
      <div className="sponsors-wrapper">
        <div className="golden-sponsor">
          <img src={SchifferLogo} className="golden-logo" alt="schiffer-logo" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
