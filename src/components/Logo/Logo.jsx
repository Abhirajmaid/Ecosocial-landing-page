import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export const Logo = (prop) => {
  const URL =
    "https://github.com/Abhirajmaid/Landing-Page/blob/master/public/Images/TEXT_+_GRAPHIC-removebg-preview.png?raw=true";
  return (
    <>
      <h1 className="logo">
        <NavLink className="logo-link" style={{ color: prop.color }} to="/">
          <img
            src={URL}
            alt="Ecosocial-Logo"
            style={{ width: "100%", height: "100px" }}
          />
        </NavLink>
      </h1>
    </>
  );
};
