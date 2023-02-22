import React, { Fragment, useEffect } from "react";
import styles from "./Home.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import explore from "../../Assets/explore.svg";
import { useDispatch } from "react-redux";
import { setActiveNavLink } from "../../Store/Action/ActiveNavLinkAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveNavLink("Home"));
  }, [dispatch]);

  return (
    <Fragment>
      <NavigationBar />
      <div className={styles.home_mainContainer}>
        <div className={styles.home_contentContainer}>
          <p className={styles.home_titleDesc}>So, you want to travel to</p>
          <h1>Space</h1>
          <p className={styles.home_desc}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.home_exploreContainer}>
          <img src={explore} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
