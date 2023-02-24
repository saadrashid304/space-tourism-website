import React from "react";
import styles from "./CrewNavigationBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCrewNavLink } from "../../Store/Action/ActiveCrewNavLinkAction";

const CrewNavigationBar = () => {
  const dispatch = useDispatch();
  const activeCrewNavLink = useSelector((state) => state.activeCrewNavLink);
  return (
    <div className={styles.navbar_crewContainer}>
      <div
        className={`${styles.crewDiv}
                  ${
                    activeCrewNavLink === "Douglas Hurley" &&
                    styles.navbar_crewActiveLink
                  }`}
        onClick={() => dispatch(setActiveCrewNavLink("Douglas Hurley"))}
      />
      <div
        className={`${styles.crewDiv}
                  ${
                    activeCrewNavLink === "Mark Shuttleworth" &&
                    styles.navbar_crewActiveLink
                  }`}
        onClick={() => dispatch(setActiveCrewNavLink("Mark Shuttleworth"))}
      />
      <div
        className={`${styles.crewDiv} ${
          activeCrewNavLink === "Victor Glover" && styles.navbar_crewActiveLink
        }`}
        onClick={() => dispatch(setActiveCrewNavLink("Victor Glover"))}
      />
      <div
        className={`${styles.crewDiv} ${
          activeCrewNavLink === "Anousheh Ansari" &&
          styles.navbar_crewActiveLink
        }`}
        onClick={() => dispatch(setActiveCrewNavLink("Anousheh Ansari"))}
      />
    </div>
  );
};

export default CrewNavigationBar;
