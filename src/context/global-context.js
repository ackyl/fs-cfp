// Main Imports
import React, { createContext, useState } from "react";

// Initially create the context so it knows what kind of variable inside
export const GlobalContext = createContext({
  kyc: {
    ktpNumber: "",
    document: {
      ktp: "",
      selfie: "",
    },
    contact: {
      email: "",
      phone: "",
    },
  },
});

// Provide simple ways to update the context, default value is provided here
const Provider = (props) => {
  const [context, saveContext] = useState({
    kyc: {
      ktpNumber: "",
      document: {
        ktp: "",
        selfie: "",
      },
      contact: {
        email: "",
        phone: "",
      },
    },
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
