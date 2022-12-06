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

function AccountManagement() {
  const [lgshow, setlgshow] = useState(false);
  const handleClose = () => setlgshow(false);
  const handleShow = () => setlgshow(true);
  const [data, setData] = useState([]);

  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
  }

  const loadList = async () => {
    const response = await axios.get("http://localhost:3001/accounts");
    setData(response.data);
  };

  useEffect(() => {
    loadList();
  }, []);

  const deleteAccount = (account) => {
    axios.delete(`http://localhost:3001/delete/${account}`);
    alert("Are you sure you want to delete this account?");
    refresh();
  };

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
          <div>Account Management</div>
          <CreateAccountModal />
        </div>

        <table
          style={{ backgroundColor: "white", borderRadius: "5px" }}
          class="table"
        >
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Account Type</th>
              <th scope="col">College</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {data.map((accounts) => {
            return (
              <React.Fragment>
                <tbody>
                  <tr key={accounts.iduser_account}>
                    <td className="align-middle">{accounts.iduser_account}</td>
                    <td className="align-middle">{accounts.firstName}</td>
                    <td className="align-middle">{accounts.lastName}</td>
                    <td className="align-middle">{accounts.email}</td>
                    <td className="align-middle">{accounts.accountType}</td>
                    <td className="align-middle">{accounts.college}</td>
                    <td>
                      <Link
                        to={`/Admin/AccountManagement/update/${accounts.iduser_account}`}
                        onClick={refresh}
                      >
                        <button
                          type="button"
                          class="btn btn-primary mr-2"
                          size="sm"
                        >
                          Update User Account
                        </button>
                      </Link>

                      <button
                        onClick={() => {
                          deleteAccount(accounts.iduser_account);
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
      </div>
    </React.Fragment>
  );
}

export default AccountManagement;
