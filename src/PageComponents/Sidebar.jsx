import React from "react";
import LesoLogo from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/LOGONEW.png";
import Header from "/UST Files/Notes/Capstone/Capstone System/requisitionsystem/Client/src/Assets/CMRS.png";
function Sidebar() {
  return (
    <React.Fragment>
      <div class="sidebarwrapper">
        <div class="topPart d-flex ">
          <img class="" src={LesoLogo} alt="" width="90" height="90"></img>
          <img src={Header} alt="" width="170" height="100"></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
