import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usersInfo, setUsersInfo] = useState();

  const value = {
    currentUser,
    setCurrentuser,
    loading,
    setLoading,
    usersInfo,
    setUsersInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
