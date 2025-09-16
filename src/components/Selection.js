import React from "react";

function Selection({ selectedColor }) {
  return (
    <div
      className="fix-box"
      style={{
        width: "100px",
        height: "100px",
        margin: "10px",
        backgroundColor: selectedColor || "lightgray",
        border: "1px solid #000",
      }}
    ></div>
  );
}

export default Selection;

