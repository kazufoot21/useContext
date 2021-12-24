import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuhtButton = (props) => {
  const auth = useContext(AuthContext);

  console.log(auth);

  const handleSignOut = () => {
    auth.setUserAuth(false);
  };

  const handleSignIn = () => {
    auth.setUserAuth(true);
  };
  return (
    <>
      {auth.userAuth ? (
        <button onClick={handleSignOut}>logout</button>
      ) : (
        <button onClick={handleSignIn}>login</button>
      )}
    </>
  );
};
