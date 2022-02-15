import React from "react";

export const Illustration = (prop) => {
  const URL = `${prop.url}`;
  const style = {
    width: `${prop.w}`,
    height: `${prop.h}`,
  };
  return (
    <>
      <img src={URL} alt="illustration" style={style} />
    </>
  );
};
