import React from 'react';
import './sponsors.css';
import SchifferLogo from '../../assets/sponsors/Schiffer_Icon.svg';
import LibraryLogo from '../../assets/sponsors/Libraries_Icon.png';

// The Sponsors page
function Sponsors() {
  return (
    <div className="section-container sponsors-container general-style" id="sponsors">
      <span className="section-title general-style">Partners</span>
      <div className="sponsors-wrapper">
        <div className="golden-sponsor">
          <img src={SchifferLogo} className="golden-logo" alt="schiffer-logo" />
          <img src={LibraryLogo} className="golden-logo" alt="library-logo" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
