import React, { useEffect, useState } from "react";
import useAuth from "../contexts/AuthContext";
import { logout } from "../utils/firebase-config";
import ProfileNav from "./ProfileNav";
import style from "../styles/profile.module.css";

const Profile = () => {
  const { currentUser, setLoading } = useAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  console.log(currentUser);
  if (currentUser) {
    return (
      <div className={style.profileWrap}>
        <ProfileNav />
        <div>
          <div>Email: {currentUser.email}</div>
          <div>
            Photo:
            {currentUser.photoURL ? currentUser.photoURL : <div>no photo</div>}
          </div>
          <div>
            Name:
            {currentUser.displayName ? (
              currentUser.displayName
            ) : (
              <div>no username</div>
            )}
          </div>
          <button>edit</button>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Profile;
