import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/404";
import Addgoal from "./pages/Addgoal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Addgoal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
