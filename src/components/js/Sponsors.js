import React from 'react';
import '../css/Sponsors.css';
import SoftheonIcon from '../../images/sponsors/Softheon_Icon.svg';

function Sponsors() {
  return (
    <section className="sponsors-container" id="sponsors">
      <h1 className="section-title">Sponsors</h1>
      <div className="sponsors-wrapper">
        <span>Powered By:</span>
        <div className="golden-sponsor">
          <img src={SoftheonIcon} alt="softeon-logo" />
        </div>
        <span>Partnered With:</span>
        <div className="sponsors">
          <img src={SoftheonIcon} alt="softeon-logo" />
          <img src={SoftheonIcon} alt="softeon-logo" />
          <img src={SoftheonIcon} alt="softeon-logo" />
          <img src={SoftheonIcon} alt="softeon-logo" />
          <img src={SoftheonIcon} alt="softeon-logo" />
          <img src={SoftheonIcon} alt="softeon-logo" />
          <img src={SoftheonIcon} alt="softeon-logo" />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
