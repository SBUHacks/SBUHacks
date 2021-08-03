import React from 'react';
import './sponsors.css';
import SoftheonIcon from '../../assets/sponsors/Softheon_Icon.svg';

function Sponsors() {
  return (
    <div className="section-container sponsors-container general-style" id="sponsors">
      <h1 className="section-title general-style">Sponsors</h1>
      <div className="sponsors-wrapper">
        <span className="sponsors-sub">Powered By:</span>
        <div className="golden-sponsor">
          <img src={SoftheonIcon} className="golden-logo" alt="softeon-logo" />
        </div>
        <span className="sponsors-sub">Partnered With:</span>
        <div className="sponsors">
          <img src={SoftheonIcon} className="sponsor-logo" alt="softeon-logo" />
          <img src={SoftheonIcon} className="sponsor-logo" alt="softeon-logo" />
          <img src={SoftheonIcon} className="sponsor-logo" alt="softeon-logo" />
          <img src={SoftheonIcon} className="sponsor-logo" alt="softeon-logo" />
          <img src={SoftheonIcon} className="sponsor-logo" alt="softeon-logo" />
          <img src={SoftheonIcon} className="sponsor-logo" alt="softeon-logo" />
          <img src={SoftheonIcon} className="sponsor-logo" alt="softeon-logo" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
