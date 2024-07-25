import React, { createContext, useState, useContext } from 'react';

const BusinessDrawerContext = createContext();

export const useBusinessDrawerContext = () => useContext(BusinessDrawerContext);

export const BusinessDrawerProvider = ({ children }) => {
  const [isBusinessDrawer, setIsBusinessDrawer] = useState(false);

  return (
    <BusinessDrawerContext.Provider value={{ isBusinessDrawer, setIsBusinessDrawer }}>
      {children}
    </BusinessDrawerContext.Provider>
  );
};
