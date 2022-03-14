import React from "react";
import styles from "../styles/navbar.module.css";
import Lemonlogo from "../public/iconComponents/lemonlogo";
import Favoritelogo from "../public/iconComponents/favoritelogo";
import Link from "next/dist/client/link";
import { Button } from "@mui/material";
import { styled } from "@mui/styles";

const StyledBtn = styled(Button)({
  borderRadius: 40,
  textTransform: "capitalize",
  padding: ".2em 1em .2em 1em",
});

const Navbar = () => {
  return (
    <div className={styles.navwrap}>
      <div className={styles.logowrap}>
        <Lemonlogo />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Favoritelogo />
          </li>
          <li>
            <Link href="/" passHref>
              <StyledBtn variant="contained" disableElevation color="primary">
                Login
              </StyledBtn>
            </Link>
          </li>
          <li>
            <Link href="/recipe" passHref>
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
