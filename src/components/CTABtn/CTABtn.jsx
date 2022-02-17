import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CTABtn = (prop) => {
  const CtaBtn = styled.button`
    padding: 10px 50px;
    border: none;
    background-color: ${prop.bgcolor};
    font-weight: 700;
    font-size: 20px;
    border-radius: 6px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  `;

  return (
    <>
      <CtaBtn>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: `${prop.color}` }}
        >
          Join Us
        </NavLink>
      </CtaBtn>
    </>
  );
};
