import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";

const AccountUpdate = () => {
  const redirect = useHistory();

  const { iduser_account } = useParams();

  // Initialized an account object para isang updated nalang
  const [account, setAccount] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    emailName: "",
    password: "",
    college: "",
    accountType: "",
    dateCreated: new Date(),
  });

  // Use Effect to render after Load
  useEffect(() => {
    axios
      .get(`http://localhost:3001/update/get/${iduser_account}`)
      .then((res) => setAccount({ ...res.data[0] }));
  }, [iduser_account]);

  // Submit the Updated Details
  const handleSubmit = () => {
    console.log(iduser_account);
    axios
      .put(`http://localhost:3001/update/${iduser_account}`, account)
      .then(() => {
        setAccount({
          firstName: "",
          middleName: "",
          lastName: "",
          emailName: "",
          password: "",
          accountType: "",
          college: "",
        });
        redirect.replace("/Admin/AccountManagement");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  //Allows Changes
  const handleChange = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(account);

  function refresh() {
    setTimeout(function () {
      redirect.replace("/Admin/AccountManagement");
      window.location.reload();
    }, 50);
  }

  return (
    <React.Fragment>
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
        <div className="border-bottom p-3 h3 font-weight-bold ">
          {" "}
          {/* Job Order Form */}
          Update User Account
        </div>
        <form>
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
                name="firstName"
                value={account.firstName || ""}
                onChange={handleChange}
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
                name="middleName"
                value={account.middleName || ""}
                onChange={handleChange}
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
                name="lastName"
                value={account.lastName || ""}
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
                class="border-dark form-control"
                placeholder=""
                name="email"
                value={account.email || ""}
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
                placeholder=""
                name="password"
                value={account.password || ""}
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
                class="border-dark form-control"
                name="accountType"
                value={account.accountType || ""}
                onChange={handleChange}
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
                name="college"
                value={account.college || ""}
                onChange={handleChange}
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

          <footer className="d-flex justify-content-end">
            <div className="m-3">
              <Link to="" onClick={refresh}>
                <button
                  type="button"
                  class="mr-2 btn btn-secondary"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                >
                  Cancel
                </button>
              </Link>

              <button
                type="submit"
                class="btn btn-primary"
                data-target="#exampleModal"
                data-whatever="@mdo"
                onClick={handleSubmit}
              >
                Update User Account
              </button>
            </div>
          </footer>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AccountUpdate;
