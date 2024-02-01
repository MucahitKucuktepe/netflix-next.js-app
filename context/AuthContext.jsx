"use client";
import React, { createContext, useContext, useState } from "react";

export const AutContext = createContext();
export const useAuthContext = () => {
  return useContext(AutContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const values = { currentUser };
  return <AutContext.Provider value={values}>{children}</AutContext.Provider>;
};

export default AuthContextProvider;
