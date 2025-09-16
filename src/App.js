import React, { useState } from "react";
import ColourSelector from "./components/ColourSelector";
import Selection from "./components/Selection";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const config = [
    { color: "red", label: "Red" },
    { color: "blue", label: "Blue" },
    { color: "green", label: "Green" },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1>Passing Handler Prop in React</h1>

      {config.map((item, index) => (
        <ColourSelector
          key={index}
          color={item.color}
          label={item.label}
          setSelectedColor={handleColorChange}
        />
      ))}

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
      </div>
    </div>
  );
}

export default App;
