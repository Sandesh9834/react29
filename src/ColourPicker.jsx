import { useState } from "react";
import { red, blue, green } from "./data";

export const ColourPicker = () => {
  const [colour, setColour] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setColour(!colour)}>Red Colour</button>
        <p style={{ display: colour ? "none" : "block" }}>{red}</p>
      </div>
      <div>
        <button onClick={() => setColour(!colour)}>Blue Colour</button>
        <p style={{ display: colour ? "none" : "block" }}>{blue}</p>
      </div>
      <div>
        <button>Green Colour</button>
        <p>{green}</p>
      </div>
    </div>
  );
};
