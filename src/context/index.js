import React, { useState } from 'react';

export const appContext = React.createContext();

const AppContextProvider = (props) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSisteSection, setActiveSisteSection] = useState('virtual');

  return (
    <appContext.Provider
      value={{
        isMobileNavOpen,
        openMobileNav: () => setIsMobileNavOpen(true),
        closeMobileNav: () => setIsMobileNavOpen(false),
        activeSisteSection,
        setActiveSisteSection: (sectionName) =>
          setActiveSisteSection(sectionName),
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default ({ element }) => (
  <AppContextProvider>{element}</AppContextProvider>
);
