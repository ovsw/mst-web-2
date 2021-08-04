/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useContext } from 'react'; // eslint-disable-line
import { Link } from 'gatsby';
// import SubMenu from './SubMenu';

import './Nav.css';

// import { useSiteMenusStructure } from '../../../hooks/use-site-menus-structure';
import { appContext } from '../../../context';
import { FaPhone } from 'react-icons/fa';

const Nav = ({
  isMobileNavOpen,
  // closeMobileNav
}) => {
  // const menuStructure = useSiteMenusStructure();
  const { activeSisteSection } = useContext(appContext);

  // let menuToShow = null

  // switch (activeSisteSection) {
  //   case 'virtual':
  //     menuToShow = menuStructure.filter(menu =>
  //       menu.id === '520e71b4-3698-5363-8839-8f77332aa571'
  //     )[0]
  //     break
  //   case 'programming':
  //     menuToShow = menuStructure.filter(menu =>
  //       menu.id === '37f6f332-c2e8-5c5c-affc-74bf0f5aa765'
  //     )[0]
  //     break
  //   case 'performances':
  //     menuToShow = menuStructure.filter(menu =>
  //       menu.id === '5f27afbc-dcbd-5cfb-8c05-f55182adcfa1'
  //     )[0]
  //     break
  // }
  return (
    <nav className={`top-nav__header-menu ${isMobileNavOpen ? 'visible' : ''}`}>
      <div className="top-nav__main-menu-wrapper">
        <div
          className="top-nav__menus"
          sx={{ maxHeight: '90vh', paddingBottom: '10vh' }}
        >
          <p className="top-nav__mobile-title">Mainstages</p>
          <div className="menu-cross-links">
            <span
              className="menu-cross-links__title"
              sx={{ display: ['none', null, 'block'] }}
            >
              <a href="tel:1-347-878-2431">
                <FaPhone /> 347-878-2431
              </a>
            </span>
            <div sx={mobileSectionButtonsStyles}>
              <Link
                to="/virtual/"
                className={`${
                  activeSisteSection === 'virtual' ? 'active' : ''
                }`}
              >
                <span>Virtual Entertainment</span>
              </Link>
              <Link
                to="/programming/"
                className={`${
                  activeSisteSection === 'programming' ? 'active' : ''
                }`}
              >
                <span>In-person Programs</span>
              </Link>
              <Link
                to="/performances/"
                className={`${
                  activeSisteSection === 'performances' ? 'active' : ''
                }`}
              >
                <span>In-person Performances</span>
              </Link>
            </div>
          </div>
          <ul className="top-nav__outer-list" id="menu-main-menu">
            {/* menuToShow.items.map((item) => {
              // console.log(item)
              let linkUrl = null
              let title = null
              let subItems = []

              switch (item._type) {
                case ('internalLinkWSlug'):
                  title = item.title
                  linkUrl = item.url
                  break
                case ('internalLinkWChildren'):
                  title = item.title
                  linkUrl = item.link.content.main.slug.current
                  subItems = item.subItems
                  break
                case ('internalLink'):
                  title = item.title
                  linkUrl = item.link.content.main.slug.current
                  break
              }

              return (
                <li key={linkUrl} className={`top-nav__item-level-1 menu-item ${subItems.length > 0 ? 'top-nav__has-children' : ''}`}>
                  <Link to={`/${linkUrl}/`} onClick={() => closeMobileNav()}>{title}</Link>
                  {(subItems.length > 0) && <SubMenu subItems={subItems} closeMobileNav={closeMobileNav} />}
                </li>
              )
            })*/}
          </ul>
        </div>
      </div>
      <div className="top-nav__image-buttons-wrapper">
        <Link
          to="/virtual/"
          className={`image-button ${
            activeSisteSection !== 'virtual' ? 'sectionSwitch_btn--virtual' : ''
          }`}
        >
          <span>Virtual Entertainment</span>
        </Link>
        <Link
          to="/programming/"
          className={`image-button ${
            activeSisteSection !== 'programming'
              ? 'sectionSwitch_btn--programming'
              : ''
          }`}
        >
          <span>In-person Programs</span>
        </Link>
        <Link
          to="/performances/"
          className={`image-button ${
            activeSisteSection !== 'performances'
              ? 'sectionSwitch_btn--performances'
              : ''
          }`}
        >
          <span>In-person Performances</span>
        </Link>
        {/* <a href='/programming/camp-package/' className='image-button'><span>Our Camp Package</span></a> */}
        {/* <a href='/virtual/recommended-camps/' className='image-button'><span>Camp Partnerships</span></a> */}
      </div>
    </nav>
  );
};

export default Nav;

const mobileSectionButtonsStyles = {
  display: ['flex', null, 'none'],
  height: ['10vh', '6vh'],
  a: {
    fontFami: 'body',
    display: 'block',
    width: '1/3',
    color: 'secondary',
    textDecoration: 'none',
    bg: 'primary',
    textAlign: 'center',
    p: 2,
    borderRight: '1px solid white',
    lineHeight: 'tight',
    '&.active': {
      bg: '#301111',
      color: 'white',
    },
    '&:nth-of-type(3)': {
      borderRight: '0px solid',
    },
  },
};
