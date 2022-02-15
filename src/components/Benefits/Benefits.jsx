import React from "react";
import { Icon } from "@iconify/react";
import "./style.css";
export const Benefits = () => {
  return (
    <>
      <div className="card">
        <Icon
          icon="akar-icons:money"
          style={{ width: "40px", height: "40px", color: "#116530" }}
        />
        <h2 className="card-head">Hello everyone</h2>
        <p className="card-body">
          Lorem ipsum door sit amet consectetur, adipisicing elit. Aspernatur ab
          et culpa doloribus hic, consequuntur expedita quo deleniti labore
          porro.
        </p>
      </div>
    </>
  );
};
