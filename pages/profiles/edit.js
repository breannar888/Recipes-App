import React from "react";
import EditProfile from "../../components/EditProfile";
import ProfileNav from "../../components/ProfileNav";
import style from "../../styles/profile.module.css";

const edit = () => {
  return (
    <div className={style.profileWrap}>
      <ProfileNav />
      <EditProfile />
    </div>
  );
};

export default edit;