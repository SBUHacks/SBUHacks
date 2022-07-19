import React from 'react';
import './sponsors.css';
import SoftheonIcon from '../../assets/sponsors/Softheon_Icon.png';

// The Sponsors page
function Sponsors() {
  return (
    <div className="section-container sponsors-container general-style" id="sponsors">
      <h1 className="section-title general-style">Partners</h1>
      <div className="sponsors-wrapper">
        <span className="sponsors-sub">Powered By:</span>
        <div className="golden-sponsor">
          <img src={SoftheonIcon} className="golden-logo" alt="softeon-logo" />
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
            <div className="slide">
              <div className="slide-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
