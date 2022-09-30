import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AdminModal() {
  const [lgshow, setlgshow] = useState(false);
  const handleClose = () => setlgshow(false);
  const handleShow = () => setlgshow(true);

  return (
    <>
      <button type="button" class="btn btn-primary mr-2"  size='sm' onClick={() => setlgshow(true)}>
        View Request
      </button>

      <Modal size="lg" show={lgshow} onHide={handleClose} backdrop="static" keyboard={false}>
     
      <div  class="modalcss mb-2 bg-white rounded-top ">
            <div class=" p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Type</label>
                <select id="college"type="text"class="border-dark form-control">
                  <option value="Open" selected>Open</option>
                  <option value="Close">Close</option>
                  
                  
                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Status</label>
                <select id="college"type="text"class="border-dark form-control">
                  <option value="For Approval" selected>For Approval</option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option> 
                  <option>Rejected</option>
                </select>
                
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Stage</label>
                <select id="college"type="text"class="border-dark form-control">
                  
                  <option value="Inspection" selected >Inspection</option>
                  <option value="On-Going" >On-Going</option> 
                  <option value="Successful">Succesful</option> 
                  <option value="Unsuccessful">Unsuccesful</option> 
                </select>
              </div>
            </div>
            </div>
            <Modal.Body > 
            
            

            <div className="bg-dark text-light p-3 h3 font-weight-bold rounded d-flex justify-content-between "> {/* Job Order Form */}
                <div>
                    Job Order Form
                </div>
                <button type="button" class="btn btn-light">Print Job Order Form</button>
            </div>

          <form  class="" id="joborder">{/* Job Order Form input boxes*/}
            <div class="p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">First Name</label>
                <input type="text" class="border-dark form-control"placeholder="--" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Last Name</label>
                <input type="text" class="border-dark form-control" placeholder="--" ></input>
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
                <input type="text" class="border-dark form-control" placeholder="--" ></input>
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

export default AdminModal;