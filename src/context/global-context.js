// Main Imports
import React, { createContext, useState } from "react";

// Data Imports
import saveForLater from "@data/user-identity-trust/save-for-later.json";

// Initially create the context so it knows what kind of variable inside
export const GlobalContext = createContext({
  userIndentityTrust: { saveForLater },
});

// Provide simple ways to update the context, default value is provided here
const Provider = (props) => {
  const [context, saveContext] = useState({
    userIdentityTrust: { saveForLater },
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
