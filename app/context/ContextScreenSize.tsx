'use client'
import React, { createContext, useContext } from "react";
import { useScreenSize } from "../hooks/ScreenSize";

const ScreenSizeContext = createContext<number>(0);

export const ScreenWidthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const width = useScreenSize();

  return (
    <ScreenSizeContext.Provider value={width}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Hook per consumare il context ovunque
export const useWindowWidthContext = () => {
  return useContext(ScreenSizeContext);
};
