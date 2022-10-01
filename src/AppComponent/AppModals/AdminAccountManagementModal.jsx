import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AdminAccountManagementModal() {
  const [lgshow, setlgshow] = useState(false);
  const handleClose = () => setlgshow(false);
  const handleShow = () => setlgshow(true);

  return (
    <>
      <button type="button" class="btn btn-primary mr-2"  size='sm' onClick={() => setlgshow(true)}>
        View Request
      </button>

      <Modal size="lg" centered show={lgshow} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          <strong>Update User Details</strong>
        </Modal.Title>
        </Modal.Header>
      
            <Modal.Body > 
            
            

            

          <form  class="" id="joborder">{/* Job Order Form input boxes*/}
            <div class="p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">First Name</label>
                <input type="text" class="border-dark form-control"placeholder="" ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Middle Name</label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div> 
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Last Name</label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div>
              

              
            </div>

            <div class=" p-3 form-row">{/* Row 2 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> UST Mail</label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
              </div>

              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4">Password</label>
                <input type="password"class="border-dark form-control"placeholder=""></input>
              </div>
            </div>

            <div class=" p-3 form-row">{/* Row 2 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> College</label>
                <input type="text" class="border-dark form-control" placeholder="" ></input>
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

export default AdminAccountManagementModal;