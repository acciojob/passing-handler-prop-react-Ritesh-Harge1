import React from "react";

const Selection = ({ selectedColor }) => {
  return (
    <div
      className="fix-box"
      style={{ backgroundColor: selectedColor }}
    >
      <p>This is a box</p>
    </div>
  );
};

export default Selection;
