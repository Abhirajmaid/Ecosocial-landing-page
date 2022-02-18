import React from "react";

export const Illustration = (prop) => {
  const URL = `${prop.url}`;
  const style = {
    // width: `${prop.w}`,
    // height: `${prop.h}`,
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <img src={URL} alt="illustration" style={style} />
    </>
  );
};
