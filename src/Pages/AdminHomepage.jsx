import {
  NavLink,
  Route,
  HashRouter,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import React from "react";
import "./Styles/HomepageStyles.css";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/src/Assets/LOGONEW.png";
import Header from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/src/Assets/CMRS.png";
import Try from "./Try";
import Footer from "../PageComponents/Footer";
import AdminOpenRequest from "../AppComponent/AdminComponents/AdminOpenRequest";
import AdminClosedRequest from "../AppComponent/AdminComponents/AdminClosedRequest";
import AccountManagement from "../AppComponent/AdminComponents/AccountManagement";
import Login from "./Login";

function AdminHomepage() {
  let { path, url } = useRouteMatch();

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

                  <div class=" flex-column font-weight-bold">
                    
                    <NavLink strict to="/Admin/OpenRequest" activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}}  > <a class="p-2" > Open Request</a></NavLink>
                    <NavLink strict to="/Admin/ClosedRequest" activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}} ><a class="p-2" >Closed Request</a></NavLink>
                    <NavLink strict to="/Admin/AccountManagement" activeStyle={{ color:"black", textDecoration: "none", backgroundColor: "aliceblue"}} ><a class="p-2" >Account Management</a></NavLink>
                    <NavLink strict to="/Admin/Signout"><a class="p-2">Sign Out</a></NavLink>
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
