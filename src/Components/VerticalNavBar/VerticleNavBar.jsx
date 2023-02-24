import React from "react";
import styles from "./VerticleNavBar.module.css";
import close from "../../Assets/icon-close.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const VerticleNavBar = (props) => {
  const activeNavLink = useSelector((state) => state.activeNavLink);

  return (
    <div className={styles.vertical_mainContainer}>
      <div className={styles.vertical_imgContainer}>
        <img src={close} alt="" onClick={() => props.onDisplayChange(false)} />
      </div>
      <div className={styles.vertical_navContainer}>
        <div
          className={activeNavLink === "Home" && styles.navbar_activeLink}
          onClick={() => props.onDisplayChange(false)}
        >
          <NavLink to="/" className={styles.home_navLink}>
            <span>00</span>HOME
          </NavLink>
        </div>
        <div
          className={
            activeNavLink === "Destination" && styles.navbar_activeLink
          }
          onClick={() => props.onDisplayChange(false)}
        >
          <NavLink to="/destination" className={styles.home_navLink}>
            <span>01</span> DESTINATION
          </NavLink>
        </div>
        <div
          className={activeNavLink === "Crew" && styles.navbar_activeLink}
          onClick={() => props.onDisplayChange(false)}
        >
          <NavLink to="/crew" className={styles.home_navLink}>
            <span>02</span> CREW
          </NavLink>
        </div>
        <div
          className={activeNavLink === "Technology" && styles.navbar_activeLink}
          onClick={() => props.onDisplayChange(false)}
        >
          <NavLink to="/technology" className={styles.home_navLink}>
            <span>03</span> TECHNOLOGY
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VerticleNavBar;
