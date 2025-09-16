import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = [
    { key: "red", label: "Red" },
    { key: "blue", label: "Blue" },
    { key: "green", label: "Green" }
  ];

  // Handler function to pass to ColourSelector
  const selectNextBackground = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      {/* Buttons for selecting colors */}
      {colors.map((color) => (
        <ColourSelector
          key={color.key}
          config={color}
          selectNextBackground={selectNextBackground}
        />
      ))}

      {/* Three boxes that change color */}
      <Selection nextBackground={selectedColor} />
      <Selection nextBackground={selectedColor} />
      <Selection nextBackground={selectedColor} />
    </div>
  );
}

export default App;

