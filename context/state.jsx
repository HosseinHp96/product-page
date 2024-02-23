"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [shoppingBag, setshoppingBag] = useState([]);

  let sharedState = {
    shoppingBag,
    setshoppingBag,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
