import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [showNav, setShowNav] = useState(false)
    
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    function handleNav() {
      if (window.scrollY > 500 || window.innerWidth < 916) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleNav)
    window.addEventListener('resize', handleNav)
    window.addEventListener('reload', handleNav)

    return (
<>
      <nav className={showNav ? 'navbar nav-active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='landing' smooth={true} duration={300} spy={true} exact="true" offset={0} className='navbar-logo' onClick={closeMenu}>
            SBUHacks
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='about' smooth={true} duration={300} spy={true} exact="true" offset={-10} className='nav-link' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='faq' smooth={true} duration={300} spy={true} exact="true" offset={-10} className='nav-link'  onClick={closeMenu}>
                FAQ
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='schedule' smooth={true} duration={300} spy={true} exact="true" offset={-10} className='nav-link'  onClick={closeMenu}>
                Schedule
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='sponsors' smooth={true} duration={300} spy={true} exact="true" offset={-10} className='nav-link'  onClick={closeMenu}>
                Sponsors
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contact' smooth={true} duration={300} spy={true} exact="true" offset={-10} className='nav-link'  onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    )
}

export default Navbar
