import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { WaveBorder } from "../../components/WaveBorder/WaveBorder";
import "./style.css";

export const Land = () => {
  return (
    <>
      <div className="container">
        <div className="land-container">
          <Logo color="white" />
          <WaveBorder />
        </div>
      </div>
    </>
  );
};
