import React, { Component } from "react";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/src/Assets/LOGO.jpg";
import "./Styles/LoginStyles.css";
import Footer from "../PageComponents/Footer";

function Login({ Login, error }) {
  const mystyle = {};

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
                      LESO: Care and Maintenance<br />
                   <span class="text-warning fs-1">Online Requisition System</span>
                  </h1>

                   <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                   </p>

                  <br />

                  <h6> Note: Log in credentials should be provided by the office of LESO.</h6>
              </div>

        <div class="col-lg-6 mb-2 mb-lg-0 w-75 mx-auto" >
          <div class=" card shadow p-3 bg-body  ">
            <div class="card-body py-2 px-md-1 " >
              <form>
                
                <h1 class="welcome pb-3 ">Welcome, please log in to continue</h1>
                
                <div class="form-outline  mb-2">
                  <input type="email" id= "email" class="form-control p-2" placeholder="Email"/>
                  
                </div>

                
                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control p-2" placeholder="Password"/>
                  
                </div>

                
                <button type="submit" class="btn btn-warning btn-lg mb-1 ">
                  Log In
                </button>

               
                
              </form>
              
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
