import React from "react";
import logo from "../../img/logo (1).png";
import { NavDiv } from "./NavBar.style";

const NavBar = () => {
  return (
    <NavDiv>
      <div className="logo-div">
        <img src={logo} alt="emostel logo" />
      </div>
      <div className="nav-div">
        <p className="nav-link">About Us</p>
        <p className="nav-link">Contact</p>
      </div>
    </NavDiv>
  );
};

export default NavBar;
