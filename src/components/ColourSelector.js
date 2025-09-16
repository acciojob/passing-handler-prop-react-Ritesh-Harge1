import React from "react";

function ColourSelector({ config, selectNextBackground }) {
  return (
    <button
      className="colorSelector"
      onClick={() => selectNextBackground(config.key)}
    >
      {config.label}
    </button>
  );
}

export default ColourSelector;
