import React from "react";
import { NavLink, Route, HashRouter, useParams, Link } from "react-router-dom";
import TechnicianModal from "../AppModals/TechnicianModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

function TechnicianClosedRequest() {
  const [totalrequest, settotalrequest] = useState([]);
  const [request, setrequest] = useState([]);
  const [closedcompleted, setclosedcompleted] = useState([]);
  const [closedcancelled, setclosedcancelled] = useState([]);

  // Refresh
  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
  }

  const deleteAccount = (joborder) => {
    axios.delete(`http://localhost:3001/deletejoborder/${joborder}`);
    refresh();
  };
  // Load All Request
  const loadRequest = async () => {
    const response = await axios.get(
      "http://localhost:3001/technicianclosedrequest"
    );
    setrequest(response.data);
  };

  const loadCount = async () => {
    const response = await axios.get(
      "http://localhost:3001/technicianclosedrequest"
    );
    settotalrequest(response.data);
  };

  // Technician Closed Completed Counter
  const ClosedCompleted = async () => {
    const response = await axios.get("http://localhost:3001/closedcompleted");
    setclosedcompleted(response.data);
  };

  // Technician Closed Cancelled Counter
  const ClosedCancelled = async () => {
    const response = await axios.get("http://localhost:3001/closedcancelled");
    setclosedcancelled(response.data);
  };

  // Render List
  useEffect(() => {
    loadRequest();
    loadCount();
    ClosedCancelled();
    ClosedCompleted();
  }, []);

  const RenderClosedCompleted = async () => {
    const response = await axios.get("http://localhost:3001/closedcompleted");
    setrequest(response.data);
  };

  const RenderClosedCancelled = async () => {
    const response = await axios.get("http://localhost:3001/closedcancelled");
    setrequest(response.data);
  };

  return (
    <React.Fragment>
      <span style={{ backgroundColor: "rgb(255, 246, 225)" }}>
        {/* prettier-ignore */}

        <div class=""  className="dashboard wrapper">
        <div class="" style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className=" p-3 dashboard wrapper ">
          <div class="h4 font-weight-bold">Closed Request Dashboard</div>

          <div class= "d-flex"  className="dashboardcontents">
         
              <button class=" bg-secondary col mr-2 card" >
                <div class="card-body  text-light font-weight-bold" onClick={loadRequest}>
                  <div className="d-flex justify-content-start ">Total Closed Request</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{totalrequest.length}</div>
                </div>
              </button>

              <button class="bg-success col mr-2 card" onClick={RenderClosedCompleted} >
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Completed Requests</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{closedcompleted.length}</div>
                </div>
              </button>

              <button class="bg-danger col  card" onClick={RenderClosedCancelled}>
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Cancelled Requests</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{closedcancelled.length}</div>
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
              <th scope="col">Date Closed</th>
              <th scope="col">Tracking ID</th>
              <th scope="col">Request ID</th>
              <th scope="col">Client Name</th>
              <th scope="col">College</th>
              <th scope="col">Instrument</th>
              <th scope="col">Service Requested</th>
              <th scope="col">Service Performed</th>
              <th scope="col">Technician</th>
              {/* <th scope="col">Type</th>
                <th scope="col">Status</th> */}
              <th scope="col">Stage</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {request.map((joborder) => {
            const date = moment(joborder.dateCalibrated).format("LL");

            return (
              <React.Fragment>
                <tbody>
                  <tr>
                    <td className="align-middle">{date}</td>
                    <td className="align-middle">{joborder.trackingnumber}</td>
                    <td className="align-middle">{joborder.idjob_order}</td>
                    <td className="align-middle">{joborder.firstName}</td>
                    <td className="align-middle">{joborder.college}</td>
                    <td className="align-middle">{joborder.instrument}</td>
                    <td className="align-middle">
                      {joborder.serviceRequested}
                    </td>
                    <td className="align-middle">{joborder.recommendation}</td>
                    <td className="align-middle">{joborder.receivedby}</td>
                    {/* <td className="align-middle">{joborder.type}</td>
                  <td className="align-middle">{joborder.status}</td> */}
                    <td
                      className="align-middle"
                      style={
                        joborder.stage == "Cancelled"
                          ? { color: "#ff0000 " }
                          : joborder.stage == "Completed"
                          ? { color: "#28a745" }
                          : {}
                      }
                    >
                      <strong>{joborder.stage}</strong>
                    </td>

                    <td>
                      <Link
                        to={`/Technician/ClosedRequest/joborderupdate/${joborder.idjob_order}`}
                        onClick={refresh}
                      >
                        <button
                          type="button"
                          class="btn btn-primary mr-2"
                          size="sm"
                        >
                          View Request
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </span>
    </React.Fragment>
  );
}

export default TechnicianClosedRequest;
