/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import {appContext} from '../../context'

// components
import Nav from './Nav'

import './Header.css'

const Header = () => {
  const {isMobileNavOpen, openMobileNav, closeMobileNav} = useContext(appContext)

  const toggleNav = (e) => {
    e.preventDefault()
    if (isMobileNavOpen) {
      closeMobileNav()
    } else {
      openMobileNav()
    }
  }
  return (
    <header className='header'>
      <div id='overlay' />
      <div className='header__wrapper'>
        <a href='/' className='header__logo'><img src='/images/mainstages-logo-horizontal.png' alt='Mainstages Logo' width='250' /></a>
        <Nav isMobileNavOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />
        <a className='header__menu-trigger' onClick={toggleNav}>
          <span className='label'>Menu</span>
          <div className={`header__menu-icon ${isMobileNavOpen ? 'open' : ''}`}>
            <div className='header__menu-icon__middle' />
          </div>
        </a>
      </div>
    </header>
  )
}

export default Header
