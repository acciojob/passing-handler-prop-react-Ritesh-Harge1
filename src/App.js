import { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  // Handler function to update color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1>Handler Prop Demo</h1>

      {/* Pass handler and color options */}
      <ColourSelector
        colors={["red", "blue", "green"]}
        onColorSelect={handleColorSelect}
      />

      {/* Render three selection boxes */}
      <div className="box-container">
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
      </div>
    </div>
  );
}

export default App;
