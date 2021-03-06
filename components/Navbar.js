import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Lemonlogo from "../public/iconComponents/lemonlogo";
import Link from "next/dist/client/link";
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useAuth from "../contexts/AuthContext";

const StyledBtn = styled(Button)({
  borderRadius: 40,
  textTransform: "capitalize",
  padding: ".2em 1em .2em 1em",
});

const NavFavIcon = styled(FavoriteIcon)({
  fontSize: 32,
});

const Navbar = () => {
  const { currentUser } = useAuth();

  const profilePic = "/placeholder-profile.jpg";

  if (currentUser?.photoURL) {
    profilePic = currentUser.photoURL;
  } else {
    profilePic = "/placeholder-profile.jpg";
  }

  return (
    <div className={styles.navwrap}>
      <div className={styles.logowrap}>
        <Link href="/" passHref>
          <IconButton disableRipple>
            <Lemonlogo />
          </IconButton>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <IconButton disableRipple sx={{ padding: 0 }}>
              <NavFavIcon color="tertiary" />
            </IconButton>
          </li>
          <li>
            {currentUser ? (
              <Link href="/profiles" passHref>
                <img className={styles.profile} src={profilePic} />
              </Link>
            ) : (
              <Link href="/login" passHref>
                <StyledBtn variant="contained" disableElevation color="primary">
                  Login
                </StyledBtn>
              </Link>
            )}
          </li>
          <li>
            <Link href="/addrecipe" passHref>
              <StyledBtn variant="contained" disableElevation color="primary">
                Add Recipes
              </StyledBtn>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
