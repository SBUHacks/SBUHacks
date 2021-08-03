import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  function handleNav() {
    if (window.scrollY > 500 || window.innerWidth < 916) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }

  window.addEventListener('reload', handleNav);
  window.addEventListener('scroll', handleNav);
  window.addEventListener('resize', handleNav);

  return (
    <>
      <nav className={showNav ? 'navbar nav-active' : 'navbar'}>
        <div className="navbar-container general-style">
          <Link to="landing" smooth duration={300} spy exact="true" offset={0} className="navbar-logo" onClick={closeMenu}>
            SBUHacks
          </Link>
          <button className="menu-icon" type="button" onClick={handleClick} onKeyDown={handleClick} role="switch" aria-checked="false">
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="about" smooth duration={300} spy exact="true" offset={-10} className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="faq" smooth duration={300} spy exact="true" offset={-10} className="nav-link" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
            {/*
            <li className="nav-item">
              <Link to="schedule"
              smooth
              duration={300}
              spy exact="true"
              offset={-10}
              className="nav-link"
              onClick={closeMenu}>
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link to="sponsors"
              smooth duration={300}
              spy exact="true"
              offset={-10}
              className="nav-link"
              onClick={closeMenu}>
                Sponsors
              </Link>
            </li>
            */}
            <li className="nav-item">
              <Link to="contact" smooth duration={300} spy exact="true" offset={-10} className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
