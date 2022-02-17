import React from "react";
import { Icon } from "@iconify/react";
import "./style.css";
export const Benefits = (prop) => {
  const { headText, bodyText, icon } = prop.benefit;
  return (
    <>
      <div className="card">
        <Icon
          icon={`${icon}`}
          style={{ width: "40px", height: "40px", color: "#116530" }}
        />
        <h2 className="card-head">{headText}</h2>
        <p className="card-body">{bodyText}</p>
      </div>
    </>
  );
};
