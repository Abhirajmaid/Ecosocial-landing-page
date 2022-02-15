import React from "react";
import "./style.css";
export const WaveBorder = () => {
  const URL =
    "https://github.com/Abhirajmaid/Landing-Page/blob/master/public/Images/wave2.png?raw=true";
  return (
    <>
      <div className="svg-container">
        <img src={URL} alt="wave" />
      </div>
    </>
  );
};
