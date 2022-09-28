import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";

function Track() {
  return (
    <div className="trackcontainer " style={{backgroundColor: "white",borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",}}>
        
        <div className=" p-2 h3 font-weight-bold "> {/* Job Order Form */}
            Open Job Order Requests
          </div>  

      <div className="mt-2 table">
          <div className="filter"></div>
          
          <table
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            class="table table-striped"
          >
            <thead>
              <tr>
                
                <th scope="col">Equipment</th>
                <th scope="col">Service Type</th>
                <th scope="col">Technician</th>
                <th scope="col">Status</th>
                <th scope="col">Stage</th>
                <th scope="col">Request ID</th>
                <th scope="col">Action</th>
                
              </tr>
            </thead>

            <tbody>
              <tr>

                
                <td>Telescope</td>
                <td>Repair</td>
                <td>Jackson</td>
                <td>For Approval</td>
                <td>On-going</td>
                <td>02145</td>
                <td>
                  <button className="mr-1">View</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default Track;
