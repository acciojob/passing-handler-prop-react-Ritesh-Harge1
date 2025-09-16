import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

const colorOptions = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple"
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div id="app">
      <h1>Color Selector</h1>
      <div className="container">
        <ColourSelector
          colors={colorOptions}
          onColorChange={handleColorChange}
        />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
};

export default App;
