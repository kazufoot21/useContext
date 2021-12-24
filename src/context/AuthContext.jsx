import React, { createContext, useState } from "react";

export const AuthContext = createContext(false);

export const AuthProvider = (props) => {
  const [userAuth, setUserAuth] = useState(false);
  const { children } = props;
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
