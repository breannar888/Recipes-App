import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = {
    currentUser,
    setCurrentuser,
    loading, 
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
