import React from "react";
import { NavLink, Route, HashRouter, Link } from "react-router-dom";
import AdminModal from "../AppModals/AdminModal";
import AdminCreateAccountModal from "../AppModals/AdminCreateAccountModal";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System Duplicate/requisitionsystem/Client/src/Assets/LOGONEW.png";
import USTLogo from "/UST Files/Notes/Capstone/Capstone System Duplicate/requisitionsystem/Client/src/Assets/UST LOGO.png";
import { useReactToPrint } from "react-to-print";

function AdminClosedRequest() {
  const [totalrequest, settotalrequest] = useState([]);
  const [request, setrequest] = useState([]);
  const [completedcounter, setcompletedcounter] = useState([]);
  const [cancelledcounter, setcancelledcounter] = useState([]);

  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 100);
  }
  // Delete Job Order
  const deleteJobOrder = (joborder) => {
    axios.delete(`http://localhost:3001/deletejoborder/${joborder}`);
    alert("Are you sure you want to delete this account?");
  };

  // not sure
  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Load Request
  const loadRequest = async () => {
    const response = await axios.get("http://localhost:3001/closedrequest");
    setrequest(response.data);
  };

  const loadCount = async () => {
    const response = await axios.get("http://localhost:3001/closedrequest");
    settotalrequest(response.data);
  };

  // Completed Counter
  const Approved = async () => {
    const response = await axios.get("http://localhost:3001/closedapproved");
    setcompletedcounter(response.data);
  };

  // Declined Counter
  const Declined = async () => {
    const response = await axios.get("http://localhost:3001/closeddeclined");
    setcancelledcounter(response.data);
  };

  // Render List
  useEffect(() => {
    loadRequest();
    Approved();
    Declined();
    loadCount();
  }, []);

  const RenderTotal = async () => {
    const response = await axios.get("http://localhost:3001/closedrequest");
    setrequest(response.data);
  };

  const RenderApproved = async () => {
    const response = await axios.get("http://localhost:3001/closedapproved");
    setrequest(response.data);
  };

  const RenderDeclined = async () => {
    const response = await axios.get("http://localhost:3001/closeddeclined");
    setrequest(response.data);
  };

  const printReport = useRef();

  const handleReport = useReactToPrint({
    content: () => printReport.current,
    documentTitle: "Certificate of Calibration - LESO",
  });

  return (
    <React.Fragment>
      <span style={{ backgroundColor: "rgb(255, 246, 225)" }}>
        {/* prettier-ignore */}
        <div class="" style={{ backgroundColor: "white" , borderRadius: "5px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className="p-3">
          <div className="d-flex justify-content-between">
            <div class="h4 font-weight-bold">Closed Request Dashboard</div>
            <button  type="button" class="btn btn-primary mb-2" onClick={handleReport} >Generate Report</button>
      
          </div>
          

          
            <div class= "d-flex"  className="dashboardcontents">
                {/* Dashboard Contents */}
                <button class="bg-secondary col mr-2  card "  onClick={RenderTotal}>
                  <div class="card-body text-light font-weight-bold "> 
                    <div className="d-flex justify-content-start ">Total Closed Request</div>
                    <div className="d-flex justify-content-start count display-4">{totalrequest.length}</div>
                  </div>
                </button>

    

                <button class=" bg-success col mr-2 card" onClick={RenderApproved} >
                  <div class="card-body  text-light font-weight-bold">
                    <div className="d-flex justify-content-start ">Approved Requests</div>
                    <div className=" d-flex justify-content-start pr-5 count display-4">{completedcounter.length}</div>
                  </div>
                </button>

    

                <button class="bg-danger col  card" onClick={RenderDeclined}>
                  <div class=" card-body  text-light font-weight-bold"> 
                    <div className="d-flex justify-content-start ">Declined Requests</div>
                    <div className=" d-flex justify-content-start pr-5 count display-4">{cancelledcounter.length}</div>
                  </div>
                </button>

              </div>
            </div>

        {/* Closed Request Table */}
        <div className=" mt-3 table">
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
                <th scope="col">Date Closed</th>
                <th scope="col">Tracking ID</th>
                <th scope="col">Request ID</th>
                <th scope="col">Client Name</th>
                <th scope="col">Instrument</th>
                <th scope="col">Service Requested</th>
                <th scope="col">Service Perfomed</th>
                <th scope="col">Technician</th>
                <th scope="col">Status</th>
                <th scope="col">Stage</th>
                <th scope="col">Performance Rating</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {request.map((joborder) => {
              const date = moment(joborder.dateCalibrated).format("LL");

              if (joborder.performance == "Satisfactory") {
              }
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
                            : {}
                        }
                      >
                        <strong>{joborder.stage}</strong>
                      </td>
                      <td className="align-middle">
                        <strong>{joborder.performance}</strong>
                      </td>
                      <td>
                        <Link
                          to={`/Admin/ClosedRequest/joborderupdate/${joborder.idjob_order}`}
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

          <div ref={printReport}>
            <div id="printheader">
              <div className="mt-5 mr-5 d-flex justify-content-around">
                <img
                  class=""
                  src={USTLogo}
                  alt=""
                  width="200"
                  height="100"
                ></img>

                <div class="text-center">
                  <h1 id="usttitle"> University of Santo Tomas</h1>
                  <h3> Laboratory Equipments and Supplies Office</h3>
                </div>

                <img
                  class=""
                  src={LesoLogo}
                  alt=""
                  width="100"
                  height="100"
                ></img>
              </div>

              {/* <br /><br /><br /><br /> */}

              <h1 className="text-center mt-5">
                <strong>CAMRS - Report</strong>
              </h1>
            </div>

            <div id="print">
              {/* Header */}

              {/* Body */}
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Date Closed</th>
                    <th scope="col ">Request ID</th>
                    <th scope="col">Client Name</th>
                    <th scope="col">Instrument</th>
                    <th scope="col">Service Requested</th>
                    <th scope="col">Service Perfomed</th>
                    <th scope="col ">Technician</th>
                    <th scope="col">Status</th>
                    <th scope="col">Stage</th>
                    <th scope="col">Performance Rating</th>
                  </tr>
                </thead>

                <tbody>
                  {request.map((joborder) => {
                    const date = moment(joborder.dateCalibrated).format("LL");

                    return (
                      <React.Fragment>
                        <tr>
                          <td className="align-middle row">{date}</td>

                          <td className="align-middle">
                            {joborder.idjob_order}
                          </td>
                          <td className="align-middle">{joborder.firstName}</td>
                          <td className="align-middle">
                            {joborder.instrument}
                          </td>
                          <td className="align-middle">
                            {joborder.serviceRequested}
                          </td>
                          <td className="align-middle">
                            {joborder.recommendation}
                          </td>
                          <td className="align-middle">
                            {joborder.receivedby}
                          </td>
                          <td className="align-middle">{joborder.status}</td>

                          <td className="align-middle">{joborder.stage}</td>
                          <td className="align-middle ">
                            {joborder.performance}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </span>
    </React.Fragment>
  );
}

export default AdminClosedRequest;
