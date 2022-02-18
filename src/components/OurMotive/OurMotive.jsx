import React from "react";
import "./style.css";
import { Illustration } from "../Illustrations/Illustration";
import { MotiveHead } from "../../data/MotiveData";
import { MotiveBody } from "../../data/MotiveData";

export const OurMotive = () => {
  const URL =
    "https://github.com/Abhirajmaid/Landing-Page/blob/master/public/Images/Motive.jpg?raw=true";
  return (
    <>
      <div className="motive-container">
        <div className="card-left">
          <div className="radius">
            <Illustration url={URL} h="300px" w="450px" />
          </div>
        </div>
        <div className="card-right">
          <div>
            <h3 className="motive-tag">OUR GOALS & MOTIVES</h3>
          </div>
          <div className="head">
            <MotiveHead />
          </div>
          <div className="body">
            <MotiveBody />
          </div>
        </div>
      </div>
    </>
  );
};
