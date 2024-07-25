import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext();

export const useDrawerContext = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const [isExpertDrawer, setIsExpertDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ isExpertDrawer, setIsExpertDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
