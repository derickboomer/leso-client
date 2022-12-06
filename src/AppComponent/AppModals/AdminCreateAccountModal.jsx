import { useHistory, useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';



function AdminCreateAccountModal() {
  const [lgshow, setlgshow] = useState(false);
  const handleClose = () => setlgshow(false);
  const handleShow = () => setlgshow(true);

  //variables for user

  const [account, setAccount] = useState({
    firstName:"",
    middleName:"",
    lastName:"",
    emailName:"",
    password:"",
    college:"",
    accountType:"",
    dateCreated: new Date(),

  })
//Handle input changes 
  const handleChange = (e) => {
    setAccount(prev=>({...prev, [e.target.name]: e.target.value}))
  }


//  Sends data on database
 const createAccount = () => {
    axios.post ('http://localhost:3001/createaccount', account)
    console.log(account);
    handleClose();
  };
  

  return (
    <>
      <button type="button" class="btn btn-success"  size='sm' onClick={() => setlgshow(true)}>
        Create New User
      </button>

      <Modal size="lg" centered show={lgshow} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            <strong>Create New User</strong>
          </Modal.Title>
        </Modal.Header>
        <form  class=""  > 
        <Modal.Body > 
          
        
            <div class="p-3 form-row">
              <div class="col">
                <label class="font-weight-bold" for="">First Name</label>
                <input id="firstName" type="text" class="border-dark form-control" placeholder=""  onChange={handleChange}  required></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Middle Name</label>
                <input id="middleName" type="text" class="border-dark form-control" placeholder="" onChange={handleChange}  required></input>
              </div> 
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Last Name</label>
                <input id="lastName"type="text" class="border-dark form-control" placeholder="" onChange={handleChange} required> </input>
              </div>             
            </div>

            <div class=" p-3 form-row">
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> UST E-Mail</label>
                <input id="email" type="email" class="border-dark form-control" placeholder="" onChange={handleChange}  required></input>
              </div>

              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4">Password</label>
                <input id="password" type="password"class="border-dark form-control"placeholder="" onChange={handleChange}  required ></input>
              </div>
            </div>

          <div class=" p-3 form-row">
              <div class="col">
                <label class="font-weight-bold" > Account Type</label>
                <select id="accountType" type="text" class="border-dark form-control" onChange={handleChange}  required>
                  <option value="" disabled>Please Choose</option>
                  <option value="Administrator" >Administrator</option>
                  <option value="Technician">Technician</option>
                  <option value="Client">Client</option>
                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">College / Faculty / Office</label>
                <select id="college" type="text" class="border-dark form-control " onChange={handleChange}  required>
                  <option value="Did not select college" disabled selected>Please Choose</option>
                  <option value="LESO Employee">LESO Employee</option>
                  <option value="College of Nursing">College of Nursing</option>
                  <option value="College of Engineering">College of Engineering</option>
                </select>
              </div> 
            </div>
         

         
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  class= "btn btn-success" data-dismiss="modal" onClick={createAccount} >Create New User</Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AdminCreateAccountModal;