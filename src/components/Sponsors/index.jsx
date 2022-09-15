import React from 'react';
import './sponsors.css';
import SchifferLogo from '../../assets/sponsors/Schiffer_Icon.svg';
import LibraryLogo from '../../assets/sponsors/Libraries_Icon.png';
import StandoutLogo from '../../assets/sponsors/Standout_Icon.svg';
import ZebraLogo from '../../assets/sponsors/Zebra_Icon.jpg';
import Echo3DLogo from '../../assets/sponsors/echo3D_Icon.png';
import ResideoLogo from '../../assets/sponsors/Resideo_Icon.svg';
import SBUCSLogo from '../../assets/sponsors/SBU_CS_Icon.gif';

// The Sponsors page
function Sponsors() {
  return (
    <div className="section-container sponsors-container general-style" id="sponsors">
      <span className="section-title general-style">Partners</span>
      <div className="sponsors-wrapper">
        <div className="sponsors-partners">
          <img src={SchifferLogo} className="partner-logo-stacked" alt="schiffer-logo" />
          <img src={ResideoLogo} className="partner-logo" alt="resideo-logo" />
          <img src={ZebraLogo} className="partner-logo" alt="zebra-logo" />
          <a className="partner-logo-stacked" href="https://mlh.io/">
            <img src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg" alt="mlh-logo" />
          </a>
          <img src={Echo3DLogo} className="partner-logo" alt="library-logo" />
          <a href="https://www.standoutstickers.com/?utm_campaign=events-league-organizers-spring2022&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intros" className="partner-logo">
            <img src={StandoutLogo} id="standout-logo" alt="standout-logo" />
          </a>
          <img src={LibraryLogo} className="partner-logo" alt="library-logo" />
          <img src={SBUCSLogo} className="partner-logo" alt="cs-logo" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
