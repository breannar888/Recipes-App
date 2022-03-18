import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Lemonlogo from "../public/iconComponents/lemonlogo";
import Link from "next/dist/client/link";
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Signup from "./Signup";

const StyledBtn = styled(Button)({
  borderRadius: 40,
  textTransform: "capitalize",
  padding: ".2em 1em .2em 1em",
});

const NavFavIcon = styled(FavoriteIcon)({
  fontSize: 32,
});

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
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
              <NavFavIcon color="secondary" />
            </IconButton>
          </li>
          <li>
            <StyledBtn
              onClick={() => setShowModal(true)}
              variant="contained"
              disableElevation
              color="primary"
            >
              Login
            </StyledBtn>
            <Signup onClose={() => setShowModal(false)} show={showModal} />
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
