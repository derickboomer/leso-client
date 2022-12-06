import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { useFormik } from "formik";
import { useReactToPrint } from "react-to-print";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System Duplicate/requisitionsystem/Client/src/Assets/LOGONEW.png";
import USTLogo from "/UST Files/Notes/Capstone/Capstone System Duplicate/requisitionsystem/Client/src/Assets/UST LOGO.png";

const TechnicianClosedUpdateJobOrder = () => {
  const componentRef = useRef();
  const printTSR = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Certificate of Calibration - LESO",
  });

  const handleTSR = useReactToPrint({
    content: () => printTSR.current,
    documentTitle: "Technical Service Report - LESO",
  });

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
        });
      })
      .then(() => {
        redirect.replace("/Technician/ClosedRequest");
        window.location.reload(false);
      });
  };

  // Go back
  function refresh() {
    setTimeout(function () {
      redirect.replace("/Technician/ClosedRequest");
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
                  style={{ fontSize: "15px" }}
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
                  style={{ fontSize: "15px" }}
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
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div class="col">
                <label
                  style={{ fontSize: "15px" }}
                  class="font-weight-bold"
                  for="inputEmail4"
                >
                  Status
                </label>
                <input
                  id="college"
                  type="text"
                  class="border-dark form-control"
                  name="status"
                  value={joborder.status || ""}
                  onChange={handleChange}
                  disabled
                ></input>
              </div>

              <div class="col">
                <label style={{ fontSize: "15px" }} class="font-weight-bold">
                  Stage
                </label>
                <input
                  type="text"
                  class="border-dark form-control"
                  name="stage"
                  value={joborder.stage || ""}
                  onChange={handleChange}
                  disabled
                ></input>
              </div>

              <div class="col">
                <label
                  style={{ fontSize: "15px" }}
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
                        {/* <option value="Did not select administrator"  >Choose Administrator</option> */}
                        <option value="Unassigned">Choose Administrator</option>
                        <option value={admin.email}>{admin.email}</option>
                      </React.Fragment>
                    );
                  })}
                </select>
              </div>

              <div class="col">
                <label
                  style={{ fontSize: "15px" }}
                  class="font-weight-bold"
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
                  disabled
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
                  Date Completed{" "}
                </label>
                <input
                  disabled
                  type="text"
                  class="border-dark form-control"
                  placeholder=""
                  name="date_received"
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

          <div class=" p-3 form-row ">
            {" "}
            {/* Row 5 */}
            <div class="col p-4 text-center bg-secondary ">
              <img src={joborder.image} width="400" height="400" /> <br />
            </div>
          </div>

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
                <option value="Telescope">Telescope</option>
                <option value="Breaker">Breaker</option>
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
              <select
                id="Transportation"
                type="text"
                class="border-dark form-control"
                name="serviceRequested"
                value={joborder.serviceRequested || ""}
                onChange={handleChange}
                disabled
              >
                <option value="" disabled selected>
                  {" "}
                  Please Select:{" "}
                </option>
                <option value="">Maintenance</option>
                <option value="">Calibration</option>
              </select>
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
            <button type="button" class="btn btn-light" onClick={handleTSR}>
              Print TSR
            </button>
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
                <select disabled name="instrument" type="text" class="border-dark form-control" value={joborder.instrument||""} onChange={handleChange}  >
                  <option value="" disabled selected> Please Select: </option>
                  <option value="Beaker">Beaker</option>
                  <option value="Microscope">Microscope</option>
                  <option value="Telescope">Telescope</option>
                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Model </label> 
                <input class="border-dark form-control" placeholder="" name='model' value={joborder.model||""} onChange={handleChange}disabled ></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Insrument Serial No. </label>
                <input type="text" class="border-dark form-control" placeholder="" name='serialNo' value={joborder.serialNo||""} onChange={handleChange} disabled></input>
              </div>
            </div>

            <div class=" p-3 form-row"> 
              
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Manufacturer </label> 
                <input type="text" class="border-dark form-control" placeholder="" name='manufacturer' value={joborder.manufacturer||""} onChange={handleChange} disabled></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Property No. </label>
                <input type="text" class="border-dark form-control" placeholder="" name='propertyNo' value={joborder.propertyNo||""} onChange={handleChange} disabled></input>
              </div>
            </div> */}

          {/* <div class="p-3 form-row">
              
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
                disabled
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
              <input
                type="text"
                class="border-dark form-control"
                name="recommendation"
                value={joborder.recommendation || ""}
                onChange={handleChange}
                disabled
              >
                {/* <option value="" selected>
                  {" "}
                  Please Select:
                </option> */}
                {/* <option value="For Pull-Out">For Pull-Out</option>
                <option value="Forward to Supplie">Forward to Supplier</option>
                <option value="For Repair">For Repair</option>
                <option value="For Calibration">For Calibration</option>
                <option value="Unserviceable">Unserviceable</option> */}
              </input>
            </div>
          </div>

          <div class="p-3 form-row">
            {/* Row 5 Technical Service Report*/}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                Action Taken{" "}
              </label>{" "}
              <br />
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="actionTaken"
                value={joborder.actionTaken || ""}
                onChange={handleChange}
                placeholder="Technician should fill this up after operation..."
                disabled
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
            <button type="button" class="btn btn-light" onClick={handlePrint}>
              Print Certificate{" "}
            </button>
          </div>

          {/* <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Date Calibrated</label>
                <input  type="date" class="border-dark form-control" placeholder=""  name='dateCalibrated' value={joborder.dateCalibrated||""} onChange={handleChange} disabled></input>
              </div>
            </div>

            <div class=" p-3 form-row"> 

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Job Order No. </label>
                <input type="text" class="border-dark form-control" placeholder="" disabled  name='idjob_order' value={joborder.idjob_order||""} onChange={handleChange}></input>
              </div> 

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" name='laboratory' value={joborder.laboratory||""} onChange={handleChange} ></input>
              </div>

              
            </div>

             <div class=" p-3 form-row"> 

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory Location </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" name='laboratoryLocation' value={joborder.laboratoryLocation||""} onChange={handleChange}></input>
              </div>
            </div>

            <div class=" p-3 form-row"> 
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument </label>
                <select disabled id="Transportation" type="text" class="border-dark form-control" name='instrument' value={joborder.instrument||""} onChange={handleChange}  >
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
                <input type="text" class="border-dark form-control" placeholder="" name='propertyNo' value={joborder.propertyNo||""} onChange={handleChange} disabled></input>
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
                disabled
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
                disabled
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
                disabled
              ></textarea>
            </div>
          </div>
          <div className="bg-dark text-light p-3 h3 font-weight-bold  d-flex justify-content-between ">
            {" "}
            {/* Job Order Form */}
            <div>Performance Rating</div>
          </div>
          <div class=" p-3 form-row">
            {" "}
            {/* Row 6 */}
            <div class="col">
              <label class="font-weight-bold" for="inputEmail4">
                {" "}
                How was LESO's service?{" "}
              </label>
              <select
                type="text"
                class="border-dark form-control"
                placeholder=""
                name="performance"
                value={joborder.performance || ""}
                onChange={handleChange}
                disabled
              >
                <option value="No Rating">No Rating</option>
                <option value="Very Satisfactory">Very Satisfactory</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Unsatisfactory">Unsatisfactory</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div class="col">
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">
                  Suggestions / Comments:{" "}
                </label>{" "}
                <br />
                <textarea
                  style={{
                    height: "150px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  name="performancecomment"
                  className="p-2"
                  id=""
                  placeholder=""
                  value={joborder.performancecomment || ""}
                  onChange={handleChange}
                  disabled
                ></textarea>
              </div>
            </div>
          </div>

          <footer className="d-flex justify-content-end">
            <div className="m-3">
              <button
                type="button"
                class="btn btn-secondary mr-2"
                size="sm"
                onClick={refresh}
              >
                Back
              </button>
            </div>
          </footer>
        </form>
        <div id="print" ref={componentRef}>
          {/* Header */}
          <div className="mt-5 mr-5 d-flex justify-content-around">
            <img class="" src={USTLogo} alt="" width="200" height="100"></img>

            <div class="text-center">
              <h1 id="usttitle"> University of Santo Tomas</h1>
              <h3> Laboratory Equipments and Supplies Office</h3>
            </div>

            <img class="" src={LesoLogo} alt="" width="100" height="100"></img>
          </div>

          {/* <br /><br /><br /><br /> */}

          <h1 className="text-center mt-5">
            <strong>Certificate of Calibration</strong>
          </h1>

          {/* Body */}

          <div className="mt-5 p-3 form-row">
            <div class="col">
              <h4>
                <strong>Job Order No: </strong> {joborder.idjob_order || ""}
              </h4>
              <h4>
                <strong>Laboratory (College / Department): </strong>{" "}
                {joborder.laboratory || ""}
              </h4>
              <h4>
                <strong>Laboratory Location: </strong>{" "}
                {joborder.laboratoryLocation || ""}
              </h4>
            </div>

            <div class="col">
              <h4>
                <strong>Date Recieved: </strong> {joborder.date_received || ""}
              </h4>
              <h4>
                <strong>Date Calibrated: </strong>{" "}
                {joborder.dateCalibrated || ""}
              </h4>
              <h4>
                <strong>Service Requested: </strong>{" "}
                {joborder.serviceRequested || ""}
              </h4>
            </div>
          </div>

          <div className="mt-3 p-3 form-row">
            <div class="col">
              <h4>
                <strong>Intrument: </strong> {joborder.instrument || ""}
              </h4>
              <h4>
                <strong>Intrument Model: </strong> {joborder.model || ""}
              </h4>
              <h4>
                <strong>Intrument Serial No: </strong> {joborder.serialNo || ""}
              </h4>
            </div>

            <div class="col">
              <h4>
                <strong>Manufacturer: </strong> {joborder.manufacturer || ""}
              </h4>
              <h4>
                <strong>Property No: </strong> {joborder.propertyNo || ""}
              </h4>
            </div>
          </div>

          <div class="mt-3 p-3 form-row">
            {/* Row 5 cc*/}
            <div class="col">
              <h4>
                <strong>Calibration Procedure and Traceability: </strong>{" "}
              </h4>
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                name="procedure"
                value={joborder.procedure || ""}
                onChange={handleChange}
                disabled
              ></textarea>
            </div>
          </div>

          <div class="p-3 form-row">
            {/* Row 6 CC*/}
            <div class="col">
              <h4>
                <strong>Calibration Result: </strong>{" "}
              </h4>
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                name="calibrationResult"
                value={joborder.calibrationResult || ""}
                onChange={handleChange}
                disabled
              ></textarea>
            </div>
          </div>

          <div class="p-3 form-row">
            {/* Row 7 CC*/}
            <div class="col">
              <h4>
                <strong>Remarks: </strong>{" "}
              </h4>
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                name="remarks"
                value={joborder.remarks || ""}
                onChange={handleChange}
                disabled
              ></textarea>
            </div>
          </div>

          <br />
          <br />
          <div class="mt-5 p-3 form-row">
            {" "}
            {/* Row 8 */}
            <div class="col text-center">
              <h4>
                <strong>Noted By: </strong> {joborder.approvedBy || ""}
              </h4>
              <h4>Administrator</h4>
            </div>
            <div class="col text-center">
              <h4>
                <strong>Calibrated By: </strong>
                {joborder.receivedby || ""}
              </h4>
              <h4>Technician</h4>
            </div>
          </div>
        </div>
        <div id="print" ref={printTSR}>
          {/* Header */}
          <div className="mt-5 mr-5 d-flex justify-content-around">
            <img class="" src={USTLogo} alt="" width="200" height="100"></img>
            <div class="text-center">
              <h1 id="usttitle"> University of Santo Tomas</h1>
              <h3> Laboratory Equipments and Supplies Office</h3>
            </div>
            <img class="" src={LesoLogo} alt="" width="100" height="100"></img>
          </div>

          {/* <br /><br /><br /><br /> */}

          <h1 className="text-center mt-5">
            <strong>Technical Service Report</strong>
          </h1>

          {/* Body */}

          <div className="mt-5 p-3 form-row">
            <div class="col">
              <h4>
                <strong>Job Order No: </strong> {joborder.idjob_order || ""}
              </h4>
              <h4>
                <strong>Laboratory (College / Department): </strong>{" "}
                {joborder.laboratory || ""}
              </h4>
              <h4>
                <strong>Laboratory Location: </strong>{" "}
                {joborder.laboratoryLocation || ""}
              </h4>
            </div>

            <div class="col">
              <h4>
                <strong>Email: </strong> {joborder.email || ""}
              </h4>
              <h4>
                <strong>Tel No: </strong> {joborder.cellphoneNo || ""}
              </h4>
            </div>
          </div>

          <div className="mt-3 p-3 form-row">
            <div class="col">
              <h4>
                <strong>Intrument: </strong> {joborder.instrument || ""}
              </h4>
              <h4>
                <strong>Intrument Model: </strong> {joborder.model || ""}
              </h4>
              <h4>
                <strong>Intrument Serial No: </strong> {joborder.serialNo || ""}
              </h4>
            </div>

            <div class="col">
              <h4>
                <strong>Manufacturer: </strong> {joborder.manufacturer || ""}
              </h4>
              <h4>
                <strong>Property No: </strong> {joborder.propertyNo || ""}
              </h4>
            </div>
          </div>

          <div className="mt-3 p-3 form-row">
            <div class="col">
              <h4>
                <strong>Service Requested: </strong>{" "}
                {joborder.serviceRequested || ""}
              </h4>
              <h4>
                <strong>Service Recommended: </strong>{" "}
                {joborder.recommendation || ""}
              </h4>
            </div>
          </div>

          <div className="mt-3 p-3 form-row">
            <div class="col">
              <h4>
                <strong>Diagnosis / Recommendation: </strong>{" "}
              </h4>
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="remarks"
                value={joborder.diagnosis || ""}
                onChange={handleChange}
                disabled
              ></textarea>
            </div>

            <div class="col">
              <h4>
                <strong>Action Taken / Reason for Cancellation: </strong>{" "}
              </h4>
              <textarea
                style={{ height: "150px", width: "100%", borderRadius: "5px" }}
                className="p-2"
                name="remarks"
                value={joborder.actionTaken || ""}
                onChange={handleChange}
                disabled
              ></textarea>
            </div>
          </div>

          <br />
          <br />
          <div class="mt-5 p-3 form-row">
            {" "}
            {/* Row 8 */}
            <div class="col text-center">
              <h4>
                <strong>Noted By: </strong> {joborder.approvedBy || ""}
              </h4>
              <h4>Administrator</h4>
            </div>
            <div class="col text-center">
              <h4>
                <strong>Calibrated By: </strong>
                {joborder.receivedby || ""}
              </h4>
              <h4>Technician</h4>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TechnicianClosedUpdateJobOrder;
