import React, { useContext, useEffect } from 'react';
import LayoutWrapper from '../components/layout';
import Helmet from 'react-helmet';

// import {useSiteMenusStructure} from '../hooks/use-site-menus-structure'
import { appContext } from '../context';

const Layout = ({ path, children }) => {
  const { setActiveSisteSection } = useContext(appContext);

  useEffect(() => {
    console.log(path);
    // calculate what section we are in
    const firstPathSegment = path ? path.split('/')[1] : 'virtual';
    // if no segment in URL then set the default section to virtual
    const currentSection = firstPathSegment;

    // this is so that when we visit a root page (/about-us/) we still display the appropriate menu based on the section we were previously on (virtual, performances or programming):
    if (
      currentSection === 'virtual' ||
      currentSection === 'performances' ||
      currentSection === 'programming'
    ) {
      // check if the segment is relevant (
      setActiveSisteSection(currentSection); // if so, update the state with the new section
    }
    // if we are in a root page then the first segment won't be relevant and we don't update the state, leaving the section to whatever it previously was)
  });

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link rel="stylesheet" href="https://use.typekit.net/bea5cur.css" />
      </Helmet>

      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;
