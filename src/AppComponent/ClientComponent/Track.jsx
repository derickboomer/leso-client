import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";

function Track() {
  return (
    <div className="trackcontainer " style={{backgroundColor: "white",borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",}}>
        
        <div className=" p-2 h3 font-weight-bold "> {/* Job Order Form */}
            Recent Job Order Requests
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

                
                <td className="align-middle">Telescope</td>
                <td className="align-middle">Repair</td>
                <td className="align-middle">Jackson</td>
                <td className="align-middle">For Approval</td>
                <td className="align-middle">On-going</td>
                <td className="align-middle">02145</td>
                <td>
                <button type="button" class="btn btn-primary mr-2 " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Delete</button>
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default Track;
