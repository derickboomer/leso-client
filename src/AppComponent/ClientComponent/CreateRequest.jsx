import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";
import ClientHomepage from "../../Pages/ClientHomepage";
import OpenRequest from "../AdminComponents/AdminOpenRequest";
import TechnicianOpenRequest from "../TechnicianComponents/TechnicianOpenRequest";
import { useState } from "react";
import axios from "axios";
import e from "cors";

function CreateRequest() {
  // const [type,settype] = useState("");
  // const [status,setstatus] = useState("");
  // const [stage,setstage] = useState("");
  // const [date_received, setdate_received] = useState("");
  // const [recommendedDueDate,setrecommendedDueDate] = useState("");
  // const [firstName,setfirstName] = useState("");
  // const [lastName,setlastName] = useState("");
  // const [email,setemail] = useState("");
  // const [cellphoneNo,setcellphoneNo] = useState("");
  // const [instrument,setinstrument] = useState("");
  // const [quantity,setquantity] = useState("");
  // const [serviceRequested,setserviceRequested] = useState("");
  // const [instrumentTransportation,setinstrumentTransportation] = useState("");
  // const [college,setcollege] = useState("");
  // const [laboratory,setLaboratory] = useState("");
  // const [laboratoryLocation,setlaboratoryLocation] = useState("");
  // const [problemReported,setproblemReported] = useState("");
  // const [model,setmodel] = useState("");
  // const [serialNo,setserialNo] = useState("");
  // const [manufacturer,setmanufacturer] = useState("");
  // const [propertyNo,setpropertyNo] = useState("");
  // const [diagnosis,setdiagnosis] = useState("");
  // const [actionTaken,setactionTaken] = useState("");
  // const [dateCalibrated,setdateCalibrated] = useState("");
  // const [procedure ,setprocedure] = useState("");
  // const [calibrationResult,setcalibrationResult] = useState("");
  // const [remarks,setremarks] = useState("");
  // const [approvedby,setapprovedby] = useState("");
  // const [recievedby,setreceivedby] = useState("");

  // function handleImage(e){
  //   console.log(e.target.file[0])
  //   setimage(e.target.file)
  // }

  // const form = document.getElementById('joborder')
  // form.addEventListener('submit', function(e){
  //   e.preventDefault();

  //   const formData = new FormData(form);
  //   console.log(...formData)
  // })

  // const formData = new FormData();

  //   const fileSelectedHandler = event => {
  //     setimage(event.target.files[0])
  //     formData.append('image', image)

  //   }

  const [image, setimage] = useState("");
  const [joborder, setJobOrder] = useState({
    //  type:"",
    //  status:"",
    stage: "",
    date_received: new Date(),
    // recommendedDueDate:new Date(),
    firstName: "",
    lastName: "",
    email: "",
    cellphoneNo: "",
    quantity: "",
    serviceRequested: "",
    instrument: "",
    // transportation:"",
    college: "",
    laboratory: "",
    laboratoryLocation: "",
    problemReported: "",
    model: "",
    serialNo: "",
    manufacturer: "",
    propertyNo: "",
    image: "",
    studentno: "",
    // diagnosis:"",
    // actionTaken:"",
    // dateCalibrated:"",
    // procedure:"",
    // calibrationResult:"",
    // remarks:"",
    // approvedby:"",
    // recievedby:"",
  });

  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
  }
  const submitJobOrder = () => {
    axios.post(
      "https://camrs-leso-deployment.herokuapp.com/submitjoborder",
      joborder
    );
    refresh();
  };

  const handleChange = (e) => {
    setJobOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(image);
  console.log(joborder);

  return (
    <React.Fragment>
      {/* prettier-ignore */}

      <div class="" style={{backgroundColor: "white",borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",}} className="" >  {/* Form Container */}
        <div>
          <div className="border-bottom p-3 h3 font-weight-bold "> {/* Job Order Form */}
            Job Order Form
          </div>

        <form id="joborder" enctype="multipart/form-data" action="" method="post">{/* Job Order Form input boxes*/}

          {/* <div class=" p-3 form-row"> Row 1 */}
              {/* <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Date Received (This is auto generated)</label>
                <input disabled type="date" class="border-dark form-control"  name="date_received" onChange={handleChange}></input>
              </div> */}
{/* 
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Recommended Due Date </label>
                <input  type="date" class="border-dark form-control"  value="" name="recommendedDueDate" onChange={handleChange}></input>
              </div> */}
            {/* </div> */}


            <div class="p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">First Name</label>
                <input type="text" class="border-dark form-control"  name="firstName" id="" onChange={handleChange} required></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Last Name</label>
                <input type="text" class="border-dark form-control"  name="lastName" id="" onChange={handleChange} required></input>
              </div>

              {/* <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Student No.</label>
                <input type="text" class="border-dark form-control"  name="studentno" id="" onChange={handleChange} required></input>
              </div> */}

            </div>

            <div class=" p-3 form-row">{/* Row 2 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> UST E-Mail</label>
                <input type="email" class="border-dark form-control"  name="email" id="" onChange={handleChange}required></input>
              </div>

              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4">Cellphone No. / Tel No.</label>
                <input type="tel"class="border-dark form-control" name="cellphoneNo" id="" onChange={handleChange}required></input>
              </div>
            </div>
<hr />
            <div class=" p-3 form-row">{/* Row 3 */} 
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Instrument</label>
                <select id="college" type="text" class="border-dark form-control" name="instrument" onChange={handleChange} required>
                  <option value="" selected > Please select instrument:</option>
                  <option value="Microscope">Microscope</option>
                  <option value="Utility Clamp">Utility Clamp</option>
                  <option value="Centrifuge">Centrifuge</option>
                </select>
            </div>

                
                

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Quantity</label>
                <input type="number"min="1"class="border-dark form-control"  name="quantity" onChange={handleChange}required></input>
              </div>
            </div>

            
            <div class=" p-3 form-row"> {/* Row 2 Technical Service Report*/}
              

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Model </label> 
                <input class="border-dark form-control" placeholder="" name='model'  onChange={handleChange}></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Insrument Serial No. </label>
                <input type="text" class="border-dark form-control" placeholder="" name='serialNo'  onChange={handleChange}></input>
              </div>
            </div>

            <div class=" p-3 form-row"> {/* Row 2 Technical Service Report*/}
              
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Manufacturer </label> 
                <input type="text" class="border-dark form-control" placeholder="" name='manufacturer' onChange={handleChange} ></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Property No. </label>
                <input type="text" class="border-dark form-control" placeholder="" name='propertyNo'  onChange={handleChange}></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument Image </label>
                <input type="text" class="border-dark form-control" placeholder="input image address" name="image" accept="image/*" onChange={handleChange} ></input>
              </div>
            </div>



            <div class=" p-3 form-row"> {/* Row 4 */}
              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4"> Service Requested </label>
                <select   class="border-dark form-control" name="serviceRequested" onChange={handleChange}required>
                  <option value="" > Please Select: </option>
                  <option value="Calibration">Calibration</option>
                  <option value="Repair">Repair</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Routine Maintenance">Routine Maintenance</option>
                </select>
              </div>
              
              {/* <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Job Order No. </label>
                <input type="text" class="border-dark form-control"  disabled name="idjob_order" onChange={handleChange}></input>
              </div>  */}

              </div>

            <div class=" p-3 form-row"> {/* Row 5 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument Transportation </label>
                <select id="Transportation" type="text" class="border-dark form-control" name="stage" onChange={handleChange}required>
                  <option value=""> Please Select: </option>
                  <option value="Pick-Up">Pick-Up</option>
                  <option value="Drop-Off">Drop-Off</option>
                </select>
              </div>
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">College / Faculty / Office</label>
                <select id="college"type="text"class="border-dark form-control " name="college" onChange={handleChange}required>
                  <option value="" >Where are you from?</option>
                  <option value="College of Nursing">College of Nursing</option>
                  <option value="College of Engineering">College of Engineering</option> 
                  <option>College of Pharmacy </option>
                </select>
              </div>

              
            </div>

            <div class=" p-3 form-row"> {/* Row 6 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory </label>
                <input type="text" class="border-dark form-control"  name="laboratory" onChange={handleChange}required></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory Location </label>
                <input type="text" class="border-dark form-control"  name="laboratoryLocation" onChange={handleChange}required></input>
              </div>
            </div> 


            <div class="p-3 form-row">{/* Row 7 */}
             
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Remarks / Problem Reported </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} class="p-2"name="problemReported" id=""  onChange={handleChange} required></textarea>
              </div> 
            </div>

            
            
            <button class="m-3 btn btn-primary" type="button"   onClick={submitJobOrder}>Submit</button>
            
        </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateRequest;
