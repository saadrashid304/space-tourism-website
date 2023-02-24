import React, { useState } from "react";
import styles from "./NavigationBar.module.css";
import menu from "../../Assets/icon-hamburger.svg";
import logo from "../../Assets/logo.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import VerticleNavBar from "../VerticalNavBar/VerticleNavBar";

const NavigationBar = () => {
  const activeNavLink = useSelector((state) => state.activeNavLink);
  const [displayVerticle, setDisplayVerticle] = useState(false);

  const displayVerticleChange = (value) => {
    setDisplayVerticle(value);
  };

  return (
    <div className={styles.navbar_mainContainer}>
      <div className={styles.navbar_logoContainer}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.menuIcon} onClick={() => setDisplayVerticle(true)}>
        <img src={menu} alt="" />
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
          <NavLink to="/crew" className={styles.home_navLink}>
            <span>02</span> CREW
          </NavLink>
        </div>
        <div
          className={activeNavLink === "Technology" && styles.navbar_activeLink}
        >
          <NavLink to="/technology" className={styles.home_navLink}>
            <span>03</span> TECHNOLOGY
          </NavLink>
        </div>
      </div>
      {displayVerticle && <VerticleNavBar onDisplayChange={displayVerticleChange} />}
    </div>
  );
};

export default NavigationBar;
