import { useHistory, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/LOGO.jpg";
import Footer from "../PageComponents/Footer";

function Register() {
  const redirect = useHistory();
  const [lgshow, setlgshow] = useState(false);
  // const handleClose = () => setlgshow(false);
  // const handleShow = () => setlgshow(true);

  //variables for user

  const [account, setAccount] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    college: "",
    accountType: "",
    dateCreated: new Date(),
  });
  //Handle input changes
  const handleChange = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(account);

  const handleClose = () => {
    redirect.replace("/Login");
    window.location.reload();
    console.log(account);
  };

  //  Sends data on database
  const createAccount = () => {
    axios.post("http://localhost:3001/createaccount", account);
    window.location.reload();
    console.log(account);
    alert("thank you for registering please check your email for confirmation");
  };

  return (
    <html style={{}}>
      <div class=" shadow-sm sticky-top bg-white text-dark p-3">
        <a class="navbar-brand" href="#">
          {" "}
        </a>
        <img class="" src={LesoLogo} alt="" width="75" height="75"></img>
      </div>

      <body
        class="align-middle bg-light p-5 bg-gradient"
        style={{ height: "100vh" }}
      >
        <div
          class=""
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          className=""
        >
          {" "}
          {/* Form Container */}
          <div>
            <form>
              <div className="border-bottom p-3 h3 font-weight-bold ">
                {" "}
                {/* Job Order Form */}
                Create Account
              </div>
              <div class=" p-3 form-row">
                <div class="col">
                  <label class="font-weight-bold" for="inputEmail4">
                    {" "}
                    First Name
                  </label>
                  <input
                    id=""
                    type=""
                    class="border-dark form-control"
                    placeholder=""
                    name="firstName"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div class="col">
                  <label class="font-weight-bold" for="inputEmail4">
                    Middle Name
                  </label>
                  <input
                    id="middleName"
                    type="text"
                    name="middleName"
                    class="border-dark form-control"
                    placeholder=""
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div class="col">
                  <label class="font-weight-bold" for="inputEmail4">
                    Last Name
                  </label>
                  <input
                    id="LastName"
                    type="text"
                    name="lastName"
                    class="border-dark form-control"
                    placeholder=""
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>

              <div class=" p-3 form-row">
                <div class="col">
                  <label class="font-weight-bold" for="inputEmail4">
                    {" "}
                    UST E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="border-dark form-control"
                    placeholder=""
                    onChange={handleChange}
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
                    name="password"
                    placeholder=""
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>

              <div class=" p-3 form-row">
                <div class="col">
                  <label class="font-weight-bold"> Account Type</label>
                  <select
                    id="accountType"
                    type="text"
                    name="accountType"
                    class="border-dark form-control"
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Please Choose
                    </option>
                    <option value="Administrator">Administrator</option>
                    <option value="Technician">Technician</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="border-bottom p-3 h3 font-weight-bold">
                <Button
                  class="btn btn-secondary mr-2"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={createAccount}
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </body>
      <div
        className="footer"
        style={{ borderTop: " 5px solid rgb(238, 189, 56)" }}
      >
        <Footer />
      </div>
    </html>
  );
}

export default Register;
