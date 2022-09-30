import React from "react";
import { NavLink, Route, HashRouter, useParams } from "react-router-dom";
import AdminModal from "../AppModals/AdminModal";

function OpenRequest() {
  
  

  return (
    <React.Fragment>
      <span style={{ backgroundColor: "rgb(255, 246, 225)" }}>
        {/* prettier-ignore */}

        <div class="" style={{backgroundColor: "white", borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className="p-3" >
          <div class="h4 font-weight-bold">Open Request Dashboard</div>

          <div class="d-flex" className="dashboardcontents">
            <button class="bg-info col mr-2  card ">
              <div class="card-body text-light font-weight-bold ">
                <div className="d-flex justify-content-start ">
                  Total Requests
                  
                </div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                
                </div>
              </div>
            </button>

            <button class="bg-warning col mr-2 card">
              <div class=" card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">
                  For Approval
                </div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                  1
                </div>
              </div>
            </button>

            <button class=" bg-success col mr-2 card">
              <div class="card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">Approved</div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                  0
                </div>
              </div>
            </button>

            <button class="bg-secondary col mr-2 card">
              <div class=" card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">On-Going</div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                  1
                </div>
              </div>
            </button>

            <button class="bg-secondary col  card">
              <div class=" card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">Pending</div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                  10
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-3 table">
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
                <AdminModal/>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="reg-modal" data-whatever="@mdo">Delete</button>
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </span>

      

      
    </React.Fragment>
  );
}

export default OpenRequest;
