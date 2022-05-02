import React, { useEffect } from "react";
import useAuth from "../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../utils/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function AuthStateChanged({ children }) {
  const {
    setCurrentuser,
    loading,
    setLoading,
    currentUser,
    usersInfo,
    setUsersInfo,
  } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentuser(user);
      setLoading(false);
      if (currentUser) {
        const q = query(
          collection(db, "users"),
          where("uid", "==", currentUser.uid)
        );

        const unsub = onSnapshot(q, (snapshot) => {
          const userInfo = [];
          snapshot.forEach((doc) => {
            userInfo.push(doc.data());
          });
          console.log(userInfo);
          setUsersInfo(userInfo);
        });
        console.log("user info", usersInfo);
        return unsub;
      }
    });
  }, [currentUser]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return <div>{children}</div>;
}
