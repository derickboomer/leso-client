import { Link, Route, HashRouter } from "react-router-dom";
import AdminAccountManagementModal from "../AppModals/AdminAccountManagementModal";
import AdminCreateAccountModal from "../AppModals/AdminCreateAccountModal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import ModalDialog from "react-bootstrap/esm/ModalDialog";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalTry from "../AppModals/CreateAccountModal";
import CreateAccountModal from "../AppModals/CreateAccountModal";
import moment from "moment";

function AuditLogs() {
  const [lgshow, setlgshow] = useState(false);
  const handleClose = () => setlgshow(false);
  const handleShow = () => setlgshow(true);
  const [data, setData] = useState([]);
  const [trackingnumber, settrackingnumber] = useState([]);

  const Track = async () => {
    console.log(trackingnumber);
    axios
      .post("http://localhost:3001/auditlogsfilter", {
        trackingnumber: trackingnumber,
      })
      .then((response) => {
        setData(response.data);
      });
  };

  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
  }

  const loadList = async () => {
    const response = await axios.get("http://localhost:3001/auditlogs");
    setData(response.data);
  };

  useEffect(() => {
    loadList();
  }, []);

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
        <div className="p-3 h2 font-weight-bold rounded d-flex justify-content-between ">
          {" "}
          {/* Job Order Form */}
          <div>Audit Logs</div>
        </div>

        <form className="pb-3">
          <div class="form-row" className="dashboardcontents">
            <div class="col">
              <input
                type="text"
                class="border-dark form-control"
                name="idjob_order"
                placeholder="Input Tracking ID"
                onChange={(event) => {
                  console.log(trackingnumber);
                  settrackingnumber(event.target.value);
                }}
              ></input>
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
        style={{ backgroundColor: "white", borderRadius: "5px" }}
        class="table"
      >
        <thead>
          <tr>
            <th scope="col">Timestamp</th>
            <th scope="col ">Tracking ID</th>
            <th scope="col">Client Name</th>
            <th scope="col">College</th>
            <th scope="col">Instrument</th>
            <th scope="col">Service Requested</th>
            <th scope="col">Service Perfomed</th>
            <th scope="col ">Administrator</th>
            <th scope="col ">Technician</th>
            <th scope="col ">Type</th>
            <th scope="col">Status</th>
            <th scope="col">Stage</th>
          </tr>
        </thead>

        {data.map((auditlogs) => {
          const date = moment(auditlogs.auditlog).format("LLL");
          return (
            <React.Fragment>
              <tbody>
                <tr key={auditlogs.firstName}>
                  <td className="align-middle">{date}</td>
                  <td className="align-middle">{auditlogs.trackingnumber}</td>
                  <td className="align-middle">{auditlogs.firstName}</td>
                  <td className="align-middle">{auditlogs.college}</td>
                  <td className="align-middle">{auditlogs.instrument}</td>
                  <td className="align-middle">{auditlogs.serviceRequested}</td>
                  <td className="align-middle">{auditlogs.recommendation}</td>

                  <td className="align-middle">{auditlogs.approvedBy}</td>
                  <td className="align-middle">{auditlogs.receivedby}</td>

                  <td
                    className="align-middle"
                    style={
                      auditlogs.type == "Closed"
                        ? { color: "#ff0000 " }
                        : auditlogs.type == "Open"
                        ? { color: "#28a745" }
                        : {}
                    }
                  >
                    <strong>{auditlogs.type}</strong>
                  </td>

                  <td
                    className="align-middle"
                    style={
                      auditlogs.status == "Declined"
                        ? { color: "#ff0000 " }
                        : auditlogs.status == "Approved"
                        ? { color: "#28a745" }
                        : {}
                    }
                  >
                    <strong>{auditlogs.status}</strong>
                  </td>
                  <td
                    className="align-middle"
                    style={
                      auditlogs.stage == "Cancelled"
                        ? { color: "#ff0000 " }
                        : auditlogs.stage == "Completed"
                        ? { color: "#28a745" }
                        : auditlogs.stage == "Pending"
                        ? { color: "#DE970B" }
                        : {}
                    }
                  >
                    <strong>{auditlogs.stage}</strong>
                  </td>
                </tr>
              </tbody>

              <Modal
                size="lg"
                centered
                show={lgshow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <strong>Update User Details</strong>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <AdminAccountManagementModal />
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    class="btn btn-success"
                    data-dismiss="modal"
                  >
                    Update User Details
                  </Button>
                </Modal.Footer>
              </Modal>
            </React.Fragment>
          );
        })}
      </table>
    </React.Fragment>
  );
}

export default AuditLogs;
