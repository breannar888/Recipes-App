import React, { useEffect, useState } from "react";
import useAuth from "../contexts/AuthContext";
import ProfileNav from "./ProfileNav";
import style from "../styles/profile.module.css";
import { Button } from "@mui/material";
import Link from "next/dist/client/link";

const Profile = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  if (currentUser) {

    const profilePic = "/placeholder-profile.jpg";

    if (currentUser?.photoURL) {
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
          <div className={style.profileInfo}>
            <div className={style.profileText}>Email: {currentUser.email}</div>
            <div className={style.profileText}>
              Name:
              {currentUser.displayName ? (
                currentUser.displayName
              ) : (
                <span>no username</span>
              )}
            </div>
          </div>
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
