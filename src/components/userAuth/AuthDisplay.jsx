import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuthDisplay = () => {
  const auth = useContext(AuthContext);
  return <>{auth.userAuth ? <p>login...</p> : <p>logout...</p>}</>;
};
