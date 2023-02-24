import React, { useEffect, Fragment, useState } from "react";
import styles from "./Destination.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import DestinationNavigationBar from "../DestinationNavigationBar/DestinationNavigationBar";
import { setActiveNavLink } from "../../Store/Action/ActiveNavLinkAction";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../Assets/data";

const Destination = () => {
  const dispatch = useDispatch();
  const activeDestNavLink = useSelector((state) => state.activeDestNavLink);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(setActiveNavLink("Destination"));
  }, [dispatch]);

  useEffect(() => {
    for (let i = 0; i < data.destinations.length; i++) {
      if (activeDestNavLink === data.destinations[i].name.toUpperCase()) {
        setSelected(data.destinations[i]);
        break;
      }
    }
  }, [activeDestNavLink]);

  return (
    <Fragment>
      <NavigationBar />
      <div className={styles.destination_mainContainer}>
        <div className={styles.destination_leftContainer}>
          <p>
            <span>01</span>Pick your Destination
          </p>
          <img src={selected !== null && selected.images.webp} alt="" />
        </div>
        <div className={styles.destination_rightContainer}>
          <DestinationNavigationBar />
          <p className={styles.destination_title}>
            {selected !== null && selected.name}
          </p>
          <p className={styles.destination_desc}>
            {selected !== null && selected.description}
          </p>
          <div className={styles.destination_line} />
          <div className={styles.destination_detailsContainer}>
            <div>
              <p className={styles.details_key}>AVG. DISTANCE</p>
              <p className={styles.details_value}>
                {selected !== null && selected.distance}
              </p>
            </div>
            <div className={styles.details_rightDiv}>
              <p className={styles.details_key}>EST. TRAVEL TIME</p>
              <p className={styles.details_value}>
                {selected !== null && selected.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Destination;
