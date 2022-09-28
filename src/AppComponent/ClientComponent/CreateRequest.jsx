import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";
import ClientHomepage from "../../Pages/ClientHomepage";
import OpenRequest from "../AdminComponents/AdminOpenRequest";
import TechnicianOpenRequest from "../TechnicianComponents/TechnicianOpenRequest";

function CreateRequest() {
 const user = {firstname: "Rhoderick",  lastname: "Rodriguez", email: "derick@client.com"};
  return (
    <React.Fragment>
      {/* prettier-ignore */}
      <div class="alert alert-success alert-dismissible fade show" style={{borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",}} role="alert">
        <strong>Job Order Submitted!</strong> Check your requests at <strong>Track Request</strong> tab.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="" style={{backgroundColor: "white",borderRadius: "5px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",}} className="" >  {/* Form Container */}
        <div>
          <div className="border-bottom p-3 h3 font-weight-bold "> {/* Job Order Form */}
            Job Order Form
          </div>

          <form id="joborder">{/* Job Order Form input boxes*/}
            <div class="p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">First Name</label>
                <input type="text" class="border-dark form-control"placeholder="--" value={user.firstname}></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Last Name</label>
                <input type="text" class="border-dark form-control" placeholder="--" value={user.lastname}></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">College / Department / Office</label>
                <select id="college"type="text"class="border-dark form-control">
                  <option value="" disabled selected>Where are you from?</option>
                  <option value="College of Nursing">College of Nursing</option>
                  <option value="College of Engineering">College of Engineering</option> 
                  <option>College of Pharmacy </option>
                </select>
              </div>
            </div>

            <div class=" p-3 form-row">{/* Row 2 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> UST Mail</label>
                <input type="text" class="border-dark form-control" placeholder="--" value={user.email}></input>
              </div>

              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4">Cellphone No.</label>
                <input type="tel"class="border-dark form-control"placeholder="--"></input>
              </div>
            </div>

            <div class=" p-3 form-row">{/* Row 3 */} <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Equipment</label>
                <select id="college" type="text" class="border-dark form-control" >
                  <option value="" disabled selected> Please Select:</option>
                  <option value="Microscope">Microscope</option>
                  <option value="Telescope">Telescope</option>
                  <option value="Breaker">Breaker</option>
                </select>
            </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Quantity</label>
                <input type="number"min="1"class="border-dark form-control"placeholder="--"></input>
              </div>
            </div>

            <div class=" p-3 form-row"> {/* Row 4 */}
              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4"> Service </label>
                <select id="Transportation" type="text" class="border-dark form-control">
                  <option value="" disabled selected> Please Select: </option>
                  <option value="">Maintenance</option>
                  <option value="">Calibration</option>
                </select>
              </div>
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Equipment Serial No. </label>
                <input type="text" class="border-dark form-control" placeholder="To be filled by the technician during the inspection" disabled ></input>
              </div> 
              </div>

            <div class=" p-3 form-row"> {/* Row 5 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Equipment Transportation </label>
                <select id="Transportation" type="text" class="border-dark form-control" >
                  <option value="" disabled selected> Please Select: </option>
                  <option value="Microscope">Pick-Up</option>
                  <option value="Telescope">Drop-Off</option>
                </select>
              </div>
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Building </label> 
                <select id="Transportation" type="text" class="border-dark form-control" >
                  <option value="" disabled selected> Please Select:</option>
                  <option value="">Roque Ruano</option>
                  <option value="">Main Building</option>
                </select>
                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Room / Room No. </label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div>
            </div>

            <div class="p-3 form-row">
              {/* Row 6 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Problem Reported </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection." disabled ></textarea>
              </div>
            </div>
            
            
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateRequest;
