import React from 'react';
import './sponsors.css';
import SoftheonIcon from '../../assets/sponsors/Softheon_Icon.svg';
import SchifferIcon from '../../assets/sponsors/Schiffer_Icon.svg';
import echoIcon from '../../assets/sponsors/echoAR_Icon.png';
import AVILogo from '../../assets/sponsors/AVI_Icon.png';
import AlumniLogo from '../../assets/sponsors/Alumni_Icon.png';
import StickerLogo from '../../assets/sponsors/StickerMule_Icon.svg';
import GoogleLogo from '../../assets/sponsors/GoogleCloud_Icon.png';

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
        <span className="sponsors-sub">Partnered With:</span>
        <div className="sponsors-partners">
          <img src={SchifferIcon} className="partner-logo-stacked" alt="schiffer-logo" />
          <img src={AVILogo} className="partner-logo-stacked" alt="applied-visons-logo" />
          <a className="partner-logo-stacked" href="https://www.stickermule.com/unlock?ref_id=0539570701&utm_source=sponsorship&utm_campaign=mlh-sponsorship-2019&utm_medium=referral" target="_blank" rel="noreferrer">
            <img src={StickerLogo} alt="sticker-mule-logo" />
          </a>
          <img src={AlumniLogo} className="partner-logo" alt="sbu-alumni-logo" />
          <img src={echoIcon} className="partner-logo" alt="echoAR-logo" />
          <img src={GoogleLogo} className="partner-logo" alt="google-cloud-logo" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
