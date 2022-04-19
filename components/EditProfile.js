import React, { useEffect, useState } from "react";
import useAuth from "../contexts/AuthContext";
import style from "../styles/profile.module.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const EditProfile = () => {
  const { currentUser } = useAuth();

  const handleSubmit = () => {};

  console.log(currentUser);
  return (
    <div className={style.profileContentWrap}>
      <div className={style.profileContent}>
        <div>
          {currentUser.photoURL ? (
            currentUser.photoURL
          ) : (
            <div className={style.profileImage}>
              <img
                src="https://buildyourspechere.com/wp-content/uploads/2020/10/placeholder-image-person-jpg.jpg"
                alt="No Photo"
              />
            </div>
          )}
        </div>
        <div className={style.profileInfo}>
          <TextField
            sx={{ width: 1 }}
            variant="standard"
            label="Email:"
          ></TextField>
          <TextField
            sx={{ width: 1 }}
            variant="standard"
            label="Username:"
          ></TextField>
          <TextField
            sx={{ width: 1 }}
            variant="standard"
            label="Password:"
          ></TextField>
          <TextField
            sx={{ width: 1 }}
            variant="standard"
            label="Verify Password:"
          ></TextField>
        </div>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            sx={{ borderRadius: 40, textTransform: "none" }}
            color="secondary"
            variant="contained"
          >
            Save
          </Button>
          <Button
            sx={{ borderRadius: 40, textTransform: "none" }}
            color="secondary"
            variant="contained"
          >
            Cancel
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default EditProfile;
