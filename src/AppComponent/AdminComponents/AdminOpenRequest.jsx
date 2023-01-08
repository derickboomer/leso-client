import { Axios } from "axios";
import React from "react";
import { NavLink, Link, Route, HashRouter, useParams } from "react-router-dom";
import AdminCreateJobRequest from "../AppModals/AdminCreateJobRequest";
import AdminModal from "../AppModals/AdminModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

function OpenRequest() {
  const [totalrequest, settotalrequest] = useState([]);
  const [request, setrequest] = useState([]);
  const [forapprovalcounter, setforapprovalcounter] = useState([]);
  const [approvedcounter, setapprovedcounter] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [cancelled, setcancelled] = useState([]);
  const redirect = useHistory();

  // Refresh
  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
  }

  // Delete Job Order

  const deleteJobOrder = (joborder) => {
    axios.delete(`http://localhost:3001/deletejoborder/${joborder}`);
    alert("Are you sure you want to delete this account?");
    refresh();
  };

  // Load All Request
  const loadRequest = async () => {
    const response = await axios.get("http://localhost:3001/openrequest");
    setrequest(response.data);
  };

  const loadCount = async () => {
    const response = await axios.get("http://localhost:3001/openrequest");
    settotalrequest(response.data);
  };

  // For Approval Counter
  const forApproval = async () => {
    const response = await axios.get("http://localhost:3001/counter");
    setforapprovalcounter(response.data);
  };

  // Approved Counter
  const Approved = async () => {
    const response = await axios.get("http://localhost:3001/approvedcounter");
    setapprovedcounter(response.data);
  };

  const RenderCompleted = async () => {
    const response = await axios.get("http://localhost:3001/rendercompleted");
    setcompleted(response.data);
  };

  const RenderCancelled = async () => {
    const response = await axios.get("http://localhost:3001/rendercancelled");
    setcancelled(response.data);
  };

  // Render List
  useEffect(() => {
    loadCount();
    loadRequest();
    forApproval();
    Approved();
    RenderCompleted();
    RenderCancelled();
  }, []);

  const RenderTotal = async () => {
    const response = await axios.get("http://localhost:3001/openrequest");
    setrequest(response.data);
  };

  const RenderforApproval = async () => {
    const response = await axios.get("http://localhost:3001/counter");
    setrequest(response.data);
  };

  const RenderApproved = async () => {
    const response = await axios.get("http://localhost:3001/approvedcounter");
    setrequest(response.data);
  };

  const RenderCompletedList = async () => {
    const response = await axios.get("http://localhost:3001/rendercompleted");
    setrequest(response.data);
  };

  const RenderCancelledList = async () => {
    const response = await axios.get("http://localhost:3001/rendercancelled");
    setrequest(response.data);
  };

  return (
    <React.Fragment>
      <span style={{ backgroundColor: "rgb(255, 246, 225)" }}>
        {/* prettier-ignore */}

        <div class="" style={{backgroundColor: "white", borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className="p-3" >
          <div className="h2 font-weight-bold rounded d-flex justify-content-between ">
          <div  class="h4 font-weight-bold">Open Request Dashboard</div>
            
          </div>
          

          <div class="d-flex" className="dashboardcontents">
            <button class="bg-info col mr-2  card " onClick={RenderTotal}>
              <div class="card-body text-light font-weight-bold ">
                <div className="d-flex justify-content-start ">
                  Total Requests
                  
                </div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                {totalrequest.length}
                </div>
              </div>
            </button>

            <button onClick={RenderforApproval} class="bg-secondary col mr-2 card">
              <div class=" card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">
                  For Approval
                </div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                {forapprovalcounter.length}
                </div>
              </div>
            </button>

            <button class=" bg-secondary col mr-2 card" onClick={RenderApproved}>
              <div class="card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">Approved</div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                {approvedcounter.length}
                </div>
              </div>
            </button>

            {/* <button class=" bg-danger col mr-2 card" onClick={RenderDeclined}>
              <div class="card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">Declined</div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                {declinedcounter.length}
                </div>
              </div>
            </button> */}

            <button class=" bg-secondary col mr-2 card" onClick={RenderCompletedList}>
              <div class="card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">Completed</div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                {completed.length}
                </div>
              </div>
            </button>

            <button class=" bg-secondary col mr-2 card" onClick={RenderCancelledList}>
              <div class="card-body  text-light font-weight-bold">
                <div className="d-flex justify-content-start ">Cancelled</div>
                <div className="d-flex justify-content-start pr-5 count display-4">
                {cancelled.length}
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
                <th scope="col">Date Recieved</th>
                <th scope="col">Tracking ID</th>
                <th scope="col">Request ID</th>
                <th scope="col">Client Name</th>
                <th scope="col">College</th>
                <th scope="col">Instrument</th>
                <th scope="col">Service Requested</th>
                <th scope="col">Service Performed</th>
                <th scope="col">Technician</th>
                <th scope="col">Status</th>
                <th scope="col">Stage</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {request.map((joborder) => {
              const date = moment(joborder.date_received).format("LLL");
              return (
                <React.Fragment>
                  <tbody>
                    <tr>
                      <td className="align-middle">{date}</td>
                      <td className="align-middle">
                        {joborder.trackingnumber}
                      </td>
                      <td className="align-middle">{joborder.idjob_order}</td>

                      <td className="align-middle">{joborder.firstName}</td>
                      <td className="align-middle">{joborder.college}</td>
                      <td className="align-middle">{joborder.instrument}</td>
                      <td className="align-middle">
                        {joborder.serviceRequested}
                      </td>
                      <td className="align-middle">
                        {joborder.recommendation}
                      </td>
                      <td className="align-middle">{joborder.receivedby}</td>
                      <td
                        className="align-middle"
                        style={
                          joborder.status == "Declined"
                            ? { color: "#ff0000 " }
                            : joborder.status == "Approved"
                            ? { color: "#28a745" }
                            : {}
                        }
                      >
                        <strong>{joborder.status}</strong>
                      </td>
                      <td
                        className="align-middle"
                        style={
                          joborder.stage == "Cancelled"
                            ? { color: "#ff0000 " }
                            : joborder.stage == "Completed"
                            ? { color: "#28a745" }
                            : joborder.stage == "Pending"
                            ? { color: "#DE970B" }
                            : {}
                        }
                      >
                        <strong>{joborder.stage}</strong>
                      </td>
                      <td>
                        <Link
                          to={`/Admin/OpenRequest/joborderupdate/${joborder.idjob_order}`}
                        >
                          <button
                            type="button"
                            class="btn btn-primary mr-2"
                            size="sm"
                            onClick={refresh}
                          >
                            View Request
                          </button>
                        </Link>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => {
                            deleteJobOrder(joborder.idjob_order);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </React.Fragment>
              );
            })}
          </table>
        </div>
      </span>
    </React.Fragment>
  );
}

export default OpenRequest;
