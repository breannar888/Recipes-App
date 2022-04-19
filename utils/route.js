import { useRouter } from "next/router";
import React from "react";
import useAuth from "../contexts/AuthContext";

export function withPublic(Component) {
  return function WithPublic(props) {
    const { currentUser } = useAuth();
    const router = useRouter();

    if (currentUser) {
      console.log("auth user:", currentUser);
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component auth={currentUser} {...props} />;
  };
}

export function withPrivate() {
  return <div>route</div>;
}
