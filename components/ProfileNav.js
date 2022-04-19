import React from "react";
import Link from "next/link";
import style from "../styles/profilenav.module.css";
import useAuth from "../contexts/AuthContext";
import { logout } from "../utils/firebase-config";

const ProfileNav = () => {
  const { setLoading } = useAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  }
  return (
    <div>
      <nav className={style.nav}>
        <ul className={style.listWrap}>
          <li className={style.list}>Profile</li>
          <li className={style.list}>Favorites</li>
          <li className={style.list}>My Recipes</li>
          <Link href="/">
            <li onClick={handleLogout} className={style.list}>
              Logout
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileNav;
