import React from "react";
import { Illustration } from "../Illustrations/Illustration";
import { WaveBorder } from "../WaveBorder/WaveBorder";
import "./style.css";
export const IllustrationSec = () => {
  const URL =
    "https://github.com/Abhirajmaid/Landing-Page/blob/master/public/Images/forest.png?raw=true";
  return (
    <>
      <div className="illustration-container ill-container">
        <>
          <div className="heroIllustration">
            <Illustration url={URL} />
          </div>
          <div style={{ marginTop: "-2px" }}>
            <WaveBorder />
          </div>
        </>
      </div>
    </>
  );
};
