import React from 'react';

const ColourSelector = ({ colors, onColorChange }) => {
  return (
    <div className="button-container">
      {colors.map((color) => (
        <button
          key={color}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        >
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;
