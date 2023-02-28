import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Technology.module.css";
import { setActiveNavLink } from "../../Store/Action/ActiveNavLinkAction";
import NavigationBar from "../NavigationBar/NavigationBar";
import TechnologyNavigationBar from "../TechnologyNavigationBar/TechnologyNavigationBar";
import { data } from "../../Assets/data";

const Technology = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const [media, setMedia] = useState(window.innerWidth);
  const activeTechNavLink = useSelector((state) => state.activeTechNavLink);

  useEffect(() => {
    dispatch(setActiveNavLink("Technology"));
  }, [dispatch]);

  useEffect(() => {
    for (let i = 0; i < data.technology.length; i++) {
      if (activeTechNavLink === data.technology[i].name) {
        setSelected(data.technology[i]);
        break;
      }
    }
  }, [activeTechNavLink]);

  useEffect(() => {
    setMedia(window.innerWidth);
  }, [media]);

  return (
    <Fragment>
      <NavigationBar />
      <div className={styles.tech_mainContainer}>
        <div className={styles.tech_leftContainer}>
          <p className={styles.tech_title}>
            <span>03</span>Space Launch 101
          </p>
          <div className={styles.tech_leftMainContainer}>
            <div>
              <TechnologyNavigationBar />
            </div>
            <div>
              <p className={styles.tech_name_title}>The Terminology ...</p>
              <p className={styles.tech_name}>
                {selected !== null && selected.name}
              </p>
              <p className={styles.tech_desc}>
                {selected !== null && selected.description}
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.tech_rightContainer}
          style={{
            backgroundImage:
              media <= 768
                ? `url(${selected !== null && selected.images.landscape})`
                : `url(${selected !== null && selected.images.portrait})`,
          }}
        >
          {/* {media && (
            <img src={selected !== null && selected.images.landscape} alt="" />
          )}
          {!media && (
            <img src={selected !== null && selected.images.protrait} alt="" />
          )} */}
        </div>
      </div>
    </Fragment>
  );
};

export default Technology;
