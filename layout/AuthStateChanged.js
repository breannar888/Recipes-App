import React, { useState, useEffect } from "react";
import useAuth from "../contexts/AuthContext";
import firebase from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";

export default function AuthStateChanged({ children }) {
  const { setCurrentuser, loading, setLoading } = useAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentuser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return <div>{children}</div>;
}
