import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";

const TechnicianJobOrderUpdate = () => {
  const { idjob_order } = useParams();
  const redirect = useHistory();
  // Initialized an account object para isang updated nalang
  const [joborder, setJobOrder] = useState({
    type: "",
    status: "",
    stage: "",
    date_received: "",
    firstName: "",
    lastName: "",
    email: "",
    cellphoneNo: "",
    quantity: "",
    serviceRequested: "",
    instrument: "",
    college: "",
    laboratory: "",
    laboratoryLocation: "",
    problemReported: "",
    model: "",
    serialNo: "",
    manufacturer: "",
    propertyNo: "",
    diagnosis: "",
    actionTaken: "",
    dateCalibrated: "",
    procedure: "",
    calibrationResult: "",
    remarks: "",
    approvedBy: "",
    receivedby: "",
    recommendation: "",
  });

  // Use Effect to render after Load
  useEffect(() => {
    axios
      .get(`http://localhost:3001/joborderupdate/${idjob_order}`)
      .then((res) => setJobOrder({ ...res.data[0] }));
  }, [idjob_order]);

  // Handle Change in forms
  const handleChange = (e) => {
    setJobOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(joborder);

  // Submit the Updated Details
  const handleSubmit = () => {
    console.log(idjob_order);
    axios
      .put(`http://localhost:3001/openjoborderupdate/${idjob_order}`, joborder)
      .then(() => {
        setJobOrder({
          type: "",
          status: "",
          stage: "",
          date_received: "",
          firstName: "",
          lastName: "",
          email: "",
          cellphoneNo: "",
          quantity: "",
          serviceRequested: "",
          instrument: "",
          college: "",
          laboratory: "",
          laboratoryLocation: "",
          problemReported: "",
          model: "",
          serialNo: "",
          manufacturer: "",
          propertyNo: "",
          diagnosis: "",
          actionTaken: "",
          dateCalibrated: "",
          procedure: "",
          calibrationResult: "",
          remarks: "",
          approvedBy: "",
          receivedby: "",
          recommendation: "",
        });
      })
      .then(() => {
        redirect.replace("/Technician/OpenRequest");
        window.location.reload(false);
      });
  };

  // Refresh
  function refresh() {
    setTimeout(function () {
      redirect.replace("/Technician/OpenRequest");
      window.location.reload();
    }, 50);
  }

  // admin list render
  const [admin, setadmin] = useState([]);
  const loadAdminlist = async () => {
    const response = await axios.get("http://localhost:3001/admin");
    setadmin(response.data);
  };

  const [technician, settechnician] = useState([]);
  const loadTechnicianlist = async () => {
    const response = await axios.get("http://localhost:3001/technician");
    settechnician(response.data);
  };

  useEffect(() => {
    loadAdminlist();
    loadTechnicianlist();
  }, []);

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
        <form>
          <div class="modalcss mb-2 bg-light rounded-top ">
            <div class=" p-3 form-row">
              {/* Row 1 */}

              <div class="col">
                <label
                  style={{ fontSize: "17px" }}
                  class="font-weight-bold"
                  for="inputEmail4"
                >
                  {" "}
                  Job Order No.{" "}
                </label>
                <input
                  type="text"
                  class="border-dark form-control"
                  placeholder=""
                  disabled
                  value={joborder.idjob_order || ""}
                  onChange={handleChange}
                ></input>
              </div>

              <div class="col">
                <label
                  style={{ fontSize: "17px" }}
                  class="font-weight-bold"
                  for="inputEmail4"
                >
                  Type
                </label>
                <select
                  id="college"
                  type="text"
                  class="border-dark form-control "
                  name="type"
                  value={joborder.type || ""}
                  onChange={handleChange}
                  disabled
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div class="col">
                <label
                  style={{ fontSize: "17px" }}
                  class="font-weight-bold"
                  for="inputEmail4"
                >
                  Status
                </label>
                <select
                  id="college"
                  type="text"
                  class="border-dark form-control"
                  name="status"
                  value={joborder.status || ""}
                  onChange={handleChange}
                  disabled
                >
                  <option value="For Approval">For Approval</option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option>
                </select>
              </div>

              <div class="col">
                <label style={{ fontSize: "17px" }} class="font-weight-bold">
                  Stage
                </label>
                <select
                  type="text"
                  class="border-dark form-control"
                  name="stage"
                  value={joborder.stage || ""}
                  onChange={handleChange}
                >
                  <option value="Pick-Up">Pick-Up</option>
                  <option value="Drop-Off">Drop-Off</option>
                  <option value="Pending">Pending</option>
                  {/* <option value="On-Going"  >On-Going</option>  */}
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div class="col">
                <label
                  style={{ fontSize: "17px" }}
                  class="font-weight-bold"
                  for="inputEmail4"
                >
                  Approved By
                </label>
                <select
                  type="text"
                  class="border-dark form-control"
                  name="approvedBy"
                  value={joborder.approvedBy || ""}
                  onChange={handleChange}
                  disabled
                >
                  {admin.map((admin) => {
                    return (
                      <React.Fragment>
                        <option value="Not yet approved">
                          Not yet approved
                        </option>
                        <option value={admin.email}>{admin.email}</option>
                      </React.Fragment>
                    );
                  })}
                </select>
              </div>

              <div class="col">
                <label
                  class="font-weight-bold"
                  style={{ fontSize: "17px" }}
                  for="inputEmail4"
                >
                  Received By
                </label>
                <select
                  type="text"
                  class="border-dark form-control"
                  name="receivedby"
                  value={joborder.receivedby || ""}
                  onChange={handleChange}
                >
                  <option value="Unassigned">Unassigned</option>
                  {technician.map((technician) => {
                    return (
                      <React.Fragment>
                        <option value={technician.email}>
                          {technician.email}
                        </option>
                      </React.Fragment>
                    );
                  })}
                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">
                  {" "}
                  Date Completed
                </label>
                <input
                  type="date"
                  class="border-dark form-control"
                  placeholder=""
                  name="dateCalibrated"
                  value={joborder.dateCalibrated || ""}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>

          {/* Job Order Form*/}

          <div className="bg-dark text-light p-3 h3 font-weight-bold  d-flex justify-content-between ">
            {" "}
            {/* Job Order Form */}
            <div>Job Order Form</div>
          </div>
          {/* Job Order Form input boxes*/}

          <div class=" p-3 form-row">
            {" "}
            {/* Row 1 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Date Received{" "}
              </label>
              <input
                disabled
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="date_received"
                value={joborder.date_received || ""}
                onChange={handleChange}
              ></input>
            </div>
            {/* <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Recommended Due Date </label>
                <input  type="date" class="border-dark form-control" placeholder="" value="" ></input>
              </div> */}
          </div>

          <div class="p-3 form-row">
            {/* Row 1 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                First Name
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder="--"
                name="firstName"
                value={joborder.firstName || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>

            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                Last Name
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder="--"
                name="lastName"
                value={joborder.lastName || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>

            {/* <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                Student No.
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder="--"
                name="lastName"
                value={joborder.studentno || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div> */}
          </div>

          <div class=" p-3 form-row">
            {/* Row 2 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                UST E-Mail
              </label>
              <input
                type="email"
                class="border-dark form-control"
                placeholder="--"
                name="email"
                value={joborder.email || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>

            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                Cellphone No. / Tel No.
              </label>
              <input
                type="number"
                class="border-dark form-control"
                placeholder="--"
                name="cellphoneNo"
                value={joborder.cellphoneNo || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
          </div>
          <hr />

          {/* <div class=" p-3 form-row ">
            {" "}
            
            <div class="col p-4 text-center bg-secondary ">
              <img src={joborder.image} width="400" height="400" /> <br />
            </div>
          </div> */}

          <div class=" p-3 form-row">
            {/* Row 3 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                Instrument
              </label>
              <select
                type="text"
                class="border-dark form-control"
                name="instrument"
                value={joborder.instrument || ""}
                onChange={handleChange}
                disabled
              >
                <option value="" selected>
                  {" "}
                  Please Select:
                </option>
                <option value="Microscope">Microscope</option>
                <option value="Utility Clamp">Utility Clamp</option>
                <option value="Centrifuge">Centrifuge</option>
              </select>
            </div>

            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                class="border-dark form-control"
                placeholder="--"
                name="quantity"
                value={joborder.quantity || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
          </div>
          <div class=" p-3 form-row">
            {" "}
            {/* Row 5 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Model{" "}
              </label>
              <input
                class="border-dark form-control"
                placeholder=""
                name="model"
                value={joborder.model || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Insrument Serial No.{" "}
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="serialNo"
                value={joborder.serialNo || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
          </div>

          <div class=" p-3 form-row">
            {" "}
            {/* Row 5 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Manufacturer{" "}
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="manufacturer"
                value={joborder.manufacturer || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Property No.{" "}
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="propertyNo"
                value={joborder.propertyNo || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
          </div>
          <div class=" p-3 form-row">
            {" "}
            {/* Row 4 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Service Requested{" "}
              </label>
              <input
                id="Transportation"
                type="text"
                class="border-dark form-control"
                name="serviceRequested"
                value={joborder.serviceRequested || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Laboratory{" "}
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="laboratory"
                value={joborder.laboratory || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Laboratory{" "}
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="laboratory"
                value={joborder.college || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
          </div>

          <div class=" p-3 form-row">
            {" "}
            {/* Row 6 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Laboratory Location{" "}
              </label>
              <input
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="laboratoryLocation"
                value={joborder.laboratoryLocation || ""}
                onChange={handleChange}
                disabled
              ></input>
            </div>
          </div>

          <div class="p-3 form-row">
            {/* Row 7 */}

            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Remarks / Problem Reported{" "}
              </label>{" "}
              <br />
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                name="problemReported"
                className="p-2"
                value={joborder.problemReported || ""}
                onChange={handleChange}
                disabled
              ></textarea>
            </div>
          </div>

          <br />
          <br />

          {/* Technical Service Report*/}

          <div className="bg-dark text-light p-3 h3 font-weight-bold  d-flex justify-content-between ">
            <div>Technical Service Report</div>
          </div>

          {/* <div class=" p-3 form-row"> 
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" value={joborder.laboratory||""} onChange={handleChange} ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory Location </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" name='laboratoryLocation' value={joborder.laboratoryLocation||""} onChange={handleChange} ></input>
              </div>
            </div>
           
            <div class=" p-3 form-row"> 
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument </label>
                <select disabled name="instrument" type="text" class="border-dark form-control" value={joborder.instrument||""} onChange={handleChange} >
                  <option value="" disabled selected> Please Select: </option>
                  <option value="Beaker">Beaker</option>
                  <option value="Microscope">Microscope</option>
                  <option value="Telescope">Telescope</option>
                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Model </label> 
                <input class="border-dark form-control" placeholder="" name='model' value={joborder.model||""} onChange={handleChange}></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Insrument Serial No. </label>
                <input type="text" class="border-dark form-control" placeholder="" name='serialNo' value={joborder.serialNo||""} onChange={handleChange}></input>
              </div>
            </div>

            <div class=" p-3 form-row"> 
              
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Manufacturer </label> 
                <input type="text" class="border-dark form-control" placeholder="" name='manufacturer' value={joborder.manufacturer||""} onChange={handleChange} ></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Property No. </label>
                <input type="text" class="border-dark form-control" placeholder="" name='propertyNo' value={joborder.propertyNo||""} onChange={handleChange}></input>
              </div>
            </div>


            <div class="p-3 form-row">
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Remarks / Problem Reported </label> <br /> 
                <textarea disabled style={{ height: "150px", width: "100%", borderRadius: "5px"}} className="p-2" name='problemReported' value={joborder.problemReported||""} onChange={handleChange} ></textarea>
              </div> 
            </div> */}

          <div class="p-3 form-row">
            {/* Row 4 Technical Service Report*/}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Diagnosis / Observations{" "}
              </label>{" "}
              <br />
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="diagnosis"
                value={joborder.diagnosis || ""}
                onChange={handleChange}
                placeholder="Technician should fill this up during inspection..."
              ></textarea>
            </div>
          </div>

          <div class=" p-3 form-row">
            {" "}
            {/* Row 6 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Recommendation{" "}
              </label>
              <select
                type="text"
                class="border-dark form-control"
                name="recommendation"
                value={joborder.recommendation || ""}
                onChange={handleChange}
              >
                <option value="" selected>
                  {" "}
                  Please Select:
                </option>
                <option value="Pull-Out">Pull-Out</option>
                <option value="Calibration">Calibration</option>
                <option value="Repair">Repair</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Routine Maintenance">Routine Maintenance</option>
              </select>
            </div>
          </div>

          <div class="p-3 form-row">
            {/* Row 5 Technical Service Report*/}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Action Taken / Reason for Cancellation{" "}
              </label>{" "}
              <br />
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="actionTaken"
                value={joborder.actionTaken || ""}
                onChange={handleChange}
                placeholder="Technician should fill this up after operation..."
              ></textarea>
            </div>
          </div>

          <br />
          <br />

          {/* Certificate of Calibration*/}

          <div className="bg-dark text-light p-3 h3 font-weight-bold  d-flex justify-content-between ">
            {" "}
            {/* Technical Service Report*/}
            <div>Certificate of Calibration</div>
          </div>

          <div class=" p-3 form-row">
            {/* <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Date Received </label>
                <input disabled type="text" class="border-dark form-control" placeholder=""  name='date_received' value={joborder.date_received||""} onChange={handleChange}  ></input>
              </div> */}
          </div>

          {/* <div class=" p-3 form-row"> */}

          {/* <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Job Order No. </label>
                <input type="text" class="border-dark form-control" placeholder="" disabled  name='idjob_order' value={joborder.idjob_order||""} onChange={handleChange}></input>
              </div> 

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" name='laboratory' value={joborder.laboratory||""} onChange={handleChange} ></input>
              </div> */}

          {/* </div> */}

          {/* <div class=" p-3 form-row"> 

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory Location </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" name='laboratoryLocation' value={joborder.laboratoryLocation||""} onChange={handleChange}></input>
              </div>
            </div>

            <div class=" p-3 form-row"> 
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument </label>
                <select disabled id="Transportation" type="text" class="border-dark form-control" name='instrument' value={joborder.instrument||""} onChange={handleChange} >
                  <option value="" disabled selected> Please Select: </option>
                  <option value="Microscope">Microscop</option>
                  <option value="Microscope">Microscope</option>
                  <option value="Telescope">Telescope</option>
                </select>
              </div>
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Model </label> 
                <input type="text" disabled class="border-dark form-control" placeholder="" name='model' value={joborder.model||""} onChange={handleChange} ></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument Serial No. </label>
                <input type="text" disabled class="border-dark form-control" placeholder="" name='serialNo' value={joborder.serialNo||""} onChange={handleChange} ></input>
              </div>
            </div>

            <div class=" p-3 form-row"> 
              
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Manufacturer </label> 
                <input type="text" class="border-dark form-control" placeholder="" name='manufacturer' value={joborder.manufacturer||""} onChange={handleChange} disabled></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Property No. </label>
                <input type="text" class="border-dark form-control" placeholder="" name='propertyNo' value={joborder.propertyNo||""} onChange={handleChange}disabled></input>
              </div>
            </div> */}

          <div class="p-3 form-row">
            {/* Row 5 cc*/}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Calibration Procedure and Traceability{" "}
              </label>{" "}
              <br />
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="procedure"
                value={joborder.procedure || ""}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div class="p-3 form-row">
            {/* Row 6 CC*/}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Calibration Result{" "}
              </label>{" "}
              <br />
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="calibrationResult"
                value={joborder.calibrationResult || ""}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div class="p-3 form-row">
            {/* Row 7 CC*/}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Remarks{" "}
              </label>{" "}
              <br />
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="remarks"
                value={joborder.remarks || ""}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <footer className="d-flex justify-content-end">
            <div className="m-3">
              <Link to={""} onClick={refresh}>
                <button type="button" class="btn btn-secondary mr-2" size="sm">
                  Back
                </button>
              </Link>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Update Job Request
              </button>
            </div>
          </footer>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TechnicianJobOrderUpdate;
