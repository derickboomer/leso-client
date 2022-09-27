import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";

function AccountManagement() {
  return (
    <React.Fragment>
      {/* prettier-ignore */}
      {/* Closed Request Table */}
      <div
        className=" table"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div className="p-2 title h1 font-weight-bold d-flex justify-content-center">
          Account Management
        </div>

        <table
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          class="table"
        >
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Account Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>USER_01</td>
              <td>Vince</td>
              <td>Marcelo</td>
              <td>marcelo.vince@ust.edu.ph</td>
              <td>Admin</td>
              <td>
                <button className="mr-1">Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default AccountManagement;
