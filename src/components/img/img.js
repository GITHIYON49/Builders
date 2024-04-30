import React from "react";
import "./style.css";

function Image({ src }) {
  return (
    <>
      <img src={src} alt="buildings" />
    </>
  );
}

export default Image;
