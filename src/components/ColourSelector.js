import React from "react";

const ColourSelector = ({ color, label, setSelectedColor }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        margin: "5px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => setSelectedColor(color)}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
