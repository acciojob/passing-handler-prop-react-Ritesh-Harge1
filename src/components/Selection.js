import React, { useState, useEffect } from "react";

const Selection = ({ color }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(color);
  }, [color]);

  return (
    <div
      className="fix-box"
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: bgColor,
      }}
    ></div>
  );
};

export default Selection;

