// Main Imports
import React, { createContext, useState } from "react";

// Initially create the context so it knows what kind of variable inside
export const GlobalContext = createContext({
  kyc: {
    selfie: false,
    ktpNumber: "",
    document: {
      fullName: "",
      gender: "",
      religion: "",
      birthPlace: "",
      birthDate: "",
    },
    contact: {
      email: "",
      phone: "",
    },
    personal: {
      address: {
        address: "",
        rtrw: "",
        province: "",
        city: "",
        postalCode: "",
      },
      mothersName: "",
      maritalStatus: "",
    },
    savedUntilPage: "",
  },
});

// Provide simple ways to update the context, default value is provided here
const Provider = (props) => {
  const [context, saveContext] = useState({
    kyc: {
      selfie: false,
      ktpNumber: "",
      document: {
        fullName: "",
        gender: "",
        religion: "",
        birthPlace: "",
        birthDate: "",
      },
      contact: {
        email: "",
        phone: "",
      },
      personal: {
        address: {
          address: "",
          rtrw: "",
          province: "",
          city: "",
          postalCode: "",
        },
        mothersName: "",
        maritalStatus: "",
      },
      savedUntilPage: 0,
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
