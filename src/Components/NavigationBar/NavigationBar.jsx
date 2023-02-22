import React from "react";
import styles from "./NavigationBar.module.css";
import logo from "../../Assets/logo.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const activeNavLink = useSelector((state) => state.activeNavLink);

  return (
    <div className={styles.navbar_mainContainer}>
      <div className={styles.navbar_logoContainer}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navbar_lineContainer} />
      <div className={styles.navbar_navLinkContainer}>
        <div className={activeNavLink === "Home" && styles.navbar_activeLink}>
          <NavLink to="/" className={styles.home_navLink}>
            <span>00</span> HOME
          </NavLink>
        </div>
        <div
          className={
            activeNavLink === "Destination" && styles.navbar_activeLink
          }
        >
          <NavLink to="/destination" className={styles.home_navLink}>
            <span>01</span> DESTINATION
          </NavLink>
        </div>
        <div className={activeNavLink === "Crew" && styles.navbar_activeLink}>
          <span>02</span> CREW
        </div>
        <div
          className={activeNavLink === "Technology" && styles.navbar_activeLink}
        >
          <span>03</span> TECHNOLOGY
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
