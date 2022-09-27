import { NavLink, Route, HashRouter } from "react-router-dom";
import React from "react";
import "./Styles/HomepageStyles.css";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/src/Assets/LOGONEW.png";
import Header from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/src/Assets/CMRS.png";
import Sidebar from "../PageComponents/Sidebar";
import Topbar from "../PageComponents/Topbar";
import Content from "../PageComponents/Content";
import Login from "./Login";
import Try from "./Try";
import Footer from "../PageComponents/Footer";
import Track from "../AppComponent/ClientComponent/Track";
import CreateRequest from "../AppComponent/ClientComponent/CreateRequest";

function ClientHomepage() {
  return (
    <React.Fragment>
      <HashRouter>
        {/* prettier-ignore */}

        <body class="" style={{backgroundColor: "rgb(121, 134, 255)" }}>
        <div class="containerhomepage ">
          
          <div class="sidebar"> {/*Left Side*/}
            <div class=" sidebarwrapper  " > 
              <div class="topPart d-flex  p-2">
                <img class="" src={LesoLogo} alt="" width="100" height="100"></img>
                <img src={Header} alt="" width="170" height="100"></img>
              </div> 

              <div class = "navigation mt-3">

                  <div class="flex-column font-weight-bold">
                    
                    <NavLink to="/Client/CreateRequest" activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}}><a class="p-2">Create Request</a></NavLink>
                    <NavLink to="/Client/Track"activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}}><a class="p-2">Track</a></NavLink>
                    <NavLink to="/Signout"><a class="p-2">Sign Out</a></NavLink>
                  </div>
              </div>

            </div>
          </div>

          <div class="overflow-scroll right" style={{backgroundColor: "rgb(233, 235, 251)" }}>  {/*Right*/}
            <div class="topbar shadow-sm bg-light p-3  ">
              <div class="font-weight-bold">Client Interface</div>
            </div>

            <div class="overflow-scroll content p-3">
                
              <Route exact path="/Client/CreateRequest" component={CreateRequest} />
              <Route exact path="/Client/Track" component={Track} />
              <Route exact path="/Signout" component={Try} />


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

export default ClientHomepage;
