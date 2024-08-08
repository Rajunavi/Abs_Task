import React from "react";
import Toggle from "../assets/Toggle.png";
import Search from "../assets/search.png";
import Bell from "../assets/bell.png";
import Settings_black from "../assets/Settings_black.png";
import Abs from "../assets/Abserp.png";
import Downarrow from "../assets/Vector.png";
import Profile from "../assets/profile.png";

function Navbar() {
  return (
    <div className="nav_container">
      <div className="nav_left">    
        <img src={Toggle} alt="" />
        <div className="nav_toggle">
          <img src={Search} alt="" style={{position: "absolute", left:0}} />
          <input className="nav_search" type="text" placeholder="Search" />
        </div>
      </div>
 
      <div className="nav_container1">
        <img src={Bell} alt="" />
        <img src={Settings_black} alt="" />
        <div className="abs">
          <img src={Abs} alt="" />
          <img src={Downarrow} alt="" />
        </div>
        <div className="nav_profile">
            <img src={Profile} alt="Profile" style={{width:'20%', height:'95%'}}/>
          <p>Manojkumar</p>
          <img src={Downarrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
