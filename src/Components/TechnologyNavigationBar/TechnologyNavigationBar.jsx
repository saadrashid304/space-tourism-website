import React from "react";
import styles from "./TechnologyNavigationBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTechNavLink } from "../../Store/Action/ActiveTechNavLinkAction";

const TechnologyNavigationBar = () => {
  const dispatch = useDispatch();
  const activeTechNavLink = useSelector((state) => state.activeTechNavLink);
  return (
    <div className={styles.navbar_techContainer}>
      <div
        className={`${styles.techDiv}
                  ${
                    activeTechNavLink === "Launch vehicle" &&
                    styles.navbar_techActiveLink
                  }`}
        onClick={() => dispatch(setActiveTechNavLink("Launch vehicle"))}
      >
        1
      </div>
      <div
        className={`${styles.techDiv}
                  ${
                    activeTechNavLink === "Spaceport" &&
                    styles.navbar_techActiveLink
                  }`}
        onClick={() => dispatch(setActiveTechNavLink("Spaceport"))}
      >
        2
      </div>
      <div
        className={`${styles.techDiv} ${
          activeTechNavLink === "Space capsule" && styles.navbar_techActiveLink
        }`}
        onClick={() => dispatch(setActiveTechNavLink("Space capsule"))}
      >
        3
      </div>
    </div>
  );
};

export default TechnologyNavigationBar;
