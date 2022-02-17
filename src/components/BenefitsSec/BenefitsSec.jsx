import React from "react";
import { Benefits } from "../Benefits/Benefits";
import { BenefitsData } from "../../data/BenefitsData";
import "./style.css";

export const BenefitsSec = () => {
  const BenefitsComp = BenefitsData.map((benefit) => {
    return <Benefits key={benefit.id} benefit={benefit} />;
  });
  return (
    <>
      <div className="benefits-container">
        <div className="flex-container">{BenefitsComp}</div>
      </div>
    </>
  );
};
