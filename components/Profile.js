import React, { useEffect, useState } from "react";
import useAuth from "../contexts/AuthContext";
import style from "../styles/profile.module.css";
import { Button } from "@mui/material";
import Link from "next/dist/client/link";

const Profile = () => {
  const { currentUser, usersInfo } = useAuth();

  if (usersInfo) {
    const profilePic = "/placeholder-profile.jpg";

    if (usersInfo?.photoURL) {
      profilePic = currentUser.photoURL;
    } else {
      profilePic = "/placeholder-profile.jpg";
    }

    return (
      <div className={style.profileContentWrap}>
        <div className={style.profileContent}>
          <div>
            <img
              className={style.profileImage}
              src={profilePic}
              alt="No Photo"
            />
          </div>

          {usersInfo.map((info, i) => (
            <div key={0} className={style.profileInfo}>
              <div key={1} className={style.profileText}>
                Email: {info.email}
              </div>
              <div key={2} className={style.profileText}>
                Name: {info.name ? info.name : <span> no username </span>}
              </div>
            </div>
          ))}

          <div>
            <Link href="profiles/edit" passHref>
              <Button
                sx={{ borderRadius: 40, textTransform: "none" }}
                color="secondary"
                variant="contained"
              >
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Profile;
