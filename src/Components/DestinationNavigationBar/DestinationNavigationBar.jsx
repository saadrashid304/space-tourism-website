import React from "react";
import styles from "./DestinationNavigationBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveDestNavLink } from "../../Store/Action/ActiveDestNavLinkAction";

const DestinationNavigationBar = () => {
  const dispatch = useDispatch();
  const activeDestNavLink = useSelector((state) => state.activeDestNavLink);
  return (
    <div className={styles.navbar_destContainer}>
      <div
        className={activeDestNavLink === "MOON" && styles.navbar_destActiveLink}
        onClick={() => dispatch(setActiveDestNavLink("MOON"))}
      >
        MOON
      </div>
      <div
        className={activeDestNavLink === "MARS" && styles.navbar_destActiveLink}
        onClick={() => dispatch(setActiveDestNavLink("MARS"))}
      >
        MARS
      </div>
      <div
        className={
          activeDestNavLink === "EUROPA" && styles.navbar_destActiveLink
        }
        onClick={() => dispatch(setActiveDestNavLink("EUROPA"))}
      >
        EUROPA
      </div>
      <div
        className={
          activeDestNavLink === "TITAN" && styles.navbar_destActiveLink
        }
        onClick={() => dispatch(setActiveDestNavLink("TITAN"))}
      >
        TITAN
      </div>
    </div>
  );
};

export default DestinationNavigationBar;
