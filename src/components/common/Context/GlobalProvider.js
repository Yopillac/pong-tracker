import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
  const [navState, setNavState] = useState({
    nav: 'dashboard',
    page: 'main',
  });

  return (
    <GlobalContext.Provider
      value={{
        navState,
        setNavState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};