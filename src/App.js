import React, { Fragment } from "react";
import styles from "./App.module.css";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const activeNavLink = useSelector((state) => state.activeNavLink);

  return (
    <div
      className={`${activeNavLink === "Home" && styles.body_homeImage} ${
        activeNavLink === "Destination" && styles.body_destinationImage
      }`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  );
};

export default App;
