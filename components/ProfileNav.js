import React from "react";
import Link from "next/link";
import style from "../styles/profilenav.module.css";

const ProfileNav = () => {
  return (
    <div>
      <nav className={style.nav}>
        <ul className={style.listWrap}>
          <li className={style.list}>Profile</li>
          <li>Favorites</li>
          <li>My Recipes</li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileNav;
