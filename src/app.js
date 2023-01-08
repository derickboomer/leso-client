import React, { useState } from "react";
import AdminHomepage from "./Pages/AdminHomepage";
import Login from "./Pages/Login";
import TechnicianHomepage from "./Pages/TechnicianHomepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClientHomepage from "./Pages/ClientHomepage";
import RoutingTry from "./Routes/RoutingTry";
import axios from "axios";

function App() {
  return (
    <React.Fragment>
      <RoutingTry />
    </React.Fragment>
  );
}
export default App;
