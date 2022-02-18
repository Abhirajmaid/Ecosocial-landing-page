import React from "react";
import { CTABtn } from "../CTABtn/CTABtn";
import "./style.css";

export const BottomCTA = () => {
  return (
    <>
      <div className="bottom-container">
        <h1>
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
          rem!"
        </h1>
        <CTABtn link="/Connect" text="Join Us" />
      </div>
    </>
  );
};
