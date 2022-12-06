import React, { useState } from 'react';
import { ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TechnicianModal() {
  const [lgshow, setlgshow] = useState(false);
  const handleClose = () => setlgshow(false);
  const handleShow = () => setlgshow(true);

  return (
    <>
      <button type="button" class="btn btn-primary mr-2"  size='sm' onClick={() => setlgshow(true)}>
        View Request
      </button>

      <Modal size="lg" centered show={lgshow} onHide={handleClose} backdrop="static" keyboard={false}>
     
    

      <div  class="modalcss mb-2 bg-white rounded-top ">
            <div class=" p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label style={{fontSize:"20px"}} class="font-weight-bold" for="inputEmail4">Type</label>
                <select id="college"type="text" class="border-dark form-control ">
                  <option value="Open" selected>Open</option>
                  <option value="Close">Close</option>
                  
                  
                </select>
              </div>

              <div class="col">
                <label style={{fontSize:"20px"}} class="font-weight-bold" for="inputEmail4">Status</label>
                <select disabled id="college"type="text"class="border-dark form-control">
                  <option value="For Approval">For Approval</option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option> 
                  
                </select>
                
              </div>

              <div class="col">
                <label style={{fontSize:"20px"}} class="font-weight-bold" for="inputEmail4">Stage</label>
                <select id="college"type="text"class="border-dark form-control">
                  
                  <option value="Inspection" selected >Pending</option>
                  <option value="On-Going" >On-Going</option> 
                  <option value="Successful">Completed</option> 
                  <option value="Unsuccessful">Cancelled</option> 
                </select>
              </div>
            </div>
            </div>
            <Modal.Body > 
            
            {/* Job Order Form*/}

            <div className="bg-dark text-light p-3 h3 font-weight-bold rounded d-flex justify-content-between "> {/* Job Order Form */}
                <div>
                    Job Order Form
                </div>
                <button type="button" class="btn btn-light">Print Job Order Form</button>
            </div>
            {/* Job Order Form input boxes*/}
          <form  class="" id="joborder">

          <div class=" p-3 form-row"> {/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Date Received </label>
                <input disabled type="date" class="border-dark form-control" placeholder="" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Recommended Due Date </label>
                <input  type="date" class="border-dark form-control" placeholder="" value="" ></input>
              </div>
            </div>


            <div class="p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">First Name</label>
                <input type="text" class="border-dark form-control"placeholder="--" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Last Name</label>
                <input type="text" class="border-dark form-control" placeholder="--" ></input>
              </div>

              
            </div>

            <div class=" p-3 form-row">{/* Row 2 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> UST E-Mail</label>
                <input type="email" class="border-dark form-control" placeholder="--" ></input>
              </div>

              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4">Cellphone No. / Tel No.</label>
                <input type="tel"class="border-dark form-control"placeholder="--"></input>
              </div>
            </div>
<hr />
            <div class=" p-3 form-row">{/* Row 3 */} 
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Instrument</label>
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
              <label class="font-weight-bold" for="inputEmail4"> Service Requested </label>
                <select id="Transportation" type="text" class="border-dark form-control">
                  <option value="" disabled selected> Please Select: </option>
                  <option  value="">Maintenance</option>
                  <option value="">Calibration</option>
                </select>
              </div>
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Job Order No. </label>
                <input type="text" class="border-dark form-control" placeholder="" disabled ></input>
              </div> 
              </div>

            <div class=" p-3 form-row"> {/* Row 5 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument Transportation </label>
                <select id="Transportation" type="text" class="border-dark form-control" >
                  <option value="" disabled selected> Please Select: </option>
                  <option value="Microscope">Pick-Up</option>
                  <option value="Telescope">Drop-Off</option>
                </select>
              </div>
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">College / Faculty / Office</label>
                <select id="college"type="text"class="border-dark form-control">
                  <option value="" disabled selected>Where are you from?</option>
                  <option value="College of Nursing">College of Nursing</option>
                  <option value="College of Engineering">College of Engineering</option> 
                  <option>College of Pharmacy </option>
                </select>
              </div>

              
            </div>

            <div class=" p-3 form-row"> {/* Row 6 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory </label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory Location </label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div>
            </div> 


            <div class="p-3 form-row">{/* Row 7 */}
             
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Remarks / Problem Reported </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection."  ></textarea>
              </div> 
            </div>

           
            <br />
            <br />


          {/* Technical Service Report*/}


            <div className="bg-dark text-light p-3 h3 font-weight-bold rounded d-flex justify-content-between "> 
                <div>
                    Technnical Service Report
                </div>
                <button type="button" class="btn btn-light">Print TSR</button>
            </div>

            


            <div class=" p-3 form-row"> {/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory Location </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" ></input>
              </div>
            </div>
           
            <div class=" p-3 form-row"> {/* Row 2 Technical Service Report*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument </label>
                <select disabled id="Transportation" type="text" class="border-dark form-control" >
                  <option value="" disabled selected> Please Select: </option>
                  <option value="Microscope">Pick-Up</option>
                  <option value="Microscope">Pick-Up</option>
                  <option value="Telescope">Drop-Off</option>
                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Model </label> 
                <input type="text" class="border-dark form-control" placeholder="" ></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Serial No. </label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div>
            </div>

            <div class=" p-3 form-row"> {/* Row 2 Technical Service Report*/}
              
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Manufacturer </label> 
                <input type="text" class="border-dark form-control" placeholder="" ></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Property No. </label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div>
            </div>


            <div class="p-3 form-row">
              {/* Row 3 Technical Service Report*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Remarks / Problem Reported </label> <br /> 
                <textarea disabled style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection."  ></textarea>
              </div> 
            </div>

            <div class="p-3 form-row">
              {/* Row 4 Technical Service Report*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Diagnosis / Observations </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection."  ></textarea>
              </div> 
            </div>

            <div class="p-3 form-row">
              {/* Row 5 Technical Service Report*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Action Taken </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection."  ></textarea>
              </div> 
            </div>

            
            
            <br />
            <br />



              {/* Certificate of Calibration*/}

            <div className="bg-dark text-light p-3 h3 font-weight-bold rounded d-flex justify-content-between "> {/* Technical Service Report*/}
                <div>
                    Certificate of Calibration
                </div>
                <button type="button" class="btn btn-light">Print Certificate</button>
            </div>
           
            <div class=" p-3 form-row"> {/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Date Received </label>
                <input disabled type="date" class="border-dark form-control" placeholder="" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Recommended Due Date </label>
                <input disabled type="date" class="border-dark form-control" placeholder="" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Date Calibrated</label>
                <input  type="date" class="border-dark form-control" placeholder="" ></input>
              </div>
            </div>

            <div class=" p-3 form-row"> {/* Row 2 */}

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Job Order No. </label>
                <input type="text" class="border-dark form-control" placeholder="" disabled ></input>
              </div> 

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" ></input>
              </div>

              
            </div>

             <div class=" p-3 form-row"> {/* Row 3 */}

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Laboratory Location </label>
                <input disabled type="text" class="border-dark form-control" placeholder="" ></input>
              </div>
            </div>

            <div class=" p-3 form-row"> {/* Row 4*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Instrument </label>
                <select disabled id="Transportation" type="text" class="border-dark form-control" >
                  <option value="" disabled selected> Please Select: </option>
                  <option value="Microscope">Pick-Up</option>
                  <option value="Microscope">Pick-Up</option>
                  <option value="Telescope">Drop-Off</option>
                </select>
              </div>
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Model </label> 
                <input type="text" disabled class="border-dark form-control" placeholder="" ></input>

                </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Serial No. </label>
                <input type="text" disabled class="border-dark form-control" placeholder="" ></input>
              </div>
            </div>

            <div class="p-3 form-row">
              {/* Row 5 cc*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Calibration Procedure and Traceability </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection."  ></textarea>
              </div> 
            </div>

            <div class="p-3 form-row">
              {/* Row 6 CC*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Calibration Result </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection."  ></textarea>
              </div> 
            </div>

            <div class="p-3 form-row">
              {/* Row 7 CC*/}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> Remarks </label> <br /> 
                <textarea style={{ height: "150px", width: "100%", borderRadius: "5px"}} name="" id="" placeholder="  To be filled by the technican the during the inspection."  ></textarea>
              </div> 
            </div>


            <div class=" p-3 form-row"> {/* Row 8 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Approved By</label>
                  <select disabled id="college"type="text"class="border-dark form-control">
                    <option value="" disabled selected>Administrator</option>
                    <option value="College of Nursing">Admin 1</option>
                    <option value="College of Engineering">Admin 2</option> 
               
                  </select>
              </div>

              <div class="col">
              
                <label class="font-weight-bold" for="inputEmail4">Received By</label>
                  <select id="college"type="text"class="border-dark form-control">
                    <option value="" disabled selected>Technician</option>
                    <option value="">Technician 1</option>
                    <option value="">Technician 2</option> 
               
                  </select>
              </div>
            </div>

          </form>

         
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update Job Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TechnicianModal;