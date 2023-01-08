import React, { Component } from "react";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/LOGO.jpg";
import "./Styles/LoginStyles.css";
import Footer from "../PageComponents/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Admin from "../Pages/AdminHomepage";
import CreateAccount from "../AppComponent/AppModals/CreateAccount";
import { Link } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accountType, setaccountType] = useState("");
  const [loginStatus, setloginStatus] = useState("");

  const values = [email, password, accountType];
  console.log(values);

  const login = async () => {
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
        accountType: accountType,
      })
      .then((response) => {
        if (response.data[0].accountType === "Administrator") {
          redirect.replace("/Admin/OpenRequest");
          window.location.reload(false);
        } else if (response.data[0].accountType === "Technician") {
          redirect.replace("/Technician/OpenRequest");
          window.location.reload(false);
        } else if (response.data[0].accountType === "Client") {
          redirect.replace("/Client/CreateRequest");
          window.location.reload(false);
        } else {
        }
      });
  };

  const redirect = useHistory();
  const goBack = () => {
    redirect.push("/Client/CreateRequest");
    window.location.reload(false);
  };

  const register = () => {
    redirect.push("/Register");
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      {/* prettier-ignore */}
      <html style={{}}>
          
            <div class=" shadow-sm sticky-top bg-white text-dark p-3" > 
                  <a class="navbar-brand" href="#"> </a>
                  <img class=""src={LesoLogo} alt="" width="75" height="75"></img>
       
            </div>
          
        

        <body class="align-middle bg-light p-5 bg-gradient" style={{height:"100vh"}}>
  
            <div class="py-5 px-md-5" >
              <div class="gx-lg-5 align-items-center d-flex justify-content-center" >
                <div class="col-lg-6 mb-5 mb-lg-0 text-center">

                  <h1 class="title fw-bold ">
                  <strong> LESO:</strong> Care and Maintenance<br />
                   <span class="text-warning fs-1">Job Requisition System</span>
                   
                  </h1>
                  
                   <p>
                   Welcome to UST LESO Care and Maintenance Online Job Requisition.
                   </p>

                  <br />

                  <h6> Note: Log in credentials should be provided by the office of LESO.</h6>
              </div>

        <div class="col-lg-6 mb-2 mb-lg-0 w-75 mx-auto" >
          <div class=" card shadow p-3 bg-body  ">
            <div class="card-body py-2 px-md-1 " >
              <form onSubmit={login}>
                
                <h1 class="welcome pb-3 ">Welcome, please log in to continue</h1>
                
                <div class="form-outline  mb-2">
                  <input type="email" name="email" id= "email" class="form-control p-2" placeholder="Email" onChange={(event) => {setemail(event.target.value)}}/>
                  
                </div>

                
                <div class="form-outline mb-2">
                  <input type="password" name="password" id="password" class="form-control p-2" placeholder="Password" onChange={(event) => {setpassword(event.target.value)}} />
                  
                </div>
              
                <div class="form-outline mb-2">
                  <select id="accountType"  class="border-dark form-control" name="accountType"  required onChange={(event) => {setaccountType(event.target.value)}}  >
                  <option value="" >What is the type of your account?</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Technician">Technician</option>
                  {/* <option value="Client">Client</option> */}
                
                </select>
                  
                </div>
                
                <div className="mt-3 d-flex flex-row">
                <button  type="submit" class="btn btn-warning btn-block mb-1 mr-2 ">
                  Log In
                </button>
                
               

                </div>
               <Link className="d-flex justify-content-center" onClick={register}>
                Create an account
               </Link>

               
                
              </form>
              <hr />
              <button   class="btn btn-primary btn-lg btn-block mb-1 " onClick={goBack}>
                  Create a Job Order Request
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
        <div className="footer" style={{ borderTop: " 5px solid rgb(238, 189, 56)" }}>
          <Footer/>
        </div>
</html>
    </React.Fragment>
  );
}

export default Login;
