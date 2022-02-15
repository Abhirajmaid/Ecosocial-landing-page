import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export const Logo = (prop) => {
  return (
    <>
      <h1 className="logo">
        <NavLink className="logo-link" style={{ color: prop.color }} to="/">
          EcoSocial
        </NavLink>
      </h1>
    </>
  );
};
