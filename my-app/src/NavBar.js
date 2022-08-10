import React from "react";
import { NavLink } from "react-router-dom";
import pieFont from './pieFont.png';

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: " 12px 16px",
  margin: "0 6px 6px",
  background: "transparent",
  textDecoration: "none",
  fontFamily: "Helvetica",
  color: "black",
  textAlign: "center",
  verticalAlign: "middle",
  fontWeight: "300",
};

const bigBanner = {
    textAlign: "center",
    border: "3px solid black",
    backgroundColor: "black",
    color: "white",
};

function NavBar() {
  return (
    <div>
         <div >
     <img src={pieFont} alt="pieFont" />
      <NavLink 
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#DCE4F2",
        }}
      >
        Home
      </NavLink>
      <NavLink 
        to="/PieMenu"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#DCE4F2",
        }}
      >
        Pie Menu
      </NavLink>
      <NavLink
        to="/OrderCart"
        exact
        style={linkStyles}
        activeStyle={{
          background:  "#DCE4F2",
        }}
      >
        Order Cart
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background:  "#DCE4F2",
        }}
      >
        Login
      </NavLink>
      <h1 style={bigBanner}>Pies, Gluten-free pies, cakes and  more!</h1>
     
    </div>
    </div>
  );
}

export default NavBar;