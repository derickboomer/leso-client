import { useHistory, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function CreateAccountModal() {
  const [lgshow, setlgshow] = useState(false);
  const handleClose = () => setlgshow(false);
  const handleShow = () => setlgshow(true);

  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [college, setcollege] = useState("");
  const [accountType, setaccountType] = useState("");
  const dateCreated = new Date();

  const createAccount = () => {
    axios.post("http://localhost:3001/createaccount", {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      password: password,
      college: college,
      accountType: accountType,
      dateCreated: dateCreated,
    });

    handleClose();
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-success"
        size="sm"
        onClick={() => setlgshow(true)}
      >
        Create New User
      </button>

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
            <strong>Create New User</strong>
          </Modal.Title>
        </Modal.Header>
        <form class="" onSubmit={createAccount}>
          <Modal.Body>
            <div class="p-3 form-row">
              {/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  class="border-dark form-control"
                  placeholder=""
                  onChange={(event) => {
                    setfirstName(event.target.value);
                  }}
                  required
                ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="">
                  Middle Name
                </label>
                <input
                  id="middleName"
                  type="text"
                  class="border-dark form-control"
                  placeholder=""
                  onChange={(event) => {
                    setmiddleName(event.target.value);
                  }}
                  required
                ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  class="border-dark form-control"
                  placeholder=""
                  onChange={(event) => {
                    setlastName(event.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>

            <div class=" p-3 form-row">
              {/* Row 2 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">
                  {" "}
                  UST E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  class="border-dark form-control"
                  placeholder=""
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  required
                ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  class="border-dark form-control"
                  placeholder=""
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>

            <div class=" p-3 form-row">
              {/* Row 3 */}
              <div class="col">
                <label class="font-weight-bold"> Account Type</label>
                <select
                  id="accountType"
                  type="text"
                  class="border-dark form-control"
                  onChange={(event) => {
                    setaccountType(event.target.value);
                  }}
                  required
                >
                  <option value="" disabled>
                    Please Choose
                  </option>
                  <option value="Administrator">Administrator</option>
                  <option value="Technician">Technician</option>
                  <option value="Client">Client</option>
                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">
                  College / Faculty / Office
                </label>
                <select
                  id="college"
                  type="text"
                  class="border-dark form-control "
                  onChange={(event) => {
                    setcollege(event.target.value);
                  }}
                  required
                >
                  <option value="" disabled>
                    Please Choose
                  </option>
                  <option value="LESO Employee">LESO Employee</option>
                  <option value="College of Nursing">College of Nursing</option>
                  <option value="College of Engineering">
                    College of Engineering
                  </option>
                </select>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" class="btn btn-success" data-dismiss="modal">
              Create New User
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default CreateAccountModal;
