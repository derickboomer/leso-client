import { NavLink, Route, HashRouter } from "react-router-dom";
import React from "react";
import "./Styles/HomepageStyles.css";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/LOGONEW.png";
import Header from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/CMRS.png";
import Sidebar from "../PageComponents/Sidebar";
import Topbar from "../PageComponents/Topbar";
import Content from "../PageComponents/Content";
import Login from "./Login";
import Try from "./Try";
import Footer from "../PageComponents/Footer";
import OpenRequest from "../AppComponent/TechnicianComponents/TechnicianOpenRequest";
import ClosedRequest from "../AppComponent/TechnicianComponents/TechnicianClosedRequest";
import JobOrderUpdate from "../AppComponent/AdminComponents/JobOrderUpdate";
import TechnicianJobOrderUpdate from "../AppComponent/TechnicianComponents/TechnicianJobOrderUpdate";
import TechnicianClosedUpdateJobOrder from "../AppComponent/TechnicianComponents/TechnicianClosedUpdateJobOrder";
import { useHistory } from "react-router-dom";
import AuditLogs from "../AppComponent/AdminComponents/AuditLogs";

function TechnicianHomepage() {
  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 50);
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
        <div class="containerhomepage " style={{backgroundColor: "rgb(150, 150, 150)" }}>
          
          <div class="sidebar" > {/*Left Side*/}
            <div class="sidebarwrapper "> 
              <div class="topPart d-flex  p-2">
                <img class="" src={LesoLogo} alt="" width="100" height="100"></img>
                <img src={Header} alt="" width="170" height="100"></img>
              </div> 

              <div class = "navigation mt-3">

                  <div class="flex-column font-weight-bold">
                    
                    <NavLink to="/Technician/OpenRequest"  style={{padding:"12px"}}  activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}} onClick={refresh}>Open Request</NavLink>
                    <NavLink to="/Technician/ClosedRequest" style={{padding:"12px"}}  activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}} onClick={refresh} >Closed Request</NavLink>
                    <NavLink strict to="/Technician/AuditLogs" style={{padding:"12px"}} activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}}onClick={refresh} >Audit Logs</NavLink>

                    <NavLink to="/" style={{padding:"12px"}} onClick={goBack}>Log Out </NavLink>
                  </div>
              </div>

            </div>
          </div>

          <div class="right" style={{backgroundColor: "rgb(235, 235, 235)" }}>  {/*Right*/}
            <div class="topbar shadow-sm bg-light p-3  ">
              <div class="font-weight-bold">Technician Interface</div>
            </div>

            <div class="content p-3">
                
              <Route exact path="/Technician/OpenRequest" component={OpenRequest} />
              <Route exact path="/Technician/ClosedRequest" component={ClosedRequest} />
              <Route exact path="/Signout" component={Try} />
              <Route exact path= "/Technician/OpenRequest/joborderupdate/:idjob_order" component={TechnicianJobOrderUpdate} />
              <Route exact path= "/Technician/ClosedRequest/joborderupdate/:idjob_order" component={TechnicianClosedUpdateJobOrder} />
              <Route exact path= "/Technician/AuditLogs" component={AuditLogs} />


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

export default TechnicianHomepage;
