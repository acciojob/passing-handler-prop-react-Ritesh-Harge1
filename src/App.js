import React, { useState } from "react";
import ColourSelector from "./components/ColourSelector";
import Selection from "./components/Selection";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  // handler function
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // list of colors (can be extended)
  const colours = ["red", "blue", "green"];

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Handler Prop Demo</h1>

      {/* render buttons for each color */}
      {colours.map((clr, index) => (
        <ColourSelector
          key={index}
          colour={clr}
          onSelectColor={handleColorChange}
        />
      ))}

      {/* render three boxes */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;

