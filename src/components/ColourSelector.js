import React from "react";

function ColourSelector({ colour, onSelectColor }) {
  return (
    <button
      onClick={() => onSelectColor(colour)}
      style={{ margin: "5px", padding: "10px" }}
    >
      {colour}
    </button>
  );
}

export default ColourSelector;
