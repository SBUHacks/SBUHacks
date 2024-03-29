import React from 'react';
import './sponsors.css';
import SchifferLogo from '../../assets/sponsors/Schiffer_Icon.svg';
import StandoutLogo from '../../assets/sponsors/Standout_Icon.svg';
import LibrariesLogo from '../../assets/sponsors/Libraries_Icon.png';
import VJLogo from '../../assets/sponsors/VJ_Icon.png';
import CodedexLogo from '../../assets/sponsors/Codedex_Icon.png';
// import ZebraLogo from '../../assets/sponsors/Zebra_Icon.jpg';
// import Echo3DLogo from '../../assets/sponsors/echo3D_Icon.png';
// import ResideoLogo from '../../assets/sponsors/Resideo_Icon.svg';
import GoogleCloudLogo from '../../assets/sponsors/GoogleCloud_Icon.png';
// import AVILogo from '../../assets/sponsors/AVI_Icon.svg';
// import SBULogo from '../../assets/sponsors/SBU_Icon.png';

// The Sponsors page
function Sponsors() {
  return (
    <div className="section-container sponsors-container general-style" id="sponsors">
      <span className="section-title general-style">Partners</span>
      <div className="sponsors-wrapper">
        <div className="sponsors-partners">
          {/* <img src={SchifferLogo} className="partner-logo-stacked" alt="schiffer-logo" />
          <img src={ResideoLogo} className="partner-logo" alt="resideo-logo" />
          <img src={ZebraLogo} className="partner-logo" alt="zebra-logo" />
          <img src={GoogleCloudLogo} className="partner-logo" alt="library-logo" />
          <img src={AVILogo} className="partner-logo" alt="cs-logo" />
          <img src={Echo3DLogo} className="partner-logo" alt="library-logo" />
          <a className="partner-logo-stacked" href="https://mlh.io/">
            <img src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg" alt="mlh-logo" />
          </a>
          <img src={SBULogo} className="partner-logo" alt="cs-logo" /> */}
          <div className="logo-tier">
            <img src={SchifferLogo} className="partner-logo-stacked" alt="schiffer-logo" />
            <a href="https://vjt.com/" className="partner-logo" target="_blank" rel="noreferrer">
              <img src={VJLogo} id="vj-logo" alt="vj-logo" />
            </a>
            <a href="https://www.codedex.io/" className="partner-logo" target="_blank" rel="noreferrer">
              <img src={CodedexLogo} id="vj-logo" alt="codedex-logo" />
            </a>
          </div>
          <div className="logo-tier">
            <img src={GoogleCloudLogo} className="partner-logo" alt="google-cloud-logo" />
            <img src={LibrariesLogo} className="partner-logo" alt="cs-logo" />
            <a href="http://hackp.ac/mlh-StandOutStickers-hackathons" className="partner-logo-stacked" target="_blank" rel="noreferrer">
              <img src={StandoutLogo} id="standout-logo" alt="standout-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
