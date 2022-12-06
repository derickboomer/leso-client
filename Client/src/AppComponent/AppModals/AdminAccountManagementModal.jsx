import React, { useState , useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import AccountManagement from '../AdminComponents/AccountManagement';
import {useFormik} from "formik"


function AdminAccountManagementModal(){
 

  return (
    <>
          <form  class=""  >{/* Job Order Form input boxes*/}
            <div class="p-3 form-row">{/* Row 1 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">First Name</label>
                <input id="firstName" type="text" class="border-dark form-control" required  ></input>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Middle Name</label>
                <input id="middleName" type="text" class="border-dark form-control" placeholder="" required ></input>
              </div> 
              
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">Last Name</label>
                <input type="text" class="border-dark form-control" placeholder="" required></input>
              </div>

            </div>

            <div class=" p-3 form-row">{/* Row 2 */}
              <div class="col">
                <label class="font-weight-bold" for="inputEmail4"> UST Mail</label>
                <input type="text" class="border-dark form-control" placeholder="" required></input>
              </div>

              <div class="col"> 
              <label class="font-weight-bold" for="inputEmail4">Password</label>
                <input type="password"class="border-dark form-control"placeholder="" required></input>
              </div>
            </div>

            <div class=" p-3 form-row">{/* Row 3 */}

            <div class="col">
                <label class="font-weight-bold" > Account Type</label>
                
                <select id="accountType" type="text" class="border-dark form-control"required >
                  <option value="" disabled>Please Choose</option>
                  <option value="Administrator" >Administrator</option>
                  <option value="Technician">Technician</option>
                  <option value="Client">Client</option>

                </select>
              </div>

              <div class="col">
                <label class="font-weight-bold" for="inputEmail4">College / Faculty / Office</label>
                <select id="college" type="text" class="border-dark form-control "  required >
                  <option value="" disabled>Please Choose</option>
                  <option value="LESO Employee">LESO Employee</option>
                  <option value="College of Nursing">College of Nursing</option>
                  <option value="College of Engineering">College of Engineering</option>
                </select>
              </div>
            </div>


            
          </form>
                

           
    </>
  );
}

export default AdminAccountManagementModal;