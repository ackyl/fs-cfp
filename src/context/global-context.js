// Main Imports
import React, { createContext, useState } from "react";
import goldKyc from "./data/data-gold-kyc.json";

// Initially create the context so it knows what kind of variable inside
export const GlobalContext = createContext({
  goldKyc,
});

// Provide simple ways to update the context, default value is provided here
const Provider = (props) => {
  const [context, saveContext] = useState({
    goldKyc,
  });

  return (
    <GlobalContext.Provider
      value={{
        context,
        saveContext,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
