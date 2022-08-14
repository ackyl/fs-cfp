import React, { createContext, useState } from "react";

// Initially create the context so it knows what kind of variable inside
export const KycContext = createContext({
  username: "test",
});

// Provide simple ways to update the context, default value is provided here
const Provider = (props) => {
  const [kyc, saveKyc] = useState({
    username: "",
  });

  return (
    <KycContext.Provider
      value={{
        kyc,
        saveKyc,
      }}
    >
      {props.children}
    </KycContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
