import React, { Fragment } from "react";
import styles from "./App.module.css";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Technology from "./Components/Technology/Technology";
import Crew from "./Components/Crew/Crew";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const activeNavLink = useSelector((state) => state.activeNavLink);

  return (
    <div
      className={`${activeNavLink === "Home" && styles.body_homeImage} ${
        activeNavLink === "Destination" && styles.body_destinationImage
      } ${activeNavLink === "Crew" && styles.body_crewImage} ${
        activeNavLink === "Technology" && styles.body_techImage
      }`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
