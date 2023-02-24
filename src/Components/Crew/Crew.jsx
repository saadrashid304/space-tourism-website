import React, { Fragment, useEffect, useState } from "react";
import styles from "./Crew.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import CrewNavigationBar from "../CrewNavigationBar/CrewNavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNavLink } from "../../Store/Action/ActiveNavLinkAction";
import { data } from "../../Assets/data";

const Crew = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const activeCrewNavLink = useSelector((state) => state.activeCrewNavLink);

  useEffect(() => {
    dispatch(setActiveNavLink("Crew"));
  }, [dispatch]);

  useEffect(() => {
    for (let i = 0; i < data.crew.length; i++) {
      if (activeCrewNavLink === data.crew[i].name) {
        setSelected(data.crew[i]);
        break;
      }
    }
  }, [activeCrewNavLink]);

  return (
    <Fragment>
      <NavigationBar />
      <div className={styles.crew_mainContainer}>
        <div className={styles.crew_leftContainer}>
          <p className={styles.crew_title}>
            <span>02</span>Meet your crew
          </p>
          <p className={styles.crew_role}>
            {selected !== null && selected.role}
          </p>
          <p className={styles.crew_name}>
            {selected !== null && selected.name}
          </p>
          <p className={styles.crew_bio}>{selected !== null && selected.bio}</p>
          <CrewNavigationBar />
        </div>
        <div className={styles.crew_rightContainer}>
          <img src={selected !== null && selected.images.webp} alt="Hello" />
        </div>
      </div>
    </Fragment>
  );
};

export default Crew;
