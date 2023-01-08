import { NavLink, Route, HashRouter, useParams } from "react-router-dom";

import "react-bootstrap";
import React from "react";
import "./Styles/HomepageStyles.css";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/LOGONEW.png";
import Header from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/CMRS.png";
import Try from "./Try";
import Footer from "../PageComponents/Footer";
import AdminOpenRequest from "../AppComponent/AdminComponents/AdminOpenRequest";
import AdminClosedRequest from "../AppComponent/AdminComponents/AdminClosedRequest";
import AccountManagement from "../AppComponent/AdminComponents/AccountManagement";
import Login from "./Login";
import AccountUpdate from "../AppComponent/AdminComponents/AccountUpdate";
import JobOrderUpdate from "../AppComponent/AdminComponents/JobOrderUpdate";
import ClosedJobOrder from "../AppComponent/AdminComponents/ClosedJobOrder ";
import { useHistory } from "react-router-dom";
import AuditLogs from "../AppComponent/AdminComponents/AuditLogs";

function AdminHomepage() {
  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 0);
  }

  const redirect = useHistory();
  const goBack = () => {
    redirect.replace("/Login");
    window.location.reload(false);
  };
  return (
    <React.Fragment>
      <HashRouter>
        {/* prettier-ignore */}
        <body class="">
        <div class="containerhomepage " style={{backgroundColor: "rgb(233, 181, 67)" }}>
          
          <div class="sidebar"> {/*Left Side*/}
            <div class="sidebarwrapper"> 
              <div class="topPart d-flex  p-2">
                <img class="" src={LesoLogo} alt="" width="100" height="100"></img>
                <img src={Header} alt="" width="170" height="100"></img>
              </div> 

              <div class = "navigation mt-3">

                  <div class="flex-column font-weight-bold">
                    
                    <NavLink strict to="/Admin/OpenRequest" style={{padding:"12px"}} activeStyle={{ color:'black', textDecoration: "none", backgroundColor: "aliceblue"}} onClick={refresh}>Open Request</NavLink>
                    <NavLink strict to="/Admin/ClosedRequest" style={{padding:"12px"}} activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}}onClick={refresh} >Closed Request</NavLink>
                    <NavLink strict to="/Admin/AccountManagement" style={{padding:"12px"}} activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}}onClick={refresh} >Account Management</NavLink>
                    <NavLink strict to="/Admin/AuditLogs" style={{padding:"12px"}} activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}}onClick={refresh} >Audit Logs</NavLink>

                    <NavLink strict to="" style={{padding:"12px"}} onClick={goBack}>Log Out</NavLink>
                    
                  </div>
              </div>

            </div>
          </div>

          <div class="right" style={{backgroundColor: "rgb(255, 246, 225)"}}>  {/*Right*/}
            <div class="topbar shadow-sm bg-light p-3  ">
              <div class="font-weight-bold">Administrator Interface</div>
            </div>

            <div class="content p-3" >
                <Route exact path="/Admin/OpenRequest" component={AdminOpenRequest} />
                <Route exact path="/Admin/ClosedRequest" component={AdminClosedRequest} />
                <Route exact path="/Admin/AccountManagement" component={AccountManagement} />
                <Route exact path="/Admin/Signout" component={Try} />
                <Route exact path= "/Admin/AccountManagement/update/:iduser_account" component={AccountUpdate} />
                <Route exact path= "/Admin/OpenRequest/joborderupdate/:idjob_order" component={JobOrderUpdate} />
                <Route exact path= "/Admin/ClosedRequest/joborderupdate/:idjob_order" component={ClosedJobOrder} />
                <Route exact path= "/Admin/AuditLogs" component={AuditLogs} />

              


            </div>
          </div>
        </div>

      </body>
        <footer class="">
          <Footer />
        </footer>
      </HashRouter>
    </React.Fragment>
  );
}

export default AdminHomepage;
