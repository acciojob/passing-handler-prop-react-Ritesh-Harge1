import { useState, useEffect } from "react";

function Selection({ color }) {
  const [boxColor, setBoxColor] = useState("");

  useEffect(() => {
    setBoxColor(color); // update when parent passes new color
  }, [color]);

  return (
    <div
      className="fix-box"
      style={{
        backgroundColor: boxColor || "lightgray",
        width: "100px",
        height: "100px",
        margin: "10px",
        border: "2px solid black",
      }}
    ></div>
  );
}

export default Selection;
