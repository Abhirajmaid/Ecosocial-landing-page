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
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;
export const CTABtn = (prop) => {
  return (
    <>
      <CtaBtn>
        <NavLink
          to={prop.link}
          style={{ textDecoration: "none", color: `${prop.color}` }}
        >
          {prop.text}
        </NavLink>
      </CtaBtn>
    </>
  );
};
