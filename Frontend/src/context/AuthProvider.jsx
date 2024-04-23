import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initAuthUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    initAuthUser ? JSON.parse(initAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
