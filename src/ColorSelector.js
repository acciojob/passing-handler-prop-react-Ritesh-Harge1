function ColourSelector({ colors, onColorSelect }) {
  return (
    <div className="color-selector">
      {colors.map((clr, index) => (
        <button
          key={index}
          onClick={() => onColorSelect(clr)}
          style={{
            backgroundColor: clr,
            color: "white",
            margin: "5px",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {clr.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
