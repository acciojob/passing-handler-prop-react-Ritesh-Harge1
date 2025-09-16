import React, { useEffect, useState } from "react";

function Selection({ nextBackground }) {
  const [bg, setBg] = useState("");

  useEffect(() => {
    setBg(nextBackground);
  }, [nextBackground]);

  return <div className="fix-box" style={{ background: bg }}></div>;
}

export default Selection;


