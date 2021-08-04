/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useContext } from 'react'; // eslint-disable-line
import { Global } from '@emotion/core';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { appContext } from '../context';

import './layout.css';

const Layout = ({ children }) => {
  const { isMobileNavOpen } = useContext(appContext);
  return (
    <div sx={{ pt: '80px', overflow: 'hidden' }}>
      <Global
        styles={() =>
          // theme
          ({
            '*': { boxSizing: 'border-box' },
            body: {
              margin: 0,
              overflow: isMobileNavOpen ? 'hidden' : 'auto',
            },
            img: {
              maxWidth: '100%',
            },
            // 'a.externalLink::after': {
            //   content: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)',
            //   margin: '0 3px 0 3px',
            //   color: 'red'
            // },
            // '.slick-track': {
            //   display: 'flex',
            //   '.slick-slide': {
            //     display: 'flex',
            //     height: 'auto'
            //   }
            // }
          })
        }
      />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
