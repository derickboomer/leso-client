import React from "react";
import { NavLink, Route, HashRouter, Link } from "react-router-dom";
import ClientModal from "../AppModals/ClientModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Track() {
  const [request, setrequest] = useState([]);
  const [trackingnumber, settrackingnumber] = useState([]);

  const Track = async () => {
    console.log(trackingnumber);
    axios
      .post("https://camrs-leso-deployment.herokuapp.com/track", {
        trackingnumber: trackingnumber,
      })
      .then((response) => {
        setrequest(response.data);
      });
  };

  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
  }

  // const loadRequest = async () => {
  //   const response = await  axios.get("http://localhost:3001/openrequest");
  //   setrequest(response.data);
  //  }

  return (
    <div
      className="trackcontainer"
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div
        class=""
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        className="p-3"
      >
        <div className="h2 font-weight-bold rounded d-flex justify-content-between ">
          <div class="h4 font-weight-bold">Track Job Order Request</div>
        </div>
        <form>
          <div class="form-row" className="dashboardcontents">
            <div class="col">
              <input
                type="text"
                class="border-dark form-control"
                name="idjob_order"
                required
                onChange={(event) => {
                  settrackingnumber(event.target.value);
                }}
              ></input>
            </div>

            <div class="col">
              <button class="btn btn-success" type="submit" onClick={Track}>
                Track
              </button>
            </div>
          </div>
        </form>
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
              <th scope="col">Tracking ID</th>
              <th scope="col">Client Name</th>
              <th scope="col">Instrument</th>
              <th scope="col">Service Requested</th>
              <th scope="col">Status</th>
              <th scope="col">Stage</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {request.map((joborder) => {
            return (
              <React.Fragment>
                <tbody>
                  <tr>
                    <td className="align-middle">{joborder.trackingnumber}</td>
                    <td className="align-middle">{joborder.firstName}</td>
                    <td className="align-middle">{joborder.instrument}</td>
                    <td className="align-middle">
                      {joborder.serviceRequested}
                    </td>
                    <td className="align-middle">{joborder.status}</td>
                    <td className="align-middle">{joborder.stage}</td>
                    <td>
                      <Link
                        to={`/Client/Track/joborderupdate/${joborder.idjob_order}`}
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
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Track;
