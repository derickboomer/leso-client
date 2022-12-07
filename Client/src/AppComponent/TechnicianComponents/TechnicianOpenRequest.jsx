import React from "react";
import { NavLink, Route, HashRouter, useParams, Link } from "react-router-dom";
import TechnicianModal from "../AppModals/TechnicianModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

function TechnicianOpenRequest() {
  const [totalrequest, settotalrequest] = useState([]);
  const [request, setrequest] = useState([]);
  const [renderpickupcount, setrenderpickupcount] = useState([]);
  const [dropoffcount, setdropoffcount] = useState([]);
  const [recieved, setrecieved] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [cancelled, setcancelled] = useState([]);

  // Refresh
  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
  }

  const deleteAccount = (joborder) => {
    axios.delete(
      `https://camrs-leso-deployment.herokuapp.com/deletejoborder/${joborder}`
    );
    refresh();
  };

  // Load All Request
  const loadRequest = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/technicianopenrequest"
    );
    setrequest(response.data);
  };

  const loadCount = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/technicianopenrequest"
    );
    settotalrequest(response.data);
  };

  // RenderPickUpCount
  const RenderPickUpCount = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/renderpickupcount"
    );

    setrenderpickupcount(response.data);
  };

  // RenderDrop-OffCount
  const RenderDropOffCount = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/renderdropoffcount"
    );

    setdropoffcount(response.data);
  };

  // Render Pending Count >> Recieved changed to Pending
  const RenderRecieved = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/renderrecieved"
    );
    setrecieved(response.data);
  };

  // Render Inspection Count
  const RenderCompleted = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/rendercompleted"
    );
    setcompleted(response.data);
  };

  // Render On Going Count
  const RenderCancelled = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/rendercancelled"
    );
    setcancelled(response.data);
  };

  // Rendering Different List
  //

  const RenderTotal = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/technicianopenrequest"
    );
    setrequest(response.data);
  };

  const RenderPickUpList = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/renderpickupcount"
    );
    setrequest(response.data);
  };

  const RenderDropOffList = async () => {
    console.log(dropoffcount);
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/renderdropoffcount"
    );
    setrequest(response.data);
  };

  const RenderRecievedList = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/renderrecieved"
    );
    setrequest(response.data);
  };

  const RenderCompletedList = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/rendercompleted"
    );
    setrequest(response.data);
  };

  const RenderCancelledList = async () => {
    const response = await axios.get(
      "https://camrs-leso-deployment.herokuapp.com/rendercancelled"
    );
    setrequest(response.data);
  };

  // Render List
  useEffect(() => {
    loadRequest();
    loadCount();
    RenderPickUpCount();
    RenderDropOffCount();
    RenderRecieved();
    RenderCompleted();
    RenderCancelled();
  }, []);

  const [receivedby, setreceivedby] = useState([]);

  const Track = async () => {
    console.log(receivedby);
    axios
      .post("http://localhost:3001/filter", {
        receivedby: receivedby,
      })
      .then((response) => {
        setrequest(response.data);
      });
  };

  return (
    <React.Fragment>
      <span style={{ backgroundColor: "rgb(255, 246, 225)" }}>
        {/* prettier-ignore */}
        <div class=""  className="dashboard wrapper">
        <div class="" style={{backgroundColor: "white", borderRadius: "5px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}className=" p-3 dashboard wrapper ">
          <div class="h4 font-weight-bold">Open Request Dashboard</div>

            <div class= "d-flex"  className="dashboardcontents">

              <button class=" bg-info col mr-2 card" onClick={RenderTotal}>
                <div class="card-body  text-light font-weight-bold">
                  <div className="d-flex justify-content-start ">Job Request</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{totalrequest.length}</div>
                </div>
              </button>

              <button class="bg-secondary col mr-2 card" onClick={RenderPickUpList}>
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Pick-Up</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{renderpickupcount.length}</div>
                </div>
              </button>

              <button class="bg-secondary mr-2 col  card" onClick={RenderDropOffList}>
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Drop-Off</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{dropoffcount.length}</div>
                </div>
              </button>
              {/* className={recieved.length > 1 ? {  } : {backgroundColor: "grey"}} */}
              <button class="  col mr-2 card" onClick={RenderRecievedList} style={recieved.length > 5 ? { backgroundColor: "#ffc107" } :  recieved.length > 10 ?  {backgroundColor: "#dc3545"}:{backgroundColor: "#6c757d"}} >
                <div class="card-body  text-light font-weight-bold">
                  <div className="d-flex justify-content-start " >Pending</div>
                  <div className="d-flex justify-content-start pr-5 count display-4" >{recieved.length}</div>
                </div>
              </button>

              

              <button class="mr-2 bg-secondary col  card" onClick={RenderCompletedList}>
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Completed</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{completed.length}</div>
                </div>
              </button>

              <button class=" bg-secondary col mr-2 card" onClick={RenderCancelledList}>
                <div class=" card-body  text-light font-weight-bold"> 
                  <div className="d-flex justify-content-start ">Cancelled</div>
                  <div className="d-flex justify-content-start pr-5 count display-4">{cancelled.length}</div>
                </div>
              </button>

              

              
            </div>

            

             
              

             
              
           
              
          </div>
        </div>

        <div
          class=""
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          className="p-2 mt-2"
        >
          <div className=" font-weight-bold rounded d-flex justify-content-between "></div>
          <form>
            <div class="form-row" className="dashboardcontents">
              <div class="col">
                <select
                  type="text"
                  class="border-dark form-control"
                  name="idjob_order"
                  placeholder="Choose Technician"
                  onChange={(event) => {
                    setreceivedby(event.target.value);
                  }}
                >
                  <option value="">Choose Technician</option>
                  <option value="Not Yet Assigned">Not Yet Assigned</option>
                  <option value="Russel Pondivida">Russel Pondivida</option>
                  <option value="Edgar Ramon">Edgar Ramon</option>
                </select>
              </div>

              <div class="col">
                <button class="btn btn-secondary" type="submit" onClick={Track}>
                  Filter
                </button>
              </div>
            </div>
          </form>
        </div>

        <table
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          class=" mt-2 table table-striped"
        >
          <thead>
            <tr>
              <th scope="col">Date Recieved</th>
              <th scope="col">Tracking ID</th>
              <th scope="col">Request ID</th>
              <th scope="col">Client Name</th>
              <th scope="col">Instrument</th>
              <th scope="col">Service Requested</th>

              <th scope="col">Technician</th>
              {/* <th scope="col">Type</th>
                <th scope="col">Status</th> */}
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
                    <td className="align-middle">{joborder.trackingnumber}</td>
                    <td className="align-middle">{joborder.idjob_order}</td>

                    <td className="align-middle">{joborder.firstName}</td>
                    <td className="align-middle">{joborder.instrument}</td>
                    <td className="align-middle">
                      {joborder.serviceRequested}
                    </td>
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
                          : joborder.stage == "Pending"
                          ? { color: "#DE970B" }
                          : {}
                      }
                    >
                      <strong>{joborder.stage}</strong>
                    </td>
                    <td>
                      <Link
                        to={`/Technician/OpenRequest/joborderupdate/${joborder.idjob_order}`}
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

                      <button
                        onClick={() => {
                          deleteAccount(joborder.idjob_order);
                        }}
                        type="button"
                        class="btn btn-danger"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-whatever="@mdo"
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
      </span>
    </React.Fragment>
  );
}

export default TechnicianOpenRequest;
