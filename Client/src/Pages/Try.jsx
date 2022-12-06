import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";

function Try() {
  return (
    <div>
      <HashRouter>
        <div>
          <ul className="header">
            <div className="logo">
              <h5>Care and Maintenance Requisition System</h5>
            </div>

            <a>
              <NavLink to="">Open Request</NavLink>
            </a>
            <a>
              <NavLink to="">Closed Request</NavLink>
            </a>
            <a>
              <NavLink to="">Account Management</NavLink>
            </a>
            <a>
              <NavLink to="/Logout">Log Out</NavLink>
            </a>
          </ul>
          <div className="content">
            <Route exact path="" />
            <Route path="" />
            <Route path="" />
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default Try;
