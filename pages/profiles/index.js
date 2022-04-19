import React from "react";
import Profile from "../../components/Profile";
import ProfileNav from "../../components/ProfileNav";
import style from "../../styles/profile.module.css";

const profiles = () => {
  return (
    <div className={style.profileWrap}>
      <ProfileNav />
      <Profile />
    </div>
  );
};

export default profiles;
