import React from 'react';
import './sponsors.css';
import SchifferLogo from '../../assets/sponsors/Schiffer_Icon.svg';
import LibraryLogo from '../../assets/sponsors/Libraries_Icon.png';
import StandoutLogo from '../../assets/sponsors/Standout_Icon.svg';

// The Sponsors page
function Sponsors() {
  return (
    <div className="section-container sponsors-container general-style" id="sponsors">
      <span className="section-title general-style">Partners</span>
      <div className="sponsors-wrapper">
        <div className="sponsors-partners">
          <img src={SchifferLogo} className="partner-logo-stacked" alt="schiffer-logo" />
          <img src={LibraryLogo} className="partner-logo" alt="library-logo" />
          <a className="partner-logo-stacked" href="https://mlh.io/">
            <img src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg" alt="mlh-logo" />
          </a>
          <a className="partner-logo-stacked" href="https://www.standoutstickers.com/?utm_campaign=events-league-organizers-spring2022&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intros">
            <img src={StandoutLogo} alt="library-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
