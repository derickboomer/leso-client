import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";

function TechnicianClosedRequest() {
  return (
    <React.Fragment>
      <span style={{ backgroundColor: "rgb(255, 246, 225)" }}>
        {/* prettier-ignore */}

        <div class=""  className="dashboard wrapper">
        <div class="" style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className=" p-3 dashboard wrapper ">
          <div class="h4 font-weight-bold">Closed Request Dashboard</div>

          <div class= "d-flex"  className="dashboardcontents">
         
              <button class=" bg-secondary col mr-2 card" >
                <div class="card-body  text-light font-weight-bold">
                  <div className="d-flex justify-content-start ">Total Closed Request</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">0</div>
                </div>
              </button>

              <button class="bg-success col mr-2 card" >
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Completed</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">1</div>
                </div>
              </button>

              <button class="bg-danger col  card" >
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Cancelled</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">10</div>
                </div>
              </button>

            </div>
          </div>
        </div>

        <table
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            class="mt-3 table table-striped"
          >
            <thead>
              <tr>
                <th scope="col">Client Name</th>
                <th scope="col">Request ID</th>
                <th scope="col">Equipment</th>
                <th scope="col">Service Type</th>
                <th scope="col">Technician</th>
                <th scope="col">State</th>
                <th scope="col">Status</th>
                <th scope="col">Stage</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                
                <td className="align-middle">Rhoderick</td>
                <td className="align-middle">02145</td>
                <td className="align-middle">Telescope</td>
                <td className="align-middle">Repair</td>
                <td className="align-middle">Jackson</td>
                <td className="align-middle">Open</td>
                <td className="align-middle">For Approval</td>
                <td className="align-middle">On-going</td>
                <td>
                <button type="button" class="btn btn-primary mr-2 " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">View</button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Delete</button>
                


                
                </td>
              </tr>
            </tbody>
          </table>
        
      </span>
    </React.Fragment>
  );
}

export default TechnicianClosedRequest;
