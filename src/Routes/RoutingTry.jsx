import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Switch,
  NavLink,
} from "react-router-dom";
import AdminModal from "../AppComponent/AppModals/AdminModal";
import Admin from "../Pages/AdminHomepage";
import ClientHomepage from "../Pages/ClientHomepage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import TechnicianHomepage from "../Pages/TechnicianHomepage";

function RoutingTry() {
  return (
    <React.Fragment>
      <Router forceRefresh={true}>
        <div>
          {/* <NavLink to="/Login">
            <a class="  p-2">Login</a>
          </NavLink>
          <NavLink to="/Admin/OpenRequest">
            <a class="p-2">Admin</a>
          </NavLink>
          <NavLink to="/Technician/OpenRequest">
            <a class="p-2">Technician</a>
          </NavLink>
          <NavLink to="/Client/CreateRequest">
            <a class="p-2">Client</a>
          </NavLink>
          <NavLink to="/Modal">Modal</NavLink> */}
        </div>
        <Route path="/Login" component={Login} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Technician" component={TechnicianHomepage} />
        <Route path="/Client" component={ClientHomepage} />
        <Route path="/Register" component={Register} />
      </Router>
    </React.Fragment>
  );
}

export default RoutingTry;
