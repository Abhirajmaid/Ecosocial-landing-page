import React from "react";
import { CTABtn } from "../CTABtn/CTABtn";
import "./style.css";

export const BottomCTA = () => {
  return (
    <>
      <div className="bottom-container">
        <h1>
          "With Powerful community and with more powerful solution. building a
          community of people who wants the change"
        </h1>
        <CTABtn link="/Connect" text="Join Us" />
      </div>
    </>
  );
};
