import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CtaBtn = styled.button`
  padding: 10px 50px;
  border: none;
  background-color: #ffcc1d;
  font-weight: 700;
  font-size: 20px;
  border-radius: 6px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  @media (max-width: 550px) {
    padding: 7px 30px;
  }
`;
export const CTABtn = (prop) => {
  return (
    <>
      <NavLink to={prop.link} style={{ textDecoration: "none" }}>
        <CtaBtn>{prop.text}</CtaBtn>
      </NavLink>
    </>
  );
};
