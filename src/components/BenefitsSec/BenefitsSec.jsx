import React from "react";
import { Benefits } from "../Benefits/Benefits";
import "./style.css";

export const BenefitsSec = () => {
  return (
    <>
      <div className="benefits-container">
        <div className="flex-container">
          <Benefits />
          <Benefits />
          <Benefits />
        </div>
      </div>
    </>
  );
};
