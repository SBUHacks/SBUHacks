import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

// The fixed Navbar which is hidden until user scrolls down enough or makes window small enough
function Navbar() {
  const [click, setClick] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  const agent = window.navigator.userAgent.toLowerCase();
  useEffect(() => {
    if (agent.match(/chrome|chromium|crios/i)) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  }, [agent]);

  setTimeout(() => {
    setShowWarning(false);
  }, 10000);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      {showWarning && (
        <div className="browser-warning">
          We recommend using Chrome for the best viewing experience
        </div>
      )}
      <nav className="navbar nav-active">
        <div className="navbar-container general-style">
          <Link to="landing" smooth duration={300} spy exact="true" offset={0} className="navbar-logo" onClick={closeMenu}>
            SBUHacks
          </Link>
          <button className="menu-icon" type="button" onClick={handleClick} onKeyDown={handleClick} role="switch" aria-checked="false">
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="about" smooth duration={300} spy exact="true" offset={-100} className="nav-link" onClick={closeMenu}>
                <button className="nav-button general-style" type="button">
                  About
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="register"
                smooth
                duration={300}
                spy
                exact="true"
                offset={-100}
                className="nav-link"
                onClick={closeMenu}
              >
                <button className="nav-button general-style" type="button">
                  Register
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="schedule"
                smooth
                duration={300}
                spy
                exact="true"
                offset={-100}
                className="nav-link"
                onClick={closeMenu}
              >
                <button className="nav-button general-style" type="button">
                  Schedule
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="sponsors" smooth duration={300} spy exact="true" offset={-100} className="nav-link" onClick={closeMenu}>
                <button className="nav-button general-style" type="button">
                  Partners
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="faq" smooth duration={300} spy exact="true" offset={-100} className="nav-link" onClick={closeMenu}>
                <button className="nav-button general-style" type="button">
                  FAQ
                </button>
              </Link>
            </li>
          </ul>
          <a id="mlh-trust-badge" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank" rel="noreferrer">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
